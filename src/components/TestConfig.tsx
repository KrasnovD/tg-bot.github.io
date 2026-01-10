import React, { useState } from 'react';

interface TestConfigProps {
    totalQuestions: number;
    onStartTest: (questionCount: number) => void;
}

const TestConfig: React.FC<TestConfigProps> = ({ totalQuestions, onStartTest }) => {
    const [questionCount, setQuestionCount] = useState<number>(Math.min(10, totalQuestions));

    const maxQuestions = Math.min(totalQuestions, 50);

    return (
        <div className="config-panel">
            <h2>Настройки теста</h2>
            <div className="config-group">
                <label htmlFor="questions-count">
                    Количество вопросов в тесте:
                </label>
                <input
                    type="number"
                    id="questions-count"
                    min="1"
                    max={maxQuestions}
                    value={questionCount}
                    onChange={(e) => setQuestionCount(parseInt(e.target.value))}
                />
                <small>
                    Доступно вопросов: {totalQuestions}.
                </small>
            </div>
            <button
                onClick={() => onStartTest(questionCount)}
                className="start-button"
            >
                Начать тест
            </button>
        </div>
    );
};

export default TestConfig;