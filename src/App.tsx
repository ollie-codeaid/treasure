import React, { useState } from 'react';

import {
  Button,
  Box,
  Form,
  FormField,
  Grommet,
  Heading,
  Text,
  TextInput,
} from 'grommet';
import * as data from './data.json'
import { Dispatch } from 'react';
import { SetStateAction } from 'react';

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

const onFormSubmit = (
  answer: string, 
  expectedAnswer: string, 
  setFormError: Dispatch<SetStateAction<string>>
  ) => {
    if (answerIsCorrect(answer, expectedAnswer)) {
      setFormError("correct");
    } else {
      setFormError("incorrect");
    }
}

function App() {
  const [value, setValue] = useState<string>("");
  const [formError, setFormError] = useState<string>("");

  return (
    <Grommet theme={theme} full>
      <Box
        pad='large'
        animation={{ type: 'fadeIn', duration: 8000 }}
        align='center'
      >
        <Box align='center' justify='center'>
          <Heading textAlign='center'>Welcome to the {data.name} treasure hunt!</Heading>
          {data.landingPageText.map((text: string) => (
            <Text>{text}</Text>
          ))}
        </Box>
        <Form
          // @ts-ignore
          onChange={(nextValue: string) => setValue(nextValue)}
          // @ts-ignore
          onSubmit={({value: formValue}) => onFormSubmit(formValue.answer, data.landingPageAnswer, setFormError)}
          align='center'
        >
          <FormField name='answer' required>
            <TextInput name='answer' type='text' />
          </FormField>
          {formError && (
            <Box pad={{ horizontal: 'small' }}>
              <Text color="status-error">{formError}</Text>
            </Box>
          )}
          <Button type='submit' label='submit' primary />
        </Form>
      </Box>
    </Grommet>
  );
}

export default App;
