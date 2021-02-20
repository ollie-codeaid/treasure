import React from 'react';

import { Box, Grommet } from 'grommet';

const theme = {
  global: {
    colors: {
      theme: '#921D46',
      background: '#ccc1b3',
      highlight: '#1D050E',
      text: {
        "dark": "#f8f8f8", 
        "light": "#333333"
      }
    },
    focus: {
      border: {
        color: 'highlight'
      }
    },
    font: {
      family: 'Pirata One',
      size: '18px',
      height: '20px'
    },
  },
  button: {
    border: {
      radius: '18px',
      color: 'theme'
    },
    color: 'theme'
  }
};

const backgroundImageUrl = 'url(https://www.transparenttextures.com/patterns/fresh-snow.png)';

const Skeleton: React.FC<{}> = ({children}) => (
  <Grommet theme={theme} full={true} background={{color: 'background', image: backgroundImageUrl, repeat: 'repeat', size: 'contain'}}>
    <Box justify={'center'} fill={'vertical'}>
      {children}
    </Box>
  </Grommet>
);

export default Skeleton;
