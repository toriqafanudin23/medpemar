import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FiPlay, FiPause, FiMaximize2, FiMinimize2, FiRotateCcw } from 'react-icons/fi';
import { TbAugmentedReality, TbCube } from 'react-icons/tb';
import { URL_ANIM } from '@/constants/urls';

// Main Viewer Component using vanilla Three.js
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
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const mixerRef = useRef(null);
  const clockRef = useRef(new THREE.Clock());
  const animationIdRef = useRef(null);

  const [mode, setMode] = useState('3D');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [error, setError] = useState(null);

  const modelUrl = modelPath.startsWith('http') ? modelPath : URL_ANIM + modelPath;

  // Initialize Three.js scene
  useEffect(() => {
    if (!canvasRef.current || mode !== '3D') return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf1f5f9); // bg-muted equivalent
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
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
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
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.4);
    directionalLight2.position.set(-10, -10, -5);
    scene.add(directionalLight2);

    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.4);
    scene.add(hemisphereLight);

    // Load GLB model
    const loader = new GLTFLoader();
    setIsLoading(true);
    setError(null);

    loader.load(
      modelUrl,
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(scale, scale, scale);
        
        // Center the model
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);
        
        scene.add(model);

        // Setup animations if available
        if (gltf.animations && gltf.animations.length > 0) {
          mixerRef.current = new THREE.AnimationMixer(model);
          gltf.animations.forEach((clip) => {
            const action = mixerRef.current.clipAction(clip);
            action.setLoop(THREE.LoopRepeat);
          });
        }

        setIsLoading(false);
      },
      (progress) => {
        // Loading progress
        console.log('Loading:', (progress.loaded / progress.total * 100) + '%');
      },
      (err) => {
        console.error('Error loading model:', err);
        setError('Gagal memuat model 3D');
        setIsLoading(false);
      }
    );

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      const delta = clockRef.current.getDelta();

      // Update mixer for animations
      if (mixerRef.current && isPlaying) {
        mixerRef.current.update(delta);
      }

      // Update controls
      if (controlsRef.current) {
        controlsRef.current.update();
      }

      // Render
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
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      
      if (controlsRef.current) {
        controlsRef.current.dispose();
      }
    };
  }, [modelUrl, scale, mode]);

  // Handle animation play/pause
  useEffect(() => {
    if (mixerRef.current) {
      const actions = mixerRef.current._actions;
      actions.forEach((action) => {
        if (isPlaying) {
          action.play();
        } else {
          action.stop();
        }
      });
    }

    // Toggle auto-rotate based on playing state
    if (controlsRef.current) {
      controlsRef.current.autoRotate = !isPlaying;
    }
  }, [isPlaying]);

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

  return (
    <div className="my-6">
      <div
        ref={containerRef}
        className="viewer-container relative overflow-hidden"
        style={{ height: isFullscreen ? '100vh' : height }}
      >
        {mode === '3D' ? (
          <>
            {/* Loading indicator */}
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

            {/* Error display */}
            {error && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted z-20">
                <div className="text-center space-y-2">
                  <TbCube className="w-12 h-12 mx-auto text-destructive" />
                  <p className="text-sm text-destructive">{error}</p>
                </div>
              </div>
            )}

            {/* Three.js Canvas */}
            <canvas
              ref={canvasRef}
              className="w-full h-full"
              style={{ display: 'block' }}
            />
          </>
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
                onClick={handlePlayPause}
                className="viewer-button"
                title={isPlaying ? 'Pause Animasi' : 'Play Animasi'}
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
