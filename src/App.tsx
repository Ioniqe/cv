import { useEffect, useState } from 'react';
import './App.css';

import background from './visuals/background.svg';
import planet_pink_yellow from './visuals/planets/planet_pink_yellow.svg';
import planet_yellow_small from './visuals/planets/planet_yellow_small.svg';
import falling from './visuals/planets/falling.svg';
import planet_blue_rings from './visuals/planets/planet_blue_rings.svg';

function App() {

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='App'>
      <img alt="background" src={background} />
      <img alt="planet_pink_yellow" src={planet_pink_yellow} style={{ position: 'absolute', left: '9vw', top: '8vw', height: '11vw', transform: `translateY(-${offsetY * 1}px)` }} />
      <img alt="planet_yellow_small" src={planet_yellow_small} style={{ position: 'absolute', left: '3vw', top: '7vw', height: '3.5vw', transform: `translateY(-${offsetY * 1}px)` }} />
      <img alt="falling" src={falling} style={{ position: 'absolute', left: '3vw', top: '23vw', height: '13vw', transform: `translateY(-${offsetY * 1}px)` }} />
      <img alt="planet_yellow_small" src={planet_yellow_small} style={{ position: 'absolute', left: '20vw', top: '20vw', height: '2vw', transform: `translateY(-${offsetY * 1}px)` }} />
      
      <h1 style={{ position: 'absolute', fontSize: '5vw', letterSpacing: '0.3em', left: '27vw', top: '18vw', color: 'white' }} >HELLO THERE</h1>
      <h1 style={{ position: 'absolute', fontSize: '2vw', letterSpacing: '0.93em', left: '27.5vw', top: '26vw', color: 'white' }} >WELCOME TO MY CV</h1>

      <img alt="planet_blue_rings" src={planet_blue_rings} style={{ position: 'absolute', right: '9vw', top: '13vw', height: '10vw', transform: `translateY(-${offsetY * 1}px)` }} />
      
    </div>
  );
}

export default App;
