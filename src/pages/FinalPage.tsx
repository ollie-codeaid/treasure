import React from 'react';

import {Box, Heading, Text} from 'grommet';
import { FADE_IN } from '../constants';

interface Props {
  title: string,
  text: string[]
}

function FinalPage({title, text}: Props) {
  return (
    <Box
      pad='large'
      animation={{ type: 'fadeIn', duration: FADE_IN }}
      align='center'
    >
      <Box align='center'>
        <Heading textAlign='center'>{title} complete!</Heading>
        {text.map((text: string, index: number) => (
          <Text key={`${index}`}>{text}</Text>
        ))}
      </Box>
    </Box>
  )
}

export default FinalPage;
