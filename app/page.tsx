'use client';

import { useState } from 'react';
import DurationSelector from '@/components/DurationSelector';
import BreathingAnimation from '@/components/BreathingAnimation';
import GameControls from '@/components/GameControls';
import ResultDisplay from '@/components/ResultDisplay';
import { startTimer, getElapsedTime } from '@/lib/timer';
import { calculateOffset } from '@/lib/calculations';
import type { Duration, GameState, GameResult } from '@/types';

export default function Home() {
  const [gameState, setGameState] = useState<GameState>('idle');
  const [selectedDuration, setSelectedDuration] = useState<Duration | null>(null);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [result, setResult] = useState<GameResult | null>(null);

  const handleDurationSelect = (duration: Duration) => {
    if (gameState === 'idle') {
      setSelectedDuration(duration);
    }
  };

  const handleStart = () => {
    if (selectedDuration) {
      const timerStart = startTimer();
      setStartTime(timerStart);
      setGameState('running');
      setResult(null);
    }
  };

  const handleStop = () => {
    if (startTime && selectedDuration) {
      const actual = getElapsedTime(startTime);
      const offset = calculateOffset(actual, selectedDuration);
      setResult({
        target: selectedDuration,
        actual,
        offset,
      });
      setGameState('finished');
    }
  };

  const handleTryAgain = () => {
    setGameState('idle');
    setSelectedDuration(null);
    setStartTime(null);
    setResult(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 gap-8">
      <h1 className="text-3xl font-semibold">TimeSense</h1>
      <div className="flex flex-col items-center gap-8">
        <DurationSelector
          selectedDuration={selectedDuration}
          onSelect={handleDurationSelect}
          disabled={gameState !== 'idle'}
        />
        <BreathingAnimation isVisible={gameState === 'running'} />
        <GameControls
          gameState={gameState}
          onStart={handleStart}
          onStop={handleStop}
          onTryAgain={handleTryAgain}
        />
        <ResultDisplay result={result} />
      </div>
    </div>
  );
}
