
"use client";

import React, { useEffect, useState } from 'react';

const MouseHeartTrail = () => {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const id = Date.now();
      setParticles((prev) => [...prev.slice(-15), { id, x: e.clientX, y: e.clientY }]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {particles.map((p, i) => (
        <div
          key={p.id}
          className="heart-cursor fixed"
          style={{
            left: p.x,
            top: p.y,
            opacity: (i + 1) / particles.length,
            transform: `translate(-50%, -50%) scale(${(i + 1) / particles.length})`,
          }}
        >
          💖
        </div>
      ))}
    </>
  );
};

export default MouseHeartTrail;
