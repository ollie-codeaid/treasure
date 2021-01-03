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

function App() {
  const [value, setValue] = useState<string>("");
  return (
    <Grommet theme={theme} full>
      <Box
        pad='large'
        animation={{ type: 'fadeIn', duration: 8000 }}
        align='center'
      >
        <Box align='center' justify='center'>
          <Heading textAlign='center'>Welcome to the treasure hunt!</Heading>
          <Text>Description text about th</Text>
          <Text>Description text about th</Text>
        </Box>
        <Form
          // @ts-ignore
          onChange={(nextValue: string) => setValue(nextValue)}
          onSubmit={event => console.log(event)}
          align='center'
        >
          <FormField name='answer' required>
            <TextInput name='answer' type='text' />
          </FormField>
          <Button type='submit' label='submit' primary />
        </Form>
      </Box>
    </Grommet>
  );
}

export default App;
