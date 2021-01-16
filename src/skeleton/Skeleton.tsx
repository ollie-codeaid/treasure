import React from 'react';

import { Box, Grommet } from 'grommet';

const theme = {
  global: {
    colors: {
      theme: '#660080',
    },
    font: {
      family: 'Quattrocento Sans',
      size: '18px',
      height: '20px',
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

const Skeleton: React.FC<{}> = ({children}) => (
  <Grommet theme={theme} full={true}>
    <Box justify={"center"} fill={"vertical"}>
      {children}
    </Box>
  </Grommet>
);

export default Skeleton;
