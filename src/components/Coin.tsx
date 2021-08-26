import { useStylesGeneral } from "../styles/Styles";

interface CoinProps {
  front: string;
  back: string;
  text: string;
}

function Coin({ front, back, text }: CoinProps) {
  const style = useStylesGeneral();

  let position_top
  let position_left
  let font_size

  if (window.innerWidth > 1024) {
    position_top = text.length > 10 ? '52%' : '63%'
    position_left = text.length > 10 ? '45%' : '50%'
    font_size = text.length > 10 ? '1.2vw' : '1.5vw'
  } else {
    position_top = text.length > 10 ? '52%' : '63%'
    position_left = text.length > 10 ? '45%' : '50%'
    font_size = text.length > 10 ? '2.5vw' : '3vw'
  }

  return (
    <div className={style.circleContainer}>
      <div className={style.circle}>
        <figure className={style.circleFront} style={{ position: 'absolute', margin: 0 }}>
          <img alt="ts_js" src={front} />
        </figure>
        <figure className={style.circleBack} style={{ position: 'absolute', margin: 0 }}>
          <div style={{ position: 'relative', textAlign: 'center' }}>
            <img alt="circle_purple" src={back} />
            <p style={{
              position: 'absolute', fontSize: font_size, width: window.innerWidth > 1024 ? '5vw' : '10vw', height: window.innerWidth > 1024 ? '5vw' : '10vw',
              margin: 0, top: position_top, left: position_left, transform: 'translate(-50%, -50%)',
              color: 'rgb(27, 33, 112)'
            }}>{text}</p>
          </div>
        </figure>
      </div>
    </div>
  );
}

export default Coin;