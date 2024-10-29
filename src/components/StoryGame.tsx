import React, { useState } from 'react';
import { TitleScreen } from './TitleScreen';
import { StoryScene } from './StoryScene';
import { scenes } from '../data/scenes';

export function StoryGame() {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentScene, setCurrentScene] = useState(0);

  const handleStart = () => setGameStarted(true);
  const handleNext = () => setCurrentScene(prev => Math.min(prev + 1, scenes.length - 1));

  if (!gameStarted) {
    return <TitleScreen onStart={handleStart} />;
  }

  return (
    <StoryScene 
      scene={scenes[currentScene]}
      onNext={handleNext}
      isLast={currentScene === scenes.length - 1}
    />
  );
}