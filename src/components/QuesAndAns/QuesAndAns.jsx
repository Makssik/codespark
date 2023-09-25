import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questionsAndAnswers = [
  {
    id: '1',
    question: 'Як ми працюємо?',
    answer:
      'Ми працюємо за допомогою інтерактивних онлайн-уроків та платформи Tynker, де діти вчаться програмувати через гру. Наші викладачі та навчальні матеріали спеціально розроблені для вікових груп від 4 до 16 років.',
  },
  {
    id: '2',
    question: 'Які переваги?',
    answer:
      'Навчання через гру та інтерактивні завдання. Розвиток критичного мислення та логічного способу думання. Підвищення компютерної грамотності та навичок програмування. Підтримка від кваліфікованих викладачів та наставників. Індивідуалізований підхід до кожного учня.',
  },
  {
    id: '3',
    question: 'Для кого цей курс?',
    answer:
      'Наш курс призначений для дітей від 4 до 16 років, які бажають вивчати основи програмування та розвивати навички в цій сфері. Ми маємо спеціальні програми для різних вікових груп.',
  },
  {
    id: '4',
    question: 'Чи можу я встановити індивідуальну ціну?',
    answer:
      "Так, ми розглядаємо індивідуальні ціни для деяких випадків. Будь ласка, зв'яжіться з нашим відділом обслуговування клієнтів, і ми спробуємо відповісти на ваші потреби.",
  },
  {
    id: '5',
    question: 'Чи можна спробувати безкоштовно?',
    answer:
      'Так, ми надаємо можливість спробувати наш курс безкоштовно завдяки пробному заняттю. Ви можете зареєструватися на нашому сайті і отримати доступ до першого уроку безкоштовно.',
  },
  {
    id: '6',
    question: 'Де мені надіслати форму?',
    answer:
      'Ви можете надіслати свої дані або звернутися до нас для отримання додаткової інформації через нашу форму знизу сайту. Наша команда буде рада вам допомогти і відповісти на всі ваші запитання.',
  },
];

const QuesAndAns = () => {
  const [expanded, setExpanded] = useState(0);
  return (
    <section>
      <div className="container">
        <h2>У вас залишились запитання?</h2>
        <ul className="qna__list">
          {questionsAndAnswers.map(item => {
            const isOpen = item === expanded;
            return (
              <li className="qna__item">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={item.id}
                    className="qna__ques-placeholder"
                    initial={false}
                    // animate={{
                    //   backgroundColor: isOpen ? '#101010' : '#353535',
                    //   border: '2px solid #f4cf2c',
                    // }}
                    onClick={() => setExpanded(isOpen ? false : item)}
                  >
                    <h3 className="qna__ques-header">{item.question}</h3>
                  </motion.div>
                  {isOpen && (
                    <motion.div
                      className="qna__answer-placeholder"
                      // key={item.answer}
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: 'auto' },
                        collapsed: { opacity: 0, height: 0 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="qna__answer">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default QuesAndAns;
