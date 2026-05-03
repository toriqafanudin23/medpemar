import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { TbAugmentedReality } from 'react-icons/tb';
import { FiDownload, FiX } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const STORAGE_KEY = 'ar_info_shown';

const ARInfoModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const alreadyShown = localStorage.getItem(STORAGE_KEY);
    if (!alreadyShown) {
      // Small delay so page content loads first
      const timer = setTimeout(() => setOpen(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem(STORAGE_KEY, '1');
    setOpen(false);
  };

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-card border border-border rounded-2xl shadow-2xl max-w-sm w-full p-6 animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <FiX className="w-5 h-5" />
        </button>

        {/* Icon */}
        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-5 mx-auto">
          <TbAugmentedReality className="w-8 h-8" />
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-foreground text-center mb-2">
          Mode Augmented Reality
        </h2>
        <p className="text-sm text-muted-foreground text-center mb-5 leading-relaxed">
          Gunakan fitur AR untuk melihat bangun ruang di dunia nyata melalui kamera smartphone!
        </p>

        {/* Steps */}
        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3 bg-muted/40 p-3 rounded-xl">
            <span className="w-6 h-6 bg-primary rounded-full text-primary-foreground text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
            <p className="text-sm text-foreground">
              Unduh dan cetak <span className="font-semibold">Barcode AR</span> terlebih dahulu melalui halaman Petunjuk.
            </p>
          </div>
          <div className="flex items-start gap-3 bg-muted/40 p-3 rounded-xl">
            <span className="w-6 h-6 bg-primary rounded-full text-primary-foreground text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
            <div className="text-sm text-foreground">
              Tekan tombol{' '}
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-muted border border-border rounded-lg text-xs font-medium">
                <TbAugmentedReality className="w-3.5 h-3.5" />
              </span>
              {' '}di pojok kanan atas viewer 3D untuk masuk ke Mode AR.
            </div>
          </div>
          <div className="flex items-start gap-3 bg-muted/40 p-3 rounded-xl">
            <span className="w-6 h-6 bg-primary rounded-full text-primary-foreground text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
            <p className="text-sm text-foreground">
              Arahkan kamera ke barcode yang telah dicetak dan objek 3D akan muncul!
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <Button onClick={handleClose} className="w-full h-12 text-base font-semibold">
            Mengerti!
          </Button>
          <Button asChild variant="outline" className="w-full h-12 text-base gap-2">
            <a href="/barcode.png" download="Barcode_AR_Bangun_Ruang.png">
              <FiDownload className="w-5 h-5" />
              Unduh Barcode
            </a>
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ARInfoModal;
