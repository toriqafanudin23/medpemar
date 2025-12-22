import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { Heading1, Heading2, Paragraph, HighlightBox } from '@/components/ui/Typography';
import { Card, CardContent } from '@/components/ui/card';
import NavFooter from '@/components/layout/NavFooter';
import { FiSmartphone, FiMonitor, FiRotateCw, FiMaximize, FiZoomIn, FiCamera } from 'react-icons/fi';
import { TbAugmentedReality, TbCube, Tb3DCubeSphere } from 'react-icons/tb';

const GuidePage = () => {
  const { setPageNumber } = useApp();

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageNumber(null);
  }, [setPageNumber]);

  const features = [
    {
      icon: <TbCube className="w-6 h-6" />,
      title: 'Mode 3D',
      description: 'Lihat model 3D bangun ruang yang dapat diputar, diperbesar, dan diperkecil.'
    },
    {
      icon: <TbAugmentedReality className="w-6 h-6" />,
      title: 'Mode AR',
      description: 'Lihat bangun ruang di dunia nyata melalui kamera smartphone.'
    },
    {
      icon: <Tb3DCubeSphere className="w-6 h-6" />,
      title: 'Animasi',
      description: 'Putar animasi untuk melihat pembentukan volume dan jaring-jaring.'
    }
  ];

  const controls = [
    { icon: <FiRotateCw />, text: 'Geser untuk memutar model 3D' },
    { icon: <FiZoomIn />, text: 'Cubit (pinch) untuk memperbesar/memperkecil' },
    { icon: <FiMaximize />, text: 'Klik tombol fullscreen untuk layar penuh' },
    { icon: <FiCamera />, text: 'Izinkan akses kamera untuk mode AR' },
  ];

  return (
    <div className="animate-fade-in">
      <Heading1>Petunjuk Penggunaan</Heading1>
      
      <Paragraph>
        Selamat datang di Media Pembelajaran Bangun Ruang Sisi Datar berbasis Augmented Reality. 
        Berikut adalah panduan untuk menggunakan aplikasi ini.
      </Paragraph>

      <Heading2>Fitur Utama</Heading2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {features.map((feature, index) => (
          <Card key={index} className="card-base">
            <CardContent className="p-5 text-center">
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-3">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Heading2>Cara Menggunakan</Heading2>

      <HighlightBox variant="info">
        <div className="flex items-start gap-3 mb-4">
          <FiMonitor className="w-5 h-5 text-primary mt-0.5" />
          <div>
            <h4 className="font-medium text-foreground mb-1">Mode 3D (Desktop & Mobile)</h4>
            <p className="text-sm text-muted-foreground">
              Model 3D dapat dilihat langsung di browser tanpa aplikasi tambahan.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <FiSmartphone className="w-5 h-5 text-primary mt-0.5" />
          <div>
            <h4 className="font-medium text-foreground mb-1">Mode AR (Mobile)</h4>
            <p className="text-sm text-muted-foreground">
              Untuk pengalaman AR terbaik, gunakan smartphone dengan browser Chrome atau Safari.
            </p>
          </div>
        </div>
      </HighlightBox>

      <Heading2>Kontrol Viewer 3D</Heading2>

      <div className="space-y-3 mb-8">
        {controls.map((control, index) => (
          <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
            <div className="w-10 h-10 bg-card rounded-lg flex items-center justify-center text-primary border border-border">
              {control.icon}
            </div>
            <span className="text-sm text-foreground">{control.text}</span>
          </div>
        ))}
      </div>

      <Heading2>Tips Penggunaan AR</Heading2>

      <div className="space-y-2">
        <Paragraph>1. Pastikan ruangan memiliki pencahayaan yang cukup</Paragraph>
        <Paragraph>2. Arahkan kamera ke permukaan datar seperti meja atau lantai</Paragraph>
        <Paragraph>3. Gerakkan kamera perlahan agar objek dapat terdeteksi</Paragraph>
        <Paragraph>4. Jaga jarak yang cukup antara kamera dengan objek AR</Paragraph>
      </div>

      <NavFooter prev="/home" />
    </div>
  );
};

export default GuidePage;
