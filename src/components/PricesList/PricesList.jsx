const curses = [
  {
    price: '2930',
    name: 'Basic',
    countOfLessons: '6',
    description: 'For individuals and small teams',
  },
  {
    price: '5720',
    name: 'Standart',
    countOfLessons: '12',
    description: 'For startups and growing businesses',
  },
  {
    price: '10520',
    name: 'Extra',
    countOfLessons: '24',
    description: 'For organizations with advanced needs',
  },
];

const PricesList = () => {
  return (
    <section>
      <div className="container">
        <h2>Pricing</h2>
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
                  className={`button ${index === 1 ? 'primery' : 'secondary'}`}
                >
                  Get Started with {curse.name}
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
