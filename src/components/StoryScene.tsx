import React, { useEffect, useState } from 'react';
import { Palmtree, Cloud, TreePalm, Buildings } from 'lucide-react';

interface StorySceneProps {
  scene: {
    text: string;
    background: string;
  };
  onNext: () => void;
  isLast: boolean;
}

export function StoryScene({ scene, onNext, isLast }: StorySceneProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, [scene]);

  const isTropical = scene.background.includes('orange') || scene.background.includes('amber');

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${scene.background} transition-colors duration-1000`}>
      <div className="absolute inset-0 overflow-hidden">
        {isTropical ? (
          <div className="absolute inset-0 flex items-center justify-around opacity-20">
            <TreePalm className="w-24 h-24 text-yellow-600 animate-pulse" />
            <Palmtree className="w-32 h-32 text-yellow-400 animate-pulse" />
            <TreePalm className="w-24 h-24 text-yellow-600 animate-pulse" />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-around opacity-10">
            <Buildings className="w-32 h-32 text-purple-400" />
            <Cloud className="w-24 h-24 text-purple-300" />
            <Buildings className="w-32 h-32 text-purple-400" />
          </div>
        )}
      </div>
      
      <div className={`max-w-4xl mx-auto px-4 text-center transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        <p className={`text-2xl md:text-3xl mb-8 font-medium ${isTropical ? 'text-purple-900' : 'text-white'}`}>
          {scene.text}
        </p>
        {!isLast && (
          <button
            onClick={onNext}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold transform transition hover:scale-105 hover:shadow-lg"
          >
            Continue Journey
          </button>
        )}
      </div>
    </div>
  );
}