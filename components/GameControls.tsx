'use client';

interface GameControlsProps {
  gameState: 'idle' | 'running' | 'finished';
  onStart: () => void;
  onStop: () => void;
  onTryAgain: () => void;
}

export default function GameControls({
  gameState,
  onStart,
  onStop,
  onTryAgain,
}: GameControlsProps) {
  if (gameState === 'idle') {
    return (
      <div>
        <button
          onClick={onStart}
          className="px-8 py-3 bg-green-500 text-white rounded hover:bg-green-600 font-medium"
        >
          Start
        </button>
      </div>
    );
  }

  if (gameState === 'running') {
    return (
      <div>
        <button
          onClick={onStop}
          className="px-8 py-3 bg-red-500 text-white rounded hover:bg-red-600 font-medium"
        >
          Stop
        </button>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={onTryAgain}
        className="px-8 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 font-medium"
      >
        Try Again
      </button>
    </div>
  );
}

