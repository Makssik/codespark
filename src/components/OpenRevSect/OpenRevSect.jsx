import SoftwareImg from '../../images/software-img.jpg';

const OpenRevSect = () => {
  return (
    <section className="open-rev-section">
      <div className="container">
        <div className="half-wrapper">
          <h2 className="title--left">Відкрийте ІТ-революцію</h2>
          <p className="subtitle subtitle--left">
            Приєднуйтесь до нашої спільноти технологій та розкрийте безмежні
            можливості!
          </p>
          <button className="button primery">Try for free</button>
        </div>
        <div className="img-wrapper">
          <img
            className="open-rev-section__img"
            src={SoftwareImg}
            width={200}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default OpenRevSect;
