import React, { useState, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FiCheck, FiX, FiSend } from 'react-icons/fi';
import { SOUNDS } from '@/constants/urls';
import { toast } from 'sonner';

const InputAnswer = ({ answerKey, placeholder = 'Masukkan jawaban...', satuan = '', explanation }) => {
  const [value, setValue] = useState('');
  const [status, setStatus] = useState(null); // null, 'correct', 'wrong'
  const [isChecking, setIsChecking] = useState(false);
  const audioRef = useRef(null);

  const playSound = (isCorrect) => {
    try {
      if (audioRef.current) {
        audioRef.current.src = isCorrect ? SOUNDS.CORRECT : SOUNDS.WRONG;
        audioRef.current.play().catch(() => {});
      }
    } catch (e) {
      // Ignore audio errors
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim() || isChecking) return;

    setIsChecking(true);
    
    // Normalize answer for comparison
    const normalizedValue = value.trim().toLowerCase().replace(/\s/g, '');
    const normalizedAnswer = String(answerKey).toLowerCase().replace(/\s/g, '');

    setTimeout(() => {
      const isCorrect = normalizedValue === normalizedAnswer;
      setStatus(isCorrect ? 'correct' : 'wrong');
      playSound(isCorrect);

      if (isCorrect) {
        toast.success('Jawaban benar! 🎉', {
          description: 'Kerja bagus, lanjutkan belajarnya!'
        });
      } else {
        toast.error('Jawaban kurang tepat', {
          description: 'Coba lagi ya!'
        });
      }

      setIsChecking(false);
    }, 300);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    if (status) setStatus(null);
  };

  const getInputClasses = () => {
    const base = 'pr-20 transition-colors';
    if (status === 'correct') return `${base} border-success bg-success/5 text-success`;
    if (status === 'wrong') return `${base} border-destructive bg-destructive/5 text-destructive`;
    return base;
  };

  return (
    <div className="my-4 md:max-w-md">
      <form onSubmit={handleSubmit}>
        <audio ref={audioRef} preload="none" />
        <div className="relative flex items-center gap-2">
          <div className="relative flex-1">
            <Input
              type="text"
              value={value}
              onChange={handleChange}
              placeholder={placeholder}
              className={`${getInputClasses()} h-12 text-base md:text-sm`}
              disabled={status === 'correct'}
            />
            {satuan && (
              <span className="absolute right-12 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                {satuan}
              </span>
            )}
          </div>
          <Button
            type="submit"
            disabled={!value.trim() || isChecking || status === 'correct'}
            className="shrink-0 h-12 w-12"
            size="icon"
          >
            {status === 'correct' ? (
              <FiCheck className="w-5 h-5" />
            ) : status === 'wrong' ? (
              <FiX className="w-5 h-5" />
            ) : (
              <FiSend className="w-5 h-5" />
            )}
          </Button>
        </div>
      </form>
      {status === 'correct' && (
        <div className="mt-2 animate-fade-in">
          <p className="text-sm text-success font-medium flex items-center gap-1 mb-2">
            <FiCheck className="w-4 h-4" /> Benar!
          </p>
          {explanation && (
            <div className="p-4 bg-success/10 rounded-xl border border-success/20 text-sm overflow-x-auto">
              <div className="font-semibold text-success mb-2">Pembahasan:</div>
              <div className="text-foreground">{explanation}</div>
            </div>
          )}
        </div>
      )}
      {status === 'wrong' && (
        <p className="mt-2 text-sm text-destructive font-medium flex items-center gap-1">
          <FiX className="w-4 h-4" /> Coba lagi!
        </p>
      )}
    </div>
  );
};

export default InputAnswer;
