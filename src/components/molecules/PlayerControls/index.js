import React from 'react';
import useStyles from './styles';

const PlayerControls = () => {
  const classes = useStyles();
  return (
    <div className={classes.playerControls}>
      <div className={classes.advancedControls}>
        <button><span className="icon-suffle-icon" /></button>
        <button><span className="icon-replay-once" /></button>
        <button><span className="icon-replay-all" /></button>
        <button><span className="icon-equalizer" /></button>
      </div>
      <div className={classes.mediaControls}></div>
    </div>
  )
};

export default PlayerControls;
