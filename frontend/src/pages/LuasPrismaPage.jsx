import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { Heading2, Heading3, Paragraph, HighlightBox, MathBlock, MathInline } from '@/components/ui/Typography';
import Viewer3D from '@/components/features/Viewer3D';
import ImageDisplay from '@/components/ui/ImageDisplay';
import InputAnswer from '@/components/ui/InputAnswer';
import NavFooter from '@/components/layout/NavFooter';
import { AR_URLS, MODELS } from '@/constants/urls';

const LuasPrismaPage = () => {
  const { setPageNumber } = useApp();

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageNumber(7);
  }, [setPageNumber]);

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <Heading2>C. Luas Permukaan Prisma</Heading2>
      <Heading3>Jaring-jaring Prisma</Heading3>

      <Paragraph>Variasi jaring-jaring prisma tentu lebih banyak dari pada kubus ataupun balok. Hal ini dikarenakan 
        bentuk alas prisma yang bermacam-macam, mulai dari segi-n beraturan, trapesium, ataupun segi-n tidak beraturan. Berikut contoh 
        jaring-jaring prisma segitiga tersaji pada <MathInline>{`\\text{Objek 8}`}</MathInline>.</Paragraph>

      <Viewer3D
        modelPath={MODELS.JARING_PRISMA}
        urlAR={AR_URLS.PRISMA_JARING}
        scale={0.5}
        title="Objek 8. Jaring-jaring Prisma Segitiga"
      />
      <ImageDisplay src="jaringprismasegi3ke2.png" />
      <ImageDisplay src="jaringprismasegi3.png" caption="\text{Gambar 22. Contoh Jaring-jaring Prisma Segitiga}" />
      <ImageDisplay src="jaringprismasegi5.png" caption="\text{Gambar 23. Contoh Jaring-jaring Prisma Segilima}" />


      <Paragraph>Tentu semakin rumit bentuk alas prisma, semakin rumit juga jaring-jaring yang harus dibuat. Untuk latihan, buatlah 
        jaring-jaring prisma segitiga, yang berbeda dari contoh yang sudah ada!</Paragraph>
      <Heading3>Luas Permukaan Prisma</Heading3>
      <Paragraph>Untuk memahami cara mencari luas permukaan prisma, perhatikanlah contoh jaring-jaring prisma berikut!</Paragraph>
      <ImageDisplay src="ilustrasiluasprisma.png" caption="\text{Gambar 24. Ilustrasi Luas Permukaan Prisma}" />
      <Paragraph>Dari <MathInline>{`\\text{Gambar 24}`}</MathInline> terlihat bahwa alas dan tutup prisma berbentuk sama, dan juga panjang rusuk <MathInline>{`a+b+c`}</MathInline> dapat disebut sebagai keliling alas. 
        Sehingga luas permukaan prisma dapat dirumuskan sebagai</Paragraph>
      <MathBlock>{`L=2 \\times \\text{Luas Alas} + \\text{Keliling Alas} \\times t`}</MathBlock>
      <Paragraph>Rumus diatas berlaku untuk prisma dengan bentuk alas apapun.</Paragraph>
      <Heading3>Contoh:</Heading3>
      <Paragraph>Sebuah prisma <MathInline>{`\\text{ABC.DEF}`}</MathInline> mempunyai alas berbentuk segitiga siku-siku. Diketahui panjang <MathInline>{`\\text{AB} =\\text{3 cm dan BC}=\\text{4 cm}`}</MathInline>. Jika tinggi prisma adalah <MathInline>{`\\text{7 cm dan }\\angle \\text{ABC}=90^{\\circ}`}</MathInline>, maka tentukanlah luas permukaan prisma tersebut!</Paragraph>
      <Paragraph>Pembahasan:</Paragraph>
      <ImageDisplay src="alasprismasegi3.png" />
      <MathBlock>{`\\text{AC}^2 = \\text{AB}^2 + \\text{BC}^2 \\\\ \\text{AC}^2 = 3^2 + 4^2 \\\\ \\text{AC}^2 = 9 + 16 = 25 \\\\ \\text{AC}=\\sqrt{25} = 5 \\\\ \\text{Keliling Alas}=\\text{AB}+\\text{BC}+\\text{AC} \\\\ \\text{Keliling Alas}=3+4+5=12\\\\L=2 \\times \\text{Luas Alas} + \\text{Keliling Alas} \\times t \\\\ L=2 \\times \\frac{1}{2} \\times 3 \\times 4 + 12 \\times 7 \\\\ L=12+12 \\times 7 =96`}</MathBlock>
      <Paragraph>Jadi luas permukaan prisma tersebut adalah <MathInline>{`\\text{96 cm}^2`}</MathInline>.</Paragraph>
      <Heading3>Latihan:</Heading3>
      <Paragraph>Sebuah prisma <MathInline>{`\\text{ABCD.EFGH}`}</MathInline> memiliki alas berbentuk trapesium sama kaki. Diketahui panjang <MathInline>{`\\text{AB}=\\text{13 cm dan CD}=\\text{5 cm}`}</MathInline>, serta 
        keliling alasnya adalah <MathInline>{`\\text{35 cm}`}</MathInline>. Jika tinggi trapesium <MathInline>{`\\text{7,5 cm}`}</MathInline> dan tinggi prisma <MathInline>{`\\text{10 cm}`}</MathInline>, maka tentukanlah luas permukaan prisma tersebut!</Paragraph>
      <InputAnswer answerKey="485" placeholder="Luas permukaan = ..." />
      
      <NavFooter prev="/luas-permukaan/balok" next="/luas-permukaan/limas" />
    </div>
  );
};

export default LuasPrismaPage;
