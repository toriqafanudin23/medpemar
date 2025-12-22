import React from 'react';
import '@google/model-viewer';
import { TbAugmentedReality } from 'react-icons/tb';
import { Button } from '@/components/ui/button';

const ModelViewerAR = ({ src, alt, poster }) => {
  return (
    <div className="w-full h-full bg-slate-100 relative rounded-lg overflow-hidden">
      <model-viewer
        src={src}
        alt={alt || "3D Model"}
        poster={poster}
        shadow-intensity="1"
        camera-controls
        touch-action="pan-y"
        ar
        ar-modes="webxr scene-viewer quick-look"
        style={{ width: '100%', height: '100%' }}
      >
        <button 
          slot="ar-button" 
          className="absolute bottom-4 right-4 z-50 px-4 py-2 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center gap-2 hover:bg-primary/90 transition-colors"
        >
          <TbAugmentedReality className="w-5 h-5" />
          <span className="font-medium">Lihat di Ruangan (AR)</span>
        </button>
        
        <div id="ar-prompt" className="absolute bottom-16 left-1/2 -translate-x-1/2 hidden">
          <img src="https://modelviewer.dev/shared-assets/icons/hand.png" className="w-8 h-8 opacity-50 animate-pulse" alt="AR prompt" />
        </div>
      </model-viewer>
    </div>
  );
};

export default ModelViewerAR;
