import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { Heading2, Heading3, Paragraph, HighlightBox, MathBlock, MathInline } from '@/components/ui/Typography';
import ImageDisplay from '@/components/ui/ImageDisplay';
import Viewer3D from '@/components/features/Viewer3D';
import InputAnswer from '@/components/ui/InputAnswer';
import NavFooter from '@/components/layout/NavFooter';
import { AR_URLS, MODELS } from '@/constants/urls';

const LuasLimasPage = () => {
  const { setPageNumber } = useApp();

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageNumber(8);
  }, [setPageNumber]);

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <Heading2>D. Luas Permukaan Limas</Heading2>
      <Heading3>Jaring-jaring Limas</Heading3>
      <Paragraph>Jaring-jaring yang akan dipelajari terakhir kali adalah limas. Jaring-jaring limas tersusun dari alas berbentuk segi-n dan segitiga sejumlah n. Kamu bisa 
        melihat contoh jaring-jaring limas segiempat pada <MathInline>{`\\text{Objek 9}`}</MathInline> berikut.</Paragraph>

      <Viewer3D
        modelPath={MODELS.JARING_LIMAS}
        urlAR={AR_URLS.LIMAS_JARING}
        scale={0.5}
        title="Objek 9. Jaring-jaring Limas Segiempat"
      />
      <ImageDisplay src="jaringlimassegi3.png" />
      <ImageDisplay src="jaringlimassegi4.png" />
      <ImageDisplay src="jaringlimassegi6.png" nama="Gambar 25. Contoh Jaring-jaring Limas" />
      <ImageDisplay src="jaringlimaspuncakt.png" nama="Gambar 26. Jaring-jaring Limas Puncak Tidak di Tengah" />
      <Paragraph>Tentu masih banyak lagi contoh jaring-jaring limas yang lain. Dalam materi ini terbatas pada limas dengan alas berbentuk segi-n beraturan. Sebagai latihan, cobalah kamu buat jaring-jaring limas segiempat selain yang sudah dicontohkan!</Paragraph>
      <Heading3>Luas Permukaan Limas</Heading3>
      <ImageDisplay src="jaringlimassegi4.png" />
      <Paragraph>Luas permukaan limas dapat dilihat dari jaring-jaringnya. Pada limas segi-n beraturan luas permukaannya dapat dicari dengan</Paragraph>
      <MathBlock>{`L=\\text{Luas Alas}+n \\times \\text{Luas Sisi Tegak}`}</MathBlock>
      <Paragraph>Dalam hal ini sisi tegak limas berbentuk segitiga.</Paragraph>
      <Heading3>Contoh:</Heading3>
      <Paragraph>Diketahui sebuah limas <MathInline>{`\\text{T.ABCD}`}</MathInline> dengan alas berbentuk persegi. Titik <MathInline>{`\\text{P}`}</MathInline> berada di tengah rusuk <MathInline>{`\\text{AB}`}</MathInline> dan panjang <MathInline>{`\\text{TP}=\\text{5 cm}`}</MathInline>. Jika panjang rusuk <MathInline>{`\\text{CD}=\\text{4 cm}`}</MathInline>, maka luas permukaan limas tersebut adalah ...</Paragraph>
      <ImageDisplay src="contohsoallimas.png" />
      <MathBlock>{`L= \\text{Luas Alas} + 4 \\times \\text{Luas Sisi Tegak} \\\\ L=4 \\times 4 + 4 \\times \\frac{1}{2} \\times 4 \\times 5 \\\\ L=16+40=56`}</MathBlock>
      <Paragraph>Jadi luas permukaan dari limas diatas adalah <MathInline>{`\\text{56 cm}^2`}</MathInline>.</Paragraph>
      <Heading3>Latihan Soal:</Heading3>
      <Paragraph>Diketahui sebuah limas <MathInline>{`\\text{T.ABCD}`}</MathInline> dengan alas berbentuk persegi. Jika panjang rusuk alasnya <MathInline>{`\\text{12 cm}`}</MathInline> dan tinggi limas <MathInline>{`\\text{8 cm}`}</MathInline>, maka tentukanlah luas permukaan limas tersebut!</Paragraph>
      <ImageDisplay src="soallatihanlimas.png" />
      <InputAnswer answerKey="384" placeholder="Luas permukaan = ..." />
      <NavFooter prev="/luas-permukaan/prisma" next="/quiz/surface" nextLabel="Quiz Luas Permukaan" />
    </div>
  );
};

export default LuasLimasPage;
