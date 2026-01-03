export function startTimer(): number {
  return Date.now();
}

export function getElapsedTime(startTime: number): number {
  return (Date.now() - startTime) / 1000;
}

