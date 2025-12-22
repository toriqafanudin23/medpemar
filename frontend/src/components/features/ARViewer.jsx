import React, { useState } from 'react';
import { FiX, FiDownload, FiCamera, FiMaximize } from 'react-icons/fi';
import { TbAugmentedReality } from 'react-icons/tb';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

// Helper to construct AR URL
const getARViewerUrl = (modelUrl, scale = 1) => {
  // Use current origin + public file path
  const viewerPath = '/ar_viewer.html';
  const params = new URLSearchParams({
    model: modelUrl,
    scale: scale
  });
  return `${viewerPath}?${params.toString()}`;
};

const ARViewer = ({ modelPath, title, scale = 0.5, onClose }) => {
  return (
    <div className="w-full h-full relative bg-slate-900">
      {/* Close button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm rounded-full transition-colors"
        >
          <FiX className="w-5 h-5" />
        </button>
      )}

      {/* Iframe to static AR HTML file */}
      <iframe
        src={getARViewerUrl(modelPath, scale)}
        className="w-full h-full border-none"
        allow="camera; gyroscope; accelerometer; magnetometer; xr-spatial-tracking; microphone"
        title="AR Marker Viewer"
      />
      
      {/* Instructions overlay */}
      <div className="absolute top-4 left-4 right-16 z-40 pointer-events-none">
        <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3 text-center max-w-sm mx-auto">
          <p className="text-sm text-white font-medium">
            Arahkan kamera ke marker <strong>HIRO</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

// AR Button with Dialog
export const ARButton = ({ modelPath, title, scale = 0.5 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMarkerInfo, setShowMarkerInfo] = useState(false);
  
  // Official Hiro marker image
  const markerImage = 'https://upload.wikimedia.org/wikipedia/commons/4/48/Hiro_marker_ARjs.png';

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

      {/* Marker Info Dialog - First Step */}
      <Dialog open={showMarkerInfo} onOpenChange={setShowMarkerInfo}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Petunjuk Mode AR</DialogTitle>
            <DialogDescription>
              Untuk melihat objek 3D, Anda memerlukan marker (barcode) khusus.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="p-4 bg-muted/50 rounded-lg text-center border-2 border-dashed border-muted-foreground/20">
              <img 
                src={markerImage} 
                alt="Hiro Marker"
                className="w-40 h-40 mx-auto rounded-sm"
              />
              <p className="text-xs text-muted-foreground mt-2 font-medium">
                Marker tipe: HIRO
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Cara menggunakan:</p>
              <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside pl-1">
                <li>Siapkan marker HIRO (download/cetak jika belum ada)</li>
                <li>Atau buka gambar marker di HP lain</li>
                <li>Klik tombol "Mulai Scan"</li>
                <li>Arahkan kamera ke marker tersebut</li>
              </ol>
            </div>

            <div className="flex gap-2 pt-2">
              <Button
                variant="outline"
                className="flex-1 gap-2 border-primary/20 hover:bg-primary/5"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = markerImage;
                  link.download = 'hiro-marker.png';
                  link.click();
                }}
              >
                <FiDownload className="w-4 h-4" />
                Download
              </Button>
              <Button
                className="flex-1 gap-2"
                onClick={() => {
                  setShowMarkerInfo(false);
                  setIsOpen(true);
                }}
              >
                <FiCamera className="w-4 h-4" />
                Mulai Scan
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* AR Fullscreen Dialog - Second Step */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-full h-[100dvh] p-0 overflow-hidden bg-black border-none rounded-none sm:rounded-none">
           <ARViewer
             modelPath={modelPath}
             title={title}
             scale={scale}
             onClose={() => setIsOpen(false)}
           />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ARViewer;
