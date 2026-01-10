import React from 'react';

interface TestControlsProps {
    isFirstQuestion: boolean;
    isLastQuestion: boolean;
    hasAnswer: boolean;
    onPrevious: () => void;
    onNext: () => void;
    onSubmit: () => void;
}

const TestControls: React.FC<TestControlsProps> = ({
                                                       isFirstQuestion,
                                                       isLastQuestion,
                                                       hasAnswer,
                                                       onPrevious,
                                                       onNext,
                                                       onSubmit,
                                                   }) => {
    return (
        <div className="test-controls">
            <button
                onClick={onPrevious}
                disabled={isFirstQuestion}
                className="control-button prev-button"
            >
                ← Предыдущий
            </button>

            {isLastQuestion ? (
                <button
                    onClick={onSubmit}
                    disabled={!hasAnswer}
                    className="control-button submit-button"
                >
                    Завершить тест
                </button>
            ) : (
                <button
                    onClick={onNext}
                    disabled={!hasAnswer}
                    className="control-button next-button"
                >
                    Следующий →
                </button>
            )}
        </div>
    );
};

export default TestControls;