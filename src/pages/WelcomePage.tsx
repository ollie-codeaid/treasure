import React, { useEffect, useState } from 'react';
import {Redirect} from 'react-router-dom';

import {Box, Button, Heading, Text} from 'grommet';

const FADE_OUT = 2000;

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
      <Redirect to={`/${firstClueSlug}/`}/>
    ) : (
      <Box
        pad='large'
        animation={buttonClicked ? { type: 'fadeOut', duration: duration } : {}}
        align='center'
      >
        <Box align='center'>
          <Heading textAlign='center'>Welcome to the {title} treasure hunt!</Heading>
          {text.map((text: string, index: number) => (
            <Text key={`${index}`}>{text}</Text>
          ))}
        </Box>
        <Button
          onClick={() => setButtonClicked(true)}
          label="Proceed"
          primary
        />
      </Box>
    )
}

export default WelcomePage;
