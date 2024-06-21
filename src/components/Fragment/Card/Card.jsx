import { Link } from "react-router-dom";

const Card = (props) => {
  const { children, href } = props;
  return (
    <Link
      to={href}
      className='min-w-[250px] my-4 hover:scale-90 ease-in duration-300 cursor-pointer mx-auto'>
      {children}
    </Link>
  );
};

const Header = (props) => {
  const { img, title } = props;
  return (
    <>
      <div className=''>
        <img
          // /thumbnail-capstone.jpg
          src={img}
          alt={title}
          className='h-[150px] w-full object-cover'
        />
      </div>
    </>
  );
};

const Body = (props) => {
  const { children, title } = props;
  return (
    <>
      <div className=''>
        {/* Capstone Project - Nusantara Trip */}
        <p>{title}</p>
        <span className='text-center text-base text-neutral-400'>
          {/* SIB Dicoding Cyle 6 Front End & Back End */}
          {children}
        </span>
      </div>
    </>
  );
};

Card.Header = Header;
Card.Body = Body;

export default Card;
