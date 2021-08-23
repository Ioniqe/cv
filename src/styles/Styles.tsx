import { makeStyles } from "@material-ui/core";

export const useStylesGeneral = makeStyles((theme) => ({
  button: {
    width: '11%',
    fontFamily: 'Arial',
    fontSize: '1.1vw',
    padding: '.2vw 1.1vw',
    textTransform: 'uppercase',
    borderRadius: '1.5rem',
    border: `solid 3.5px white`,
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
    top: '3vw',
    width: '17%',
    fontFamily: 'Arial',
    fontSize: '1.1vw',
    padding: '.2vw 1.1vw',
    textTransform: 'uppercase',
    borderRadius: '1.5rem',
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
    width: '11%',
    fontFamily: 'Arial',
    fontSize: '1.1vw',
    padding: '.2vw 1.1vw',
    textTransform: 'uppercase',
    borderRadius: '1.5rem',
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
    width: '60%',
    fontFamily: 'Arial',
    fontSize: '1.1vw',
    padding: '.1vw 3vw',
    textTransform: 'uppercase',
    borderRadius: '1.5rem',
    border: `solid 2.5px rgb(248, 128, 21)`,
    cursor: 'pointer',
    backgroundSize: '200%',
    color: 'rgb(248, 128, 21)',
    transition: '0.6s',
    '&:hover': {
      color: 'white',
      background: 'rgb(248, 128, 21)',
    },
  },
  circleContainer: {
    height: '10vw',
    width: '10vw',
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