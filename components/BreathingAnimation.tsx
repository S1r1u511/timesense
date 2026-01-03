'use client';

interface BreathingAnimationProps {
  isVisible: boolean;
}

export default function BreathingAnimation({
  isVisible,
}: BreathingAnimationProps) {
  if (!isVisible) {
    return null;
  }

  return (
    <>
      <style>{`
        @keyframes breathe {
          0% {
            transform: scale(0.95);
            opacity: 0.85;
          }
          25% {
            transform: scale(1.15);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.95;
          }
          75% {
            transform: scale(1.1);
            opacity: 1;
          }
          100% {
            transform: scale(0.95);
            opacity: 0.85;
          }
        }
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
          }
        }
        .breathing-circle {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background-color: #3b82f6;
          animation: breathe 4s ease-in-out infinite, glow 4s ease-in-out infinite;
        }
      `}</style>
      <div className="breathing-circle" />
    </>
  );
}

