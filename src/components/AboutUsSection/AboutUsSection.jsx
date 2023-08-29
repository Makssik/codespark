import AboutUs from '../../images/about-us.png';

const AboutUsSection = () => {
    return (
      <section className="about">
        <div className="container">
          <h2>Про нас</h2>
          <p className="subtitle">
            Ми пропонуємо революційний підхід до навчання ІТ. Приєднуйтесь до
            CodeSpark спільноти та даруйте своїй дитині можливість відкрити світ
            комп'ютерних знань та творчості вже сьогодні!
          </p>
          <img src={AboutUs} width={300} alt="" />
        </div>
      </section>
    );
}
 
export default AboutUsSection;