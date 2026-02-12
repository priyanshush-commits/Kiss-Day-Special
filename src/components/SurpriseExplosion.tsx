
"use client";

import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const SurpriseExplosion = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md animate-in fade-in duration-500">
      <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-primary animate-out slide-out-to-top slide-out-to-left duration-[2000ms]"
            style={{
              left: '50%',
              top: '50%',
              fontSize: `${Math.random() * 40 + 20}px`,
              '--tw-exit-translate-x': `${(Math.random() - 0.5) * 1500}px`,
              '--tw-exit-translate-y': `${(Math.random() - 0.5) * 1500}px`,
              '--tw-exit-scale': '0.1',
              transitionDelay: `${Math.random() * 200}ms`,
            } as any}
          >
            ❤️
          </div>
        ))}
        
        <div className="glass p-12 rounded-3xl text-center max-w-lg mx-4 z-10 animate-in zoom-in-50 duration-700">
          <h2 className="text-4xl md:text-6xl font-headline text-primary mb-6 animate-pulse-heart">Surprise! 🌹</h2>
          <p className="text-xl md:text-2xl text-foreground font-body leading-relaxed">
            "You are the poem I never knew how to write, and this life is the story I always wanted to tell."
          </p>
          <button 
            onClick={onComplete}
            className="mt-8 bg-primary text-primary-foreground px-8 py-3 rounded-full hover:scale-105 transition-transform"
          >
            Keep Dreaming
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurpriseExplosion;
