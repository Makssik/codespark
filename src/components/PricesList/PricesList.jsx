import { curses } from './cursesList';

const PricesList = ({openModal}) => {
  // console.log(props);
  return (
    <section>
      <div className="container">
        <h2>Цінова політика</h2>
        <p className="subtitle">
          Ціна у нас не дорога, але й не дешева, саме така має бути
        </p>
        <ul className="price__list">
          {curses.map((curse, index) => {
            return (
              <li className="price__item">
                <h4>{curse.name}</h4>
                <p>
                  <span className="price__value">{curse.price}</span>/
                  {curse.countOfLessons} занять
                </p>
                <p>{curse.description}</p>
                <button
                  onClick={openModal}
                  className={`button ${index === 1 ? 'primery' : 'secondary'}`}
                >
                  Розпочни з набором {curse.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default PricesList;
