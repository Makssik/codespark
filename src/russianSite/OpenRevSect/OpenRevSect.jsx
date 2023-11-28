import SoftwareImg from '../../images/software-img.webp';
import TryForFreeBtn from '../TryForFreeBtn';

const OpenRevSect = () => {
  return (
    <section className="open-rev-section">
      <div className="container">
        <div className="half-wrapper">
          <h2 className="title--left">Открой IT революцию</h2>
          <p className="subtitle subtitle--left">
            Присоединяйтесь к нашему технологическому сообществу и откройте
            безграничные возможности возможности!
          </p>
          <TryForFreeBtn className={'button primery'} />
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
