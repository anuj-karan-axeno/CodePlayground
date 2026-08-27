import React from 'react'
import Letter from './Letter';

const TypingText = ({ text }) => {
    const currentWordIndex = 0;
    const currentLetterIndex = 0;
    

    const renderLetter = (char, wordIndex, charIndex) => {
        const isActive =
            wordIndex === currentWordIndex &&
            charIndex === currentLetterIndex;

        const className = isActive
            ? 'word__char word__char--active'
            : 'word__char';

        return (
            <Letter
                key={charIndex}
                char={char}
                className={className}
            />
        );
    };

    return (
        <>
            {text.map((word, wordIndex) => (
                <div className="word" key={wordIndex}>
                    {word.map((char, charIndex) =>
                        renderLetter(char, wordIndex, charIndex)
                    )}
                </div>
            ))}
        </>
    );
};

export default TypingText;

