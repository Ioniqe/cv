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
  // circleContainer: {
  //   position: 'absolute',
  //   height: '8vw',
  //   width: '8vw',
  //   transformStyle: 'preserve-3d',
  //   transition: 'all 0.5s ease',
  //   '&:hover': {
  //     transform: 'rotateY(180deg)'
  //   },
  // },
  // circleFront: {
  //   position: 'absolute',
  //   height: '8vw',
  //   width: '8vw',
  //   backfaceVisibility: 'hidden',
  // },
  // circleBack: {
  //   position: 'absolute',
  //   height: '8vw',
  //   width: '8vw',
  //   backfaceVisibility: 'hidden',
  //   transform: 'rotateY(180deg)'
  // }
  circleContainer: {
    height: '8vw',
    width: '8vw',
    transition: 'transform 1s ease-in-out',
    transformStyle: 'preserve-3d',
    '&:hover': {
      transform: 'rotateY(180deg)'
    },
  },
  circle: {
    width: '100%',
    height: '100%',
    // transition: 'transform 1s ease-in-out',
    // transformStyle: 'preserve-3d',
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