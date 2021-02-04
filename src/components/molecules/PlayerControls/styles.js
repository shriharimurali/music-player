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
    transition: '.2s linear',
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
    marginLeft: '26%',
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
    '&:hover span': {
      background: 'linear-gradient(159.16deg, #917CE4 26.46%, rgba(63, 45, 137, 1) 116.55%)',
      transition: 'background .2s ease-in',
    }
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
    },
    '&:hover i': {
      background: 'linear-gradient(159.16deg, #917CE4 26.46%, rgba(63, 45, 137, 1) 116.55%)',
      transition: 'all .2s ease-in',
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
  toggleBtn: {
    position: 'absolute',
    top: '50%',
    bottom: 0,
    right: 10,
    width: '7px',
    height: '91px',
    background: '#E1DEEA',
    borderRadius: '13px',
    border: 0,
    transform: 'translateY(-50%)',
    padding: 0,
    cursor: 'pointer',
    outline: 0,

    '&:hover': {
      background: '#5D24D6',
      transition: '.2s ease-in',
    }
  },
  toggleControls: {
    transform: 'translateX(-21%)',
    transition: '.2s linear',
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
        '-webkit-tap-highlight-color': 'rgba(0,0,0,0)',
        margin: 0,
        '& span': {
          fontSize: 12,
        },
      },
    },
    rightControls: {
      '& button': {
        '-webkit-tap-highlight-color': 'rgba(0,0,0,0)',
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
    },
    toggleBtn: { display: 'none' },
    toggleControls: {
      transform: 'translateX(0%)',
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
    middleControls: {
      justifyContent: 'space-between',
    },
    btnControlBg: {
      width: '37px !important',
      height: '37px !important',
    },
    btnBg: {
      width: 22,
      height: 22,
      fontSize: '14px !important',
    },
    toggleBtn: { display: 'none' },
    toggleControls: {
      transform: 'translateX(0%)',
    },
  }
});

export default styles;
