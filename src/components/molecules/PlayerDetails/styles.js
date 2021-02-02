import { createUseStyles } from 'react-jss'

const styles = createUseStyles({
  playerDetails: {
    width: '40%',
    backgroundColor: '#f8f8f8',
    boxShadow: '40px 30px 80px rgba(54, 48, 116, 0.3)',
    borderRadius: '60px',
    height: '461px',
    position: 'absolute',
    left: 0,
    zIndex: 2,
    display: 'flex'
  },
  artBox: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  artImg: {
    width: '100%',
  },
  artBg: {
    '& p': {
      color: "#D0D1DB",
      fontSize: 18,
      margin: '5px 0'
    }
  },
  musicDetails: {
    width: '50%',
    display: 'flex',
    '& *': {
      margin: '5px 0px',
    },
    '& h6': {
      color: '#86748D',
      fontSize: 22,
    },
    '& p': {
      color: '#86748D',
      fontSize: 18,
    },
    '& span': {
      color: '#86748D',
      fontSize: 16,
    }
  },
  musicDetailsControls: {
    top: -80,
    position: 'relative',
  },
  btn: {
    width: '35px',
    height: '35px',
    background: '#F8F8F8',
    boxShadow: '- 10px - 10px 15px #FFFFFF, 10px 10px 10px rgba(0, 0, 0, 0.05), inset 10px 10px 10px rgba(0, 0, 0, 0.05), inset - 10px - 10px 20px #FFFFFF',
    borderRadius: '100%',
    margin: '0px 8px',
  },
  '@media (max-width: 480px)': {
    playerDetails: {
      width: '100%',
      height: '250px',
      top: 0,
      boxShadow: '0px -30px 80px rgb(54 48 116 / 30%)',
      maxWidth: 300,
      margin: '0 auto',
      left: '0',
      right: '0',
      display: 'flex',
      flexDirection: 'column',
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
    musicDetails: {
      width: '100%',
      display: 'flex',
      top: - 80,
      position: 'relative',
      justifyContent: 'center',
      '& *': {
        margin: '5px 0px',
      },
      '& h6': {
        color: '#86748D',
        fontSize: 22,
      },
      '& p': {
        color: '#86748D',
        fontSize: 18,
      },
      '& span': {
        color: '#86748D',
        fontSize: 16,
      }
    },
  },
  '@media (min-width: 481px) and (max-width: 1280px)': {
    playerDetails: {
      width: '100%',
      height: '350px',
      top: 0,
      boxShadow: '0px -30px 80px rgb(54 48 116 / 30%)',
      maxWidth: 500,
      margin: '0 auto',
      left: '0',
      right: '0',
      display: 'flex',
      flexDirection: 'column',
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
    musicDetails: {
      width: '100%',
      display: 'flex',
      top: - 80,
      position: 'relative',
      justifyContent: 'center',
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
      },
      '& span': {
        color: '#86748D',
        fontSize: 16,
      }
    },
    musicDetailsControls: {
      textAlign: 'center',
    }
  },
});

export default styles;
