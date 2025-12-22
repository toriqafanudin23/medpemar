import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Center } from '@react-three/drei';
import * as THREE from 'three';
import { FiPlay, FiPause, FiRefreshCw, FiMaximize2, FiMinimize2 } from 'react-icons/fi';
import { TbAugmentedReality, TbCube } from 'react-icons/tb';
import { URL_ANIM } from '@/constants/urls';
import { Skeleton } from '@/components/ui/skeleton';

// 3D Model Component with animation support
const Model = ({ url, scale = 1, isPlaying = false, playDirection = 1 }) => {
  const gltf = useGLTF(url);
  const mixer = useRef(null);
  const actions = useRef([]);

  useEffect(() => {
    if (gltf.animations && gltf.animations.length > 0 && gltf.scene) {
      mixer.current = new THREE.AnimationMixer(gltf.scene);
      actions.current = gltf.animations.map((clip) => {
        const action = mixer.current.clipAction(clip);
        action.play();
        return action;
      });
    }

    return () => {
      if (mixer.current) {
        mixer.current.stopAllAction();
      }
    };
  }, [gltf]);

  useEffect(() => {
    if (actions.current.length > 0) {
      actions.current.forEach((action) => {
        action.timeScale = playDirection * 0.5;
      });
    }
  }, [playDirection]);

  useFrame((_, delta) => {
    if (isPlaying && mixer.current) {
      mixer.current.update(delta);
    }
  });

  return (
    <Center>
      <primitive object={gltf.scene} scale={scale} />
    </Center>
  );
};

// Loading fallback for 3D scene
const ModelLoading = () => (
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="#3b82f6" wireframe />
  </mesh>
);

// AR Mode Component (iframe-based)
const ARMode = ({ urlAR }) => (
  <div className="w-full h-full bg-muted flex items-center justify-center">
    <iframe
      src={urlAR}
      className="w-full h-full border-none"
      allow="camera; gyroscope; accelerometer; magnetometer; xr-spatial-tracking; microphone"
      title="WebAR Viewer"
    />
  </div>
);

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
  const [playDirection, setPlayDirection] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);

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

  const handlePlay = () => {
    setPlayDirection(1);
    setIsPlaying(true);
  };

  const handleReverse = () => {
    setPlayDirection(-1);
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="my-6">
      <div
        ref={containerRef}
        className="viewer-container relative overflow-hidden"
        style={{ height: isFullscreen ? '100vh' : height }}
      >
        {mode === '3D' ? (
          <Suspense fallback={
            <div className="w-full h-full flex items-center justify-center bg-muted">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 mx-auto bg-primary/20 rounded-xl flex items-center justify-center animate-pulse">
                  <TbCube className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Memuat model 3D...</p>
              </div>
            </div>
          }>
            <Canvas
              camera={{ position: [6, 6, 6], fov: 50 }}
              className="canvas-wrapper"
            >
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
              <directionalLight position={[-5, 5, -5]} intensity={0.5} />
              <hemisphereLight intensity={0.3} />
              <Model
                url={modelUrl}
                scale={scale}
                isPlaying={isPlaying}
                playDirection={playDirection}
              />
              <OrbitControls
                enablePan={true}
                enableZoom={true}
                enableRotate={true}
                minDistance={3}
                maxDistance={20}
              />
            </Canvas>
          </Suspense>
        ) : (
          <ARMode urlAR={urlAR} />
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
                  title="Mundur"
                >
                  <FiPlay className="w-5 h-5 rotate-180" />
                </button>
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
