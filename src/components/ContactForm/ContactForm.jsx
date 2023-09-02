import { Controller, useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import instance from '../../extension/axiosConfigure';
import InputMask from 'react-input-mask';

const MySwal = withReactContent(Swal);

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ name, email, message, tel }) => {
    console.log({ name, email, message, tel });
    try {
      await instance.post('/messages', {
        name,
        email,
        message,
        tel,
      });
      MySwal.fire({
        title: <p>{`Дякуємо, ${name}, скоро ми зв'яжемось з вами`}</p>,
        icon: 'success',
      });
      reset();
    } catch (err) {
      console.log(err);
      MySwal.fire({
        title: <p>{'Упс, щось пішло не так('}</p>,
        icon: 'error',
      });
    }
  };

<<<<<<< Updated upstream
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
=======
  return (   
>>>>>>> Stashed changes
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="contact__form"
          >
            <div className="contact__form-field">
              <input
                placeholder=" "
                className="input--text"
                type="text"
                id="name"
                {...register('name', {
                  required: true,
                })}
              />
              <label className="contact__label" htmlFor="name">
                Ім'я
              </label>
            </div>
            <div className="contact__form-field">
              <input
                placeholder=" "
                className="input--text"
                type="email"
                id="email"
                {...register('email', {
                  required: true,
                })}
              />
              <label className="contact__label" htmlFor="email">
                Email
              </label>
            </div>
            <div className="contact__form-field">
              <Controller
                name="tel"
                control={control}
                rules={{
                  required: true,
                }}
                render={({field}) => (
                  <InputMask
                    mask="+389-99-999-99-99"
                    placeholder="+38_-__-___-__-__"
                    className="input--text"
                    {...field}
                  />
                )}
              />
              {errors.firstName && <p>This is required.</p>}
              <label className="contact__label" htmlFor="tel"></label>
            </div>
            <div className="contact__form-field">
              <input
                placeholder=" "
                className="input--text"
                type="text"
                id="message"
                {...register('message')}
              />
              <label className="contact__label" htmlFor="message">
                Ваше повідомлення
              </label>
            </div>
            <input
              className="button primery contact__submit-btn"
              type="submit"
              value="Залишити заявку"
            />
          </form>
  );
};

export default ContactForm;
