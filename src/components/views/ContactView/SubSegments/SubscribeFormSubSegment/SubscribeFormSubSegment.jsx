import axiosInstance from '../../../../../extension/axiosConfigure';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { IoChevronForward } from 'react-icons/io5';
import { useState } from 'react';

const MySwal = withReactContent(Swal);

const Loader = () => {
  return (
    <div class="loader-2 center">
      <span></span>
    </div>
  );
};

const SubscribeFormSubSegment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { formState, register, handleSubmit, reset } = useForm();
  const { isValid } = formState;

  const onSubmit = async ({ email }) => {
    setIsLoading(true);
    try {
      await axiosInstance.post('/email-subscriber', { email });
      MySwal.fire({
        title: (
          <p
            style={{ fontSize: '24px' }}
          >{`Дякуємо за підписку, чекайте на новини 🎉`}</p>
        ),
        icon: 'success',
      });
      reset();
    } catch (err) {
      console.log(err);
      MySwal.fire({
        title: <p style={{ fontSize: '24px' }}>{'Ой, щось пішло не так😒'}</p>,
        icon: 'error',
      });
    }
    setIsLoading(false);
  };

  return (
    <li className="contact__segments-item">
      <h3 style={{ marginTop: '15px' }}>Підписка</h3>
      <p>
        Підпишіться на розсилку — залишайтеся у курсі трендів IT-ринку, а також
        новин школи CodeSpark
      </p>
      <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="contact__form-field">
          <input
            placeholder=" "
            className="input--text"
            type="email"
            id="email"
            {...register('email', {
              required: true,
              pattern: /^[\w-]+(\.[\w-]+)*@[\w-]{2,}/,
            })}
          />
          <label className="contact__label" htmlFor="email">
            Email
          </label>
        </div>
        <button
          className={`contact__button-submit`}
          disabled={!isValid || isLoading}
          type="submit"
        >
          {isLoading ? (
            <div className="loader-wrapper">
              <Loader />
            </div>
          ) : (
            <IoChevronForward
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          )}
        </button>
      </form>
    </li>
  );
};

export default SubscribeFormSubSegment;
