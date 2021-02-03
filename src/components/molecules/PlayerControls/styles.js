import { createUseStyles } from 'react-jss'

const styles = createUseStyles({
  playerControls: {
    width: '70%',
    height: '359px',
    background: '#F7F7F7',
    border: '1px solid #FFFFFF',
    boxShadow: '0px 60px 100px rgba(65, 44, 100, 0.3)',
    borderRadius: '60px',
    position: 'absolute',
    right: 0,
    zIndex: 1,
  },
  advancedControls: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 0',
    marginTop: 40,

    '& button': {
      background: '#f8f8f8',
      width: 32,
      height: 32,
      borderRadius: 100,
      border: 0,
      margin: '0 8px',
      outline: 0,
      cursor: 'pointer',
      '&:hover span:before': {
        color: '#5D24D6',
      },
      '& span': {
        fontSize: 20,
      }
    }

  },
  leftControls: {
    display: 'flex',
    marginLeft: 280,
    '& button': {
      margin: '0 22px',
    }
  },
  middleControls: {
    width: 200,
  },
  rightControls: {
    display: 'flex',
    '& button': {
      margin: '0 22px',
    }
  },
  seeker: {
    width: '60%',
    position: 'absolute',
    bottom: 100,
    right: 70,
  },
  timer: {
    color: '#AA9BBE',
    fontSize: 18,
    marginTop: 19,
    display: 'flex',
    justifyContent: 'space-between',
  },

  '@media (max-width: 480px)': {
    playerControls: {
      width: '100%',
      height: '100px',
      bottom: 0,
      backgroundColor: '#f8f8f8',
      borderRadius: 30,
      maxWidth: 300,
      margin: '0 auto',
      left: '0',
      right: '0',
    },
    advancedControls: {
      margin: 0,
    },
    leftControls: {
      marginLeft: 0,
    },
    seeker: {
      width: '60%',
      position: 'absolute',
      bottom: 10,
      right: 0,
      left: 0,
      margin: '0 auto',
    },
    timer: {
      marginTop: 5,
      fontSize: 12,
    },
  },
  '@media (min-width: 481px) and (max-width: 1280px)': {
    playerControls: {
      width: '100%',
      height: '150px',
      bottom: 0,
      maxWidth: '500px',
      margin: '0 auto',
      left: 0,
      right: 0,
    },
    leftControls: {
      marginLeft: 0,
    },
    advancedControls: {
      marginTop: 10,
    },
    seeker: {
      width: '60%',
      position: 'absolute',
      bottom: 20,
      right: 0,
      left: 0,
      margin: '0 auto',
    },
    timer: {
      marginTop: 20,
      fontSize: 16,
    },
  }
});

export default styles;
