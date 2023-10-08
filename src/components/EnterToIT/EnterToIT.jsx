import GroupOfPeople from '../../images/group-of-people.webp';
import TryForFreeBtn from '../TryForFreeBtn';

const EnterToIT = () => {
    return (
      <section className="enter-to-it">
        <div className="container">
          <div className="half-wraper">
            <img src={GroupOfPeople} width={600} alt="GroupOfPeople" />
            <h2 className="title--left">Вступ до ІТ-віртуозів</h2>
            <p className="subtitle--left">
              Почніть спрощений шлях до підвищення ІТ-компетентності вашої
              дитини
            </p>
            <TryForFreeBtn className="button primery"/>
          </div>
          <ul className="enter-to-it__steps-list">
            <li>
              <h3>Крок 1</h3>
              <p>
                Звертайтеся до наших експертів та насолоджуйтеся короткою
                ініціаційною сесією.
              </p>
            </li>
            <li>
              <h3>Крок 2</h3>
              <p>
                Наші фахівці підготують індивідуальний пакет, який відповідатиме
                унікальним потребам вашої дитини.
              </p>
            </li>
            <li>
              <h3>Крок 3</h3>
              <p>
                Ось і все! Погрузніться в світ інтелектуальних пригод з
                підвищеною ефективністю навчання.
              </p>
            </li>
          </ul>
        </div>
      </section>
    );
}
 
export default EnterToIT;