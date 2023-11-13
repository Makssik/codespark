import SoftwareImg from '../../images/software-img.webp';
import TryForFreeBtn from '../TryForFreeBtn';

const OpenRevSect = () => {
  return (
    <section className="open-rev-section">
      <div className="container">
        <div className="half-wrapper">
          <h2 className="title--left">Discover the IT revolution</h2>
          <p className="subtitle subtitle--left">
            Join our technology community and unlock the limitless
            opportunities!
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
