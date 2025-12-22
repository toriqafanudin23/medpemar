import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import QuizComponent from '@/components/features/QuizComponent';
import { QUIZ_DATA } from '@/constants/content';
import { Heading1, Paragraph } from '@/components/ui/Typography';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import NavFooter from '@/components/layout/NavFooter';
import { FiArrowRight } from 'react-icons/fi';
import { TbCube, TbCube3dSphere } from 'react-icons/tb';

const QuizPage = () => {
  const { type } = useParams();
  const { setPageNumber, saveQuizScore } = useApp();

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageNumber(null);
  }, [setPageNumber, type]);

  const handleComplete = (score, total) => {
    if (type) {
      saveQuizScore(type, { score, total, percentage: Math.round((score / total) * 100) });
    }
  };

  // Quiz selection page
  if (!type) {
    return (
      <div className="animate-fade-in">
        <Heading1>Latihan Soal</Heading1>
        <Paragraph>
          Uji pemahamanmu tentang volume dan luas permukaan bangun ruang sisi datar 
          dengan mengerjakan quiz interaktif berikut.
        </Paragraph>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Card className="card-interactive group">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <TbCube className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Quiz Volume</h3>
                  <p className="text-sm text-muted-foreground">5 soal pilihan ganda</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Uji kemampuanmu menghitung volume kubus, balok, prisma, dan limas.
              </p>
              <Button asChild className="w-full gap-2">
                <Link to="/quiz/volume">
                  Mulai Quiz <FiArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="card-interactive group">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                  <TbCube3dSphere className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Quiz Luas Permukaan</h3>
                  <p className="text-sm text-muted-foreground">5 soal pilihan ganda</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Uji kemampuanmu menghitung luas permukaan bangun ruang.
              </p>
              <Button asChild variant="outline" className="w-full gap-2">
                <Link to="/quiz/surface">
                  Mulai Quiz <FiArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <NavFooter prev="/home" />
      </div>
    );
  }

  // Quiz page based on type
  const questions = type === 'volume' ? QUIZ_DATA.volume : QUIZ_DATA.surface;
  const title = type === 'volume' ? 'Quiz Volume Bangun Ruang' : 'Quiz Luas Permukaan';

  return (
    <div className="animate-fade-in max-w-2xl mx-auto">
      <Heading1>{title}</Heading1>
      <Paragraph className="mb-6">
        Jawab semua pertanyaan dengan benar. Selamat mengerjakan!
      </Paragraph>

      <QuizComponent 
        questions={questions} 
        title={title}
        onComplete={handleComplete}
      />

      <div className="mt-6">
        <NavFooter 
          prev="/quiz" 
          prevLabel="Kembali" 
        />
      </div>
    </div>
  );
};

export default QuizPage;
