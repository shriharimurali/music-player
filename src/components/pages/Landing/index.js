import React from 'react';

import Player from '../../organisms/Player';
import useStyles from './styles.js';

const Landing = () => {
  const classes = useStyles()
  return (
    <div className={classes.bg}>
      <Player />
    </div>
  )
};

export default Landing;
