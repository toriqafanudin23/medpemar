import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { Heading2, Heading3, Paragraph, HighlightBox, MathBlock, MathInline } from '@/components/ui/Typography';
import Viewer3D from '@/components/features/Viewer3D';
import StaticViewer from '@/components/features/StaticViewer';
import ImageDisplay from '@/components/ui/ImageDisplay';
import InputAnswer from '@/components/ui/InputAnswer';
import NavFooter from '@/components/layout/NavFooter';
import { AR_URLS, MODELS, MODEL_ARRAYS } from '@/constants/urls';

const VolumeLimasPage = () => {
  const { setPageNumber } = useApp();

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageNumber(4);
  }, [setPageNumber]);

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <Heading2>D. Volume Limas</Heading2>
      <ImageDisplay src="bangunanlimas.webp" scale={1} nama="Gambar 13. Bangunan Berbentuk Limas" />
      <Heading3>Jenis-jenis Limas</Heading3>
      <Paragraph>Limas adalah bangun ruang yang dibatasi oleh alas berbentuk segi-n (segitiga, segiempat, dll) dan sisi-sisi tegak berbentuk segitiga yang bertemu pada satu titik puncak. Adapun beberapa jenis limas dapat kamu lihat pada <MathInline>{`\\text{Objek 4}`}</MathInline> berikut.</Paragraph>

      <StaticViewer
        models={MODEL_ARRAYS.LIMAS_TYPES}
        scale={0.6}
        title="Objek 4. Jenis-jenis Limas"
      />
      <ImageDisplay src="limassegiempat.png" scale={1} nama="Gambar 14. Limas Segiempat" />
      <ImageDisplay src="limassegitiga.png" scale={1} nama="Gambar 15. Limas Segitiga" />
      <ImageDisplay src="limassegilima.png" scale={1} nama="Gambar 16. Limas Segilima" />
      <Paragraph>Dari jenis-jenis limas yang ada diatas, tentu memiliki kesamaan, yaitu titik puncaknya berada di tengah. Namun, apakah titik puncak limas selalu berada di tengah? Bagaimana dengan bangun yang ada di <MathInline>{`\\text{Gambar 17}`}</MathInline>, apakah tetap disebut sebagai limas? Dimana <MathInline>{`\\angle BAT = \\angle DAT = 90^{\\circ}`}</MathInline>.</Paragraph>
      <ImageDisplay src="limasaneh.png" scale={1} nama="Gambar 17. Limas" />


      <Heading3>Simulasi Volume Limas</Heading3>
      <Paragraph>Volume limas tentu berbeda dengan volume bangun yang telah kamu pelajari sebelumnya. Hal ini dikarenakan bangun yang telah kamu pelajari sebelumnya, seperti kubus, balok, dan prisma memiliki alas dan tutup yang sama. Sedangkan limas sendiri, hanya memiliki alas dan titik puncak. Untuk memahami volume limas, kamu perlu melihat simulasi pada <MathInline>{`\\text{Objek 5}`}</MathInline> berikut.</Paragraph>

      <Viewer3D
        modelPath={MODELS.LIMAS_VOLUME_SCENE}
        urlAR={AR_URLS.LIMAS_VOLUME}
        scale={1.5}
        title="Objek 5. Volume Limas"
      />

      <Paragraph>Pada simulasi <MathInline>{`\\text{Objek 5}`}</MathInline> terlihat bahwa sebuah kubus dapat dibagi menjadi tiga buah limas yang sama. Sehingga dapat disimpulkan bahwa volume limas yang memiliki luas alas dan tinggi yang sama dengan kubus adalah satu per tiga dari volume kubus.</Paragraph>
      <MathBlock>{`V = \\frac{1}{3} \\times \\text{Volume Kubus}`}</MathBlock>
      <Paragraph>Sehingga volume limas secara umum dapat dituliskan sebagai</Paragraph>
      <MathBlock>{`V = \\frac{1}{3} \\times \\text{Luas Alas} \\times \\text{Tinggi.}`}</MathBlock>
      <Heading3>Contoh Soal:</Heading3>
      <Paragraph>Diketahui sebuah limas <MathInline>{`T.ABCD`}</MathInline> dengan alas berbentuk persegi. Panjang <MathInline>{`AB=BC= \\text{5 cm}`}</MathInline>. Titik <MathInline>{`O`}</MathInline> adalah perpotongan diagonal <MathInline>{`AC \\text{ dengan } BD`}</MathInline>. Jika jarak titik <MathInline>{`O`}</MathInline> ke titik <MathInline>{`T`}</MathInline> adalah 6 cm, maka volume limas tersebut adalah <MathInline>{`\\dots`}</MathInline></Paragraph>
      <ImageDisplay src="limasabcdt.png" scale={1} />



      <NavFooter prev="/volume/prisma" next="/quiz/volume" nextLabel="Quiz Volume" />
    </div>
  );
};

export default VolumeLimasPage;
