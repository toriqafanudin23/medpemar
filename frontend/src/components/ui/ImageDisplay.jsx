import React, { useState } from 'react';
import { URL_IMAGE } from '@/constants/urls';
import { FiZoomIn, FiX } from 'react-icons/fi';
import { Dialog, DialogContent, DialogClose, DialogTitle } from '@/components/ui/dialog';

const ImageDisplay = ({ src, nama, alt, width, scale = 1, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const imageSrc = src.startsWith('http') ? src : URL_IMAGE + src;

  const imageStyle = {
    maxWidth: width || '100%',
    transform: scale !== 1 ? `scale(${scale})` : undefined,
  };

  return (
    <>
      <figure className={`my-6 ${className}`}>
        <div 
          className="relative group cursor-pointer overflow-hidden rounded-xl border border-border bg-muted/50"
          onClick={() => setIsOpen(true)}
        >
          <img
            src={imageSrc}
            alt={alt || nama || 'Gambar'}
            className="w-full h-auto object-contain mx-auto p-4 image-zoom"
            style={imageStyle}
            loading="lazy"
          />
          {/* Zoom overlay */}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="bg-card/90 backdrop-blur-sm p-2 rounded-lg shadow-md">
              <FiZoomIn className="w-5 h-5 text-foreground" />
            </div>
          </div>
        </div>
        {nama && (
          <figcaption className="text-center text-sm text-muted-foreground mt-3 font-medium">
            {nama}
          </figcaption>
        )}
      </figure>

      {/* Zoom Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background/95 backdrop-blur-sm">
          <DialogTitle className="sr-only">{nama || alt || 'Gambar'}</DialogTitle>
          <div className="relative">
            <DialogClose className="absolute top-4 right-4 z-10 p-2 rounded-full bg-card/90 backdrop-blur-sm hover:bg-card shadow-md">
              <FiX className="w-5 h-5" />
            </DialogClose>
            <img
              src={imageSrc}
              alt={alt || nama || 'Gambar'}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            {nama && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent">
                <p className="text-center text-sm font-medium text-foreground">{nama}</p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageDisplay;
