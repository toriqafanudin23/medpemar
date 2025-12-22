import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FiHome, FiArrowLeft } from 'react-icons/fi';
import { TbCube } from 'react-icons/tb';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="w-24 h-24 mx-auto bg-primary/10 rounded-3xl flex items-center justify-center">
          <TbCube className="w-12 h-12 text-primary" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-foreground">404</h1>
          <h2 className="text-xl font-semibold text-foreground">Halaman Tidak Ditemukan</h2>
          <p className="text-muted-foreground">
            Maaf, halaman yang kamu cari tidak ditemukan atau telah dipindahkan.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild variant="outline" className="gap-2">
            <Link to="-1">
              <FiArrowLeft className="w-4 h-4" />
              Kembali
            </Link>
          </Button>
          <Button asChild className="gap-2">
            <Link to="/home">
              <FiHome className="w-4 h-4" />
              Ke Beranda
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
