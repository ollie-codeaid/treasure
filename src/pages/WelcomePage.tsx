import React, { useEffect, useState } from 'react';
import {Redirect} from 'react-router-dom';

import {Box, Button, Heading, Image, Text} from 'grommet';
import { FADE_OUT } from '../constants';
import treasureClosedPath from '../images/treasureClosed.png';

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
      >
        <Box align='center'>
          <Heading textAlign='center' color='theme'>Welcome to the {title} treasure hunt!</Heading>
          {text.map((text: string, index: number) => (
            <Text key={`${index}`} textAlign={'center'}>{text}</Text>
          ))}
          <Image
            width='150px'
            src={treasureClosedPath}
          />
        </Box>
        <Box align={'center'} pad={{vertical: 'large'}}>
          <Button
            onClick={() => setButtonClicked(true)}
            label='PROCEED?'
          />
        </Box>
      </Box>
    )
}

export default WelcomePage;