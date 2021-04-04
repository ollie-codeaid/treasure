import React, { useEffect, useState } from 'react';
import {Redirect} from 'react-router-dom';

import {Box, Text} from 'grommet';

import ClueForm from '../components/ClueForm';
import { FADE_IN, FADE_OUT } from '../constants';

interface Clue {
  text: string[],
  hint: string,
  answer: string
}

interface Props {
  clue: Clue
}

const slugifyAnswer = (answer: string): string => {
  return answer.toLowerCase().replaceAll(' ', '-');
}

function CluePage({clue}: Props) {
  const [value, setValue] = useState<string>("");
  const [answerCorrect, setAnswerCorrect] = useState<boolean>(false)
  const [formError, setFormError] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [redirect, setRedirect] = useState<boolean>(false);

  useEffect(() => {
    const slugAnswer = slugifyAnswer(value);

    if (slugAnswer === clue.answer) {
      setAnswerCorrect(true);
      setTimeout(() => setRedirect(true), FADE_OUT);
    } else if (formSubmitted) {
      if (slugAnswer) {
        setFormError(clue.hint);
      } else {
        setFormError("You must submit an answer.")
      }
      
      setFormSubmitted(false);
    }
  }, [clue, value, formSubmitted]);

  const boxFade = answerCorrect ? 'fadeOut' : 'fadeIn';
  const duration = answerCorrect ? FADE_OUT : FADE_IN;

  return redirect ? (
    <Redirect to={`/treasure/${slugifyAnswer(value)}/`}/>
    ) : (
      <Box
        pad='large'
        animation={{ type: boxFade, duration: duration }}
        align='center'
      >
        {clue.text.map((text: string, index: number) => (
          <Text 
            key={`${index}`} 
            textAlign={'center'} 
            margin={'xsmall'}
            size={'large'}
          >
            {text}
          </Text>
        ))}
        <ClueForm
          onSubmit={() => setFormSubmitted(true)}
          setFormValues={setValue}
          formError={formError}
        />
      </Box>
    )
}

export default CluePage;
