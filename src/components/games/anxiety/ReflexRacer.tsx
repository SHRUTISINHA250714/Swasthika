"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Target } from "lucide-react";

interface Props {
  onComplete: (score: number) => void;
  onExit: () => void;
}

export default function ReflexRacer({ onComplete, onExit }: Props) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isActive, setIsActive] = useState(true);
  const [gameArea, setGameArea] = useState({ width: 0, height: 0 });
  const [gameAreaRef, setGameAreaRef] = useState<HTMLDivElement | null>(null);

  const moveTarget = useCallback(() => {
    if (gameAreaRef) {
      const bounds = gameAreaRef.getBoundingClientRect();
      const padding = 50; // Padding to keep target away from edges
      const x = Math.random() * (bounds.width - padding * 2) + padding;
      const y = Math.random() * (bounds.height - padding * 2) + padding;
      setPosition({ x, y });
    }
  }, [gameAreaRef]);

  useEffect(() => {
    if (gameAreaRef) {
      const updateGameArea = () => {
        const bounds = gameAreaRef.getBoundingClientRect();
        setGameArea({
          width: bounds.width,
          height: bounds.height,
        });
      };

      updateGameArea();
      moveTarget();

      const resizeObserver = new ResizeObserver(updateGameArea);
      resizeObserver.observe(gameAreaRef);

      return () => resizeObserver.disconnect();
    }
  }, [gameAreaRef, moveTarget]);

  const handleClick = () => {
    if (!isActive) return;
    setScore((prev) => prev + 1);
    moveTarget();
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsActive(false);
          clearInterval(timer);
          onComplete(score);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onComplete, score]);

  return (
    <div
      ref={setGameAreaRef}
      className="relative w-full h-[80vh] bg-gray-900 rounded-lg overflow-hidden"
    >
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
        <div className="text-white text-xl">Score: {score}</div>
        <div className="text-white text-xl">Time: {timeLeft}s</div>
        <Button variant="outline" onClick={onExit}>
          Exit
        </Button>
      </div>

      {isActive && gameAreaRef && (
        <div
          className="absolute cursor-pointer transition-all duration-200"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: "translate(-50%, -50%)",
          }}
          onClick={handleClick}
        >
          <div className="animate-pulse">
            <Target className="w-12 h-12 text-pink-500" />
          </div>
        </div>
      )}

      {!isActive && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Game Over!</h2>
            <p className="text-xl text-white mb-4">Final Score: {score}</p>
            <Button onClick={() => onComplete(score)}>Continue</Button>
          </div>
        </div>
      )}
    </div>
  );
}
