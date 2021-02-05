import { createUseStyles } from 'react-jss'

const styles = createUseStyles({
  player: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    position: 'relative'
  },
  '@media (max-width: 480px)': {
    player: {
      width: '95%',
      margin: '0 auto',
      height: '370px',
    }
  },
  '@media (min-width: 481px) and (max-width: 1280px)': {
    player: {
      width: '65%',
      margin: '0 auto',
      height: '460px',
    }
  }
});

export default styles;
