import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { SHAPES } from '@/constants/content';
import ShapeCard from '@/components/ui/ShapeCard';
import { Heading1, Heading2, Paragraph } from '@/components/ui/Typography';
import NavFooter from '@/components/layout/NavFooter';
import { TbCube } from 'react-icons/tb';
import { FiBox, FiTriangle, FiSquare } from 'react-icons/fi';

const LuasPermukaanPage = () => {
  const { setPageNumber } = useApp();

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageNumber(null);
  }, [setPageNumber]);

  const shapeIcons = {
    kubus: <TbCube className="w-6 h-6 text-primary" />,
    balok: <FiBox className="w-6 h-6 text-primary" />,
    prisma: <FiTriangle className="w-6 h-6 text-primary" />,
    limas: <FiSquare className="w-6 h-6 text-primary" />,
  };

  return (
    <div className="animate-fade-in">
      <Heading1 className="text-center">Luas Permukaan Bangun Ruang</Heading1>
      
      <div className="bg-primary/5 border border-primary/20 p-5 rounded-xl mb-8 mt-6">
        <h3 className="font-semibold text-primary mb-2 text-lg">Definisi Luas Permukaan</h3>
        <Paragraph className="!mb-0 text-foreground">
          <b>Luas Permukaan</b> adalah total keseluruhan luas dari sisi-sisi atau bidang luar yang menyelimuti suatu bangun ruang. Luas permukaan dapat dicari dengan menjumlahkan luas seluruh bangun datar yang membentuk jaring-jaring bangun ruang tersebut.
        </Paragraph>
      </div>

      <Heading2>Pilih Materi Luas Permukaan</Heading2>
      <Paragraph className="text-muted-foreground mb-6">
        Pilih salah satu bangun ruang di bawah ini untuk mulai mempelajari materi dan rumusnya!
      </Paragraph>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {SHAPES.map((shape, index) => (
          <div 
            key={shape.id}
            className="animate-slide-up"
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
          >
            <ShapeCard
              shape={shape}
              to={`/luas-permukaan/${shape.id}`}
              icon={shapeIcons[shape.id]}
            />
          </div>
        ))}
      </div>

      <NavFooter prev="/home" />
    </div>
  );
};

export default LuasPermukaanPage;
