import AboutUs from '../../images/about-us.webp';

const AboutUsSection = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="heading-text">
          <h2 className="title title--left">Про нас</h2>
          <p className="subtitle subtitle-left">
            Ми пропонуємо революційний підхід до навчання ІТ. Приєднуйтесь до
            CodeSpark спільноти та даруйте своїй дитині можливість відкрити світ
            комп'ютерних знань та творчості вже сьогодні!
          </p>
        </div>
        <img src={AboutUs} width={300} alt="" />
      </div>
    </section>
  );
};

export default AboutUsSection;
