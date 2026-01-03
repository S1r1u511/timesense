'use client';

import type { GameResult } from '@/types';

interface ResultDisplayProps {
  result: GameResult | null;
}

type FeedbackLevel = 'perfect' | 'close' | 'off' | 'veryOff';

function getFeedbackLevel(offset: number): FeedbackLevel {
  const absOffset = Math.abs(offset);
  if (absOffset <= 1) return 'perfect';
  if (absOffset <= 3) return 'close';
  if (absOffset <= 5) return 'off';
  return 'veryOff';
}

function getFeedbackMessage(level: FeedbackLevel): string {
  switch (level) {
    case 'perfect':
      return 'Bullseye!';
    case 'close':
      return 'Nice try!';
    case 'off':
      return 'Not quite there';
    case 'veryOff':
      return 'Time to recalibrate';
  }
}

export default function ResultDisplay({ result }: ResultDisplayProps) {
  if (!result) {
    return null;
  }

  const offsetSign = result.offset >= 0 ? '+' : '';
  const feedbackLevel = getFeedbackLevel(result.offset);
  const feedbackMessage = getFeedbackMessage(feedbackLevel);

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-semibold">{feedbackMessage}</h2>
      <div className="flex flex-col items-center gap-2 text-gray-600">
        <p>Target: {result.target}s</p>
        <p>Actual: {result.actual.toFixed(2)}s</p>
        <p>Offset: {offsetSign}{result.offset.toFixed(2)}s</p>
      </div>
    </div>
  );
}

