import React from 'react';
import { Palmtree, Zap } from 'lucide-react';
import { RetroText } from './RetroText';

interface TitleScreenProps {
  onStart: () => void;
}

export function TitleScreen({ onStart }: TitleScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-black">
      <div className="text-center relative p-8">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-16 transform rotate-12">
          <Palmtree className="w-12 h-12 text-teal-400 animate-pulse" />
        </div>
        <div className="absolute top-0 right-1/2 translate-x-16 -translate-y-12 transform -rotate-12">
          <Zap className="w-8 h-8 text-purple-400 animate-pulse" />
        </div>
        <RetroText className="mb-6">
          <h1 className="text-6xl font-bold text-cyan-400 tracking-wider">AuEpico</h1>
        </RetroText>
        <p className="text-xl mb-8 text-purple-200 opacity-80">A Tale of Two Worlds</p>
        <button
          onClick={onStart}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold transform transition hover:scale-105 hover:shadow-lg"
        >
          Begin Journey
        </button>
      </div>
    </div>
  );
}