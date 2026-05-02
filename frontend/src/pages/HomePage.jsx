import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import MenuCard from '@/components/ui/MenuCard';
import { Button } from '@/components/ui/button';
import { TbCube, TbCube3dSphere, TbLayoutGrid, TbClipboardList } from 'react-icons/tb';
import { FiHelpCircle, FiBookOpen, FiDownload } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { setPageNumber } = useApp();

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageNumber(null);
  }, [setPageNumber]);

  const menuItems = [
    {
      icon: <TbCube3dSphere className="w-10 h-10 text-primary" />,
      title: 'Volume Bangun Ruang',
      description: 'Pelajari cara menghitung volume kubus, balok, prisma, dan limas secara interaktif.',
      to: '/volume'
    },
    {
      icon: <TbLayoutGrid className="w-10 h-10 text-primary" />,
      title: 'Luas Permukaan',
      description: 'Pahami konsep luas permukaan dengan bantuan visualisasi jaring-jaring.',
      to: '/luas-permukaan'
    },
    {
      icon: <TbClipboardList className="w-10 h-10 text-primary" />,
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
          sisi datar dengan pengalaman Simulasi 3D dan Augmented Reality.
        </p>

        <Button 
          onClick={() => {
            window.open('https://hmgdlcwzpmbgvfpaiylz.supabase.co/storage/v1/object/public/images/main.pdf', '_blank');
          }}
          className="mt-4"
        >
          <FiDownload className="w-4 h-4" />
          Unduh Barcode
        </Button>
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
        <div className="p-6 bg-muted/50 rounded-xl border border-border flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <FiBookOpen className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">Matematika SMP</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4 flex-1">
            Materi untuk siswa Kelas VIII sesuai kurikulum nasional.
          </p>
          <Link to="/developer-bio" className="mt-auto">
            <Button variant="outline" className="w-full">
              Tentang Peneliti
            </Button>
          </Link>
        </div>

        <div className="p-6 bg-muted/50 rounded-xl border border-border flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <FiHelpCircle className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground">Butuh Bantuan?</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4 flex-1">
            Kunjungi halaman petunjuk untuk panduan penggunaan aplikasi.
          </p>
          <Link to="/petunjuk" className="mt-auto">
            <Button variant="outline" className="w-full">
              Lihat Petunjuk
            </Button>
          </Link>
        </div>
      </div>

      <div className="mt-10 text-center pb-8">
        <Link to="/">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            Kembali ke Halaman Utama
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
