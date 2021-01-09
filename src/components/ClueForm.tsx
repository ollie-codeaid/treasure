import React from 'react';

import {
  Button,
  Box,
  Form,
  FormField,
  Text,
  TextInput,
} from 'grommet';

interface Props {
    onSubmit: () => void;
    setFormValues: (value: string) => void;
    formError: string;
}

export default function ClueForm(props: Props) {
    return (
    <Form
        // @ts-ignore
        onChange={(formValues) => props.setFormValues(formValues.answer)}
        onSubmit={() => props.onSubmit()}
      >
        <FormField name='answer' required>
          <TextInput name='answer' type='text' textAlign='center'/>
        </FormField>
        {props.formError && (
          <Box pad={{ vertical: 'medium' }}>
            <Text color='status-error' textAlign='center'>{props.formError}</Text>
          </Box>
        )}
        <Box align={'center'}>
          <Button type='submit' label='Submit' primary/>
        </Box>
      </Form>
    )
}