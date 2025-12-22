import React, { Suspense, useEffect, useRef, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';
import { FiPlay, FiPause, FiMaximize2, FiMinimize2, FiRotateCcw } from 'react-icons/fi';
import { TbAugmentedReality, TbCube } from 'react-icons/tb';
import { URL_ANIM } from '@/constants/urls';

// Error Boundary for 3D Canvas
class CanvasErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-muted">
          <div className="text-center space-y-2">
            <TbCube className="w-12 h-12 mx-auto text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Gagal memuat model 3D</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// 3D Model Component with animation support
const Model = ({ url, scale = 1, isPlaying = false, playbackSpeed = 1 }) => {
  const group = useRef();
  const { scene, animations } = useGLTF(url);
  const { actions, names } = useAnimations(animations, group);

  // Clone scene to prevent mutation issues
  const clonedScene = useMemo(() => {
    const clone = scene.clone();
    clone.traverse((child) => {
      if (child.isMesh) {
        child.material = child.material.clone();
      }
    });
    return clone;
  }, [scene]);

  // Handle animations
  useEffect(() => {
    if (names.length > 0 && actions) {
      // Play all animations
      names.forEach((name) => {
        const action = actions[name];
        if (action) {
          action.reset();
          action.setLoop(THREE.LoopRepeat);
          action.clampWhenFinished = false;
          action.timeScale = playbackSpeed;
          if (isPlaying) {
            action.play();
          } else {
            action.stop();
          }
        }
      });
    }
  }, [actions, names, isPlaying, playbackSpeed]);

  return (
    <group ref={group}>
      <primitive object={clonedScene} scale={scale} />
    </group>
  );
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

// Camera controller to fit model in view
const CameraController = () => {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.set(5, 5, 5);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return null;
};

// Main Viewer Component
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
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);

  const modelUrl = modelPath.startsWith('http') ? modelPath : URL_ANIM + modelPath;

  // Preload model
  useEffect(() => {
    setIsLoading(true);
    useGLTF.preload(modelUrl);
    // Set loading false after a delay to allow model to load
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [modelUrl]);

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

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReverse = () => {
    setPlaybackSpeed(playbackSpeed > 0 ? -1 : 1);
  };

  return (
    <div className="my-6">
      <div
        ref={containerRef}
        className="viewer-container relative overflow-hidden"
        style={{ height: isFullscreen ? '100vh' : height }}
      >
        {mode === '3D' ? (
          <CanvasErrorBoundary>
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
                <Model
                  url={modelUrl}
                  scale={scale}
                  isPlaying={isPlaying}
                  playbackSpeed={playbackSpeed}
                />
              </Suspense>
              
              <OrbitControls
                enablePan={true}
                enableZoom={true}
                enableRotate={true}
                minDistance={2}
                maxDistance={20}
                autoRotate={!isPlaying}
                autoRotateSpeed={1}
              />
            </Canvas>
          </CanvasErrorBoundary>
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
              <>
                <button
                  onClick={handleReverse}
                  className="viewer-button"
                  title="Balik Arah"
                >
                  <FiRotateCcw className="w-5 h-5" />
                </button>
                <button
                  onClick={handlePlayPause}
                  className="viewer-button"
                  title={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? (
                    <FiPause className="w-5 h-5" />
                  ) : (
                    <FiPlay className="w-5 h-5" />
                  )}
                </button>
              </>
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
