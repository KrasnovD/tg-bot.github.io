import React from 'react';

interface TestProgressProps {
    currentQuestion: number;
    totalQuestions: number;
    progress: number;
}

const TestProgress: React.FC<TestProgressProps> = ({
                                                       currentQuestion,
                                                       totalQuestions,
                                                       progress,
                                                   }) => {
    return (
        <div className="test-progress">
            <div className="progress-bar">
                <div
                    className="progress-fill"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <div className="progress-text">
                Прогресс: {currentQuestion} / {totalQuestions} ({Math.round(progress)}%)
            </div>
        </div>
    );
};

export default TestProgress;