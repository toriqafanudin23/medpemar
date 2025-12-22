import React, { useState, useRef, useEffect } from 'react';
import { FiPlay, FiPause, FiMaximize2, FiMinimize2 } from 'react-icons/fi';
import { TbAugmentedReality, TbCube } from 'react-icons/tb';
import { URL_ANIM } from '@/constants/urls';

// Main Viewer Component using model-viewer
const Viewer3D = ({
  modelPath,
  urlAR,
  scale = 1,
  title,
  showControls = true,
  showARButton = true,
  showAnimation = true,
  height = '450px',
}) => {
  const [mode, setMode] = useState('3D');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);
  const modelViewerRef = useRef(null);

  const modelUrl = modelPath.startsWith('http') ? modelPath : URL_ANIM + modelPath;

  // Handle fullscreen
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

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Animation controls for model-viewer
  const handlePlay = () => {
    if (modelViewerRef.current) {
      modelViewerRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (modelViewerRef.current) {
      modelViewerRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Custom element registration for model-viewer
  useEffect(() => {
    // model-viewer is a web component, we need to import it
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
        {mode === '3D' ? (
          <model-viewer
            ref={modelViewerRef}
            src={modelUrl}
            alt="3D Model"
            camera-controls
            touch-action="pan-y"
            auto-rotate={!isPlaying}
            animation-name="*"
            autoplay={isPlaying}
            shadow-intensity="1"
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'hsl(var(--muted))',
            }}
          >
            {/* Loading indicator */}
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
        ) : (
          <div className="w-full h-full bg-muted">
            <iframe
              src={urlAR}
              className="w-full h-full border-none"
              allow="camera; gyroscope; accelerometer; magnetometer; xr-spatial-tracking; microphone"
              title="WebAR Viewer"
            />
          </div>
        )}

        {/* Control buttons */}
        {showControls && (
          <div className="absolute bottom-3 left-3 flex gap-2 z-10">
            {/* Fullscreen toggle */}
            <button
              onClick={toggleFullscreen}
              className="viewer-button"
              title={isFullscreen ? 'Keluar Fullscreen' : 'Fullscreen'}
            >
              {isFullscreen ? (
                <FiMinimize2 className="w-5 h-5" />
              ) : (
                <FiMaximize2 className="w-5 h-5" />
              )}
            </button>

            {/* Animation controls */}
            {showAnimation && mode === '3D' && (
              <button
                onClick={isPlaying ? handlePause : handlePlay}
                className="viewer-button"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <FiPause className="w-5 h-5" />
                ) : (
                  <FiPlay className="w-5 h-5" />
                )}
              </button>
            )}
          </div>
        )}

        {/* Mode switch button */}
        {showARButton && urlAR && (
          <button
            onClick={() => setMode(mode === '3D' ? 'AR' : '3D')}
            className="viewer-button absolute bottom-3 right-3 z-10"
            title={mode === '3D' ? 'Mode AR' : 'Mode 3D'}
          >
            {mode === '3D' ? (
              <TbAugmentedReality className="w-6 h-6" />
            ) : (
              <TbCube className="w-6 h-6" />
            )}
          </button>
        )}
      </div>

      {/* Title */}
      {title && (
        <p className="text-center text-sm text-muted-foreground font-medium mt-3">
          {title}
        </p>
      )}
    </div>
  );
};

export default Viewer3D;
