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
      <Paragraph>Limas adalah bangun ruang yang dibatasi oleh alas berbentuk segi-n (segitiga, segiempat, dll) dan sisi-sisi tegak berbentuk segitiga yang bertemu pada satu titik puncak. Adapun beberapa jenis limas dapat kamu lihat di <MathInline>{`\\text{Objek 4}.`}</MathInline></Paragraph>

      <StaticViewer
        models={MODEL_ARRAYS.LIMAS_TYPES}
        scale={0.8}
        title="Objek 4. Jenis-jenis Limas"
      />
      <ImageDisplay src="limassegiempat.png" scale={0.7} nama="Gambar 14. Limas Segiempat" />
      <ImageDisplay src="limassegitiga.png" scale={0.7} nama="Gambar 15. Limas Segitiga" />
      <ImageDisplay src="limassegilima.png" scale={0.7} nama="Gambar 16. Limas Segilima" />
      <Paragraph>Dari jenis-jenis limas yang ada, tentu yang paling kamu kenal adalah limas segiempat. Karena bentuk ini menyerupai pyramid bangun kuno yang terkenal. Namun, apakah titik puncak limas selalu ada di tengah? Bagaimana dengan bangun yang ada di <MathInline>{`\\text{Gambar 17}`}</MathInline>, apakah tetap disebut sebagai limas? Dimana <MathInline>{`\\angle BAT = \\angle DAT = 90^{\\circ}`}</MathInline>.</Paragraph>
      <ImageDisplay src="limasaneh.png" scale={0.7} nama="Gambar 17. Limas" />


      <Heading3>Volume Limas</Heading3>







      <Viewer3D
        modelPath={MODELS.LIMAS_VOLUME_SCENE}
        urlAR={AR_URLS.LIMAS_VOLUME}
        scale={1.5}
        title="Objek 5. Volume Limas"
      />

      <ImageDisplay src="bukti-v-limas.png" nama="Gambar 12. Limas bagian kubus" width="330px" />

      <Paragraph>
        Dari simulasi di atas terlihat bahwa sebuah kubus dapat dibagi menjadi tiga limas 
        yang berukuran sama. Simulasi ini menunjukkan bahwa volume limas dapat dihitung dengan:
      </Paragraph>

      <HighlightBox variant="formula">
        <p className="text-foreground font-medium mb-2">Rumus Volume Limas:</p>
        <MathBlock>V = ⅓ × Luas alas × tinggi</MathBlock>
        <p className="text-sm text-muted-foreground mt-2">
          Untuk limas segiempat: Luas alas = sisi × sisi (persegi) atau p × l (persegi panjang)
        </p>
      </HighlightBox>

      <Paragraph>
        <strong>Contoh:</strong> Sebuah limas T.ABCD dengan alas berbentuk persegi. 
        Jika panjang rusuk AB dan BC adalah 7 cm, dan tinggi limas OT adalah 9 cm, 
        maka volume limas tersebut adalah...
      </Paragraph>

      <ImageDisplay src="soal-limas-1.png" width="300px" />

      <div className="p-4 bg-muted/50 rounded-xl my-4">
        <p className="text-sm font-medium text-foreground mb-2">Pembahasan:</p>
        <p className="text-sm text-foreground font-mono">
          V = ⅓ × Luas alas × tinggi<br/>
          V = ⅓ × AB × BC × OT<br/>
          V = ⅓ × 7 × 7 × 9 = 147 cm³
        </p>
      </div>

      <Paragraph>Jadi, volume limas tersebut adalah 147 cm³.</Paragraph>

      <Paragraph>
        <strong>Latihan:</strong> Hitunglah volume limas segiempat dengan alas persegi sisi 6 cm dan tinggi 10 cm!
      </Paragraph>
      <InputAnswer answerKey="120" placeholder="Volume limas = ..." />

      <NavFooter prev="/volume/prisma" next="/quiz/volume" nextLabel="Quiz Volume" />
    </div>
  );
};

export default VolumeLimasPage;
