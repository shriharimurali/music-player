import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import './seeker.css';
import useStyles from './styles';

const PlayerControls = () => {
  const classes = useStyles();
  return (
    <div className={classes.playerControls}>
      <div className={classes.advancedControls}>
        <div className={classes.leftControls}>
          <button><span className="icon-suffle-icon" /></button>
          <button><span className="icon-replay-once" /></button>
        </div>
        <div className={classes.middleControls}></div>
        <div className={classes.rightControls}>
          <button><span className="icon-replay-all" /></button>
          <button><span className="icon-equalizer" /></button>
        </div>
      </div>
      <div className={classes.seeker}>
        <Slider />
        <div className={classes.timer}>
          <span>2:01:00</span>
          <span>4:16:00</span>
        </div>
      </div>
      <div className={classes.mediaControls}></div>
    </div>
  )
};

export default PlayerControls;
