import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { SHAPES } from '@/constants/content';
import ShapeCard from '@/components/ui/ShapeCard';
import { Heading1, Paragraph } from '@/components/ui/Typography';
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
      <Heading1>Luas Permukaan Bangun Ruang Sisi Datar</Heading1>
      
      <Paragraph>
        Luas permukaan adalah total luas seluruh sisi yang membatasi suatu bangun ruang. 
        Untuk memahami konsep ini, kita perlu mengetahui jaring-jaring dari setiap bangun ruang.
      </Paragraph>

      <Paragraph>
        Jaring-jaring adalah bentuk dua dimensi yang dapat dilipat menjadi bangun ruang. 
        Dengan memahami jaring-jaring, kita dapat menghitung luas permukaan dengan menjumlahkan 
        luas seluruh sisinya.
      </Paragraph>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
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
