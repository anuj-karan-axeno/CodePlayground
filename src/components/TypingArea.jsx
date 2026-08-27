import React from 'react'
import Letter from './Letter'
import { dummy_text } from '../constant/dummy_text'
import TypingText from './TypingText';

const TypingArea = () => {


  const current_word_index = 8;
  const current_letter_index = 2;






  return (
    <>
      <div className="textArea">
        <section className='words__container'>

          <TypingText text={dummy_text} />
        </section>

      </div>
    </>
  )
}

export default TypingArea;