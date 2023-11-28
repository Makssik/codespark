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
      Попробуй бесплатно
    </Link>
  );
};

export default TryForFreeBtn;
