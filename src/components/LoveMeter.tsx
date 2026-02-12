
"use client";

import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const LoveMeter = ({ onClose }: { onClose: () => void }) => {
  const [percentage, setPercentage] = useState(0);
  const target = Math.floor(Math.random() * 16) + 85; // 85-100

  useEffect(() => {
    const timer = setInterval(() => {
      setPercentage(prev => {
        if (prev >= target) {
          clearInterval(timer);
          return target;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in">
      <div className="glass w-full max-w-md p-8 rounded-3xl shadow-2xl text-center">
        <Heart className="w-16 h-16 mx-auto text-primary animate-pulse-heart mb-4 fill-current" />
        <h3 className="text-3xl font-headline mb-2">Our Love Meter</h3>
        <div className="relative h-4 bg-muted rounded-full overflow-hidden mb-4">
          <div 
            className="absolute top-0 left-0 h-full bg-primary transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="text-6xl font-bold text-primary font-headline">
          {percentage}%
        </div>
        <p className="text-muted-foreground mt-4 italic font-body">
          {percentage > 95 ? "Soulmates forever!" : "Truly, deeply in love."}
        </p>
        <button 
          onClick={onClose}
          className="mt-6 text-sm underline hover:text-primary transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LoveMeter;
