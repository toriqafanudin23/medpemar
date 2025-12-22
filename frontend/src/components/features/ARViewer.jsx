import React, { useEffect, useRef, useState } from 'react';
import { FiCamera, FiX, FiDownload } from 'react-icons/fi';
import { TbAugmentedReality } from 'react-icons/tb';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

// AR.js Viewer Component using marker-based AR
const ARViewer = ({ 
  modelPath, 
  markerType = 'hiro', // 'hiro', 'kanji', or custom pattern
  title,
  onClose 
}) => {
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Load AR.js and A-Frame scripts dynamically
    const loadScripts = async () => {
      try {
        // Check if scripts already loaded
        if (!document.querySelector('script[src*="aframe.min.js"]')) {
          const aframeScript = document.createElement('script');
          aframeScript.src = 'https://aframe.io/releases/1.4.0/aframe.min.js';
          aframeScript.async = true;
          document.head.appendChild(aframeScript);
          await new Promise((resolve) => aframeScript.onload = resolve);
        }

        if (!document.querySelector('script[src*="aframe-ar.js"]')) {
          const arjsScript = document.createElement('script');
          arjsScript.src = 'https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js';
          arjsScript.async = true;
          document.head.appendChild(arjsScript);
          await new Promise((resolve) => arjsScript.onload = resolve);
        }

        setIsLoading(false);
      } catch (err) {
        setError('Gagal memuat library AR');
        setIsLoading(false);
      }
    };

    loadScripts();
  }, []);

  // Get marker preset
  const getMarkerPreset = () => {
    if (markerType === 'hiro') return 'preset="hiro"';
    if (markerType === 'kanji') return 'preset="kanji"';
    return `type="pattern" url="${markerType}"`;
  };

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-muted">
        <div className="text-center space-y-2">
          <TbAugmentedReality className="w-12 h-12 mx-auto text-destructive" />
          <p className="text-sm text-destructive">{error}</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-muted">
        <div className="text-center space-y-3">
          <div className="w-12 h-12 mx-auto bg-primary/20 rounded-xl flex items-center justify-center animate-pulse">
            <TbAugmentedReality className="w-6 h-6 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground">Memuat AR.js...</p>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="w-full h-full relative">
      {/* Close button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 bg-card/90 backdrop-blur-sm rounded-full shadow-lg"
        >
          <FiX className="w-5 h-5" />
        </button>
      )}

      {/* AR Scene using dangerouslySetInnerHTML for A-Frame */}
      <div
        className="w-full h-full"
        dangerouslySetInnerHTML={{
          __html: `
            <a-scene
              embedded
              arjs="sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 3x3;"
              vr-mode-ui="enabled: false"
              renderer="logarithmicDepthBuffer: true; antialias: true; alpha: true;"
              style="width: 100%; height: 100%;"
            >
              <a-marker ${getMarkerPreset()}>
                <a-entity
                  gltf-model="${modelPath}"
                  scale="0.5 0.5 0.5"
                  position="0 0 0"
                  animation="property: rotation; to: 0 360 0; loop: true; dur: 10000; easing: linear;"
                ></a-entity>
              </a-marker>
              <a-entity camera></a-entity>
            </a-scene>
          `
        }}
      />

      {/* Instructions overlay */}
      <div className="absolute bottom-4 left-4 right-4 z-40">
        <div className="bg-card/90 backdrop-blur-sm rounded-lg p-3 text-center">
          <p className="text-sm text-foreground">
            Arahkan kamera ke marker <strong>{markerType.toUpperCase()}</strong> untuk melihat objek 3D
          </p>
        </div>
      </div>
    </div>
  );
};

// AR Button with Dialog
export const ARButton = ({ modelPath, markerType = 'hiro', title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMarkerInfo, setShowMarkerInfo] = useState(false);

  const markerImages = {
    hiro: 'https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png',
    kanji: 'https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/kanji.png',
  };

  return (
    <>
      <Button
        onClick={() => setShowMarkerInfo(true)}
        variant="outline"
        className="gap-2"
      >
        <TbAugmentedReality className="w-5 h-5" />
        Lihat dalam AR
      </Button>

      {/* Marker Info Dialog */}
      <Dialog open={showMarkerInfo} onOpenChange={setShowMarkerInfo}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Petunjuk Mode AR</DialogTitle>
            <DialogDescription>
              Untuk melihat objek 3D dalam Augmented Reality, Anda memerlukan marker.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg text-center">
              <p className="text-sm text-muted-foreground mb-3">Marker yang digunakan:</p>
              <img 
                src={markerImages[markerType] || markerImages.hiro} 
                alt={`Marker ${markerType}`}
                className="w-32 h-32 mx-auto border border-border rounded-lg"
              />
              <p className="text-xs text-muted-foreground mt-2 uppercase font-medium">
                {markerType} Marker
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-sm">Langkah-langkah:</p>
              <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                <li>Download atau cetak marker di atas</li>
                <li>Klik tombol "Mulai AR" di bawah</li>
                <li>Izinkan akses kamera</li>
                <li>Arahkan kamera ke marker</li>
              </ol>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex-1 gap-2"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = markerImages[markerType] || markerImages.hiro;
                  link.download = `marker-${markerType}.png`;
                  link.click();
                }}
              >
                <FiDownload className="w-4 h-4" />
                Download Marker
              </Button>
              <Button
                className="flex-1 gap-2"
                onClick={() => {
                  setShowMarkerInfo(false);
                  setIsOpen(true);
                }}
              >
                <FiCamera className="w-4 h-4" />
                Mulai AR
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* AR Fullscreen Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-full h-[90vh] p-0">
          <ARViewer
            modelPath={modelPath}
            markerType={markerType}
            title={title}
            onClose={() => setIsOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ARViewer;
