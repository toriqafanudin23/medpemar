import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { Heading2, Paragraph, HighlightBox, MathBlock } from '@/components/ui/Typography';
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

      <Paragraph>
        Sebelumnya, kita telah mempelajari cara mencari volume bangun ruang yang memiliki 
        bentuk alas dan tutup yang sama, seperti kubus, balok, dan prisma. 
        Sekarang, bagaimana jika bentuk bangun ruangnya seperti berikut?
      </Paragraph>

      <StaticViewer
        models={MODEL_ARRAYS.LIMAS_TYPES}
        scale={0.8}
        title="Objek 4. Jenis-jenis Limas"
      />

      <Paragraph>
        Bangun di atas disebut limas. Limas adalah bangun ruang yang memiliki alas 
        berbentuk segi banyak dan satu titik puncak yang tidak terletak pada bidang alas.
      </Paragraph>

      <HighlightBox variant="info">
        <p className="text-foreground font-medium mb-2">Sifat Limas:</p>
        <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
          <li>Memiliki satu bidang alas berbentuk segi-n</li>
          <li>Sisi tegak berbentuk segitiga</li>
          <li>Memiliki satu titik puncak</li>
          <li>Limas dinamai sesuai bentuk alasnya</li>
        </ul>
      </HighlightBox>

      <Paragraph>
        Untuk memahami cara menghitung volume limas, perhatikan simulasi berikut:
      </Paragraph>

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
