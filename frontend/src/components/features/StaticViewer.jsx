import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FiChevronLeft, FiChevronRight, FiMaximize2, FiMinimize2, FiPlay, FiPause } from 'react-icons/fi';
import { TbAugmentedReality, TbCube } from 'react-icons/tb';
import { URL_ANIM } from '@/constants/urls';

// Static Viewer with model switching using vanilla Three.js
const StaticViewer = ({
  models = [],
  urlAR,
  scale = 1,
  title,
  showARButton = true,
  height = '450px',
}) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const modelRef = useRef(null);
  const mixerRef = useRef(null);
  const clockRef = useRef(new THREE.Clock());
  const animationIdRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [mode, setMode] = useState('3D');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasAnimation, setHasAnimation] = useState(false);
  const [error, setError] = useState(null);

  const currentModelUrl = models.length > 0 
    ? (models[currentIndex].startsWith('http') ? models[currentIndex] : URL_ANIM + models[currentIndex])
    : null;

  // Function to completely remove model from scene
  const removeCurrentModel = useCallback(() => {
    if (modelRef.current && sceneRef.current) {
      // Dispose of all geometries and materials
      modelRef.current.traverse((child) => {
        if (child.isMesh) {
          if (child.geometry) child.geometry.dispose();
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach(mat => mat.dispose());
            } else {
              child.material.dispose();
            }
          }
        }
      });
      
      // Remove from scene
      sceneRef.current.remove(modelRef.current);
      modelRef.current = null;
    }
    
    // Stop and dispose mixer
    if (mixerRef.current) {
      mixerRef.current.stopAllAction();
      mixerRef.current = null;
    }
    
    setHasAnimation(false);
    setIsPlaying(false);
  }, []);

  // Initialize Three.js scene (only once)
  useEffect(() => {
    if (!canvasRef.current || mode !== '3D') return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf1f5f9);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      50,
      canvasRef.current.clientWidth / canvasRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(5, 5, 5);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    // Controls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 2;
    controls.maxDistance = 20;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;
    controlsRef.current = controls;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.4);
    directionalLight2.position.set(-10, -10, -5);
    scene.add(directionalLight2);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      const delta = clockRef.current.getDelta();

      // Update animation mixer
      if (mixerRef.current && isPlaying) {
        mixerRef.current.update(delta);
      }

      if (controlsRef.current) {
        controlsRef.current.update();
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!canvasRef.current || !cameraRef.current || !rendererRef.current) return;
      
      const width = canvasRef.current.clientWidth;
      const height = canvasRef.current.clientHeight;
      
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      removeCurrentModel();
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      
      if (controlsRef.current) {
        controlsRef.current.dispose();
      }
    };
  }, [mode, removeCurrentModel]);

  // Update animation loop when isPlaying changes
  useEffect(() => {
    if (mixerRef.current) {
      if (isPlaying) {
        mixerRef.current._actions.forEach(action => action.play());
      } else {
        mixerRef.current._actions.forEach(action => action.stop());
      }
    }
    
    // Toggle auto-rotate based on playing state
    if (controlsRef.current) {
      controlsRef.current.autoRotate = !isPlaying;
    }
  }, [isPlaying]);

  // Load model when URL changes
  useEffect(() => {
    if (!currentModelUrl || !sceneRef.current || mode !== '3D') return;

    // Remove previous model FIRST
    removeCurrentModel();

    setIsLoading(true);
    setError(null);

    const loader = new GLTFLoader();
    loader.load(
      currentModelUrl,
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(scale, scale, scale);
        
        // Center the model
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);
        
        // Add to scene
        sceneRef.current.add(model);
        modelRef.current = model;

        // Setup animations if available
        if (gltf.animations && gltf.animations.length > 0) {
          mixerRef.current = new THREE.AnimationMixer(model);
          gltf.animations.forEach((clip) => {
            const action = mixerRef.current.clipAction(clip);
            action.setLoop(THREE.LoopRepeat);
          });
          setHasAnimation(true);
        } else {
          setHasAnimation(false);
        }

        setIsLoading(false);
      },
      undefined,
      (err) => {
        console.error('Error loading model:', err);
        setError('Gagal memuat model 3D');
        setIsLoading(false);
      }
    );
  }, [currentModelUrl, scale, mode, removeCurrentModel]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % models.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + models.length) % models.length);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
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
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted z-20">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 mx-auto bg-primary/20 rounded-xl flex items-center justify-center animate-pulse">
                    <TbCube className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">Memuat model 3D...</p>
                </div>
              </div>
            )}

            {error && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted z-20">
                <div className="text-center space-y-2">
                  <TbCube className="w-12 h-12 mx-auto text-destructive" />
                  <p className="text-sm text-destructive">{error}</p>
                </div>
              </div>
            )}

            <canvas
              ref={canvasRef}
              className="w-full h-full"
              style={{ display: 'block' }}
            />
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

          {/* Animation play/pause button */}
          {hasAnimation && mode === '3D' && (
            <button 
              onClick={handlePlayPause} 
              className="viewer-button" 
              title={isPlaying ? 'Pause Animasi' : 'Play Animasi'}
            >
              {isPlaying ? <FiPause className="w-5 h-5" /> : <FiPlay className="w-5 h-5" />}
            </button>
          )}
          
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
