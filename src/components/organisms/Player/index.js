import React from 'react';
import PlayerDetails from '../../molecules/PlayerDetails/index';
import PlayerControls from '../../molecules/PlayerControls/index';
import useStyles from './styles';

const Player = () => {
  const classes = useStyles();
  return (
    <div className={classes.player}>
      <PlayerDetails />
      <PlayerControls />
    </div>
  );
};

export default Player;
