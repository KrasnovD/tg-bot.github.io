import React from 'react';
import { Question } from '../types/question';

interface QuestionCardProps {
    question: Question;
    questionNumber: number;
    totalQuestions: number;
    selectedAnswer: number | null;
    onAnswerSelect: (answerIndex: number) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
                                                       question,
                                                       questionNumber,
                                                       totalQuestions,
                                                       selectedAnswer,
                                                       onAnswerSelect,
                                                   }) => {
    const optionLetters = ['а', 'б', 'в', 'г', 'д', 'е', 'ж'];

    return (
        <div className="question-card">
            <div className="question-header">
                <div className="question-counter">
                    Вопрос {questionNumber} из {totalQuestions}
                </div>
                <div className="question-number">
                    Вопрос {questionNumber}
                </div>
            </div>

            <div className="question-text">
                {question.question}
            </div>

            <div className="options-container">
                {question.options.map((option, index) => (
                    <div
                        key={index}
                        className={`option ${selectedAnswer === index ? 'selected' : ''}`}
                        onClick={() => onAnswerSelect(index)}
                    >
                        <input
                            type="radio"
                            id={`option-${index}`}
                            name="answer"
                            checked={selectedAnswer === index}
                            onChange={() => onAnswerSelect(index)}
                        />
                        <label htmlFor={`option-${index}`}>
                            <span className="option-letter">{optionLetters[index]})</span>
                            {option}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuestionCard;