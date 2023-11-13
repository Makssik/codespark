import GroupOfPeople from '../../images/group-of-people.webp';
import TryForFreeBtn from '../TryForFreeBtn';

const EnterToIT = () => {
    return (
      <section className="enter-to-it">
        <div className="container">
          <div className="half-wraper">
            <img src={GroupOfPeople} width={600} alt="GroupOfPeople" />
            <h2 className="title--left">Introduction to IT virtuosos</h2>
            <p className="subtitle--left">
              Start the simplified path to improving your child's IT competence
            </p>
            <TryForFreeBtn className="button primery" />
          </div>
          <ul className="enter-to-it__steps-list">
            <li>
              <h3>Step 1</h3>
              <p>Contact our experts and enjoy a short initiation session.</p>
            </li>
            <li>
              <h3>Step 2</h3>
              <p>
                Our specialists will prepare an individual package that will
                meet the unique needs of your child.
              </p>
            </li>
            <li>
              <h3>Step 3</h3>
              <p>
                That's all! Immerse yourself in the world of intellectual
                adventures with increased learning efficiency.
              </p>
            </li>
          </ul>
        </div>
      </section>
    );
}
 
export default EnterToIT;