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
}));