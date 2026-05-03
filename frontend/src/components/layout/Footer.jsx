import React from 'react';
import { Link } from 'react-router-dom';
import { TbCube, TbBrandGithub } from 'react-icons/tb';
import { FiMail, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-card mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4 md:col-span-2 lg:col-span-5 lg:pr-8">
            <Link to="/home" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <TbCube className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground font-display">Bangun Ruang</h3>
                <p className="text-xs text-muted-foreground">Sisi Datar</p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Media pembelajaran interaktif berbasis Simulasi 3D (React.js & Blender) dengan dukungan fitur Augmented Reality untuk memahami konsep bangun ruang sisi datar.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 lg:col-span-3">
            <h4 className="text-sm font-semibold text-foreground">Menu Pembelajaran</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/volume" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Volume Bangun Ruang
              </Link>
              <Link to="/luas-permukaan" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Luas Permukaan
              </Link>
              <Link to="/quiz" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Latihan Soal
              </Link>
              <Link to="/petunjuk" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Petunjuk Penggunaan
              </Link>
            </nav>
          </div>

          {/* Info */}
          <div className="space-y-4 lg:col-span-4">
            <h4 className="text-sm font-semibold text-foreground">Informasi</h4>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Matematika SMP Kelas VIII
              </p>
              <p className="text-sm text-muted-foreground">
                Materi: Bangun Ruang Sisi Datar (Kubus, Balok, Prisma, Limas)
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://github.com/toriqafanudin23/media-pembelajaran-ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                >
                  <TbBrandGithub className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Media Pembelajaran Berbasis Simulasi 3D. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Dibuat dengan <FiHeart className="w-4 h-4 text-destructive" /> untuk Pendidikan Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
