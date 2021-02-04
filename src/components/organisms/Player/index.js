import React, { useState } from 'react';
import PlayerDetails from '../../molecules/PlayerDetails/index';
import PlayerControls from '../../molecules/PlayerControls/index';
import useStyles from './styles';

const Player = () => {
  const classes = useStyles();
  const [toggle, setToggle] = useState(false);

  const toggleMediaControls = () => {
    setToggle(!toggle);
  };

  return (
    <div className={classes.player}>
      <PlayerDetails toggle={toggle} />
      <PlayerControls toggle={toggle} toggleMediaControls={toggleMediaControls} />
    </div>
  );
};

export default Player;
