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
      border: 0,
      margin: '0 8px',
      outline: 0,
      cursor: 'pointer',
      '&:hover span:before': {
        color: '#5D24D6',
        transition: '.3s ease-in',
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
    width: 282,
    display: 'flex',
    alignItems: 'center',
  },
  btnControlBg: {
    width: '57px !important',
    height: '57px !important',
    background: '#F8F8F8',
    boxShadow: '-10px -10px 15px #FFFFFF, 10px 10px 10px rgba(0, 0, 0, 0.05), inset 10px 10px 10px rgba(0, 0, 0, 0.05), inset -10px -10px 20px #FFFFFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '100%',
  },
  btnControlBgPlay: {
    width: '101px !important',
    height: '101px !important',
    background: '#F8F8F8',
    boxShadow: '-10px -10px 15px #FFFFFF, 10px 10px 10px rgba(0, 0, 0, 0.05), inset 10px 10px 10px rgba(0, 0, 0, 0.05), inset -10px -10px 20px #FFFFFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '100%',

    '& i': {
      width: '73px',
      height: '73px',
      background: 'linear-gradient(159.16deg, #917CE4 26.46%, rgba(63, 45, 137, 0) 116.55%)',
      boxShadow: 'inset 10px 10px 15px rgba(255, 255, 255, 0.2)',
      filter: 'drop-shadow(0px 5px 10px rgba(55, 46, 152, 0.65))',
      color: '#fff',
      borderRadius: '100%',
      fontSize: 40,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
  },
  btnBg: {
    width: 42,
    height: 42,
    background: 'linear-gradient(159.16deg, #917CE4 26.46%, rgba(63, 45, 137, 0) 116.55%)',
    boxShadow: 'inset 10px 10px 15px rgba(255, 255, 255, 0.2)',
    filter: 'drop-shadow(0px 5px 10px rgba(55, 46, 152, 0.65))',
    display: 'flex',
    borderRadius: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '24px !important',
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
      height: '120px',
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
      '& button': {
        margin: 0,
        '& span': {
          fontSize: 12,
        },
      },
    },
    rightControls: {
      '& button': {
        margin: 0,
        '& span': {
          fontSize: 12,
        },
      },
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
      marginTop: 10,
      fontSize: 12,
    },
    btnControlBgPlay: {
      width: '50px !important',
      height: '50px !important',

      '& i': {
        width: '32px',
        height: '32px',
        fontSize: 10,
      }
    },
    btnControlBg: {
      width: '37px !important',
      height: '37px !important',
    },
    btnBg: {
      width: 22,
      height: 22,
      fontSize: '14px !important',
    }
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
