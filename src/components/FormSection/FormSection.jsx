import ContactForm from '../ContactForm/ContactForm';

const FormSection = () => {
  return (
    <section className="form-section">
      <div className="container">
        <div className="half-wrapper">
          <h2 className="title--left">Допоможемо з вибором</h2>
          <p className="subtitle--left">
            Напиши нам, якщо маєш питання щодо навчання або потрібна допомога.
            Ми передзвонимо і залюбки поговоримо з тобою
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default FormSection;
