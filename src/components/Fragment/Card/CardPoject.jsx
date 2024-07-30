import { Fragment } from "react";
import { NavLink, useLocation } from "react-router-dom";

const CardProject = (props) => {
  const { children, href } = props;
  const location = useLocation();

  // Memeriksa apakah tautan harus aktif berdasarkan lokasi saat ini
  const isActive = location.pathname === href;
  return (
    <Fragment>
      {/* /projects/capstone */}
      <NavLink
        to={href}
        className={`min-w-sm shadow-md hover:scale-95 transition-all ease-in duration-300 ${
          isActive ? "border-4 border-blue-500" : ""
        }`}>
        {children}
      </NavLink>
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
