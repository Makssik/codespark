import { useState, useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import axiosInstance from '../../extension/axiosConfigure';
import Loader from '../Loader';
import { InputMask } from 'primereact/inputmask';
import { Toast } from 'primereact/toast';

const MySwal = withReactContent(Swal);

const ContactForm = ({ isMsgFieldVisible, className }) => {
  const [isLoading, setIsLoading] = useState(false);

  const toast = useRef(null);
  const { register, handleSubmit, reset, control } = useForm();

  const onSubmit = async ({ name, email, message, tel }) => {
    setIsLoading(true);
    try {
      await axiosInstance.post('/messages', {
        name,
        email,
        message,
        tel,
      });
      MySwal.fire({
        title: <p>{`Спасибо, ${name}, мы скоро свяжемся с вами`}</p>,
        icon: 'success',
      });
      reset();
    } catch (err) {
      console.log(err);
      MySwal.fire({
        title: <p>{'Ой, что-то пошло не так('}</p>,
        icon: 'error',
      });
    }
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`contact__form ${className ? className : ''}`}
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
          Имя
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
          Электронная почта
        </label>
      </div>
      <div className="contact__form-field">
        <Toast ref={toast} />
        <Controller
          control={control}
          name="tel"
          rules={{ required: 'Поле обязательно для заполнения' }}
          render={({ field }) => (
            <InputMask
              {...field}
              className="input--text"
              id="tel"
              value={field.value}
              onChange={e => field.onChange(e.target.value)}
              mask="+38(099)999-99-99"
              placeholder=" "
            />
          )}
        />
        <label className="contact__label" htmlFor="tel">
          Номер телефона
        </label>
      </div>
      {isMsgFieldVisible && (
        <div className="contact__form-field">
          <input
            placeholder=" "
            className="input--text"
            type="text"
            id="message"
            {...register('message')}
          />
          <label className="contact__label" htmlFor="message">
            Ваше сообщение
          </label>
        </div>
      )}
      <button
        className="button primery contact__submit-btn"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? <Loader /> : 'Leave a request'}
      </button>
    </form>
  );
};

export default ContactForm;
