import React from 'react';
import { TbCube } from 'react-icons/tb';

const LoadingScreen = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6">
        {/* Animated logo */}
        <div className="relative">
          <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center animate-pulse">
            <TbCube className="w-12 h-12 text-primary-foreground" />
          </div>
          {/* Loading ring */}
          <div className="absolute inset-0 w-20 h-20 border-4 border-primary/20 rounded-2xl animate-ping" />
        </div>

        {/* Text */}
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold text-foreground font-display">Memuat...</h2>
          <p className="text-sm text-muted-foreground">Menyiapkan media pembelajaran</p>
        </div>

        {/* Loading dots */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
