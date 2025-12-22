import React, { createContext, useContext, useState, useCallback } from 'react';

const AppContext = createContext(null);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  // Current page/section tracking
  const [currentPage, setCurrentPage] = useState(null);
  const [pageNumber, setPageNumber] = useState(null);

  // Quiz progress
  const [quizScores, setQuizScores] = useState({
    volume: null,
    surface: null
  });

  // Learning progress (completed sections)
  const [completedSections, setCompletedSections] = useState([]);

  // Theme mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(prev => {
      const newValue = !prev;
      if (newValue) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('darkMode', newValue.toString());
      return newValue;
    });
  }, []);

  // Initialize dark mode from localStorage
  React.useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved === 'true') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Mark section as completed
  const completeSection = useCallback((sectionId) => {
    setCompletedSections(prev => {
      if (!prev.includes(sectionId)) {
        const updated = [...prev, sectionId];
        localStorage.setItem('completedSections', JSON.stringify(updated));
        return updated;
      }
      return prev;
    });
  }, []);

  // Save quiz score
  const saveQuizScore = useCallback((type, score) => {
    setQuizScores(prev => {
      const updated = { ...prev, [type]: score };
      localStorage.setItem('quizScores', JSON.stringify(updated));
      return updated;
    });
  }, []);

  // Load progress from localStorage
  React.useEffect(() => {
    const savedSections = localStorage.getItem('completedSections');
    const savedScores = localStorage.getItem('quizScores');
    
    if (savedSections) {
      setCompletedSections(JSON.parse(savedSections));
    }
    if (savedScores) {
      setQuizScores(JSON.parse(savedScores));
    }
  }, []);

  // Reset progress
  const resetProgress = useCallback(() => {
    setCompletedSections([]);
    setQuizScores({ volume: null, surface: null });
    localStorage.removeItem('completedSections');
    localStorage.removeItem('quizScores');
  }, []);

  const value = {
    currentPage,
    setCurrentPage,
    pageNumber,
    setPageNumber,
    quizScores,
    saveQuizScore,
    completedSections,
    completeSection,
    isDarkMode,
    toggleDarkMode,
    resetProgress
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
