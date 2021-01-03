import React from 'react';

import { Grommet } from 'grommet';

const theme = {
  global: {
    colors: {
      theme: '#660080',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const Skeleton: React.FC<{}> = ({children}) => (
  <Grommet theme={theme} full>
    {children}
  </Grommet>
);

export default Skeleton;
