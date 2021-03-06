import { createUseStyles } from 'react-jss'

const styles = createUseStyles({
  playerDetails: {
    width: '50%',
    backgroundColor: '#f8f8f8',
    boxShadow: '40px 30px 80px rgba(54, 48, 116, 0.3)',
    borderRadius: '60px',
    height: '461px',
    position: 'absolute',
    left: 0,
    zIndex: 2,
    display: 'flex',
    flexWrap: 'wrap',
    transition: '.2s linear',
  },
  artBox: {
    width: '55%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  artImg: {
    width: '100%',
  },
  artBg: {
    width: '80%',
    padding: '10px',
    borderRadius: 30,
    background: '#fff',
    boxShadow: '0 0 100px inset #e1e1e1',
    '& p': {
      color: "#D0D1DB",
      fontSize: 18,
      margin: '5px 0'
    }
  },
  musicDetails: {
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
    padding: '50px 0',
    '& *': {
      margin: '5px 0px',
    },
    '& p': {
      color: '#AEAEAE',
      fontSize: 18,
      marginBottom: 82,
      fontFamily: "'Roboto', sans-serif",
    },
  },
  songDetails: {
    lineHeight: '37px',
    fontStyle: 'normal',
    marginBottom: 66,
    '& *': {
      margin: '5px 0px',
      lineHeight: 1,
    },
    '& h5': {
      color: '#86748D',
      fontSize: 32,
      marginBottom: 20,
    },
    '& h6': {
      fontSize: 24,
      fontWeight: 500,
      color: '#86748D',
      marginBottom: 15,
      opacity: 0.5,
    },
    '& p': {
      fontSize: 18,
      color: '#86748D',
      margin: 0,
      opacity: 0.5,
    }
  },
  btn: {
    width: '57px',
    height: '57px',
    background: '#F8F8F8',
    boxShadow: '-10px -10px 15px #FFFFFF, 10px 10px 10px rgba(0, 0, 0, 0.05), inset 10px 10px 10px rgba(0, 0, 0, 0.05), inset -10px -10px 20px #FFFFFF',
    margin: '0px 8px',
    borderRadius: '100%',
    border: 0,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    cursor: 'pointer',

    '&:first-child': { marginLeft: 0, },

    '& i, span': {
      color: '#C7C5D0 !important',
      fontSize: 22,
    },
    '&:hover span:before': {
      color: '#5D24D6 !important',
      transition: '.3s ease-in',
    },
    '&:hover i:before': {
      color: '#5D24D6 !important',
      transition: '.3s ease-in',
    },
  },
  musicDetailsControls: {
    width: '100%',
    display: 'flex',
  },
  toggleDetails: {
    transform: 'translateX(50%)',
    transition: '.2s linear',
    left: '-160px',
    width: '61%',
  },
  '@media (max-width: 480px)': {
    playerDetails: {
      width: '100%',
      height: '260px',
      top: 0,
      boxShadow: '0px -30px 80px rgb(54 48 116 / 30%)',
      maxWidth: 300,
      margin: '0 auto',
      left: '0',
      right: '0',
      display: 'flex',
      flexDirection: 'row',
    },
    artBox: {
      width: '50%',
      alignSelf: 'center',
      position: 'relative',
      top: -70,
      left: 0,
      right: 0,
      margin: '0 auto',
      flexDirection: 'column',
    },
    artBg: {
      boxShadow: 'none',
      background: 'none',
    },
    musicDetails: {
      width: '100%',
      display: 'flex',
      top: - 80,
      position: 'relative',
      justifyContent: 'center',
      textAlign: 'center',
      padding: 0,
      '& *': {
        margin: '5px 0px',
      },
      '& h5': {
        color: '#86748D',
        fontSize: 22,
      },
      '& h6': {
        color: '#86748D',
        fontSize: 18,
        marginBottom: 10,
      },
      '& p': {
        color: '#86748D',
        fontSize: 16,
        margin: 0,
      }
    },
    musicDetailsControls: {
      textAlign: 'center',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
    },
    btn: {
      marginRight: 10,
      width: '32px',
      height: '32px',
      '& i, span': {
        color: '#C7C5D0 !important',
        fontSize: 16,
      }
    },
    toggleDetails: {
      transform: 'translateX(0)',
    },
    songDetails: {
      lineHeight: '1',
    }
  },
  '@media (min-width: 481px) and (max-width: 1280px)': {
    playerDetails: {
      width: '100%',
      height: '330px',
      top: 0,
      boxShadow: '0px -30px 80px rgb(54 48 116 / 30%)',
      maxWidth: 500,
      margin: '0 auto',
      left: '0',
      right: '0',
      display: 'flex',
      flexDirection: 'row',
    },
    artBox: {
      width: '50%',
      alignSelf: 'center',
      position: 'relative',
      top: -70,
      left: 0,
      right: 0,
      margin: '0 auto',
      flexDirection: 'column',
      '& p': {
        textAlign: 'center',
      }
    },
    artBg: {
      boxShadow: 'none',
      background: 'none',
    },
    musicDetails: {
      width: '100%',
      display: 'flex',
      top: - 80,
      position: 'relative',
      justifyContent: 'center',
      padding: 0,
      '& *': {
        margin: '5px 0px',
        textAlign: 'center',
      },
      '& h5': {
        color: '#86748D',
        fontSize: 22,
      },
      '& h6': {
        color: '#86748D',
        fontSize: 18,
      },
      '& p': {
        color: '#86748D',
        fontSize: 16,
        margin: 0,
      }
    },
    songDetails: {
      '& *': {
        margin: '5px 0px',
        textAlign: 'center',
      },
      '& h6': {
        color: '#86748D',
        fontSize: 22,
      },
      '& p': {
        color: '#86748D',
        fontSize: 18,
        fontFamily: "'Montserrat', sans-serif",
      },
      '& span': {
        color: '#86748D',
        fontSize: 16,
      }
    },
    btn: {
      margin: '0 30px',
      width: '32px',
      height: '32px',
      '& i, span': {
        color: '#C7C5D0 !important',
        fontSize: 16,
      }
    },
    musicDetailsControls: {
      justifyContent: 'center',
      position: 'relative',
    },
    toggleDetails: {
      transform: 'translateX(0)',
    }
  },
});

export default styles;
