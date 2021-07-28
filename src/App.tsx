import { useEffect, useState } from 'react';
import './App.css';

import background from './visuals/background.svg';
import planet_pink_yellow from './visuals/planets/planet_pink_yellow.svg';
import planet_yellow_small from './visuals/planets/planet_yellow_small.svg';
import falling from './visuals/planets/falling.svg';
import planet_blue_rings from './visuals/planets/planet_blue_rings.svg';
import planet_blue_small from './visuals/planets/planet_blue_small.svg';
import planet_blue_v2 from './visuals/planets/planet_blue_v2.svg';
import planet_yellow from './visuals/planets/planet_yellow.svg';

function App() {

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='App'>
      <img alt="background" src={background} style={{left: 0, position: 'absolute'}} />
      <div style={{position: 'absolute', overflow: 'hidden', width: '100%', height: '100%'}}>
        <img alt="planet_pink_yellow" src={planet_pink_yellow} style={{ position: 'absolute',  left: '9vw', top: '6vw', height: '11vw', transform: `translateY(-${offsetY * 1.2}px)` }} />
        <img alt="planet_yellow_small_1" src={planet_yellow_small} style={{position: 'absolute', left: '2vw', top: '7vw', height: '3.5vw', transform: `translateY(-${offsetY * 1}px)` }} />
        <img alt="falling" src={falling} style={{ position: 'absolute', left: '4vw', top: '18vw', height: '9vw', opacity: 1 - offsetY * 0.03, transform: `translateY(${offsetY * 15}px)  translateX(${offsetY * 20}px)`}} />
        <img alt="planet_yellow_small_2" src={planet_yellow_small} style={{position: 'absolute', left: '20vw', top: '20vw', height: '2vw', transform: `translateY(-${offsetY * 1}px)` }} />
        <img alt="planet_blue_small" src={planet_blue_small} style={{position: 'absolute', left: '25vw', top: '15vw', height: '2.5vw', transform: `translateY(-${offsetY * 1}px)` }} />
        <img alt="planet_blue_v2" src={planet_blue_v2} style={{position: 'absolute', left: '14vw', top: '28vw', height: '6.5vw', transform: `translateY(-${offsetY * 1.2}px)  translateX(-${offsetY * 1.4}px) rotate(${-0.5 * offsetY}deg)` }} />

        <h1 style={{position: 'absolute', fontSize: '5vw', letterSpacing: '0.3em', left: '25vw', top: '30vh', color: 'white' }} >HELLO THERE</h1>
        <h1 style={{position: 'absolute', fontSize: '2vw', letterSpacing: '0.93em', left: '25.5vw', top: '45vh', color: 'white' }} >WELCOME TO MY CV</h1>

        <img alt="planet_blue_rings" src={planet_blue_rings} style={{position: 'absolute', right: '9vw', top: '13vw', height: '10vw', transform: `translateY(-${offsetY * 1.2}px)` }} />
        <img alt="planet_yellow" src={planet_yellow} style={{position: 'absolute', left: '3vw', top: '37vw', height: '7vw', transform: `translateY(-${offsetY * 1}px)` }} />

      </div>

    </div>
  );
}

export default App;
