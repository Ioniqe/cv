import { useStylesGeneral } from "../styles/Styles";

interface CoinProps {
  front: string;
  back: string;
  text: string;
}

function Coin({ front, back, text }: CoinProps) {
  const style = useStylesGeneral();

  let position = text === 'Typescript and Javascript' ? '56%' : '70%'

  return (
    <div className={style.circleContainer}>
      <div className={style.circle}>
        <figure className={style.circleFront} style={{ width: '100%', height: '100%', position: 'absolute', margin: 0 }}>
          <img alt="ts_js" src={front} />
        </figure>
        <figure className={style.circleBack} style={{ width: '100%', height: '100%', position: 'absolute', margin: 0 }}>
          <div style={{ position: 'relative', textAlign: 'center' }}>
            <img alt="circle_purple" src={back} />
            <p style={{
              position: 'absolute', fontSize: '1vw', width: '5vw', height: '5vw',
              margin: 0, top: position, left: '50%', transform: 'translate(-50%, -50%)',
              color: 'rgb(27, 33, 112)'
            }}>{text}</p>
          </div>
        </figure>
      </div>
    </div>
  );
}

export default Coin;