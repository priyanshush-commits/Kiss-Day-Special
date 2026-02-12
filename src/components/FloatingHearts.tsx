
"use client";

import React, { useEffect, useState } from 'react';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<any[]>([]);

  useEffect(() => {
    const heartCount = 20;
    const newHearts = Array.from({ length: heartCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 20 + 10}px`,
      delay: `${Math.random() * 10}s`,
      duration: `${Math.random() * 10 + 5}s`,
      opacity: Math.random() * 0.5 + 0.3,
      blur: i % 3 === 0 ? 'blur(2px)' : 'none',
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute bottom-0 text-primary animate-float-slow"
          style={{
            left: heart.left,
            fontSize: heart.size,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
            opacity: heart.opacity,
            filter: heart.blur,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
