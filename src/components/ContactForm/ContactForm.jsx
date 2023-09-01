// import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ContactUs from '../../images/contact-us.jpg';
import instance from '../../extencion/axiosConfigure';

const MySwal = withReactContent(Swal);

const ContactForm = () => {

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async ({ name, email, message }) => {
    try {
      const response = await instance.post('/messages', {
        name,
        email,
        message,
      });
      MySwal.fire({
        title: <p>{`Дякуємо, ${name}, скоро ми зв'яжемось з вами`}</p>,
        icon: 'success',
      });
      reset();
      console.log(response);
    } catch (err) {
      console.log(err);
      MySwal.fire({
        title: <p>{'Упс, щось пішло не так('}</p>,
        icon: 'error',
      });
    }
  };

  return (
    <section className="contact">
      <div className="container">
        <div className="half-wrapper">
          <h2 className="title">Зв'яжіться з нами</h2>
          <p className="subtitle">
            Досліджуйте майбутнє разом з нами. Не соромтеся зв'язатися.
          </p>
          <div className="img-wrapper">
            <img src={ContactUs} width={400} alt="" />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="contact__form"
            action=""
          >
            <div className="contact__form-field">
              <input
                placeholder=" "
                className="input--text"
                type="text"
                {...register('name', {
                  required: true,
                })}
              />
              <label className="contact__label" htmlFor="">
                Ім'я
              </label>
            </div>
            <div className="contact__form-field">
              <input
                placeholder=" "
                className="input--text"
                type="email"
                {...register('email', {
                  required: true,
                })}
              />
              <label className="contact__label" htmlFor="">
                Email
              </label>
            </div>
            <div className="contact__form-field">
              <input
                placeholder=" "
                className="input--text"
                type="text"
                {...register('message')}
              />
              <label className="contact__label" htmlFor="">
                Ваше повідомлення
              </label>
            </div>
            <input
              className="button primery contact__submit-btn"
              type="submit"
              value="Залишити заявку"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;