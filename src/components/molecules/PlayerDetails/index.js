import React from 'react';
import useStyles from './styles';
import artImg from '../../../assets/images/codex-omega.png';
import './Icon.css';

const PlayerDetails = ({ toggle }) => {
  const classes = useStyles();
  return (
    <div className={toggle ? `${classes.playerDetails} ${classes.toggleDetails}` : classes.playerDetails}>
      <div className={classes.artBox}>
        <div className={classes.artBg}>
          <img src={artImg} className={classes.artImg} alt="art-img" />
        </div>
      </div>
      <div className={classes.musicDetails}>
        <p>Now Playing</p>
        <div className={classes.songDetails}>
          <h6>Purple Haze</h6>
          <p>Jimi Hendrix</p>
          <span>Woodstock</span>
        </div>
        <div className={classes.musicDetailsControls}>
          <button className={classes.btn}>
            <i className="fas fa-heart" />
          </button>
          <button className={classes.btn}>
            <span className="icon-playlist"></span>
          </button>
          <button className={classes.btn}>
            <i className="fas fa-share-alt" />
          </button>
        </div>
      </div>
    </div>
  )
};

export default PlayerDetails;
