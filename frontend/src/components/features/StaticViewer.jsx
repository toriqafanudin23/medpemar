import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FiChevronLeft, FiChevronRight, FiMaximize2, FiMinimize2, FiPlay, FiPause, FiRotateCcw, FiZoomIn, FiZoomOut, FiMove } from 'react-icons/fi';
import { TbAugmentedReality, TbCube } from 'react-icons/tb';
import ARViewer from '@/components/features/ARViewer';
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
  const actionsRef = useRef([]);
  const clockRef = useRef(new THREE.Clock());
  const animationIdRef = useRef(null);
  const isPlayingRef = useRef(false);
  const loaderRef = useRef(new GLTFLoader());
  const loadingUrlRef = useRef(null); // Track which URL is currently being loaded

  const [currentIndex, setCurrentIndex] = useState(0);
  const [mode, setMode] = useState('3D');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasAnimation, setHasAnimation] = useState(false);
  const [error, setError] = useState(null);
  const [isPanMode, setIsPanMode] = useState(false);

  const currentModelUrl = models.length > 0 
    ? (models[currentIndex].startsWith('http') ? models[currentIndex] : URL_ANIM + models[currentIndex])
    : null;

  // Keep ref in sync with state
  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  // Function to completely remove model from scene
  const removeCurrentModel = useCallback(() => {
    // Stop animations first
    if (mixerRef.current) {
      mixerRef.current.stopAllAction();
      if (modelRef.current) {
        mixerRef.current.uncacheRoot(modelRef.current);
      }
      mixerRef.current = null;
    }
    actionsRef.current = [];
    
    // Remove model from scene and dispose
    if (modelRef.current && sceneRef.current) {
      modelRef.current.traverse((child) => {
        if (child.isMesh) {
          if (child.geometry) {
            child.geometry.dispose();
          }
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach(mat => {
                if (mat.map) mat.map.dispose();
                mat.dispose();
              });
            } else {
              if (child.material.map) child.material.map.dispose();
              child.material.dispose();
            }
          }
        }
      });
      
      sceneRef.current.remove(modelRef.current);
      modelRef.current = null;
    }
    
    // Safety: Also remove any other non-light objects from scene
    if (sceneRef.current) {
      const objectsToRemove = [];
      sceneRef.current.children.forEach((child) => {
        // Keep only lights, remove everything else (like stale models)
        if (!child.isLight) {
          objectsToRemove.push(child);
        }
      });
      objectsToRemove.forEach((obj) => {
        obj.traverse((child) => {
          if (child.isMesh) {
            if (child.geometry) child.geometry.dispose();
            if (child.material) {
              if (Array.isArray(child.material)) {
                child.material.forEach(mat => {
                  if (mat.map) mat.map.dispose();
                  mat.dispose();
                });
              } else {
                if (child.material.map) child.material.map.dispose();
                child.material.dispose();
              }
            }
          }
        });
        sceneRef.current.remove(obj);
      });
    }
    
    setHasAnimation(false);
    setIsPlaying(false);
    isPlayingRef.current = false;
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
    controls.minDistance = 1;
    controls.maxDistance = 50;

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

      // Update animation mixer - use ref for current playing state
      if (mixerRef.current && isPlayingRef.current) {
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

    // Handle fullscreen change - need small delay for DOM to update
    const handleFullscreenChange = () => {
      setTimeout(handleResize, 100);
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      
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

  // Load model when URL changes
  useEffect(() => {
    if (!currentModelUrl || !sceneRef.current || mode !== '3D') return;

    // Flag to track if this effect has been cancelled (e.g., by StrictMode remount)
    let cancelled = false;

    // Remove previous model COMPLETELY
    removeCurrentModel();

    setIsLoading(true);
    setError(null);
    
    // Track which URL we're loading
    loadingUrlRef.current = currentModelUrl;

    loaderRef.current.load(
      currentModelUrl,
      (gltf) => {
        // Check if this effect was cancelled (StrictMode cleanup or URL changed)
        if (cancelled) {
          console.log('Load cancelled (effect cleanup):', currentModelUrl);
          return;
        }
        
        // Check if this load is still relevant (user hasn't switched to another model)
        if (loadingUrlRef.current !== currentModelUrl) {
          console.log('Skipping stale model load:', currentModelUrl);
          return;
        }
        
        // Double check scene still exists
        if (!sceneRef.current) return;
        
        // Also check if there's already a model loaded with the same URL (prevent duplicates)
        if (modelRef.current) {
          console.log('Model already exists, skipping duplicate add');
          return;
        }

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
          actionsRef.current = gltf.animations.map((clip) => {
            const action = mixerRef.current.clipAction(clip);
            action.setLoop(THREE.LoopRepeat);
            action.clampWhenFinished = false;
            return action;
          });
          setHasAnimation(true);
          console.log('Model loaded with', gltf.animations.length, 'animations');
        } else {
          setHasAnimation(false);
          console.log('Model loaded without animations');
        }

        setIsLoading(false);
      },
      undefined,
      (err) => {
        // Only show error if not cancelled and this is still the current loading URL
        if (cancelled || loadingUrlRef.current !== currentModelUrl) return;
        
        console.error('Error loading model:', err);
        setError('Gagal memuat model 3D');
        setIsLoading(false);
      }
    );
    
    // Cleanup function - cancels this load when effect re-runs or unmounts
    return () => {
      cancelled = true;
    };
  }, [currentModelUrl, scale, mode, removeCurrentModel]);

  // Handle play/pause animation
  const handlePlayPause = () => {
    if (!mixerRef.current || actionsRef.current.length === 0) return;

    if (isPlaying) {
      // Pause
      actionsRef.current.forEach(action => {
        action.paused = true;
      });
      setIsPlaying(false);
      

    } else {
      // Play
      actionsRef.current.forEach(action => {
        action.paused = false;
        action.play();
      });
      setIsPlaying(true);
      

    }
  };

  // Reset animation
  const handleReset = () => {
    if (!mixerRef.current || actionsRef.current.length === 0) return;

    actionsRef.current.forEach(action => {
      action.reset();
      action.paused = true;
    });
    setIsPlaying(false);
    

  };

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

  // Zoom controls - use dolly for proper distance-based zoom
  const handleZoomIn = () => {
    if (!cameraRef.current || !controlsRef.current) return;
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    const target = controls.target;
    const distance = camera.position.distanceTo(target);
    
    // Zoom in by 20%, respect minDistance
    const newDistance = Math.max(distance * 0.8, controls.minDistance);
    const direction = new THREE.Vector3().subVectors(camera.position, target).normalize();
    camera.position.copy(target).addScaledVector(direction, newDistance);
    controls.update();
  };

  const handleZoomOut = () => {
    if (!cameraRef.current || !controlsRef.current) return;
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    const target = controls.target;
    const distance = camera.position.distanceTo(target);
    
    // Zoom out by 20%, respect maxDistance
    const newDistance = Math.min(distance * 1.25, controls.maxDistance);
    const direction = new THREE.Vector3().subVectors(camera.position, target).normalize();
    camera.position.copy(target).addScaledVector(direction, newDistance);
    controls.update();
  };

  // Toggle pan mode
  const togglePanMode = () => {
    if (!controlsRef.current) return;
    const newPanMode = !isPanMode;
    setIsPanMode(newPanMode);
    
    // When pan mode is on, left mouse becomes pan instead of rotate
    controlsRef.current.mouseButtons = {
      LEFT: newPanMode ? THREE.MOUSE.PAN : THREE.MOUSE.ROTATE,
      MIDDLE: THREE.MOUSE.DOLLY,
      RIGHT: newPanMode ? THREE.MOUSE.ROTATE : THREE.MOUSE.PAN,
    };
    
    // For mobile touch: swap one-finger behavior
    controlsRef.current.touches = {
      ONE: newPanMode ? THREE.TOUCH.PAN : THREE.TOUCH.ROTATE,
      TWO: THREE.TOUCH.DOLLY_PAN,
    };
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
        ) : mode === 'AR' && currentModelUrl ? (
          <ARViewer modelPath={currentModelUrl} scale={scale} />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted">
            <p className="text-muted-foreground">Model tidak tersedia</p>
          </div>
        )}

        {/* Fullscreen Button - Top Left */}
        <button 
          onClick={toggleFullscreen} 
          className="viewer-button absolute top-3 left-3 z-10" 
          title="Fullscreen"
        >
          {isFullscreen ? <FiMinimize2 className="w-5 h-5" /> : <FiMaximize2 className="w-5 h-5" />}
        </button>

        {/* Navigation Buttons - Side Centered */}
        {models.length > 1 && (
          <>
            <button 
              onClick={handlePrev} 
              className="viewer-button absolute left-3 top-1/2 -translate-y-1/2 z-10" 
              title="Model Sebelumnya"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNext} 
              className="viewer-button absolute right-3 top-1/2 -translate-y-1/2 z-10" 
              title="Model Selanjutnya"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Bottom Left Controls (Animation) - Only in 3D mode */}
        {mode === '3D' && hasAnimation && (
          <div className="absolute bottom-3 left-3 flex gap-2 z-10">
            <button 
              onClick={handleReset} 
              className="viewer-button" 
              title="Reset Animasi"
            >
              <FiRotateCcw className="w-5 h-5" />
            </button>
            <button 
              onClick={handlePlayPause} 
              className="viewer-button" 
              title={isPlaying ? 'Pause Animasi' : 'Play Animasi'}
            >
              {isPlaying ? <FiPause className="w-5 h-5" /> : <FiPlay className="w-5 h-5" />}
            </button>
          </div>
        )}

        {/* Zoom and Pan controls - Bottom Right (Only in 3D mode) */}
        {mode === '3D' && (
          <div className="absolute bottom-3 right-3 flex flex-col gap-2 z-10">
            <button 
              onClick={handleZoomIn} 
              className="viewer-button" 
              title="Zoom In"
            >
              <FiZoomIn className="w-5 h-5" />
            </button>
            <button 
              onClick={handleZoomOut} 
              className="viewer-button" 
              title="Zoom Out"
            >
              <FiZoomOut className="w-5 h-5" />
            </button>
            <button 
              onClick={togglePanMode} 
              className={`viewer-button ${isPanMode ? 'bg-primary text-primary-foreground' : ''}`}
              title={isPanMode ? 'Mode Geser (Aktif)' : 'Mode Geser'}
            >
              <FiMove className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Model indicator */}
        {models.length > 1 && (
          <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 px-3 py-1.5 bg-card/90 backdrop-blur-sm rounded-lg border border-border">
            <span className="text-sm font-medium text-foreground">
              {currentIndex + 1} / {models.length}
            </span>
          </div>
        )}

        {/* AR button - moved to top right for mobile */}
        {showARButton && currentModelUrl && (
          <button
            onClick={() => setMode(mode === '3D' ? 'AR' : '3D')}
            className="viewer-button absolute top-3 right-3 z-10"
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
