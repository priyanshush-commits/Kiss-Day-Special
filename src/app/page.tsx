
"use client";

import React, { useState, useEffect } from 'react';
import { Heart, Mail, Sparkles, Moon, Sun, Flame, Cloud, X } from 'lucide-react';
import FloatingHearts from '@/components/FloatingHearts';
import MouseHeartTrail from '@/components/MouseHeartTrail';
import { ThemeProvider, useTheme } from '@/components/ThemeWrapper';
import LoveMeter from '@/components/LoveMeter';
import SurpriseExplosion from '@/components/SurpriseExplosion';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';

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
        <Heart className="w-16 h-16 text-primary animate-pulse-heart fill-current" />
      </div>
    );
  }

  return (
    <div className="min-h-screen animated-bg selection:bg-primary/30 selection:text-primary overflow-x-hidden relative">
      <FloatingHearts />
      <MouseHeartTrail />

      {/* Hero Section */}
      <main className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen text-center">
        
        <div className="mb-12 space-y-6">
          <h1 className="text-6xl md:text-8xl font-headline text-primary drop-shadow-[0_0_20px_hsl(var(--primary)/0.5)] animate-pulse-heart">
            Happy Kiss Day 💋
          </h1>
          <p className="text-xl md:text-3xl font-body text-foreground/80">
            A celebration of a million unspoken words...
          </p>
        </div>

        {/* Central Quote Card */}
        <div className="glass p-8 md:p-12 rounded-[3rem] shadow-2xl max-w-2xl w-full transform hover:scale-[1.02] transition-all duration-500 mb-12 relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          <div className="relative text-7xl mb-6 transform group-hover:scale-110 transition-transform">👩‍❤️‍💋‍👨</div>
          <h2 className="text-2xl md:text-4xl font-headline text-foreground mb-6">
            Magic in the Air
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-body italic">
            "A kiss is a lovely trick designed by nature to stop speech when words become superfluous."
          </p>
        </div>

        {/* Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl px-4">
          <button 
            onClick={() => setShowSecret(true)}
            className="glass flex items-center justify-center gap-3 p-6 rounded-2xl hover:bg-primary/20 hover:scale-105 transition-all duration-300 group shadow-lg"
          >
            <Mail className="w-6 h-6 group-hover:animate-bounce" />
            <span className="font-headline text-xl">Secret Message</span>
          </button>

          <button 
            onClick={handleVirtualKiss}
            className="glass flex items-center justify-center gap-3 p-6 rounded-2xl hover:bg-primary/20 hover:scale-105 transition-all duration-300 group shadow-lg"
          >
            <Sparkles className="w-6 h-6 group-hover:animate-sparkle" />
            <span className="font-headline text-xl">Virtual Kiss</span>
          </button>

          <button 
            onClick={() => setShowLoveMeter(true)}
            className="glass flex items-center justify-center gap-3 p-6 rounded-2xl hover:bg-primary/20 hover:scale-105 transition-all duration-300 group shadow-lg"
          >
            <Heart className="w-6 h-6 group-hover:fill-current" />
            <span className="font-headline text-xl">Love Meter</span>
          </button>

          <button 
            onClick={cycleTheme}
            className="glass flex items-center justify-center gap-3 p-6 rounded-2xl hover:bg-primary/20 hover:scale-105 transition-all duration-300 group shadow-lg"
          >
            {getThemeIcon()}
            <span className="font-headline text-xl">Themes</span>
          </button>

          <button 
            onClick={() => setShowSurprise(true)}
            className="glass flex items-center justify-center gap-3 p-6 rounded-2xl bg-primary/10 hover:bg-primary/30 hover:scale-105 transition-all duration-300 group lg:col-span-2 shadow-xl border-primary/30"
          >
            <Sparkles className="w-7 h-7" />
            <span className="font-headline text-2xl">The Big Surprise</span>
          </button>
        </div>
      </main>

      {/* Virtual Kiss Effect */}
      {virtualKiss && (
        <div className="fixed inset-0 flex items-center justify-center z-[150] pointer-events-none">
          <div className="text-9xl animate-in zoom-in-50 fade-in duration-1000">
            💋
          </div>
        </div>
      )}

      {/* Secret Message Dialog - Accessible & Optimized */}
      <Dialog open={showSecret} onOpenChange={setShowSecret}>
        <DialogContent className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[210] w-[90%] max-w-lg p-0 border-none bg-transparent shadow-none focus:outline-none">
          <DialogTitle className="sr-only">For You, Always...</DialogTitle>
          <DialogDescription className="sr-only">A romantic secret message shared just for you on Kiss Day.</DialogDescription>
          
          <div className="glass glow-border rounded-[2.5rem] p-8 md:p-12 text-center animate-dialog-bounce relative">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-headline text-white text-shadow-romantic drop-shadow-lg">
                For You, Always...
              </h2>
              
              <div className="space-y-6 text-xl md:text-2xl font-body leading-relaxed text-white/95 text-shadow-romantic">
                <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both">
                  In every shared silence and every lingering look, I find reasons to love you more.
                </p>
                <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-[1300ms] fill-mode-both">
                  This Kiss Day, I don't just send you a message, I send you my heart.
                </p>
                <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-[2300ms] fill-mode-both">
                  Forever isn't long enough when I'm with you.
                </p>
              </div>

              <div className="pt-4 animate-in fade-in zoom-in duration-1000 delay-[3300ms] fill-mode-both">
                <p className="font-headline font-bold text-3xl md:text-4xl text-primary drop-shadow-[0_0_10px_rgba(255,192,203,0.5)]">
                  Forever Yours.
                </p>
                <div className="mt-4 flex justify-center gap-2">
                  <Heart className="w-6 h-6 text-primary fill-current animate-pulse-heart" />
                  <Heart className="w-6 h-6 text-primary fill-current animate-pulse-heart [animation-delay:200ms]" />
                  <Heart className="w-6 h-6 text-primary fill-current animate-pulse-heart [animation-delay:400ms]" />
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {showLoveMeter && <LoveMeter onClose={() => setShowLoveMeter(false)} />}
      
      {showSurprise && <SurpriseExplosion onComplete={() => setShowSurprise(false)} />}

      <footer className="relative z-10 py-12 text-center text-muted-foreground font-body text-sm opacity-60">
        <p>Created with 💖 for a beautiful Kiss Day</p>
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
