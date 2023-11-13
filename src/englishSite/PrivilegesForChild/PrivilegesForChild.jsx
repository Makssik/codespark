import ChildImg1 from '../../images/child-1.webp';
import ChildImg2 from '../../images/child-2.webp';
import TryForFreeBtn from '../TryForFreeBtn';

const PrivilegesForChild = () => {
    return (
      <section className="previleges-for-child">
        <div className="container">
          <ul className="previleges-for-child__list">
            <li className="previleges-for-child__item">
              <img src={ChildImg1} width={300} alt="" />
              <div className="half-wrapper">
                <p className="overtitle">Teaching</p>
                <h2 className="title--left">Children at the IT Summit</h2>
                <p className="subtitle subtitle--left">
                  We support your dream of a bright future for your child and
                  are ready to help in this! Join our IT community today, and
                  together we will take the first step towards great
                  achievements!
                </p>
                <TryForFreeBtn className={'button secondary'} />
              </div>
            </li>
            <li className="previleges-for-child__item">
              <img src={ChildImg2} width={300} alt="" />
              <div className="half-wrapper">
                <p className="overtitle">Saving</p>
                <h2 className="title--left">Contribution to the child</h2>
                <p className="subtitle subtitle--left">
                  Give your children the most valuable gift - the opportunity to
                  learn. Invest in their education, revealing to them the
                  limitless possibilities of the future.
                </p>
                <TryForFreeBtn className={'button secondary'} />
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
}
 
export default PrivilegesForChild;
