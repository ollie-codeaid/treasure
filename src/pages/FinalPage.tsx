import React from 'react';

import {Box, Heading, Text} from 'grommet';
import { FADE_IN } from '../constants';

interface Props {
  text: string[]
}

function FinalPage({text}: Props) {
  return (
    <Box
      pad='large'
      animation={{ type: 'fadeIn', duration: FADE_IN }}
      align='center'
    >
      <Box align='center'>
        <Heading textAlign='center' color='theme'>Test complete</Heading>
        {text.map((text: string, index: number) => (
          <Text key={`${index}`} textAlign={'center'} margin={'xsmall'}>{text}</Text>
        ))}
      </Box>
    </Box>
  )
}

export default FinalPage;
