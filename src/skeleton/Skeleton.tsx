import React from 'react';

import { Box, Grommet } from 'grommet';

const theme = {
  global: {
    colors: {
      theme: '#C2D4E2',
      background: '#000305',
      highlight: '#C2D4E2',
      text: {
        "dark": "#E5E6E6", 
        "light": "#E5E6E6"
      }
    },
    focus: {
      border: {
        color: 'highlight'
      }
    },
    font: {
      family: 'Audiowide',
      size: '18px',
      height: '20px'
    }
  },
  button: {
    border: {
      radius: '18px',
      color: 'theme'
    },
    color: 'theme'
  }
};

const backgroundImageUrl = 'url("https://www.transparenttextures.com/patterns/gplay.png")';

const Skeleton: React.FC<{}> = ({children}) => (
  <Grommet theme={theme} full={true} background={{color: 'background', image: backgroundImageUrl, repeat: 'repeat', size: '200px'}}>
    <Box justify={'center'} fill={'vertical'}>
      {children}
    </Box>
  </Grommet>
);

export default Skeleton;
