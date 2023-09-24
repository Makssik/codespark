import * as Scroll from 'react-scroll';

let Link = Scroll.Link;

const TryForFreeBtn = ({ className }) => {
  return (
    <Link
      to={'footer'}
      className={className}
      spy={true}
      smooth={true}
      offset={-20}
      duration={500}
    >
      Try For Free
    </Link>
  );
};

export default TryForFreeBtn;
