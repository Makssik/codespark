import QuesAndAns from '../../QuesAndAns';
import PricesList from '../../PricesList';
import SliderPricesList from '../../PricesList/SliderPricesList';
import RoadMap from '../../RoadMap';
import RoadMapImg from '../../../images/road-map.png';
import { useState } from 'react';
import ReactModal from 'react-modal';
import MonoLogoImg from '../../../images/banks/mono.png'
import ABankLogoImg from '../../../images/banks/a-bank.png'
import PrivatLogoImg from '../../../images/banks/privat.png'


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const PriceView = () => {
  const [isOpen, setIsOpen] = useState(false);
  function openModal() {
  setIsOpen(true);
}

  function closeModal() {
    setIsOpen(false);
  }
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  return (
    <>
      <ReactModal
        style={customStyles}
        onRequestClose={closeModal}
        isOpen={isOpen}
        parentSelector={() => document.querySelector('#root')}
        overlayClassName="modal__overlay"
        className={'price__modal'}
      >
        <h2>Здійсніть оплату зручним для вас способом</h2>

        <ul className='price__list-of-banks'>
          <li>
            <a href="https://send.monobank.ua/5ohnJj6YfV">
              <img width={100} src={MonoLogoImg} alt="" />
            </a>
          </li>
          <li>
            <a href="https://pay.a-bank.com.ua/card/U8OXBWmwxU1Z6V0j">
              <img width={100} src={ABankLogoImg} alt="" />
            </a>
          </li>
          <li>
            <a href="https://www.privat24.ua/send/0vnlt">
              <img width={100} src={PrivatLogoImg} alt="" />
            </a>
          </li>
        </ul>
        <button onClick={closeModal} className='button secondary'>Закрити вікно</button>
      </ReactModal>
      {isMobile ? (
        <SliderPricesList
          isModalOpen={isOpen}
          setIsModalOpen={setIsOpen}
          openModal={openModal}
        />
      ) : (
        <PricesList
          openModal={openModal}
        />
      )}
      <RoadMap />
      <section className="road-map__section--img">
        <div className="container">
          <h2 className="title">
            Шлях до вивчення програмування
            <br /> разом з CodeSpark
          </h2>
          <img width={'100%'} src={RoadMapImg} alt="" />
        </div>
      </section>
      <QuesAndAns />
    </>
  );
};

export default PriceView;
