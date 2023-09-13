import NotepadImg from '../../images/notepad.png';
export const RoadBigStep = ({ text, img }) => {
  return (
    <div className="road-step">
      <div className="road-step__item">
        <img width={40} src={img} alt="rocket" className="road-step--big__img" />
        <p className="road-step__text">{text}</p>
      </div>
    </div>
  );
};

export const RoadStep = ({ text, number }) => {
  return (
    <div className="road-step">
      <div className="road-step__item">
        <p className="road-step__number">{number}</p>
        <p className="road-step__text">{text}</p>
        <img
          width={40}
          src={NotepadImg}
          alt="notepad"
          className="road-step__img"
        />
      </div>
    </div>
  );
};

