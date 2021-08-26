import { makeStyles } from "@material-ui/core";

export const useStylesGeneral = makeStyles((theme) => ({
  button: {
    marginTop: '4vh',
    fontFamily: 'Arial',
    fontSize: '1.8vh',
    padding: '.4vh 4vh',
    textTransform: 'uppercase',
    borderRadius: '5vh',
    border: `solid 0.5vh white`,
    cursor: 'pointer',
    backgroundSize: '200%',
    color: 'white',
    transition: '0.6s',
    '&:hover': {
      color: 'rgb(54, 12, 102)',
      background: 'white',
    },
  },
  button2: {
    top: '4vw',
    fontFamily: 'Arial',
    fontSize: '1.8vh',
    padding: '.2vh 3vh',
    textTransform: 'uppercase',
    borderRadius: '5vh',
    border: `solid 3.5px white`,
    cursor: 'pointer',
    backgroundSize: '200%',
    color: 'white',
    transition: '0.6s',
    '&:hover': {
      color: 'rgb(27,27,107)',
      background: 'white',
    },
  },
  seeListButton: {
    fontFamily: 'Arial',
    fontSize: '1.8vh',
    padding: '.2vh 2.5vh',
    textTransform: 'uppercase',
    borderRadius: '5vh',
    border: `solid 3.5px rgb(102, 191, 209)`,
    cursor: 'pointer',
    backgroundSize: '200%',
    background: 'rgb(102, 191, 209)',
    color: 'white',
    transition: '0.6s',
    '&:hover': {
      color: 'rgb(102, 191, 209)',
      background: 'transparent',
    },
  },
  githubButton: {
    fontFamily: 'Arial',
    fontSize: window.innerWidth > 1024 ? '2vh':'1.3vh',
    padding: '.1vh 3vh',
    textTransform: 'uppercase',
    borderRadius: '5vh',
    border: window.innerWidth > 1024 ? `solid 2.5px rgb(248, 128, 21)` : `solid 2.5px white`,
    cursor: 'pointer',
    backgroundSize: '200%',
    color: window.innerWidth > 1024 ? 'rgb(248, 128, 21)' : 'white',
    transition: '0.6s',
    '&:hover': {
      color: window.innerWidth > 1024 ? 'white' : 'rgb(28,41,119)',
      background: window.innerWidth > 1024 ? 'rgb(248, 128, 21)' : 'white',
    },
  },
  circleContainer: {
    height: window.innerWidth > 1024 ? '10vw' : '20vw',
    width: window.innerWidth > 1024 ? '10vw' : '20vw',
    transition: 'transform 0.3s ease-in-out',
    transformStyle: 'preserve-3d',
    '&:hover': {
      transform: 'rotateY(180deg)'
    },
  },
  circle: {
    width: '100%',
    height: '100%',
  },
  circleFront: {
    height: '100%',
    width: '100%',
    backfaceVisibility: 'hidden',
  },
  circleBack: {
    height: '100%',
    width: '100%',
    backfaceVisibility: 'hidden',
    transform: 'rotateY(180deg)'
  }
}));