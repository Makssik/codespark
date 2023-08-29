import OurMissionImg from '../../images/our-mission.jpg';

const OurMission = () => {
  return (
    <section className="our-mission">
      <div className="container">
        <h2>Наша місія</h2>
        <p className="subtitle">
          В CodeSpark ми зобов'язані надавати відмінні освітні послуги нашим
          учням та допомагати їм досягти найкращих результатів. Ми віримо, що ми
          можемо позитивно вплинути на наше навчальне співтовариство, галузь ІТ
          та весь світ. Наша команда CodeSpark присвячена наданню найкращої
          можливої підтримки та навчання, ми завжди шукаємо способи поліпшення
          та інновацій.
        </p>
        <img src={OurMissionImg} width={300} alt="people" />
      </div>
    </section>
  );
};

export default OurMission;
