import { curses } from './cursesList';

const PricesList = ({openModal}) => {
  // console.log(props);
  return (
    <section>
      <div className="container">
        <h1 style={{ textAlign: 'center' }}>Pricing</h1>
        <ul className="price__list">
          {curses.map((curse, index) => {
            return (
              <li className="price__item">
                <h4>{curse.name}</h4>
                <p>
                  <span className="price__value">{curse.price}</span>/
                  {curse.countOfLessons} lessons
                </p>
                <p>{curse.description}</p>
                <button
                  onClick={openModal}
                  className={`button ${index === 1 ? 'primery' : 'secondary'}`}
                >
                  Start with {curse.name} pack
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
