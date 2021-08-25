import { useStylesGeneral } from "../styles/Styles";

interface CoinProps {
  front: string;
  back: string;
  text: string;
}

function Coin({ front, back, text }: CoinProps) {
  const style = useStylesGeneral();

  let position_top = text.length > 10 ? '52%' : '65%'
  let position_left = text.length > 10 ? '47%' : '50%'
  let font_size = text.length > 10 ? '1.2vw' : '1.5vw'

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
              position: 'absolute', fontSize: window.innerWidth > 420 ? font_size : '3vw', width: window.innerWidth > 420 ? '5vw' : '11vw', height: window.innerWidth > 420 ? '5vw' : '11vw',
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