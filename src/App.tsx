import { useEffect, useState } from 'react';
import './App.css';

import background from './visuals/background2.svg';
import planet_pink_yellow from './visuals/planets/planet_pink_yellow.svg';
import planet_yellow_small from './visuals/planets/planet_yellow_small.svg';
import falling from './visuals/planets/falling.svg';
import planet_blue_rings from './visuals/planets/planet_blue_rings.svg';
import planet_blue_small from './visuals/planets/planet_blue_small.svg';
import planet_blue_v2 from './visuals/planets/planet_blue_v2.svg';
import planet_yellow from './visuals/planets/planet_yellow.svg';
import planet_yellow_v2 from './visuals/planets/planet_yellow_v2.svg';
import planet_pink_yellow_small from './visuals/planets/planet_pink_yellow_small.svg';
import planet_pink from './visuals/planets/planet_pink.svg';
import sun from './visuals/planets/sun.svg';

import dolphin from './visuals/animals/dolphin.svg';

import ts_js from './visuals/logo_circles/ts_js.svg';
import react from './visuals/logo_circles/react.svg';
import angular from './visuals/logo_circles/angular.svg';

import python from './visuals/logo_circles/python.svg';
import java from './visuals/logo_circles/java.svg';
import c_plus_plus from './visuals/logo_circles/c++.svg';

import adobe from './visuals/logo_circles/adobe.svg';
import sql from './visuals/logo_circles/sql.svg';
import c_sharp from './visuals/logo_circles/c_sharp.svg';

import circle_purple from './visuals/circles/circle_purple.svg';
import circle_orange from './visuals/circles/circle_orange.svg';
import circle_pink from './visuals/circles/circle_pink.svg';
import circle_yellow from './visuals/circles/circle_yellow.svg';
import circle_blue from './visuals/circles/circle_blue.svg';

import circle_green from './visuals/circles/circle_green.svg';
import circle_hot_blue from './visuals/circles/circle_hot_blue.svg';
import circle_hot_orange from './visuals/circles/circle_hot_orange.svg';
import circle_hot_purple from './visuals/circles/circle_hot_purple.svg';

import blue_whale from './visuals/animals/blue_whale.svg';
import purple_whale from './visuals/animals/purple_whale.svg';
import pink_fish from './visuals/animals/pink_fish.svg';
import pink_octopus from './visuals/animals/pink_octopus.svg';
import yellow_octopus from './visuals/animals/yellow_octopus.svg';

import { motion } from 'framer-motion';
import { Button } from '@material-ui/core';
import { useStylesGeneral } from './styles/Styles';
import Coin from './components/Coin';

function App() {
  const style = useStylesGeneral();

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
      transition: {
        duration: 4,
        ease: "circIn",
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  var Scroll = require('react-scroll');
  var scroll = Scroll.animateScroll;

  return (
    <div className='App'>
      <img alt="background" src={background} style={{ left: 0, position: 'absolute' }} />
      <div style={{ position: 'absolute', overflow: 'hidden', width: '100%', height: '100%', pointerEvents: 'none' }}>

        <motion.img alt="planet_pink_yellow" src={planet_pink_yellow}
          style={{ position: 'absolute', left: '9vw', top: '4vw', height: '11vw', y: -offsetY * 0.4 }}
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 50,
          }}
        />

        <motion.img alt="planet_yellow_small_1" src={planet_yellow_small}
          style={{ position: 'absolute', left: '2vw', top: '7vw', height: '3vw', y: -offsetY * 1.5 }}
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        />

        <motion.img alt="falling" src={falling}
          style={{ position: 'absolute', left: '1.1vw', top: '15vw', height: '9vw', opacity: 1 - offsetY * 0.03, y: offsetY * 15, x: offsetY * 20 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 50,
          }} />

        <motion.img alt="planet_yellow_small_2" src={planet_yellow_small}
          style={{ position: 'absolute', left: '20vw', top: '20vw', height: '2vw', y: -offsetY * 1.5 }}
          initial={{ scale: 0 }}
          animate={{ rotate: -360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 50
          }} />

        <motion.img alt="planet_blue_small_1" src={planet_blue_small}
          style={{ position: 'absolute', left: '25vw', top: '15vw', height: '2.5vw', y: -offsetY * 2.5 }}
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 50
          }} />

        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            stiffness: 200,
            damping: 10,
            duration: 4
          }}
        >
          <motion.img alt="planet_blue_v2" src={planet_blue_v2}
            style={{ position: 'absolute', left: '14vw', top: '28vw', height: '5vw', opacity: 1 - offsetY * 0.005, y: offsetY * 1.2, x: -offsetY * 1.4, rotate: -0.5 * offsetY }}
            animate={{ rotate: -0.5 * offsetY }}
            transition={{
              damping: 50
            }}
          />
        </motion.div>

        <div style={{ width: '95vw', marginLeft: '-0.2vw', marginTop: '-0.5vw' }}>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1920 1080"
            className="title"
          >
            <motion.path
              d="M500,414.47v43h48v-43h14.35v99.09H548.08v-43H500v43H485.69V414.47Zm157.62-.2v13.19H610.78v30h35.15v13.19H610.78v30h46.88v13.19h-61.3V414.27Zm44,.2v86h46.88v13.06h-61.3V414.47Zm90.88,0v86h46.88v13.06h-61.3V414.47Zm133.28,2.87a56.55,56.55,0,0,1,17.75,11.19,50.46,50.46,0,0,1,12.1,16.26,48,48,0,0,1,0,38.65,49.52,49.52,0,0,1-12.1,16.26,55,55,0,0,1-17.75,11.06,61.87,61.87,0,0,1-42,0,53.73,53.73,0,0,1-17.68-11.06,48,48,0,0,1-12-16.33,48.52,48.52,0,0,1,0-38.51,50.4,50.4,0,0,1,12-16.39,55.22,55.22,0,0,1,17.68-11.13,61.87,61.87,0,0,1,42,0Zm-36.38,12.46a41.22,41.22,0,0,0-12.9,8.13,36.6,36.6,0,0,0-8.84,11.93A34.44,34.44,0,0,0,864.8,464a33.84,33.84,0,0,0,2.9,14.13A35.27,35.27,0,0,0,876.54,490a37.4,37.4,0,0,0,12.9,8.06,43.39,43.39,0,0,0,15.43,2.73,42.59,42.59,0,0,0,15.29-2.73,40.1,40.1,0,0,0,13-8.06A36.58,36.58,0,0,0,942,478.1,32.74,32.74,0,0,0,945,464a33.31,33.31,0,0,0-3-14.13,39.59,39.59,0,0,0-8.77-11.93,40.86,40.86,0,0,0-28.33-10.86A43.39,43.39,0,0,0,889.44,429.79Zm206.18-15.33h24.2v13.13h-28.77v86h-14.42v-86h-28.77V414.47h47.75Zm68.13,0v43h48v-43h14.35v99.09H1211.8v-43h-48v43H1149.4V414.47Zm157.62-.2v13.19h-46.88v30h35.14v13.19h-35.14v30h46.88v13.19h-61.3V414.27Zm29.58.2h33.62a44.33,44.33,0,0,1,15.22,2.6A38.17,38.17,0,0,1,1412,424.2a33.16,33.16,0,0,1,7.68,9.79,26.9,26.9,0,0,1,2.32,11.66v2.8a26.15,26.15,0,0,1-1.67,9.46,36.64,36.64,0,0,1-4.93,8.6,23.9,23.9,0,0,1-5.36,5.26,29,29,0,0,1-6.67,3.2l-5.07,1.87,3,4.26L1424,513.55h-18l-24.57-34.72h-15.94v34.72H1351Zm35.8,51.11.07.07a20.79,20.79,0,0,0,7.75-1.33,22.18,22.18,0,0,0,6.16-4.2,17.54,17.54,0,0,0,6-13.79,18.34,18.34,0,0,0-1.38-7.2,21.59,21.59,0,0,0-4.57-6v-.07a20.34,20.34,0,0,0-7.83-4.13,33.45,33.45,0,0,0-9.86-1.4h-17.68v38h4.49l5.43.07h11.38Zm128.13-51.31v13.19H1468v30h35.14v13.19H1468v30h46.88v13.19h-61.3V414.27Z"

              variants={icon}
              initial='hidden'
              animate='visible'
            />

            <motion.path
              d="M494.8,540.79l13.36,33.53,11.71-31.69,11.67,31.69,13.32-33.53h8.42l-21.7,54.45-11.87-32.66-11.63,32.59-21.66-54.38Zm116.58-.11v7.13H586V564h19v7.13H586v16.21h25.34v7.13H578.25v-53.8Zm32.76.11v46.49h25.34v7.06H636.35V540.79Zm69.62-.29a35.15,35.15,0,0,1,6,.5,30.2,30.2,0,0,1,5.52,1.62,37.41,37.41,0,0,1,5.09,2.56q1.41.9,2.58,1.76l-5.6,5.15a22.17,22.17,0,0,0-5.21-2.92,23,23,0,0,0-8.26-1.48,23.34,23.34,0,0,0-8.3,1.48,22.6,22.6,0,0,0-7,4.39,19.76,19.76,0,0,0-4.74,6.45h0a19.46,19.46,0,0,0,0,15.3,19.88,19.88,0,0,0,4.78,6.41,20.21,20.21,0,0,0,7,4.36,23.34,23.34,0,0,0,8.3,1.48,23.66,23.66,0,0,0,8.34-1.48,20,20,0,0,0,5.21-2.88l5.56,5.15a30.38,30.38,0,0,1-2.58,1.76,29.44,29.44,0,0,1-5.09,2.56,28,28,0,0,1-5.52,1.58,33.25,33.25,0,0,1-17.27-1.44,29,29,0,0,1-9.56-6,25.92,25.92,0,0,1-6.5-8.82,26.21,26.21,0,0,1,0-20.81,27.24,27.24,0,0,1,6.5-8.86,29.84,29.84,0,0,1,9.56-6,30.74,30.74,0,0,1,8.15-1.84Zm77,1.84a30.57,30.57,0,0,1,9.6,6,27.27,27.27,0,0,1,6.54,8.79,26,26,0,0,1,0,20.89,26.76,26.76,0,0,1-6.54,8.79,29.75,29.75,0,0,1-9.6,6,33.46,33.46,0,0,1-22.68,0,29,29,0,0,1-9.56-6A25.91,25.91,0,0,1,752,578a26.21,26.21,0,0,1,0-20.81,27.22,27.22,0,0,1,6.5-8.86,29.85,29.85,0,0,1,9.56-6,33.46,33.46,0,0,1,22.68,0Zm-19.66,6.73a22.28,22.28,0,0,0-7,4.39,19.79,19.79,0,0,0-4.78,6.45,18.61,18.61,0,0,0-1.57,7.63,18.29,18.29,0,0,0,1.57,7.63,19.06,19.06,0,0,0,4.78,6.45,20.22,20.22,0,0,0,7,4.36,23.45,23.45,0,0,0,8.34,1.48,23,23,0,0,0,8.26-1.48,21.69,21.69,0,0,0,7-4.36,19.79,19.79,0,0,0,4.78-6.45,17.69,17.69,0,0,0,1.65-7.63,18,18,0,0,0-1.65-7.63,21.38,21.38,0,0,0-4.74-6.45,22.08,22.08,0,0,0-15.32-5.87A23.45,23.45,0,0,0,771.09,549.07Zm91.43,31.22L891,540.21v54.12H883.2V563.91l-20.68,29.2-20.68-29.2v30.43H834V540.21Zm88.93-39.61v7.13H926.1V564h19v7.13h-19v16.21h25.34v7.13H918.31v-53.8Zm91.42.11h13.08v7.09H1040.4v46.45h-7.79V547.88H1017v-7.09h25.81Zm68.45,1.55a30.57,30.57,0,0,1,9.6,6,27.27,27.27,0,0,1,6.54,8.79,26,26,0,0,1,0,20.89,26.76,26.76,0,0,1-6.54,8.79,29.75,29.75,0,0,1-9.6,6,33.46,33.46,0,0,1-22.68,0,29,29,0,0,1-9.56-6,25.92,25.92,0,0,1-6.5-8.82,26.21,26.21,0,0,1,0-20.81,27.24,27.24,0,0,1,6.5-8.86,29.83,29.83,0,0,1,9.56-6,33.46,33.46,0,0,1,22.68,0Zm-19.66,6.73a22.28,22.28,0,0,0-7,4.39,19.78,19.78,0,0,0-4.78,6.45,18.6,18.6,0,0,0-1.57,7.63,18.27,18.27,0,0,0,1.57,7.63,19.06,19.06,0,0,0,4.78,6.45,20.22,20.22,0,0,0,7,4.36,23.45,23.45,0,0,0,8.34,1.48,23,23,0,0,0,8.26-1.48,21.69,21.69,0,0,0,7-4.36,19.79,19.79,0,0,0,4.78-6.45,17.69,17.69,0,0,0,1.65-7.63,18,18,0,0,0-1.65-7.63,21.38,21.38,0,0,0-4.74-6.45,22.08,22.08,0,0,0-15.32-5.87A23.45,23.45,0,0,0,1091.65,549.07Zm134.42,31.22,28.48-40.08v54.12h-7.79V563.91l-20.68,29.2-20.68-29.2v30.43h-7.79V540.21Zm62.21-39.5,10.81,18.94,2.15,3.78,2.15-3.78,10.81-18.94H1323l-17.63,29.85-.27,1.08v22.62h-7.72V571.72l-.31-1.08-17.59-29.85Zm129.84-.29a35.14,35.14,0,0,1,6,.5,30.15,30.15,0,0,1,5.52,1.62,37.41,37.41,0,0,1,5.09,2.56q1.41.9,2.58,1.76l-5.6,5.15a22.2,22.2,0,0,0-5.21-2.92,23,23,0,0,0-8.26-1.48,23.34,23.34,0,0,0-8.3,1.48,22.62,22.62,0,0,0-7,4.39,19.76,19.76,0,0,0-4.74,6.45h0a19.48,19.48,0,0,0,0,15.3,19.88,19.88,0,0,0,4.78,6.41,20.21,20.21,0,0,0,7,4.36,23.34,23.34,0,0,0,8.3,1.48,23.66,23.66,0,0,0,8.34-1.48,20,20,0,0,0,5.21-2.88l5.56,5.15a30.23,30.23,0,0,1-2.58,1.76,29.4,29.4,0,0,1-5.09,2.56,28,28,0,0,1-5.52,1.58,33.25,33.25,0,0,1-17.27-1.44,29,29,0,0,1-9.56-6,25.92,25.92,0,0,1-6.5-8.82,26.21,26.21,0,0,1,0-20.81,27.24,27.24,0,0,1,6.5-8.86,29.83,29.83,0,0,1,9.56-6,30.74,30.74,0,0,1,8.15-1.84Zm66.52,54.3-24.72-54H1468l16.61,36.88,16.65-36.87h8.23Z"
              variants={icon}
              initial='hidden'
              animate='visible'
            />
          </motion.svg>
        </div>

        <motion.img alt="planet_blue_rings" src={planet_blue_rings}
          style={{ position: 'absolute', right: '9vw', top: '10vw', height: '10vw', y: -offsetY * 1.2, x: offsetY * 0.5 }}
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 50
          }} />

        <motion.img alt="planet_yellow_v2" src={planet_yellow_v2}
          style={{ position: 'absolute', right: '38vw', top: '15vw', height: '1.5vw', opacity: 1 - offsetY * 0.005, y: offsetY * 1.7, x: offsetY * 1.1, rotate: 0.7 * offsetY }}
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            stiffness: 600,
            damping: 50,
            duration: 1
          }}
        />

        <motion.img alt="planet_yellow_1" src={planet_yellow}
          style={{ position: 'absolute', left: '2.5vw', top: '35vw', height: '8vw', opacity: 1 - offsetY * 0.01, y: offsetY * 1.5, x: offsetY * 1.2 }}
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        />

        <motion.img alt="planet_pink_yellow_small" src={planet_pink_yellow_small}
          style={{ position: 'absolute', right: '7vw', top: '28vw', height: '6vw', opacity: 1 - offsetY * 0.005, y: -offsetY * 1.7, x: offsetY * 1.1, rotate: 0.7 * offsetY }}
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        />

        <motion.img alt="planet_pink_1" src={planet_pink}
          style={{ position: 'absolute', right: '21vw', top: '34vw', height: '3vw', opacity: 1 - offsetY * 0.005, y: offsetY * 1.7, x: offsetY * 3 }}
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        />

        <motion.img alt="planet_yellow_2" src={planet_yellow}
          style={{ position: 'absolute', right: '15vw', top: '23vw', height: '3vw', opacity: 1 - offsetY * 0.005, y: -offsetY * 1.7, x: -offsetY * 1.1 }}
          animate={{ rotate: -360 }}
          transition={{ ease: "linear", duration: 4, repeat: Infinity }}
        />

        <motion.img alt="planet_yellow_3" src={planet_yellow}
          style={{ position: 'absolute', right: '26vw', top: '42vw', height: '5vw', opacity: 1 - offsetY * 0.05, y: offsetY * 1.7, x: -offsetY * 1.5 }}
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 50, repeat: Infinity }}
        />

        <motion.img alt="planet_pink_2" src={planet_pink}
          style={{ position: 'absolute', left: '25vw', top: '36vw', height: '2.5vw', opacity: 1 - offsetY * 0.005, y: -offsetY * 1.7, x: -offsetY * 1.1 }}
          animate={{ rotate: -360 }}
          transition={{ ease: "linear", duration: 5, repeat: Infinity }}
        />

        <motion.img alt="planet_blue_small_2" src={planet_blue_small}
          style={{ position: 'absolute', right: '35vw', top: '35vw', height: '4vw', opacity: 1 - offsetY * 0.005, y: -offsetY * 5, x: offsetY * 0.5 }}
          initial={{ scale: 0 }}
          animate={{ rotate: -360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 50,
          }}
        />

      </div>

      <motion.div
        style={{ position: 'relative', top: '32vw', left: '-1vw' }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "tween",
          duration: 2
        }}
      >
        <Button className={style.button} variant='outlined' onClick={e => scroll.scrollTo(window.screen.width * 0.95, { duration: 2000, smooth: 'easeInOutQuint' })}>skills</Button>
      </motion.div>

      {/* -----------------------------SKILLS---------------------------------- */}

      <div style={{ pointerEvents: 'none' }}>
        <h1 style={{ position: 'relative', fontSize: '5vw', letterSpacing: '0.2em', top: '105vw', color: 'rgb(248, 163, 28)', textTransform: 'uppercase' }} >Skills</h1>
        <h3 style={{ position: 'relative', fontSize: '1.2vw', letterSpacing: '0.45em', top: '102vw', color: 'rgb(248, 163, 28)', textTransform: 'uppercase' }} >(besides googling)</h3>

        <motion.img alt="dolphin" src={dolphin}
          style={{ position: 'absolute', left: '4vw', top: '125vw', height: '9vw' }}
          animate={{ rotate: 5 }}
          transition={{ repeatType: "reverse", duration: 2, repeat: Infinity, }}
        />

        <motion.img alt="sun" src={sun}
          style={{ position: 'absolute', right: '18vw', top: '105vw', height: '6vw' }}
          animate={{ rotate: 45 }}
          transition={{ repeatType: "reverse", duration: 2, repeat: Infinity, }}
        />

      </div>

      <motion.div
        style={{ position: 'relative', top: '105vw' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button className={style.seeListButton} variant='outlined' onClick={e => scroll.scrollTo(window.screen.width * 1.95, { duration: 2000, smooth: 'easeInOutQuint' })}>see list</Button>
      </motion.div>

      {/* -----------------------------OCEAN ANIMALS---------------------------------- */}

      <div style={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none', top: '150vw' }}>
        <motion.img alt="purple_whale" src={purple_whale}
          style={{ position: 'absolute', left: '2.5vw', top: '13vw', height: '14vw' }}
          animate={{ rotate: 5 }}
          transition={{ repeatType: "reverse", duration: 2, repeat: Infinity, }}
        />

        <motion.img alt="pink_fish_1" src={pink_fish}
          style={{ position: 'absolute', right: '11vw', top: '16vw', height: '4vw' }}
          animate={{ rotate: 10 }}
          transition={{ repeatType: "reverse", duration: 0.5, repeat: Infinity, }}
        />

      </div>

      {/* -----------------------------SKILLS LIST---------------------------------- */}

      <div style={{ marginTop: '182vw', display: 'grid', justifyContent: 'center', alignItems: 'center' }}>

        <div style={{ position: 'relative', display: 'flex' }}>
          <Coin front={ts_js} back={circle_blue} text={'Typescript and Javascript'} />

          <div style={{ marginLeft: '1vw', marginRight: '1vw' }}>
            <Coin front={react} back={circle_purple} text={'React'} />
          </div>

          <Coin front={angular} back={circle_orange} text={'Angular'} />
        </div>

        <div style={{ position: 'relative', display: 'flex', marginTop: '1vw', marginBottom: '1vw' }}>
          <Coin front={python} back={circle_pink} text={'Python'} />

          <div style={{ marginLeft: '1vw', marginRight: '1vw' }}>
            <Coin front={java} back={circle_yellow} text={'Java'} />
          </div>

          <Coin front={c_plus_plus} back={circle_green} text={'C++'} />
        </div>

        <div style={{ position: 'relative', display: 'flex' }}>
          <Coin front={adobe} back={circle_hot_orange} text={'Photoshop and Illustrator'} />

          <div style={{ marginLeft: '1vw', marginRight: '1vw' }}>
            <Coin front={sql} back={circle_hot_purple} text={'SQL'} />
          </div>

          <Coin front={c_sharp} back={circle_hot_blue} text={'C#'} />
        </div>

      </div>

      <Button className={style.button2} variant='outlined' onClick={e => scroll.scrollTo(window.screen.width * 2.587, { duration: 2000, smooth: 'easeInOutQuint' })}>other details</Button>

      {/* -----------------------------OCEAN ANIMALS---------------------------------- */}

      <div style={{ position: 'absolute', width: '100%', pointerEvents: 'none' }}>

        <motion.img alt="pink_fish_2" src={pink_fish}
          style={{ position: 'absolute', left: '1vw', top: '-44vw', height: '10vw' }}
          initial={{ rotateY: '180deg' }}
          animate={{ rotate: 7 }}
          transition={{ repeatType: "reverse", duration: 1.5, repeat: Infinity, }}
        />

        <motion.img alt="yellow_octopus" src={yellow_octopus}
          style={{ position: 'absolute', left: '1.3vw', top: '-17vw', height: '20vw' }}
          animate={{ rotate: 5 }}
          transition={{ repeatType: "reverse", duration: 4, repeat: Infinity, }}
        />

        <motion.img alt="pink_octopus" src={pink_octopus}
          style={{ position: 'absolute', left: '17vw', top: '2.5vw', height: '10vw' }}
          animate={{ rotate: -5 }}
          transition={{ repeatType: "reverse", duration: 1, repeat: Infinity, }}
        />

        <motion.img alt="blue_whale" src={blue_whale}
          style={{ position: 'absolute', right: '3vw', top: '-6vw', height: '14vw' }}
          animate={{ rotate: 5 }}
          transition={{ repeatType: "reverse", duration: 3, repeat: Infinity, }}
        />

      </div>

      {/* -----------------------------OTHER DETAILS---------------------------------- */}

      <div style={{ position: 'absolute', width: '100%', top: '281vw' }}>

        <div style={{ position: 'absolute', left: '8vw', fontSize: '1.2vw', fontWeight: 'bold', wordWrap: 'break-word', width: '25vw' }}>
          <p style={{ left: '7vw', color: 'rgb(248, 128, 21)', textDecorationLine: 'underline', fontSize: '1.5vw' }}>EDUCATION</p>
          <p style={{ color: 'rgb(248, 128, 21)', top: '2vw' }}>Master's Degree in Software Engineering at UBB, 2021-2023</p>
          <p style={{ color: 'rgb(248, 128, 21)', top: '2vw' }}>Bachelor's Degree in Computer Science at TUCN, 2017-2021</p>
          <p style={{ color: 'rgb(248, 128, 21)', top: '2vw' }}>Matematica - Informatica at Colegiul National "Emil Racovita"</p>
        </div>

        <div style={{ position: 'absolute', right: '8vw', fontSize: '1.2vw', fontWeight: 'bold', wordWrap: 'break-word', width: '25vw' }}>
          <p style={{ color: 'rgb(248, 128, 21)', textDecorationLine: 'underline', fontSize: '1.5vw' }}>EXPERIENCE</p>
          <p style={{ color: 'rgb(248, 128, 21)', top: '2vw' }}>Internship at .msg on React with Typescript, summer of 2020</p>
          <Button className={style.githubButton} variant='outlined' onClick={e => window.open('https://github.com/Ioniqe', '_blank')}>github</Button>
        </div>

      </div>


    </div>
  );
}

export default App;


//TODO put an informative bubble with animation to inform user that the coin can be clicked / hovered on