import * as Scroll from 'react-scroll';

let Link = Scroll.Link;
let Button = Scroll.Button;
let Element = Scroll.Element;
let Events = Scroll.Events;
let scroll = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;

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
