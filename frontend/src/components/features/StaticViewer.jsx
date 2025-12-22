import React, { Suspense, useState, useRef, useMemo, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { FiChevronLeft, FiChevronRight, FiMaximize2, FiMinimize2 } from 'react-icons/fi';
import { TbAugmentedReality, TbCube } from 'react-icons/tb';
import { URL_ANIM } from '@/constants/urls';

// Static Model (no animation, just display)
const StaticModel = ({ url, scale = 1 }) => {
  const { scene } = useGLTF(url);
  
  const clonedScene = useMemo(() => {
    const clone = scene.clone();
    clone.traverse((child) => {
      if (child.isMesh) {
        child.material = child.material.clone();
      }
    });
    return clone;
  }, [scene]);

  return (
    <group>
      <primitive object={clonedScene} scale={scale} />
    </group>
  );
};

// Camera controller
const CameraController = () => {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.set(5, 5, 5);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return null;
};

// Loading component
const LoadingIndicator = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-muted z-10">
    <div className="text-center space-y-3">
      <div className="w-12 h-12 mx-auto bg-primary/20 rounded-xl flex items-center justify-center animate-pulse">
        <TbCube className="w-6 h-6 text-primary" />
      </div>
      <p className="text-sm text-muted-foreground">Memuat model 3D...</p>
    </div>
  </div>
);

// Static Viewer with model switching
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
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);

  const currentModelUrl = models.length > 0 
    ? (models[currentIndex].startsWith('http') ? models[currentIndex] : URL_ANIM + models[currentIndex])
    : null;

  // Preload current model
  useEffect(() => {
    if (currentModelUrl) {
      setIsLoading(true);
      useGLTF.preload(currentModelUrl);
      const timer = setTimeout(() => setIsLoading(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [currentModelUrl]);

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

  return (
    <div className="my-6">
      <div
        ref={containerRef}
        className="viewer-container relative overflow-hidden"
        style={{ height: isFullscreen ? '100vh' : height }}
      >
        {mode === '3D' && currentModelUrl ? (
          <>
            {isLoading && <LoadingIndicator />}
            <Canvas
              camera={{ position: [5, 5, 5], fov: 50 }}
              gl={{ antialias: true, alpha: true }}
              dpr={[1, 2]}
              onCreated={() => setIsLoading(false)}
            >
              <CameraController />
              <ambientLight intensity={0.6} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <directionalLight position={[-10, -10, -5]} intensity={0.4} />
              <hemisphereLight intensity={0.4} />
              
              <Suspense fallback={null}>
                <StaticModel url={currentModelUrl} scale={scale} />
              </Suspense>
              
              <OrbitControls
                enablePan={true}
                enableZoom={true}
                enableRotate={true}
                minDistance={2}
                maxDistance={20}
                autoRotate={true}
                autoRotateSpeed={1}
              />
            </Canvas>
          </>
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
