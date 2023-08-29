import JoinToUsImg from '../../images/join-to-us.jpg';
const JoinToUsSection = () => {
    return (
      <section className="join-to-us">
        <div className="container">
          <div className="half-wrapper">
            <h2 className="title--left">
              Почніть свою пригоду CodeSpark сьогодні!
            </h2>
            <p>Почни вивчення зараз !</p>
            <button className="button primery">Sign Up now</button>
          </div>
          <div className="img-wrapper">
            <img width={400} src={JoinToUsImg} alt="People with notebook" />
          </div>
        </div>
      </section>
    );
}
 
export default JoinToUsSection ;