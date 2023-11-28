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
                <p className="overtitle">Обучение</p>
                <h2 className="title--left">Дети на вершине IT</h2>
                <p className="subtitle subtitle--left">
                  Мы поддерживаем вашу мечту о светлом будущем вашего ребенка и
                  готовы помочь в этом! Присоединяйтесь к нашему ИТ-сообществу
                  сегодня и вместе мы сделаем первый шаг к великому достижения!
                </p>
                <TryForFreeBtn className={'button secondary'} />
              </div>
            </li>
            <li className="previleges-for-child__item">
              <img src={ChildImg2} width={300} alt="" />
              <div className="half-wrapper">
                <p className="overtitle">Економия</p>
                <h2 className="title--left">Вложение в ребенка</h2>
                <p className="subtitle subtitle--left">
                  Подарите своим детям самый ценный подарок – возможность
                  учиться. Инвестируйте в их образование, открывая им
                  безграничные возможности будущего.
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
