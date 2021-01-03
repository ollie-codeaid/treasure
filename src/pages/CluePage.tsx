import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';

import {
  Box,
  Grommet,
  Heading,
  Text,
} from 'grommet';

import ClueForm from '../components/ClueForm';
import { title } from 'process';

const theme = {
  global: {
    colors: {
      theme: '#660080',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const answerIsCorrect = (answer: string, expectedAnswer: string): boolean => {
  return answer.toLowerCase() === expectedAnswer.toLowerCase();
}

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

function CluePage({clue, isLandingPage}: Props) {
  const [value, setValue] = useState<string>("");
  const [formError, setFormError] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  if (formSubmitted) {
    if (answerIsCorrect(value, clue.answer)) {
      return <Redirect to={`/${clue.answer}/`}/>;
    } else {
      setFormError(clue.hint);
      setFormSubmitted(false);
    }
  }

  return (
    <Grommet theme={theme} full>
      <Box
        pad='large'
        animation={{ type: 'fadeIn', duration: 6000 }}
        align='center'
      >
        <Box align='center' justify='center'>
          {isLandingPage && (
            <Heading textAlign='center'>Welcome to the {clue.title} treasure hunt!</Heading>
          )}
          {clue.text.map((text: string, index: number) => (
            <Text key={`${index}`}>{text}</Text>
          ))}
        </Box>
        <ClueForm
          onSubmit={() => setFormSubmitted(true)}
          setFormValues={setValue}
          formError={formError}
        />
      </Box>
    </Grommet>
  );
}

export default CluePage;
