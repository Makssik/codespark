/* eslint-disable react/style-prop-object */
import FounderBohdanImg from '../../images/team/founder-bohdan.jpg';
import TeacherMaks1Img from '../../images/team/teacher-maks1.jpg';
import TeacherMaksImg from '../../images/team/teacher-maks.jpg';
import ManagerAnnaImg from '../../images/team/manager-anna.jpg';
import ManagerDariaImg from '../../images/team/manager-daria.jpg';
import ManagerMargaritaImg from '../../images/team/manager-margarita.jpg';
import DesignerAbleImg from '../../images/team/designer-able.jpg';
import DesignerDenisImg from '../../images/team/designer-denis.jpg';

import { motion } from 'framer-motion';
import setings from '../../extension/settingsForInitialTransition';

const teamList = {
  teachers: {
    descriptionOfProfession: 'Команда вчителів',
    list: [
      {
        name: 'Богдан Володимирович',
        imgSrc: FounderBohdanImg,
        credo:
          "Викладач IT-школи - це той, хто вчить майбутніх геніїв інформатики, як розв'язувати проблеми, ще до того, як вони з'являться на горизонті!",
      },
      {
        name: 'Максим Юрійович',
        imgSrc: TeacherMaks1Img,
        credo:
          "Допоможемо зручитися з технологіями, поки батьки розбираються, що таке 'Ctrl+Alt+Del'!",
      },
      {
        name: 'Максим Валерійович',
        imgSrc: TeacherMaksImg,
        credo:
          'У наших викладачів завжди є анекдоти про програмістів, які роблять навчання ще цікавішим!',
      },
    ],
  },
  designers: {
    descriptionOfProfession: 'Команда дизайнерів',
    list: [
      {
        name: 'Нурсултан Богданович',
        imgSrc: DesignerAbleImg,
        credo:
          'Дизайнер - це той, хто перетворює звичайні речі в шедеври мистецтва, і навіть найзвичайніший продукт може стати предметом захоплення завдяки його творчій руці!',
      },
      {
        name: 'Денис Олександрович',
        imgSrc: DesignerDenisImg,
        credo:
          'Дизайнер - це той, хто може зробити навіть магазин з носками виглядаючим креативно!',
      },
    ],
  },
  managers: {
    descriptionOfProfession: 'Команда менеджерів',
    list: [
      {
        name: 'Анна Дмитрівна',
        imgSrc: ManagerAnnaImg,
        credo:
          'Робота менеджера - це постійний баланс між кавою і вирішенням проблем.',
      },
      {
        name: "Дар'я Володимирівна",
        imgSrc: ManagerDariaImg,
        credo:
          'Менеджер - це той, хто знаходить рішення навіть там, де немає проблем!',
      },
      {
        name: 'Маргарита Ігорівна',
        imgSrc: ManagerMargaritaImg,
        credo:
          'Менеджер - це той, хто бачить можливості там, де інші бачать тільки перешкоди, і завжди знаходить шлях до успіху, навіть якщо цей шлях треба буде створити з нуля!',
      },
    ],
  },
};
const TeamPersonList = ({ listOfPeople }) => {
  return (
    <ul className="team__person-list">
      {listOfPeople.map(({ imgSrc, name, credo }) => {
        return (
          <motion.li key={name} {...setings} className="team__person-item">
            <div className="team__img-wrapper">
              <img width={200} src={imgSrc} alt="" />
            </div>
            <div className="team__person-description">
              <p className="team__person-description-name">{name}</p>
              <p className="team__person-description-credo">"{credo}"</p>
            </div>
          </motion.li>
        );
      })}
    </ul>
  );
};

const TeamSection = () => {
  return (
    <section className="team">
      <div className="container">
        <motion.h2 {...setings} className="title">
          Команда наших професіоналів
        </motion.h2>
        {Object.values(teamList).map(({ descriptionOfProfession, list }) => {
          return (
            <div className="team__block">
              <motion.h3 {...setings} className="team__name-of-profession">
                {descriptionOfProfession}
              </motion.h3>
              <TeamPersonList listOfPeople={list} />
              <div class="tk-blob">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 747.2 726.7"
                >
                  <path d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z"></path>
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TeamSection;
