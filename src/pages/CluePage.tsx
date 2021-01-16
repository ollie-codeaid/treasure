import React, { useEffect, useState } from 'react';
import {Redirect} from 'react-router-dom';

import {Box, Heading, Text} from 'grommet';

import ClueForm from '../components/ClueForm';
import { FADE_IN, FADE_OUT } from '../constants';

interface Clue {
  title: string,
  text: string[],
  hint: string,
  answer: string
}

interface Props {
  clue: Clue,
  isLandingPage: boolean
}

const slugifyAnswer = (answer: string): string => {
  return answer.toLowerCase().replaceAll(' ', '-');
}

function CluePage({clue, isLandingPage}: Props) {
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
      setFormError(clue.hint);
      setFormSubmitted(false);
    }
  }, [formSubmitted]);

  const boxFade = answerCorrect ? 'fadeOut' : 'fadeIn';
  const duration = answerCorrect ? FADE_OUT : FADE_IN;

  return redirect ? (
    <Redirect to={`/${slugifyAnswer(value)}/`}/>
    ) : (
      <Box
        pad='large'
        animation={{ type: boxFade, duration: duration }}
        align='center'
      >
        <Box align='center'>
          {isLandingPage && (
            <Heading textAlign='center'>Welcome to the {clue.title} treasure hunt!</Heading>
          )}
          {clue.text.map((text: string, index: number) => (
            <Text key={`${index}`} textAlign={'center'}>{text}</Text>
          ))}
        </Box>
        <ClueForm
          onSubmit={() => setFormSubmitted(true)}
          setFormValues={setValue}
          formError={formError}
        />
      </Box>
    )
}

export default CluePage;
