
"use client";

import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const LoveMeter = ({ onClose }: { onClose: () => void }) => {
  const [percentage, setPercentage] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [target] = useState(() => Math.floor(Math.random() * 16) + 85);

  useEffect(() => {
    let current = 0;
    const duration = 2000;
    const frameRate = 60;
    const totalFrames = (duration / 1000) * frameRate;
    const increment = target / totalFrames;

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setPercentage(target);
        setIsFinished(true);
        clearInterval(interval);
      } else {
        setPercentage(Math.floor(current));
      }
    }, 1000 / frameRate);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <div className="fixed inset-0 z-[250] flex items-center justify-center bg-black/70 backdrop-blur-lg p-4 animate-in fade-in duration-500">
      <div className={cn(
        "glass w-full max-w-lg p-8 md:p-12 rounded-[3rem] shadow-2xl text-center transform transition-all duration-700 relative overflow-hidden",
        isFinished && "scale-105 glow-border"
      )}>
        <button onClick={onClose} className="absolute right-6 top-6 text-white/50 hover:text-white transition-all z-20">
          <X className="w-6 h-6" />
        </button>

        <div className="relative mb-10">
          <Heart 
            className={cn(
              "w-28 h-28 mx-auto text-primary transition-all duration-500",
              isFinished ? "animate-pulse-heart fill-primary scale-110" : "fill-primary/20"
            )} 
          />
          {isFinished && (
            <div className="absolute inset-0 flex items-center justify-center">
               <Sparkles className="w-32 h-32 text-white animate-sparkle" />
            </div>
          )}
        </div>

        <h3 className="text-4xl md:text-5xl font-headline mb-10 text-white text-shadow-romantic">Love Calculator</h3>
        
        {/* Progress Container */}
        <div className="relative h-20 w-full bg-white/10 rounded-full overflow-hidden mb-10 border border-white/20 shadow-inner">
          {/* Animated Fill */}
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-pink-500 via-primary to-pink-500 transition-all duration-100 ease-out"
            style={{ width: `${percentage}%` }}
          />
          
          {/* Single Percentage Display - Centered */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
             <span className="font-bold text-3xl md:text-4xl font-headline text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              {percentage}%
            </span>
          </div>
        </div>

        <div className={cn(
          "transition-all duration-1000 transform space-y-4",
          isFinished ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <p className="text-3xl md:text-4xl font-headline text-primary font-bold drop-shadow-lg">
            {target === 100 ? "Pure Soulmates! ❤️" : 
             target > 95 ? "Infinite Attraction ✨" : "A Beautiful Connection 🌹"}
          </p>
          <p className="text-white/90 font-body text-xl italic px-4">
            {target === 100 ? "Your hearts beat in perfect synchrony." : "A bond that gets stronger with every kiss."}
          </p>
        </div>

        <button 
          onClick={onClose}
          className="mt-12 bg-primary text-primary-foreground px-12 py-4 rounded-full text-xl font-headline transition-all hover:scale-110 active:scale-95 shadow-xl"
        >
          Cherish This
        </button>
      </div>
    </div>
  );
};

export default LoveMeter;
