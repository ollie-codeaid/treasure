import React from 'react';

import {Box, Heading, Image, Text} from 'grommet';
import { FADE_IN } from '../constants';
import treasurePath from '../images/treasure.png';

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
        <Heading textAlign='center' color='theme'>{title} complete!</Heading>
        {text.map((text: string, index: number) => (
          <Text key={`${index}`} textAlign={'center'}>{text}</Text>
        ))}
        <Image
          width='100px'
          src={treasurePath}
        />
      </Box>
    </Box>
  )
}

export default FinalPage;
