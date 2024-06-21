import { Fragment } from "react";
import { Link } from "react-router-dom";

const CardProject = (props) => {
  const { children, href } = props;
  return (
    <Fragment>
      {/* /projects/capstone */}
      <Link
        to={href}
        className='min-w-sm  shadow-md hover:scale-95 transition-all ease-in duration-300 '>
        {children}
      </Link>
    </Fragment>
  );
};

const Header = (props) => {
  const { img, title } = props;
  return (
    <Fragment>
      <div className='w-full'>
        {/* /thumbnail-capstone.jpg */}
        <img src={img} alt={title} className='h-[250px] w-full object-cover' />
      </div>
    </Fragment>
  );
};

const Body = (props) => {
  const { children, title, description } = props;
  return (
    <Fragment>
      <div className='p-5'>
        <h2 className='font-bold text-lg'>{title}</h2>
        <p className='my-3 text-neutral-400 text-base'>{description}</p>

        {children}
      </div>
    </Fragment>
  );
};
const Icon = (props) => {
  const { children } = props;
  return (
    <Fragment>
      <div className='flex items-center gap-5 text-2xl mt-4'>{children}</div>
    </Fragment>
  );
};

CardProject.Header = Header;
CardProject.Body = Body;
CardProject.Icon = Icon;

export default CardProject;
