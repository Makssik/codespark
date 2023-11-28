import GroupOfPeople from '../../images/group-of-people.webp';
import TryForFreeBtn from '../TryForFreeBtn';

const EnterToIT = () => {
    return (
      <section className="enter-to-it">
        <div className="container">
          <div className="half-wraper">
            <img src={GroupOfPeople} width={600} alt="GroupOfPeople" />
            <h2 className="title--left">Вступи к IT-виртуозам</h2>
            <p className="subtitle--left">
              Начните упрощенный путь к повышению ИТ-компетентности вашего
              ребенка
            </p>
            <TryForFreeBtn className="button primery" />
          </div>
          <ul className="enter-to-it__steps-list">
            <li>
              <h3>Шаг 1</h3>
              <p>
                Свяжитесь с нашими экспертами и пройдите короткое вводное
                занятие.
              </p>
            </li>
            <li>
              <h3>Шаг 2</h3>
              <p>
                Наши специалисты подготовят индивидуальный пакет, который
                удовлетворить уникальные потребности вашего ребенка.
              </p>
            </li>
            <li>
              <h3>Шаг 3</h3>
              <p>
                Вот и все! Погрузитесь в мир интеллектуальных приключения с
                повышенной эффективностью обучения.
              </p>
            </li>
          </ul>
        </div>
      </section>
    );
}
 
export default EnterToIT;