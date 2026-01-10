import React from 'react';

interface QuestionLoaderProps {
  isLoading: boolean;
  error: string | null;
  totalQuestions: number;
}

const QuestionLoader: React.FC<QuestionLoaderProps> = ({
  isLoading,
  error,
  totalQuestions,
}) => {
  if (error) {
    return (
      <div className="error-container">
        <div className="error-icon">⚠️</div>
        <h3>Ошибка загрузки вопросов</h3>
        <p>{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="retry-button"
        >
          Попробовать снова
        </button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Загрузка вопросов...</p>
      </div>
    );
  }

  return (
    <div className="loaded-info">
      <div className="success-icon">✅</div>
      <p>Загружено вопросов: {totalQuestions}</p>
    </div>
  );
};

export default QuestionLoader;