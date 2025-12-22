import React, { useState, useRef, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiMaximize2, FiMinimize2 } from 'react-icons/fi';
import { TbAugmentedReality, TbCube } from 'react-icons/tb';
import { URL_ANIM } from '@/constants/urls';

// Static Viewer with model switching using model-viewer
const StaticViewer = ({
  models = [],
  urlAR,
  scale = 1,
  title,
  showARButton = true,
  height = '450px',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mode, setMode] = useState('3D');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);

  const currentModelUrl = models.length > 0 
    ? (models[currentIndex].startsWith('http') ? models[currentIndex] : URL_ANIM + models[currentIndex])
    : null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % models.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + models.length) % models.length);
  };

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;
    try {
      if (!document.fullscreenElement) {
        await containerRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (err) {
      console.warn('Fullscreen error:', err);
    }
  };

  // Import model-viewer
  useEffect(() => {
    import('@google/model-viewer').catch(err => {
      console.warn('Model viewer import error:', err);
    });
  }, []);

  return (
    <div className="my-6">
      <div
        ref={containerRef}
        className="viewer-container relative overflow-hidden"
        style={{ height: isFullscreen ? '100vh' : height }}
      >
        {mode === '3D' && currentModelUrl ? (
          <model-viewer
            key={currentModelUrl}
            src={currentModelUrl}
            alt="3D Model"
            camera-controls
            touch-action="pan-y"
            auto-rotate
            shadow-intensity="1"
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'hsl(var(--muted))',
            }}
          >
            <div 
              slot="progress-bar" 
              className="w-full h-full flex items-center justify-center bg-muted"
            >
              <div className="text-center space-y-3">
                <div className="w-12 h-12 mx-auto bg-primary/20 rounded-xl flex items-center justify-center animate-pulse">
                  <TbCube className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Memuat model 3D...</p>
              </div>
            </div>
          </model-viewer>
        ) : mode === 'AR' && urlAR ? (
          <iframe
            src={urlAR}
            className="w-full h-full border-none"
            allow="camera; gyroscope; accelerometer; magnetometer; xr-spatial-tracking; microphone"
            title="WebAR Viewer"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted">
            <p className="text-muted-foreground">Model tidak tersedia</p>
          </div>
        )}

        {/* Controls */}
        <div className="absolute bottom-3 left-3 flex gap-2 z-10">
          <button onClick={toggleFullscreen} className="viewer-button" title="Fullscreen">
            {isFullscreen ? <FiMinimize2 className="w-5 h-5" /> : <FiMaximize2 className="w-5 h-5" />}
          </button>
          
          {models.length > 1 && (
            <>
              <button onClick={handlePrev} className="viewer-button" title="Sebelumnya">
                <FiChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={handleNext} className="viewer-button" title="Selanjutnya">
                <FiChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Model indicator */}
        {models.length > 1 && (
          <div className="absolute top-3 left-3 z-10 px-3 py-1.5 bg-card/90 backdrop-blur-sm rounded-lg border border-border">
            <span className="text-sm font-medium text-foreground">
              {currentIndex + 1} / {models.length}
            </span>
          </div>
        )}

        {/* AR button */}
        {showARButton && urlAR && (
          <button
            onClick={() => setMode(mode === '3D' ? 'AR' : '3D')}
            className="viewer-button absolute bottom-3 right-3 z-10"
            title={mode === '3D' ? 'Mode AR' : 'Mode 3D'}
          >
            {mode === '3D' ? <TbAugmentedReality className="w-6 h-6" /> : <TbCube className="w-6 h-6" />}
          </button>
        )}
      </div>

      {title && (
        <p className="text-center text-sm text-muted-foreground font-medium mt-3">
          {title}
        </p>
      )}
    </div>
  );
};

export default StaticViewer;
