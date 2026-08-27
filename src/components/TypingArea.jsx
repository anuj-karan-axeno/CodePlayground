import React, { useEffect, useState } from 'react';
import { dummy_text } from '../constant/dummy_text';
import TypingText from './TypingText';

const TypingArea = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    const handleKeyPress = (e) => {
      const currentWord = dummy_text[currentWordIndex];

      if (!currentWord) {
        return;
      }

      const words = document.querySelectorAll('.word');
      const word = words[currentWordIndex];

      if (!word) {
        return;
      }

      const letters = word.querySelectorAll('.word__char');
      const currentLetter = letters[currentLetterIndex];

      if (!currentLetter) {
        return;
      }

      if (e.key === 'Backspace') {
        if (currentLetterIndex > 0) {
          setCurrentLetterIndex((prev) => prev - 1);
        } else if (currentWordIndex > 0) {
          const previousWordIndex = currentWordIndex - 1;
          const previousWord = dummy_text[previousWordIndex];

          setCurrentWordIndex(previousWordIndex);
          setCurrentLetterIndex(previousWord.length - 1);
        }

        return;
      }

      const expectedLetter = currentWord[currentLetterIndex];

      if (event.key === expectedLetter) {
        currentLetter.classList.add('word__char--success');
        currentLetter.classList.remove('word__char--error');

        if (currentLetterIndex < currentWord.length - 1) {
          setCurrentLetterIndex((prev) => prev + 1);
        } else if (currentWordIndex < dummy_text.length - 1) {
          setCurrentWordIndex((prev) => prev + 1);
          setCurrentLetterIndex(0);
        }
      } else {
        currentLetter.classList.add('word__char--error');
        currentLetter.classList.remove('word__char--success');
      };

    };

    window.addEventListener('keydown', handleKeyPress);

    const activeLetters = document.querySelectorAll(
      '.word__char--active'
    );

    activeLetters.forEach((letter) => {
      letter.classList.remove('word__char--active');
    });

    const words = document.querySelectorAll('.word');
    const currentWord = words[currentWordIndex];

    if (currentWord) {
      const letters = currentWord.querySelectorAll('.word__char');
      const currentLetter = letters[currentLetterIndex];

      if (currentLetter) {
        currentLetter.classList.add('word__char--active');
      }
    }

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentWordIndex, currentLetterIndex]);
  return (
    <div className="textArea">
      <section className="words__container">
        <TypingText text={dummy_text} />
      </section>
    </div>
  );
};

export default TypingArea;