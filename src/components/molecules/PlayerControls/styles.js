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

    '& button': {
      background: '#f8f8f8',
      width: 32,
      height: 32,
      borderRadius: 100,
      border: '1px solid red',
      margin: '0 8px',
    }
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
  }
});

export default styles;
