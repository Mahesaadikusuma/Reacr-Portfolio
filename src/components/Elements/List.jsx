import { Link, useLocation } from "react-router-dom";

const List = (props) => {
  const { route, children, Icon } = props;
  const location = useLocation();
  return (
    <li>
      <Link
        to={route}
        className={`flex items-center gap-3 text-lg hover:bg-neutral-100 p-2 ${
          location.pathname === route ? "font-semibold" : "font-normal"
        }`}>
        {Icon && <Icon />}
        <span className='text-neutral-800 '>{children}</span>
      </Link>
    </li>
  );
};

export default List;
