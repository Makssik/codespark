import Countdown from 'react-countdown';
import bgVideoPc from '../../video/bnz-pc.mp4';
import bgVideo from '../../video/bnz.mp4';
import { useMediaQuery } from 'react-responsive';

const renderer = ({ days, hours, minutes, seconds }) => {
  return (
    <p className="countdown__timer">
      {`${String(days).padStart(2, '0')} днів`}
      <br />
      {`${String(hours).padStart(2, '0')} годин`}
      <br />
      {`${String(minutes).padStart(2, '0')} хвилин`}
      <br />
      {`${String(seconds).padStart(2, '0')} секунд`}
    </p>
  );
};

const WebinarCountdown = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 869px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 868px)' });

  return (
    <section className="webinar">
      {isBigScreen && (
        <video autoPlay loop muted className="webinar__bg-video">
          <source src={bgVideoPc} type="video/mp4" />
        </video>
      )}
      {isTabletOrMobile && (
        <video autoPlay loop muted className="webinar__bg-video">
          <source src={bgVideo} type="video/mp4" />
        </video>
      )}
      <div className="container">
        <h1>До вебінару залишилось:</h1>
        <Countdown
          renderer={renderer}
          date={new Date('2023-09-24T15:00:00').getTime()}
        />
      </div>
    </section>
  );
};

export default WebinarCountdown;
