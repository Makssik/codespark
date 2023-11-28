import { curses } from './cursesList';

const PricesList = ({openModal}) => {
  // console.log(props);
  return (
    <section>
      <div className="container">
        <h1 style={{ textAlign: 'center' }}>Тарифы</h1>
        <ul className="price__list">
          {curses.map((curse, index) => {
            return (
              <li className="price__item">
                <h4>{curse.name}</h4>
                <p>
                  <span className="price__value">{curse.price}</span>/
                  {curse.countOfLessons} уроков
                </p>
                <p>{curse.description}</p>
                <button
                  onClick={openModal}
                  className={`button ${index === 1 ? 'primery' : 'secondary'}`}
                >
                  Начни с набором {curse.name}
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
