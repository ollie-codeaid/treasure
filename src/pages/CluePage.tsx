import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';

import {Box, Heading, Text} from 'grommet';

import ClueForm from '../components/ClueForm';

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
  const [formError, setFormError] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  if (formSubmitted) {
    const slugAnswer = slugifyAnswer(value);

    if (slugAnswer === clue.answer) {
      return <Redirect to={`/${slugAnswer}/`}/>;
    } else {
      setFormError(clue.hint);
      setFormSubmitted(false);
    }
  }

  const setValueClearErrors = (value: string) => {
    setFormError("");
    setValue(value);
  };

  return (
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
        setFormValues={setValueClearErrors}
        formError={formError}
      />
    </Box>
  );
}

export default CluePage;
