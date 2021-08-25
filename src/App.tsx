import { useEffect, useState } from 'react';
import './App.css';

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
    <div className='headerr'>
      <div style={{ position: 'absolute', overflow: 'hidden', width: '100%', height: '100%', pointerEvents: 'none' }}>

        <motion.img alt="planet_pink_yellow" src={planet_pink_yellow}
          className='planetPinkYellow'
          // style={{ position: 'absolute', left: '9vw', top: '4vw', height: '11vw', y: -offsetY * 0.4 }}
          style={{ y: -offsetY * 0.4 }}
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 50,
          }}
        />

        <motion.img alt="planet_yellow_small_1" src={planet_yellow_small}
          className='planetYellowSmall_1'
          style={{ y: -offsetY * 1.5 }}
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        />

        <motion.img alt="falling" src={falling}
          className='falling'
          style={{ opacity: 1 - offsetY * 0.03, y: offsetY * 15, x: offsetY * 20 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 50,
          }} />

        <motion.img alt="planet_yellow_small_2" src={planet_yellow_small}
          className='planetYellowSmall_2'
          style={{ y: -offsetY * 1.5 }}
          initial={{ scale: 0 }}
          animate={{ rotate: -360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 50
          }} />

        <motion.img alt="planet_blue_small_1" src={planet_blue_small}
          className='planetBlueSmall_1'
          style={{ y: -offsetY * 2.5 }}
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
            className='planetBlue_v2'
            style={{ opacity: 1 - offsetY * 0.005, y: offsetY * 1.2, x: -offsetY * 1.4, rotate: -0.5 * offsetY }}
            animate={{ rotate: -0.5 * offsetY }}
            transition={{
              damping: 50
            }}
          />
        </motion.div>

        {window.innerWidth > 420 ?
          <div style={{ width: '55vw', margin: 'auto' }}>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              // viewBox="0 0 1920 1080"
              viewBox="0 0 1029.13 66.91"
              className="title"
            >
              <motion.path
                // d="M500,414.47v43h48v-43h14.35v99.09H548.08v-43H500v43H485.69V414.47Zm157.62-.2v13.19H610.78v30h35.15v13.19H610.78v30h46.88v13.19h-61.3V414.27Zm44,.2v86h46.88v13.06h-61.3V414.47Zm90.88,0v86h46.88v13.06h-61.3V414.47Zm133.28,2.87a56.55,56.55,0,0,1,17.75,11.19,50.46,50.46,0,0,1,12.1,16.26,48,48,0,0,1,0,38.65,49.52,49.52,0,0,1-12.1,16.26,55,55,0,0,1-17.75,11.06,61.87,61.87,0,0,1-42,0,53.73,53.73,0,0,1-17.68-11.06,48,48,0,0,1-12-16.33,48.52,48.52,0,0,1,0-38.51,50.4,50.4,0,0,1,12-16.39,55.22,55.22,0,0,1,17.68-11.13,61.87,61.87,0,0,1,42,0Zm-36.38,12.46a41.22,41.22,0,0,0-12.9,8.13,36.6,36.6,0,0,0-8.84,11.93A34.44,34.44,0,0,0,864.8,464a33.84,33.84,0,0,0,2.9,14.13A35.27,35.27,0,0,0,876.54,490a37.4,37.4,0,0,0,12.9,8.06,43.39,43.39,0,0,0,15.43,2.73,42.59,42.59,0,0,0,15.29-2.73,40.1,40.1,0,0,0,13-8.06A36.58,36.58,0,0,0,942,478.1,32.74,32.74,0,0,0,945,464a33.31,33.31,0,0,0-3-14.13,39.59,39.59,0,0,0-8.77-11.93,40.86,40.86,0,0,0-28.33-10.86A43.39,43.39,0,0,0,889.44,429.79Zm206.18-15.33h24.2v13.13h-28.77v86h-14.42v-86h-28.77V414.47h47.75Zm68.13,0v43h48v-43h14.35v99.09H1211.8v-43h-48v43H1149.4V414.47Zm157.62-.2v13.19h-46.88v30h35.14v13.19h-35.14v30h46.88v13.19h-61.3V414.27Zm29.58.2h33.62a44.33,44.33,0,0,1,15.22,2.6A38.17,38.17,0,0,1,1412,424.2a33.16,33.16,0,0,1,7.68,9.79,26.9,26.9,0,0,1,2.32,11.66v2.8a26.15,26.15,0,0,1-1.67,9.46,36.64,36.64,0,0,1-4.93,8.6,23.9,23.9,0,0,1-5.36,5.26,29,29,0,0,1-6.67,3.2l-5.07,1.87,3,4.26L1424,513.55h-18l-24.57-34.72h-15.94v34.72H1351Zm35.8,51.11.07.07a20.79,20.79,0,0,0,7.75-1.33,22.18,22.18,0,0,0,6.16-4.2,17.54,17.54,0,0,0,6-13.79,18.34,18.34,0,0,0-1.38-7.2,21.59,21.59,0,0,0-4.57-6v-.07a20.34,20.34,0,0,0-7.83-4.13,33.45,33.45,0,0,0-9.86-1.4h-17.68v38h4.49l5.43.07h11.38Zm128.13-51.31v13.19H1468v30h35.14v13.19H1468v30h46.88v13.19h-61.3V414.27Z"
                d="M22,8.47v43h48v-43H84.43v99.09H70.08v-43H22v43H7.69V8.47Zm157.62-.2V21.46H132.78v30h35.15V64.64H132.78v30h46.88v13.19h-61.3V8.27Zm44,.2v86h46.88v13.06h-61.3V8.47Zm90.88,0v86h46.88v13.06h-61.3V8.47Zm133.28,2.87a56.55,56.55,0,0,1,17.75,11.19,50.46,50.46,0,0,1,12.1,16.26,46.45,46.45,0,0,1,4.06,19.32,46.15,46.15,0,0,1-4.06,19.32,49.52,49.52,0,0,1-12.1,16.26,55,55,0,0,1-17.75,11.06,61.87,61.87,0,0,1-42,0,53.73,53.73,0,0,1-17.68-11.06,48,48,0,0,1-12-16.33,45.54,45.54,0,0,1-4-19.26,45.83,45.83,0,0,1,4-19.26,50.4,50.4,0,0,1,12-16.39,55.22,55.22,0,0,1,17.68-11.13,61.87,61.87,0,0,1,42,0ZM411.44,23.79a41.22,41.22,0,0,0-12.9,8.13,36.6,36.6,0,0,0-8.84,11.93A34.44,34.44,0,0,0,386.8,58a33.84,33.84,0,0,0,2.9,14.13A35.27,35.27,0,0,0,398.54,84a37.4,37.4,0,0,0,12.9,8.06,43.39,43.39,0,0,0,15.43,2.73,42.59,42.59,0,0,0,15.29-2.73,40.1,40.1,0,0,0,13-8.06A36.58,36.58,0,0,0,464,72.1,32.74,32.74,0,0,0,467,58a33.31,33.31,0,0,0-3-14.13,39.59,39.59,0,0,0-8.77-11.93,40.86,40.86,0,0,0-28.33-10.86A43.39,43.39,0,0,0,411.44,23.79ZM617.62,8.47h24.2V21.59H613.06v86H598.64v-86H569.87V8.47h47.75Zm68.13,0v43h48v-43h14.35v99.09H733.8v-43h-48v43H671.4V8.47Zm157.62-.2V21.46H796.49v30h35.14V64.64H796.49v30h46.88v13.19h-61.3V8.27Zm29.58.2h33.62a44.33,44.33,0,0,1,15.22,2.6A38.17,38.17,0,0,1,934,18.2,33.16,33.16,0,0,1,941.65,28,26.9,26.9,0,0,1,944,39.65v2.8a26.15,26.15,0,0,1-1.67,9.46,36.64,36.64,0,0,1-4.93,8.6A23.9,23.9,0,0,1,932,65.77a29,29,0,0,1-6.67,3.2l-5.07,1.87,3,4.26L946,107.55H928L903.46,72.84H887.52v34.72H873Zm35.8,51.11.07.07a20.79,20.79,0,0,0,7.75-1.33,22.18,22.18,0,0,0,6.16-4.2,17.54,17.54,0,0,0,6-13.79,18.34,18.34,0,0,0-1.38-7.2,21.59,21.59,0,0,0-4.57-6v-.07A20.34,20.34,0,0,0,915,22.93a33.45,33.45,0,0,0-9.86-1.4H887.44v38h4.49l5.43.07h11.38ZM1036.88,8.27V21.46H990v30h35.14V64.64H990v30h46.88v13.19h-61.3V8.27Z"

                variants={icon}
                initial='hidden'
                animate='visible'
              />
            </motion.svg>

            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              // viewBox="0 0 1920 1080"
              viewBox="0 0 1029.13 66.91"
              className="title"
              style={{ marginTop: '3vw' }}
            >
              <motion.path
                // d="M494.8,540.79l13.36,33.53,11.71-31.69,11.67,31.69,13.32-33.53h8.42l-21.7,54.45-11.87-32.66-11.63,32.59-21.66-54.38Zm116.58-.11v7.13H586V564h19v7.13H586v16.21h25.34v7.13H578.25v-53.8Zm32.76.11v46.49h25.34v7.06H636.35V540.79Zm69.62-.29a35.15,35.15,0,0,1,6,.5,30.2,30.2,0,0,1,5.52,1.62,37.41,37.41,0,0,1,5.09,2.56q1.41.9,2.58,1.76l-5.6,5.15a22.17,22.17,0,0,0-5.21-2.92,23,23,0,0,0-8.26-1.48,23.34,23.34,0,0,0-8.3,1.48,22.6,22.6,0,0,0-7,4.39,19.76,19.76,0,0,0-4.74,6.45h0a19.46,19.46,0,0,0,0,15.3,19.88,19.88,0,0,0,4.78,6.41,20.21,20.21,0,0,0,7,4.36,23.34,23.34,0,0,0,8.3,1.48,23.66,23.66,0,0,0,8.34-1.48,20,20,0,0,0,5.21-2.88l5.56,5.15a30.38,30.38,0,0,1-2.58,1.76,29.44,29.44,0,0,1-5.09,2.56,28,28,0,0,1-5.52,1.58,33.25,33.25,0,0,1-17.27-1.44,29,29,0,0,1-9.56-6,25.92,25.92,0,0,1-6.5-8.82,26.21,26.21,0,0,1,0-20.81,27.24,27.24,0,0,1,6.5-8.86,29.84,29.84,0,0,1,9.56-6,30.74,30.74,0,0,1,8.15-1.84Zm77,1.84a30.57,30.57,0,0,1,9.6,6,27.27,27.27,0,0,1,6.54,8.79,26,26,0,0,1,0,20.89,26.76,26.76,0,0,1-6.54,8.79,29.75,29.75,0,0,1-9.6,6,33.46,33.46,0,0,1-22.68,0,29,29,0,0,1-9.56-6A25.91,25.91,0,0,1,752,578a26.21,26.21,0,0,1,0-20.81,27.22,27.22,0,0,1,6.5-8.86,29.85,29.85,0,0,1,9.56-6,33.46,33.46,0,0,1,22.68,0Zm-19.66,6.73a22.28,22.28,0,0,0-7,4.39,19.79,19.79,0,0,0-4.78,6.45,18.61,18.61,0,0,0-1.57,7.63,18.29,18.29,0,0,0,1.57,7.63,19.06,19.06,0,0,0,4.78,6.45,20.22,20.22,0,0,0,7,4.36,23.45,23.45,0,0,0,8.34,1.48,23,23,0,0,0,8.26-1.48,21.69,21.69,0,0,0,7-4.36,19.79,19.79,0,0,0,4.78-6.45,17.69,17.69,0,0,0,1.65-7.63,18,18,0,0,0-1.65-7.63,21.38,21.38,0,0,0-4.74-6.45,22.08,22.08,0,0,0-15.32-5.87A23.45,23.45,0,0,0,771.09,549.07Zm91.43,31.22L891,540.21v54.12H883.2V563.91l-20.68,29.2-20.68-29.2v30.43H834V540.21Zm88.93-39.61v7.13H926.1V564h19v7.13h-19v16.21h25.34v7.13H918.31v-53.8Zm91.42.11h13.08v7.09H1040.4v46.45h-7.79V547.88H1017v-7.09h25.81Zm68.45,1.55a30.57,30.57,0,0,1,9.6,6,27.27,27.27,0,0,1,6.54,8.79,26,26,0,0,1,0,20.89,26.76,26.76,0,0,1-6.54,8.79,29.75,29.75,0,0,1-9.6,6,33.46,33.46,0,0,1-22.68,0,29,29,0,0,1-9.56-6,25.92,25.92,0,0,1-6.5-8.82,26.21,26.21,0,0,1,0-20.81,27.24,27.24,0,0,1,6.5-8.86,29.83,29.83,0,0,1,9.56-6,33.46,33.46,0,0,1,22.68,0Zm-19.66,6.73a22.28,22.28,0,0,0-7,4.39,19.78,19.78,0,0,0-4.78,6.45,18.6,18.6,0,0,0-1.57,7.63,18.27,18.27,0,0,0,1.57,7.63,19.06,19.06,0,0,0,4.78,6.45,20.22,20.22,0,0,0,7,4.36,23.45,23.45,0,0,0,8.34,1.48,23,23,0,0,0,8.26-1.48,21.69,21.69,0,0,0,7-4.36,19.79,19.79,0,0,0,4.78-6.45,17.69,17.69,0,0,0,1.65-7.63,18,18,0,0,0-1.65-7.63,21.38,21.38,0,0,0-4.74-6.45,22.08,22.08,0,0,0-15.32-5.87A23.45,23.45,0,0,0,1091.65,549.07Zm134.42,31.22,28.48-40.08v54.12h-7.79V563.91l-20.68,29.2-20.68-29.2v30.43h-7.79V540.21Zm62.21-39.5,10.81,18.94,2.15,3.78,2.15-3.78,10.81-18.94H1323l-17.63,29.85-.27,1.08v22.62h-7.72V571.72l-.31-1.08-17.59-29.85Zm129.84-.29a35.14,35.14,0,0,1,6,.5,30.15,30.15,0,0,1,5.52,1.62,37.41,37.41,0,0,1,5.09,2.56q1.41.9,2.58,1.76l-5.6,5.15a22.2,22.2,0,0,0-5.21-2.92,23,23,0,0,0-8.26-1.48,23.34,23.34,0,0,0-8.3,1.48,22.62,22.62,0,0,0-7,4.39,19.76,19.76,0,0,0-4.74,6.45h0a19.48,19.48,0,0,0,0,15.3,19.88,19.88,0,0,0,4.78,6.41,20.21,20.21,0,0,0,7,4.36,23.34,23.34,0,0,0,8.3,1.48,23.66,23.66,0,0,0,8.34-1.48,20,20,0,0,0,5.21-2.88l5.56,5.15a30.23,30.23,0,0,1-2.58,1.76,29.4,29.4,0,0,1-5.09,2.56,28,28,0,0,1-5.52,1.58,33.25,33.25,0,0,1-17.27-1.44,29,29,0,0,1-9.56-6,25.92,25.92,0,0,1-6.5-8.82,26.21,26.21,0,0,1,0-20.81,27.24,27.24,0,0,1,6.5-8.86,29.83,29.83,0,0,1,9.56-6,30.74,30.74,0,0,1,8.15-1.84Zm66.52,54.3-24.72-54H1468l16.61,36.88,16.65-36.87h8.23Z"
                d="M13.8,10.79,27.16,44.31,38.87,12.63,50.54,44.31,63.86,10.79h8.42L50.58,65.24,38.71,32.58,27.08,65.17,5.42,10.79Zm116.58-.11v7.13H105V34h19v7.13H105V57.35h25.34v7.13H97.25V10.68Zm32.76.11V57.28h25.34v7.06H155.35V10.79Zm69.62-.29a35.15,35.15,0,0,1,6,.5,30.2,30.2,0,0,1,5.52,1.62,37.41,37.41,0,0,1,5.09,2.56q1.41.9,2.58,1.76l-5.6,5.15a22.17,22.17,0,0,0-5.21-2.92,23,23,0,0,0-8.26-1.48,23.34,23.34,0,0,0-8.3,1.48,22.6,22.6,0,0,0-7,4.39A19.76,19.76,0,0,0,212.83,30h0a19.46,19.46,0,0,0,0,15.3,19.88,19.88,0,0,0,4.78,6.41,20.21,20.21,0,0,0,7,4.36,23.34,23.34,0,0,0,8.3,1.48,23.66,23.66,0,0,0,8.34-1.48,20,20,0,0,0,5.21-2.88L252,58.36a30.38,30.38,0,0,1-2.58,1.76,29.44,29.44,0,0,1-5.09,2.56,28,28,0,0,1-5.52,1.58,33.25,33.25,0,0,1-17.27-1.44,29,29,0,0,1-9.56-6,25.92,25.92,0,0,1-6.5-8.82,24.59,24.59,0,0,1-2.15-10.41,24.75,24.75,0,0,1,2.15-10.41,27.24,27.24,0,0,1,6.5-8.86,29.84,29.84,0,0,1,9.56-6,30.74,30.74,0,0,1,8.15-1.84Zm77,1.84a30.57,30.57,0,0,1,9.6,6,27.27,27.27,0,0,1,6.54,8.79,25.1,25.1,0,0,1,2.19,10.44,24.94,24.94,0,0,1-2.19,10.44,26.76,26.76,0,0,1-6.54,8.79,29.75,29.75,0,0,1-9.6,6,33.46,33.46,0,0,1-22.68,0,29,29,0,0,1-9.56-6A25.91,25.91,0,0,1,271,48a24.59,24.59,0,0,1-2.15-10.41A24.75,24.75,0,0,1,271,27.21a27.22,27.22,0,0,1,6.5-8.86,29.85,29.85,0,0,1,9.56-6,33.46,33.46,0,0,1,22.68,0Zm-19.66,6.73a22.28,22.28,0,0,0-7,4.39,19.79,19.79,0,0,0-4.78,6.45,18.61,18.61,0,0,0-1.57,7.63,18.29,18.29,0,0,0,1.57,7.63,19.06,19.06,0,0,0,4.78,6.45,20.22,20.22,0,0,0,7,4.36,23.45,23.45,0,0,0,8.34,1.48A23,23,0,0,0,306.69,56a21.69,21.69,0,0,0,7-4.36,19.79,19.79,0,0,0,4.78-6.45,17.69,17.69,0,0,0,1.65-7.63,18,18,0,0,0-1.65-7.63,21.38,21.38,0,0,0-4.74-6.45,22.08,22.08,0,0,0-15.32-5.87A23.45,23.45,0,0,0,290.09,19.07Zm91.43,31.22L410,10.21V64.34H402.2V33.91l-20.68,29.2-20.68-29.2V64.34H353V10.21Zm88.93-39.61v7.13H445.1V34h19v7.13h-19V57.35h25.34v7.13H437.31V10.68Zm91.42.11h13.08v7.09H559.4V64.34H551.6V17.88H536V10.79h25.81Zm68.45,1.55a30.57,30.57,0,0,1,9.6,6,27.27,27.27,0,0,1,6.54,8.79,25.1,25.1,0,0,1,2.19,10.44,24.94,24.94,0,0,1-2.19,10.44,26.76,26.76,0,0,1-6.54,8.79,29.75,29.75,0,0,1-9.6,6,33.46,33.46,0,0,1-22.68,0,29,29,0,0,1-9.56-6,25.92,25.92,0,0,1-6.5-8.82,24.61,24.61,0,0,1-2.15-10.41,24.76,24.76,0,0,1,2.15-10.41,27.24,27.24,0,0,1,6.5-8.86,29.83,29.83,0,0,1,9.56-6,33.46,33.46,0,0,1,22.68,0Zm-19.66,6.73a22.28,22.28,0,0,0-7,4.39,19.78,19.78,0,0,0-4.78,6.45,18.6,18.6,0,0,0-1.57,7.63,18.27,18.27,0,0,0,1.57,7.63,19.06,19.06,0,0,0,4.78,6.45,20.22,20.22,0,0,0,7,4.36A23.45,23.45,0,0,0,619,57.46,23,23,0,0,0,627.25,56a21.69,21.69,0,0,0,7-4.36A19.79,19.79,0,0,0,639,45.18a17.69,17.69,0,0,0,1.65-7.63A18,18,0,0,0,639,29.91a21.38,21.38,0,0,0-4.74-6.45A22.08,22.08,0,0,0,619,17.59,23.45,23.45,0,0,0,610.65,19.07ZM745.07,50.29l28.48-40.08V64.34h-7.79V33.91l-20.68,29.2-20.68-29.2V64.34h-7.79V10.21Zm62.21-39.5,10.81,18.94,2.15,3.78,2.15-3.78,10.81-18.94H842L824.4,40.64l-.27,1.08V64.34h-7.72V41.72l-.31-1.08L798.51,10.79Zm129.84-.29a35.14,35.14,0,0,1,6,.5,30.15,30.15,0,0,1,5.52,1.62,37.41,37.41,0,0,1,5.09,2.56q1.41.9,2.58,1.76l-5.6,5.15a22.2,22.2,0,0,0-5.21-2.92,23,23,0,0,0-8.26-1.48,23.34,23.34,0,0,0-8.3,1.48,22.62,22.62,0,0,0-7,4.39A19.76,19.76,0,0,0,917.18,30h0a19.48,19.48,0,0,0,0,15.3,19.88,19.88,0,0,0,4.78,6.41,20.21,20.21,0,0,0,7,4.36,23.34,23.34,0,0,0,8.3,1.48,23.66,23.66,0,0,0,8.34-1.48,20,20,0,0,0,5.21-2.88l5.56,5.15a30.23,30.23,0,0,1-2.58,1.76,29.4,29.4,0,0,1-5.09,2.56,28,28,0,0,1-5.52,1.58,33.25,33.25,0,0,1-17.27-1.44,29,29,0,0,1-9.56-6,25.92,25.92,0,0,1-6.5-8.82,24.61,24.61,0,0,1-2.15-10.41,24.76,24.76,0,0,1,2.15-10.41,27.24,27.24,0,0,1,6.5-8.86,29.83,29.83,0,0,1,9.56-6A30.74,30.74,0,0,1,934,10.5Zm66.52,54.3-24.72-54H987l16.61,36.88,16.65-36.87h8.23Z"

                variants={icon}
                initial='hidden'
                animate='visible'
              />
            </motion.svg>
          </div> :
          <div style={{ margin: 'auto', marginTop: '40vw' }}>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 232.7 109.05"
              className="title"
            >
              <motion.path
                d="M64.65,47.65h23v6.48H57.57V5.25H87.65v6.48h-23V26.45H81.91v6.47H64.65ZM33.83,26.46H10.27V5.35h-7V54h7V32.88h23.6V54h7V5.35H33.83Zm120-21.11h-7.08V54h30.09V47.57h-23Zm80.08,14.88a22.8,22.8,0,0,1,2,9.48,22.66,22.66,0,0,1-2,9.48,24.31,24.31,0,0,1-5.94,8,27,27,0,0,1-8.71,5.43,30.37,30.37,0,0,1-20.62,0A26.38,26.38,0,0,1,190,47.19a23.56,23.56,0,0,1-5.89-8,22.36,22.36,0,0,1-2-9.46,22.5,22.5,0,0,1,2-9.46,24.74,24.74,0,0,1,5.89-8,27.11,27.11,0,0,1,8.68-5.46,30.37,30.37,0,0,1,20.62,0h0A27.76,27.76,0,0,1,228,12.25,24.77,24.77,0,0,1,233.95,20.23Zm-5.22,9.43a16.35,16.35,0,0,0-1.47-6.94,19.44,19.44,0,0,0-4.31-5.86A20.06,20.06,0,0,0,209,11.54a21.3,21.3,0,0,0-7.59,1.33,20.24,20.24,0,0,0-6.33,4,18,18,0,0,0-4.34,5.86,16.91,16.91,0,0,0-1.42,6.95,16.61,16.61,0,0,0,1.42,6.94,17.31,17.31,0,0,0,4.34,5.83,18.36,18.36,0,0,0,6.33,4A21.3,21.3,0,0,0,209,47.73a20.91,20.91,0,0,0,7.51-1.34,19.69,19.69,0,0,0,6.38-4,18,18,0,0,0,4.34-5.84A16.07,16.07,0,0,0,228.73,29.66ZM109.25,5.35h-7.08V54h30.09V47.57h-23ZM109.13,114h30.09v-6.48h-23V92.8h17.25V86.33H116.21V71.6h23V65.12H109.13ZM85.41,86.33H61.85V65.22h-7v48.64h7.07V92.76H85.44v21.11h7V65.22h-7ZM5,65.22v6.44H19.08v42.22h7.08V71.66H40.28V65.22H5ZM178.45,97.93l11.16,15.93h-8.84l-12-17H160.9v17h-7.13l0-48.64h16.5a21.76,21.76,0,0,1,7.47,1.28,18.74,18.74,0,0,1,6,3.5,16.28,16.28,0,0,1,3.76,4.81,13.21,13.21,0,0,1,1.15,5.72V81.9a12.84,12.84,0,0,1-.82,4.64,18,18,0,0,1-2.42,4.22,11.73,11.73,0,0,1-2.65,2.58,14.24,14.24,0,0,1-3.27,1.57l-2.49.92Zm-3.28-8.24a10.89,10.89,0,0,0,3-2.06,8.61,8.61,0,0,0,2.95-6.77,9,9,0,0,0-.68-3.53,10.6,10.6,0,0,0-2.24-2.95v0a10,10,0,0,0-3.82-2,16.42,16.42,0,0,0-4.84-.69h-8.69V90.29h2.2l2.67,0h5.59l0,0A10.21,10.21,0,0,0,175.16,89.69Zm59.06-18.1V65.12H204.13V114h30.09v-6.48h-23V92.8h17.25V86.33H211.21V71.6Z"

                variants={icon}
                initial='hidden'
                animate='visible'
              />
            </motion.svg>

            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 323.55 18.36"
              className="title"
              style={{ marginTop: '3vw' }}
            >
              <motion.path
                d="M83.22,17.17l1.85,1.72a10.13,10.13,0,0,1-.86.59,9.82,9.82,0,0,1-1.7.85,9.34,9.34,0,0,1-1.84.53,11.09,11.09,0,0,1-5.76-.48,9.67,9.67,0,0,1-3.19-2,8.65,8.65,0,0,1-2.17-2.94A8.2,8.2,0,0,1,68.83,12a8.26,8.26,0,0,1,.72-3.47,9.09,9.09,0,0,1,2.17-3,10,10,0,0,1,3.19-2,10.25,10.25,0,0,1,2.72-.61h1a11.72,11.72,0,0,1,2,.17,10.07,10.07,0,0,1,1.84.54,12.48,12.48,0,0,1,1.7.85q.47.3.86.59L83.18,6.8a7.4,7.4,0,0,0-1.74-1,7.67,7.67,0,0,0-2.76-.49,7.79,7.79,0,0,0-2.77.49,7.54,7.54,0,0,0-2.33,1.46A6.59,6.59,0,0,0,72,9.44a6.49,6.49,0,0,0,0,5.1,6.63,6.63,0,0,0,1.59,2.14,6.74,6.74,0,0,0,2.33,1.45,7.79,7.79,0,0,0,2.77.49,7.89,7.89,0,0,0,2.78-.49A6.67,6.67,0,0,0,83.22,17.17Zm-65.35-3L14,3.64,10.07,14.21,5.61,3H2.82L10,21.17,13.92,10.3l4,10.89L25.12,3H22.31Zm15.58,6.73h11V18.56H36V13.15h6.34V10.77H36V5.37H44.5V3H33.45ZM55.43,3h-2.6V20.89H63.88V18.53H55.43Zm54.29,5.45a8.37,8.37,0,0,1,.73,3.48,8.32,8.32,0,0,1-.73,3.48,8.93,8.93,0,0,1-2.18,2.93,9.92,9.92,0,0,1-3.2,2,11.16,11.16,0,0,1-7.57,0,9.67,9.67,0,0,1-3.19-2,8.64,8.64,0,0,1-2.17-2.94A8.2,8.2,0,0,1,90.69,12a8.26,8.26,0,0,1,.72-3.46,9.08,9.08,0,0,1,2.17-3,10,10,0,0,1,3.19-2,11.16,11.16,0,0,1,7.57,0h0a10.2,10.2,0,0,1,3.2,2A9.1,9.1,0,0,1,109.72,8.48ZM107.79,12a6,6,0,0,0-.55-2.55,7.13,7.13,0,0,0-1.58-2.15,7.37,7.37,0,0,0-5.11-2,7.82,7.82,0,0,0-2.78.49h0a7.43,7.43,0,0,0-2.33,1.46,6.6,6.6,0,0,0-1.59,2.15A6.21,6.21,0,0,0,93.32,12a6.1,6.1,0,0,0,.52,2.55,6.36,6.36,0,0,0,1.59,2.15,6.74,6.74,0,0,0,2.33,1.45,7.82,7.82,0,0,0,2.78.49,7.67,7.67,0,0,0,2.75-.49,7.23,7.23,0,0,0,2.33-1.45,6.6,6.6,0,0,0,1.59-2.15A5.9,5.9,0,0,0,107.79,12Zm39.09,9h11.05V18.56h-8.45V13.15h6.34V10.77h-6.34V5.37h8.46V3H146.88ZM118.76,2.83V20.89h2.62V10.74l6.9,9.74,6.9-9.74V20.89h2.6V2.83l-9.5,13.37Zm85.91,5.87a8,8,0,0,1,.7,3.33,7.94,7.94,0,0,1-.7,3.33,8.52,8.52,0,0,1-2.08,2.8,9.48,9.48,0,0,1-3.06,1.91,10.66,10.66,0,0,1-7.23,0,9.24,9.24,0,0,1-3-1.91,8.26,8.26,0,0,1-2.07-2.81A7.84,7.84,0,0,1,186.5,12a7.89,7.89,0,0,1,.68-3.32,8.68,8.68,0,0,1,2.07-2.82,9.5,9.5,0,0,1,3-1.91,10.66,10.66,0,0,1,7.23,0h0a9.74,9.74,0,0,1,3.06,1.91A8.69,8.69,0,0,1,204.67,8.71ZM202.82,12a5.73,5.73,0,0,0-.53-2.43,6.81,6.81,0,0,0-1.51-2.05,7,7,0,0,0-4.86-1.87,7.47,7.47,0,0,0-2.66.47h0A7.1,7.1,0,0,0,191,7.54a6.3,6.3,0,0,0-1.52,2.05A5.92,5.92,0,0,0,189,12a5.82,5.82,0,0,0,.5,2.43A6.07,6.07,0,0,0,191,16.51a6.44,6.44,0,0,0,2.23,1.39,7.47,7.47,0,0,0,2.65.47,7.33,7.33,0,0,0,2.63-.47,6.91,6.91,0,0,0,2.23-1.39,6.3,6.3,0,0,0,1.51-2.06A5.64,5.64,0,0,0,202.82,12ZM177.7,3.5h-8.22V5.76h5v14.8h2.48V5.76h5V3.5H177.7ZM227,3.32V20.56h2.48V10.87l6.59,9.3,6.59-9.3v9.69h2.48V3.32l-9.07,12.77Zm96.73.19-5.3,11.75L313.15,3.5h-2.57l7.87,17.2,7.92-17.2Zm-63,6-.68,1.2-.68-1.2-3.44-6H253.1l5.6,9.51.1.34v7.21h2.46V13.35l.09-.34L267,3.5h-2.8ZM300,17.93a7.54,7.54,0,0,1-2.66.47,7.44,7.44,0,0,1-2.64-.47,6.44,6.44,0,0,1-2.23-1.39,6.33,6.33,0,0,1-1.52-2,6.21,6.21,0,0,1,0-4.87,6.29,6.29,0,0,1,1.52-2.05,7.21,7.21,0,0,1,2.23-1.4,7.44,7.44,0,0,1,2.64-.47,7.33,7.33,0,0,1,2.63.47,7.07,7.07,0,0,1,1.66.93l1.78-1.64q-.37-.27-.82-.56a11.92,11.92,0,0,0-1.62-.82,9.6,9.6,0,0,0-1.76-.52,11.2,11.2,0,0,0-1.91-.16h-1a9.79,9.79,0,0,0-2.58.57,9.5,9.5,0,0,0-3,1.91,8.68,8.68,0,0,0-2.07,2.82,7.89,7.89,0,0,0-.68,3.32,7.84,7.84,0,0,0,.68,3.32,8.26,8.26,0,0,0,2.07,2.81,9.24,9.24,0,0,0,3,1.91,10.59,10.59,0,0,0,5.5.46,8.92,8.92,0,0,0,1.76-.5,9.37,9.37,0,0,0,1.62-.82,9.62,9.62,0,0,0,.82-.56L301.62,17A6.37,6.37,0,0,1,300,17.93Z"

                variants={icon}
                initial='hidden'
                animate='visible'
              />
            </motion.svg>
          </div>
        }

        <motion.img alt="planet_blue_rings" src={planet_blue_rings}
          className='planetBlueRings'
          style={{ y: -offsetY * 1.2, x: offsetY * 0.5 }}
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 50
          }} />

        <motion.img alt="planet_yellow_v2" src={planet_yellow_v2}
          className='planetYellow_v2'
          style={{ opacity: 1 - offsetY * 0.005, y: offsetY * 1.7, x: offsetY * 1.1, rotate: 0.7 * offsetY }}
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            stiffness: 600,
            damping: 50,
            duration: 1
          }}
        />

        <motion.img alt="planet_yellow_1" src={planet_yellow}
          className='planetYellow_1'
          style={{ opacity: 1 - offsetY * 0.01, y: offsetY * 1.5, x: offsetY * 1.2 }}
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        />

        <motion.img alt="planet_pink_yellow_small" src={planet_pink_yellow_small}
          className='planetPinkYellowSmall'
          style={{ opacity: 1 - offsetY * 0.005, y: -offsetY * 1.7, x: offsetY * 1.1, rotate: 0.7 * offsetY }}
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        />

        <motion.img alt="planet_pink_1" src={planet_pink}
          className='planetPink_1'
          style={{ opacity: 1 - offsetY * 0.005, y: offsetY * 1.7, x: offsetY * 3 }}
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        />

        <motion.img alt="planet_yellow_2" src={planet_yellow}
          className='planetYellow_2'
          style={{ opacity: 1 - offsetY * 0.005, y: -offsetY * 1.7, x: -offsetY * 1.1 }}
          animate={{ rotate: -360 }}
          transition={{ ease: "linear", duration: 4, repeat: Infinity }}
        />

        <motion.img alt="planet_yellow_3" src={planet_yellow}
          className='planetYellow_3'
          style={{ opacity: 1 - offsetY * 0.05, y: offsetY * 1.7, x: -offsetY * 1.5 }}
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 50, repeat: Infinity }}
        />

        <motion.img alt="planet_pink_2" src={planet_pink}
          className='planetPink_2'
          style={{ opacity: 1 - offsetY * 0.005, y: -offsetY * 1.7, x: -offsetY * 1.1 }}
          animate={{ rotate: -360 }}
          transition={{ ease: "linear", duration: 5, repeat: Infinity }}
        />

        <motion.img alt="planet_blue_small_2" src={planet_blue_small}
          className='planetBlueSmall_2'
          style={{ opacity: 1 - offsetY * 0.005, y: -offsetY * 5, x: offsetY * 0.5 }}
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
        className='button_1'
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
        <div className='skillsTitle'>
          <h1 style={{ position: 'relative', fontSize: window.innerWidth > 420 ? '5vw' : '13vw', letterSpacing: '0.2em', color: 'rgb(248, 163, 28)', textTransform: 'uppercase' }} className='skillsTitle'>Skills</h1>
          <h3 style={{ position: 'relative', fontSize: window.innerWidth > 420 ? '1.2vw' : '3vw', letterSpacing: '0.45em', top: window.innerWidth > 420 ? '-3vw' : '-7vw', color: 'rgb(248, 163, 28)', textTransform: 'uppercase' }} >(besides googling)</h3>
        </div>

        <motion.img alt="dolphin" src={dolphin}
          className='dolphin'
          animate={{ rotate: 5 }}
          transition={{ repeatType: "reverse", duration: 2, repeat: Infinity, }}
        />

        <motion.img alt="sun" src={sun}
          className='sun'
          animate={{ rotate: 45 }}
          transition={{ repeatType: "reverse", duration: 2, repeat: Infinity, }}
        />

      </div>

      <motion.div
        style={{ position: 'relative' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button className={style.seeListButton} variant='outlined' onClick={e => scroll.scrollTo(window.screen.width * 1.95, { duration: 2000, smooth: 'easeInOutQuint' })}>see list</Button>
      </motion.div>

      {/* -----------------------------OCEAN ANIMALS---------------------------------- */}

      <div style={{ position: 'absolute', width: '100%', pointerEvents: 'none', top: '150vw' }}>
        <motion.img alt="purple_whale" src={purple_whale}
          className='purpleWhale'
          animate={{ rotate: 5 }}
          transition={{ repeatType: "reverse", duration: 2, repeat: Infinity, }}
        />

        <motion.img alt="pink_fish_1" src={pink_fish}
          className='pinkFish_1'
          animate={{ rotate: 10 }}
          transition={{ repeatType: "reverse", duration: 0.5, repeat: Infinity, }}
        />

      </div>

      {/* -----------------------------SKILLS LIST---------------------------------- */}

      <div style={{ marginTop: window.innerWidth > 420 ? '75vw' : '200vw', display: 'grid', justifyContent: 'center', alignItems: 'center' }}>

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
          className='pinkFish_2'
          initial={{ rotateY: '180deg' }}
          animate={{ rotate: 7 }}
          transition={{ repeatType: "reverse", duration: 1.5, repeat: Infinity, }}
        />

        <motion.img alt="yellow_octopus" src={yellow_octopus}
          className='yellowOctopus'
          animate={{ rotate: 5 }}
          transition={{ repeatType: "reverse", duration: 4, repeat: Infinity, }}
        />

        <motion.img alt="pink_octopus" src={pink_octopus}
          className='pinkOctopus'
          animate={{ rotate: -5 }}
          transition={{ repeatType: "reverse", duration: 1, repeat: Infinity, }}
        />

        <motion.img alt="blue_whale" src={blue_whale}
          className='blueWhale'
          animate={{ rotate: 5 }}
          transition={{ repeatType: "reverse", duration: 3, repeat: Infinity, }}
        />

      </div>

      {/* -----------------------------OTHER DETAILS---------------------------------- */}

      {/* <div style={{ position: 'absolute', width: '100%', top: window.innerWidth > 420 ? '281vw' : '500vw' }}> */}
      {/* <div style={{ position: 'absolute', width: '100%', marginBottom: '1vw' }}> */}
      <div style={{ marginTop: window.innerWidth > 420 ? '47vw' : '110vw', display: 'grid', justifyContent: 'center', alignItems: 'center' }}>

        <div className='educationStyle'>
          <p style={{ left: '7vw', color: window.innerWidth > 420 ? 'rgb(248, 128, 21)' : 'white', textDecorationLine: 'underline' }}>EDUCATION</p>
          <p style={{ color: window.innerWidth > 420 ? 'rgb(248, 128, 21)' : 'white', top: '2vw' }}>Master's Degree in Software Engineering at UBB, 2021-2023</p>
          <p style={{ color: window.innerWidth > 420 ? 'rgb(248, 128, 21)' : 'white', top: '2vw' }}>Bachelor's Degree in Computer Science at TUCN, 2017-2021</p>
          <p style={{ color: window.innerWidth > 420 ? 'rgb(248, 128, 21)' : 'white', top: '2vw' }}>Matematica - Informatica at Colegiul National "Emil Racovita"</p>
        </div>

        <div className='experienceStyle'>
          <p style={{ color: window.innerWidth > 420 ? 'rgb(248, 128, 21)' : 'white', textDecorationLine: 'underline' }}>EXPERIENCE</p>
          <p style={{ color: window.innerWidth > 420 ? 'rgb(248, 128, 21)' : 'white', top: '2vw' }}>Internship at .msg systems on React with Typescript, summer of 2020</p>
          <Button className={style.githubButton} variant='outlined' onClick={e => window.open('https://github.com/Ioniqe', '_blank')}>github</Button>
        </div>

      </div>


    </div>
  );
}

export default App;


//TODO put an informative bubble with animation to inform user that the coin can be clicked / hovered on