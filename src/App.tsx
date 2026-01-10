import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import { Question, TestResult, TestStatus } from './types/question';
import TestConfig from './components/TestConfig';
import QuestionCard from './components/QuestionCard';
import TestProgress from './components/TestProgress';
import TestControls from './components/TestControls';
import TestResults from './components/TestResults';
import QuestionLoader from './components/QuestionLoader';
import {sampleQuestions} from "./data/questions";

// Пример вопросов (в реальном приложении загружаются из файла)


function App() {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
    const [testStatus, setTestStatus] = useState<TestStatus>('config');
    const [testResult, setTestResult] = useState<TestResult | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [startTime, setStartTime] = useState<number>(0);

    // Загрузка вопросов (в реальном приложении - из файла)
    useEffect(() => {
        const loadQuestions = async () => {
            setIsLoading(true);
            try {
                // В реальном приложении загружаем из файла:
                // const response = await fetch('/questions.json');
                // const data = await response.json();

                // Для примера используем sampleQuestions
                await new Promise(resolve => setTimeout(resolve, 1000)); // Имитация загрузки
                setQuestions(sampleQuestions);
                setIsLoading(false);
            } catch (err) {
                setError('Ошибка загрузки вопросов. Проверьте файл questions.json');
                setIsLoading(false);
            }
        };

        loadQuestions();
    }, []);

    // Начало теста
    const handleStartTest = useCallback((questionCount: number) => {
        // Выбираем случайные вопросы
        const shuffled = [...questions]
            .sort(() => Math.random() - 0.5)
            .slice(0, questionCount);

        setCurrentQuestions(shuffled);
        setUserAnswers(new Array(shuffled.length).fill(null));
        setCurrentQuestionIndex(0);
        setTestStatus('inProgress');
        setStartTime(Date.now());
    }, [questions]);

    // Выбор ответа
    const handleAnswerSelect = useCallback((answerIndex: number) => {
        const newAnswers = [...userAnswers];
        newAnswers[currentQuestionIndex] = answerIndex;
        setUserAnswers(newAnswers);
    }, [currentQuestionIndex, userAnswers]);

    // Переход к следующему вопросу
    const handleNextQuestion = useCallback(() => {
        if (currentQuestionIndex < currentQuestions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        }
    }, [currentQuestionIndex, currentQuestions.length]);

    // Переход к предыдущему вопросу
    const handlePreviousQuestion = useCallback(() => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
        }
    }, [currentQuestionIndex]);

    // Завершение теста
    const handleSubmitTest = useCallback(() => {
        const timeSpent = Date.now() - startTime;
        let correctAnswers = 0;

        currentQuestions.forEach((question, index) => {
            if (userAnswers[index] === question.correctAnswer) {
                correctAnswers++;
            }
        });

        const score = Math.round((correctAnswers / currentQuestions.length) * 100);

        const result: TestResult = {
            score,
            correctAnswers,
            totalQuestions: currentQuestions.length,
            userAnswers: [...userAnswers],
            timeSpent,
        };

        setTestResult(result);
        setTestStatus('completed');
    }, [currentQuestions, userAnswers, startTime]);

    // Перезапуск теста
    const handleRestartTest = useCallback(() => {
        setUserAnswers(new Array(currentQuestions.length).fill(null));
        setCurrentQuestionIndex(0);
        setTestStatus('inProgress');
        setTestResult(null);
        setStartTime(Date.now());
    }, [currentQuestions.length]);

    // Новый тест
    const handleNewTest = useCallback(() => {
        setCurrentQuestions([]);
        setUserAnswers([]);
        setCurrentQuestionIndex(0);
        setTestStatus('config');
        setTestResult(null);
    }, []);

    // Прогресс теста
    const progress = ((currentQuestionIndex + 1) / (currentQuestions.length || 1)) * 100;

    return (
        <div className="App">
            <header className="App-header">
                <h1>Тестирование по обществознанию</h1>
                <p className="App-description">
                    Ответьте на вопросы. Вопросы загружаются из файла и отображаются в случайном порядке.
                </p>
            </header>

            <main className="App-main">
                <QuestionLoader
                    isLoading={isLoading}
                    error={error}
                    totalQuestions={questions.length}
                />

                {!isLoading && !error && (
                    <>
                        {testStatus === 'config' && (
                            <TestConfig
                                totalQuestions={questions.length}
                                onStartTest={handleStartTest}
                            />
                        )}

                        {testStatus === 'inProgress' && currentQuestions.length > 0 && (
                            <div className="test-container">
                                <TestProgress
                                    currentQuestion={currentQuestionIndex + 1}
                                    totalQuestions={currentQuestions.length}
                                    progress={progress}
                                />

                                <QuestionCard
                                    question={currentQuestions[currentQuestionIndex]}
                                    questionNumber={currentQuestionIndex + 1}
                                    totalQuestions={currentQuestions.length}
                                    selectedAnswer={userAnswers[currentQuestionIndex]}
                                    onAnswerSelect={handleAnswerSelect}
                                />

                                <TestControls
                                    isFirstQuestion={currentQuestionIndex === 0}
                                    isLastQuestion={currentQuestionIndex === currentQuestions.length - 1}
                                    hasAnswer={userAnswers[currentQuestionIndex] !== null}
                                    onPrevious={handlePreviousQuestion}
                                    onNext={handleNextQuestion}
                                    onSubmit={handleSubmitTest}
                                />
                            </div>
                        )}

                        {testStatus === 'completed' && testResult && (
                            <TestResults
                                result={testResult}
                                questions={currentQuestions}
                                userAnswers={userAnswers}
                                onRestart={handleRestartTest}
                                onNewTest={handleNewTest}
                            />
                        )}
                    </>
                )}
            </main>

            <footer className="App-footer">
                <p>Тест создан с использованием React и TypeScript</p>
            </footer>
        </div>
    );
}

export default App;