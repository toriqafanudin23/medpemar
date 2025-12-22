import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import MenuCard from '@/components/ui/MenuCard';
import { URL_ICON } from '@/constants/urls';
import { TbCube, TbCube3dSphere, TbBook } from 'react-icons/tb';
import { FiHelpCircle, FiBookOpen } from 'react-icons/fi';

const HomePage = () => {
  const { setPageNumber } = useApp();

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageNumber(null);
  }, [setPageNumber]);

  const menuItems = [
    {
      icon: URL_ICON + 'icon-volume.png',
      title: 'Volume Bangun Ruang',
      description: 'Pelajari cara menghitung volume kubus, balok, prisma, dan limas secara interaktif.',
      to: '/volume'
    },
    {
      icon: URL_ICON + 'icon-jaring.png',
      title: 'Luas Permukaan',
      description: 'Pahami konsep luas permukaan dengan bantuan visualisasi jaring-jaring.',
      to: '/luas-permukaan'
    },
    {
      icon: URL_ICON + 'icon-tanya.png',
      title: 'Latihan Soal',
      description: 'Uji pemahamanmu melalui kuis interaktif tentang volume dan luas permukaan.',
      to: '/quiz'
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <header className="mb-10 text-center">
        <div className="inline-block mb-4">
          <div className="w-20 h-20 mx-auto bg-primary rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-6 transition-transform duration-300">
            <TbCube className="w-12 h-12 text-primary-foreground" />
          </div>
        </div>
        <h1 className="heading-1 mb-4">
          Materi Bangun Ruang
        </h1>
        <p className="body-text max-w-2xl mx-auto">
          Pilih topik pembelajaran di bawah ini untuk mulai belajar bangun ruang 
          sisi datar dengan pengalaman Augmented Reality.
        </p>
      </header>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {menuItems.map((item, index) => (
          <div 
            key={item.to}
            className="animate-slide-up"
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
          >
            <MenuCard
              icon={item.icon}
              title={item.title}
              description={item.description}
              to={item.to}
            />
          </div>
        ))}
      </div>

      {/* Info Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
        <div className="p-6 bg-muted/50 rounded-xl border border-border">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <FiBookOpen className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">Matematika SMP</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Materi untuk siswa Kelas VIII sesuai kurikulum nasional.
          </p>
        </div>

        <div className="p-6 bg-muted/50 rounded-xl border border-border">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <FiHelpCircle className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground">Butuh Bantuan?</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Kunjungi halaman <a href="/petunjuk" className="text-primary hover:underline">Petunjuk</a> untuk panduan penggunaan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
