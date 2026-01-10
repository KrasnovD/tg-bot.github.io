import React from 'react';
import { Question, TestResult } from '../types/question';
// @ts-ignore
import badVideo from '../assets/videos/bad.mp4';
// @ts-ignore
import goodVideo from '../assets/videos/good.mp4';

interface TestResultsProps {
    result: TestResult;
    questions: Question[];
    userAnswers: (number | null)[];
    onRestart: () => void;
    onNewTest: () => void;
}

const TestResults: React.FC<TestResultsProps> = ({
                                                     result,
                                                     questions,
                                                     userAnswers,
                                                     onRestart,
                                                     onNewTest,
                                                 }) => {
    const optionLetters = ['а', 'б', 'в', 'г'];

    return (
        <div className="test-results">
            <h2 className="results-title">Результаты теста</h2>

            <div className="score-display">
                <div className="score-percentage">{result.score}%</div>
                <div className="score-details">
                    Правильных ответов: {result.correctAnswers} из {result.totalQuestions}
                </div>
            </div>

            <div className="results-stats">
                <div className="stat-item">
                    <div className="stat-value correct-stat">{result.correctAnswers}</div>
                    <div className="stat-label">Правильно</div>
                </div>
                <div className="stat-item">
                    <div className="stat-value incorrect-stat">
                        {result.totalQuestions - result.correctAnswers}
                    </div>
                    <div className="stat-label">Неправильно</div>
                </div>
                <div className="stat-item">
                    <div className="stat-value time-stat">
                        {Math.round(result.timeSpent / 1000 / 60)} мин
                    </div>
                    <div className="stat-label">Время</div>
                </div>
            </div>

            <div>{
                result.score > 99 ? <video width="100%" height="240" autoPlay loop>
                    <source src={goodVideo} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video> : <video width="100%" height="240" autoPlay loop>
                    <source src={badVideo} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            }
            </div>

            {result.score !== 100 && <div className="results-review">
                <h3>Разбор ответов:</h3>
                {questions.map((question, index) => {
                    const userAnswer = userAnswers[index];
                    const isCorrect = userAnswer === question.correctAnswer;
                    const isSkipped = userAnswer === null;

                    if (isCorrect && !isSkipped) return null;

                    return (
                        <div
                            key={index}
                            className={`review-item ${isCorrect ? 'correct' : 'incorrect'}`}
                        >
                            <div className="review-question">
                                {index + 1}. {question.question}
                            </div>
                            <div className="review-user-answer">
                                <strong>Ваш ответ:</strong>{' '}
                                {isSkipped
                                    ? 'Нет ответа'
                                    : `${optionLetters[userAnswer!]}) ${question.options[userAnswer!]}`
                                }
                            </div>
                            {!isCorrect && !isSkipped && (
                                <div className="review-correct-answer">
                                    <strong>Правильный ответ:</strong>{' '}
                                    {`${optionLetters[question.correctAnswer]}) ${question.options[question.correctAnswer]}`}
                                </div>
                            )}
                            {question.explanation && (
                                <div className="review-explanation">
                                    <strong>Объяснение:</strong> {question.explanation}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            }

            <div className="results-controls">
                <button onClick={onRestart} className="control-button restart-button">
                    Пройти тест снова
                </button>
                <button onClick={onNewTest} className="control-button newtest-button">
                    Новый тест
                </button>
            </div>
        </div>
    );
};

export default TestResults;