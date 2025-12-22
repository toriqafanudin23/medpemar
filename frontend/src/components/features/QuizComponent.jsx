import React, { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { FiCheck, FiX, FiChevronRight, FiRefreshCw, FiAward } from 'react-icons/fi';
import { SOUNDS } from '@/constants/urls';
import { toast } from 'sonner';

const QuizComponent = ({ questions, title, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const audioRef = useRef(null);

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const playSound = (isCorrect) => {
    try {
      if (audioRef.current) {
        audioRef.current.src = isCorrect ? SOUNDS.CORRECT : SOUNDS.WRONG;
        audioRef.current.play().catch(() => {});
      }
    } catch (e) {
      // Ignore audio playback errors
    }
  };

  const handleSelectAnswer = (index) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === question.answer;
    setIsAnswered(true);
    playSound(isCorrect);

    if (isCorrect) {
      setScore((prev) => prev + 1);
      toast.success('Jawaban benar!');
    } else {
      toast.error('Jawaban kurang tepat');
    }

    setAnswers((prev) => [...prev, {
      question: currentQuestion,
      selected: selectedAnswer,
      correct: question.answer,
      isCorrect
    }]);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
      if (onComplete) {
        onComplete(score + (selectedAnswer === question.answer ? 1 : 0), questions.length);
      }
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setAnswers([]);
    setShowResults(false);
  };

  // Results screen
  if (showResults) {
    const finalScore = score;
    const percentage = Math.round((finalScore / questions.length) * 100);
    const isPassed = percentage >= 60;

    return (
      <Card className="card-base">
        <CardContent className="p-6 sm:p-8 text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
            <FiAward className={`w-10 h-10 ${isPassed ? 'text-primary' : 'text-muted-foreground'}`} />
          </div>
          
          <h2 className="text-2xl font-bold text-foreground mb-2">
            {isPassed ? 'Selamat! 🎉' : 'Tetap Semangat! 💪'}
          </h2>
          
          <p className="text-muted-foreground mb-6">
            Kamu berhasil menjawab {finalScore} dari {questions.length} soal dengan benar
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">{percentage}%</div>
              <div className="text-sm text-muted-foreground">Nilai</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground">{finalScore}/{questions.length}</div>
              <div className="text-sm text-muted-foreground">Benar</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={handleRestart} variant="outline" className="gap-2">
              <FiRefreshCw className="w-4 h-4" />
              Ulangi Quiz
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="card-base">
      <audio ref={audioRef} preload="none" />
      
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary">Soal {currentQuestion + 1}/{questions.length}</Badge>
          <Badge variant="outline" className="gap-1">
            <FiCheck className="w-3 h-3" /> {score} Benar
          </Badge>
        </div>
        <Progress value={progress} className="h-2" />
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Question */}
        <div className="p-4 bg-muted/50 rounded-xl">
          <p className="text-lg text-foreground font-medium leading-relaxed">
            {question.question}
          </p>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((option, index) => {
            let optionClass = 'quiz-option relative p-4 rounded-xl border-2 cursor-pointer transition-all ';
            
            if (isAnswered) {
              if (index === question.answer) {
                optionClass += 'border-success bg-success/5';
              } else if (index === selectedAnswer) {
                optionClass += 'border-destructive bg-destructive/5';
              } else {
                optionClass += 'border-border opacity-50';
              }
            } else if (selectedAnswer === index) {
              optionClass += 'border-primary bg-primary/5';
            } else {
              optionClass += 'border-border hover:border-primary/50 hover:bg-muted/50';
            }

            return (
              <div
                key={index}
                onClick={() => handleSelectAnswer(index)}
                className={optionClass}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    isAnswered && index === question.answer
                      ? 'bg-success text-success-foreground'
                      : isAnswered && index === selectedAnswer
                      ? 'bg-destructive text-destructive-foreground'
                      : selectedAnswer === index
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="text-foreground flex-1">{option}</span>
                  {isAnswered && index === question.answer && (
                    <FiCheck className="w-5 h-5 text-success" />
                  )}
                  {isAnswered && index === selectedAnswer && index !== question.answer && (
                    <FiX className="w-5 h-5 text-destructive" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Explanation */}
        {isAnswered && question.explanation && (
          <div className="p-4 bg-primary/5 rounded-xl border border-primary/20">
            <p className="text-sm font-medium text-primary mb-1">Penjelasan:</p>
            <p className="text-sm text-foreground">{question.explanation}</p>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex justify-end gap-3 pt-4 border-t border-border">
          {!isAnswered ? (
            <Button
              onClick={handleSubmitAnswer}
              disabled={selectedAnswer === null}
            >
              Jawab
            </Button>
          ) : (
            <Button onClick={handleNextQuestion} className="gap-2">
              {currentQuestion < questions.length - 1 ? 'Soal Berikutnya' : 'Lihat Hasil'}
              <FiChevronRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuizComponent;
