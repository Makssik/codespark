import ChildImg1 from '../../images/child-1.jpg';
import ChildImg2 from '../../images/child-2.jpg';
import TryForFreeBtn from '../TryForFreeBtn';

const PrivilegesForChild = () => {
  return (
    <section className="previleges-for-child">
      <div className="container">
        <ul className="previleges-for-child__list">
          <li className="previleges-for-child__item">
            <img src={ChildImg1} width={300} alt="" />
            <div className="half-wrapper">
              <p className="overtitle">Навчання</p>
              <h2 className="title--left">Діти на Вершині ІТ</h2>
              <p className="subtitle subtitle--left">
                Ми підтримуємо вашу мрію про яскраве майбутнє вашої дитини та
                готові допомогти в цьому! Доєднуйтеся до нашої ІТ спільноти вже
                сьогодні, і разом ми зробимо перший крок у напрямку великих
                досягнень!
              </p>
              <TryForFreeBtn className={'button secondary'} />
            </div>
          </li>
          <li className="previleges-for-child__item">
            <img src={ChildImg2} width={300} alt="" />
            <div className="half-wrapper">
              <p className="overtitle">Економія</p>
              <h2 className="title--left">Вклад у дитину</h2>
              <p className="subtitle subtitle--left">
                Надайте своїм дітям найцінніший дарунок - можливість навчатися.
                Вкладайте в їх освіту, розкриваючи перед ними безмежні
                можливості майбутнього.
              </p>
              <TryForFreeBtn className={'button secondary'} />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PrivilegesForChild;
