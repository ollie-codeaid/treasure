import React, { useEffect, useState } from 'react';
import {Redirect} from 'react-router-dom';

import {Box, Button, Heading, Image, Text} from 'grommet';
import { FADE_OUT } from '../constants';

interface Props {
  title: string,
  text: string[],
  firstClueSlug: string
}

function WelcomePage({title, text, firstClueSlug}: Props) {
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);
  const [redirect, setRedirect] = useState<boolean>(false);

  useEffect(() => {
    if (buttonClicked) {
      setTimeout(() => setRedirect(true), FADE_OUT);
    }
  }, [buttonClicked]);

  const duration = FADE_OUT;

  return redirect ? (
      <Redirect to={`/treasure/${firstClueSlug}/`}/>
    ) : (
      <Box
        pad='large'
        animation={buttonClicked ? { type: 'fadeOut', duration: duration } : {}}
        align='center'
        overflow='scroll'
      >
        <Box align='center'>
          <Heading textAlign='center' color='theme'>Greetings from the FUTURE</Heading>
          {text.map((text: string, index: number) => (
            <Text key={`${index}`} textAlign={'center'} margin={'xsmall'}>{text}</Text>
          ))}
          <Button 
            onClick={() => setButtonClicked(true)}
            label='PROCEED'
            margin={'medium'}
          />
        </Box>
      </Box>
    )
}

export default WelcomePage;
