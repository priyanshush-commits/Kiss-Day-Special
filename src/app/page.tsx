"use client";

import React, { useState, useEffect } from 'react';
import { Heart, Mail, Sparkles, Palette, Gift, Moon, Sun, Flame, Cloud } from 'lucide-react';
import FloatingHearts from '@/components/FloatingHearts';
import MouseHeartTrail from '@/components/MouseHeartTrail';
import { ThemeProvider, useTheme } from '@/components/ThemeWrapper';
import LoveMeter from '@/components/LoveMeter';
import SurpriseExplosion from '@/components/SurpriseExplosion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const MainContent = () => {
  const { theme, setTheme } = useTheme();
  const [showSecret, setShowSecret] = useState(false);
  const [showLoveMeter, setShowLoveMeter] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);
  const [virtualKiss, setVirtualKiss] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleVirtualKiss = () => {
    setVirtualKiss(true);
    setTimeout(() => setVirtualKiss(false), 3000);
  };

  const cycleTheme = () => {
    const themes: ('theme-pink' | 'theme-red' | 'theme-purple' | 'theme-night')[] = [
      'theme-pink', 'theme-red', 'theme-purple', 'theme-night'
    ];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const getThemeIcon = () => {
    switch (theme) {
      case 'theme-red': return <Flame className="w-5 h-5" />;
      case 'theme-purple': return <Cloud className="w-5 h-5" />;
      case 'theme-night': return <Moon className="w-5 h-5" />;
      default: return <Sun className="w-5 h-5" />;
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center z-[200]">
        <div className="relative">
          <Heart className="w-16 h-16 text-primary animate-pulse-heart fill-current" />
          <div className="absolute top-0 left-0 w-full h-full border-4 border-primary/20 rounded-full animate-ping" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen animated-bg selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      <FloatingHearts />
      <MouseHeartTrail />

      {/* Hero Section */}
      <main className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen text-center">
        
        {/* Title Group */}
        <div className="mb-12 space-y-4">
          <h1 className="text-6xl md:text-8xl font-headline text-primary drop-shadow-[0_0_15px_rgba(255,192,203,0.8)] animate-pulse-heart">
            Happy Kiss Day 💋
          </h1>
          <div className="typing-container">
            <p className="text-xl md:text-3xl font-body text-foreground animate-typing overflow-hidden whitespace-nowrap">
              Aaj ka din sirf tumhare naam...
            </p>
          </div>
        </div>

        {/* Central Card */}
        <div className="glass p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-2xl w-full transform hover:scale-[1.02] transition-all duration-500 mb-12 relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/40 transition-colors" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl group-hover:bg-secondary/40 transition-colors" />
          
          <div className="relative text-6xl mb-6 transform group-hover:scale-110 transition-transform">👩‍❤️‍💋‍👨</div>
          
          <h2 className="text-2xl md:text-4xl font-headline text-foreground mb-6">
            A Moment of Pure Magic
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-body">
            A kiss is a lovely trick designed by nature to stop speech when words become superfluous. Let our hearts speak today.
          </p>
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl px-4">
          <button 
            onClick={() => setShowSecret(true)}
            className="glass flex items-center justify-center gap-3 p-5 rounded-2xl hover:bg-primary/20 hover:scale-105 hover:shadow-lg transition-all duration-300 group"
          >
            <Mail className="w-5 h-5 group-hover:animate-bounce" />
            <span className="font-headline text-lg">Secret Message</span>
          </button>

          <button 
            onClick={handleVirtualKiss}
            className="glass flex items-center justify-center gap-3 p-5 rounded-2xl hover:bg-primary/20 hover:scale-105 hover:shadow-lg transition-all duration-300 group"
          >
            <Sparkles className="w-5 h-5 group-hover:animate-sparkle" />
            <span className="font-headline text-lg">Send Virtual Kiss</span>
          </button>

          <button 
            onClick={() => setShowLoveMeter(true)}
            className="glass flex items-center justify-center gap-3 p-5 rounded-2xl hover:bg-primary/20 hover:scale-105 hover:shadow-lg transition-all duration-300 group"
          >
            <Heart className="w-5 h-5 group-hover:fill-current" />
            <span className="font-headline text-lg">Love Meter</span>
          </button>

          <button 
            onClick={cycleTheme}
            className="glass flex items-center justify-center gap-3 p-5 rounded-2xl hover:bg-primary/20 hover:scale-105 hover:shadow-lg transition-all duration-300 group"
          >
            {getThemeIcon()}
            <span className="font-headline text-lg">Change Theme</span>
          </button>

          <button 
            onClick={() => setShowSurprise(true)}
            className="glass flex items-center justify-center gap-3 p-5 rounded-2xl bg-primary/10 hover:bg-primary/30 hover:scale-105 hover:shadow-lg transition-all duration-300 group lg:col-span-2"
          >
            <Gift className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <span className="font-headline text-xl">The Surprise</span>
          </button>
        </div>
      </main>

      {/* Floating Sparkle for Virtual Kiss */}
      {virtualKiss && (
        <div className="fixed inset-0 flex items-center justify-center z-[150] pointer-events-none">
          <div className="text-9xl animate-in zoom-in-50 fade-in slide-in-from-bottom-20 duration-1000">
            💋
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full bg-primary/20 rounded-full blur-2xl animate-ping" />
            </div>
          </div>
          {Array.from({ length: 12 }).map((_, i) => (
            <Sparkles 
              key={i}
              className="absolute text-primary animate-out fade-out zoom-out duration-1000"
              style={{
                left: `calc(50% + ${(Math.random() - 0.5) * 300}px)`,
                top: `calc(50% + ${(Math.random() - 0.5) * 300}px)`,
                transform: `scale(${Math.random() * 2})`,
              }}
            />
          ))}
        </div>
      )}

      {/* Secret Message Modal */}
      <Dialog open={showSecret} onOpenChange={setShowSecret}>
        <DialogContent className="glass bg-white/10 backdrop-blur-[20px] sm:max-w-[500px] border border-white/20 text-white p-0 overflow-hidden rounded-[2rem] shadow-[0_0_80px_rgba(255,192,203,0.3)] ring-1 ring-white/30">
          <div className="p-10 space-y-6 relative flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-primary/20 -z-10 blur-3xl pointer-events-none opacity-50" />
            
            <DialogHeader className="w-full">
              <DialogTitle className="text-4xl md:text-5xl font-headline text-white text-center drop-shadow-md">
                My Dear Love...
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-6 text-xl md:text-2xl font-body leading-relaxed text-center drop-shadow-sm">
              <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both">
                In the silence between our breaths, your presence is the melody I crave.
              </p>
              <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-[1300ms] fill-mode-both">
                Every kiss we've shared is a memory etched in gold...
              </p>
              <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-[2300ms] fill-mode-both">
                And every kiss we haven't is a promise I look forward to keeping.
              </p>
              <div className="pt-4 animate-in fade-in zoom-in duration-1000 delay-[3300ms] fill-mode-both">
                <p className="font-bold italic text-white text-3xl md:text-4xl drop-shadow-lg">
                  Forever Yours.
                </p>
                <div className="mt-2 text-primary animate-pulse-heart">❤️❤️❤️</div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {showLoveMeter && <LoveMeter onClose={() => setShowLoveMeter(false)} />}
      
      {showSurprise && <SurpriseExplosion onComplete={() => setShowSurprise(false)} />}

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-muted-foreground font-body text-sm opacity-60">
        <p>Made with ❤️ for Kiss Day Dreams</p>
      </footer>
    </div>
  );
};

export default function Home() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}
