
"use client";

import React, { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const LoveMeter = ({ onClose }: { onClose: () => void }) => {
  const [percentage, setPercentage] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  // Ensures a random target between 85 and 100
  const [target] = useState(() => Math.floor(Math.random() * 16) + 85);

  useEffect(() => {
    // Smoothly increment the percentage until it reaches the target
    const step = () => {
      setPercentage(prev => {
        if (prev >= target) {
          setIsFinished(true);
          return target;
        }
        return prev + 1;
      });
    };

    const timer = setInterval(step, 30);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-in fade-in duration-500">
      <div className={cn(
        "glass w-full max-w-md p-8 md:p-10 rounded-[2.5rem] shadow-2xl text-center transform transition-all duration-700 border border-white/20 relative overflow-hidden",
        isFinished && "scale-105 shadow-[0_0_60px_rgba(255,192,203,0.5)]"
      )}>
        {/* Background Sparkle Decoration for high scores */}
        {isFinished && target >= 98 && (
          <div className="absolute inset-0 pointer-events-none">
            <Sparkles className="absolute top-6 left-6 text-primary w-6 h-6 animate-sparkle opacity-40" />
            <Sparkles className="absolute bottom-6 right-6 text-primary w-6 h-6 animate-sparkle opacity-40" />
            <Sparkles className="absolute top-1/2 right-4 text-primary w-4 h-4 animate-sparkle opacity-30" />
          </div>
        )}

        {/* Heart Icon with Heartbeat animation on finish */}
        <div className="relative mb-8">
          <Heart 
            className={cn(
              "w-24 h-24 mx-auto text-primary transition-all duration-500",
              isFinished ? "animate-pulse-heart fill-primary scale-110 drop-shadow-[0_0_20px_rgba(255,100,100,0.6)]" : "fill-primary/20"
            )} 
          />
          {isFinished && target === 100 && (
            <div className="absolute inset-0 flex items-center justify-center">
               <Sparkles className="w-28 h-28 text-primary animate-sparkle" />
            </div>
          )}
        </div>

        <h3 className="text-4xl md:text-5xl font-headline mb-8 text-white drop-shadow-md">Our Affinity</h3>
        
        {/* Progress Bar Container */}
        <div className="relative h-16 w-full bg-black/40 rounded-full overflow-hidden mb-8 border border-white/20 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]">
          {/* Animated Gradient Fill */}
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-pink-400 to-primary transition-all duration-300 ease-out shadow-[0_0_30px_rgba(255,182,193,0.8)]"
            style={{ width: `${percentage}%` }}
          />
          
          {/* Centered Percentage Text */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <span className="text-3xl md:text-4xl font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,1)] font-headline tracking-tighter">
              {percentage}%
            </span>
          </div>
        </div>

        {/* Romantic Messages Fade-in */}
        <div className={cn(
          "transition-all duration-1000 transform space-y-3",
          isFinished ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )}>
          <p className="text-2xl md:text-3xl font-headline text-primary font-bold drop-shadow-lg">
            {target === 100 ? "A Perfect Match! 100% Soulmates." : 
             target > 95 ? "Truly, deeply in love." : "Our hearts beat as one."}
          </p>
          <p className="text-white/90 font-body text-xl italic leading-relaxed">
            {target === 100 ? "Written in the stars, forever and always." : "A love that grows more beautiful every day."}
          </p>
        </div>

        <button 
          onClick={onClose}
          className="mt-12 bg-white/10 hover:bg-white/20 text-white px-12 py-4 rounded-full text-xl font-headline transition-all border border-white/20 hover:scale-110 active:scale-95 shadow-lg backdrop-blur-sm"
        >
          Keep Dreaming
        </button>
      </div>
    </div>
  );
};

export default LoveMeter;
