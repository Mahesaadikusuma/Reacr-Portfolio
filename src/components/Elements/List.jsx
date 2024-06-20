import { TiHome } from "react-icons/ti";
import { Link } from "react-router-dom";

const List = (props) => {
  const { route, children, Icon } = props;
  return (
    <li className='flex items-center gap-3 text-lg hover:bg-neutral-100 p-2'>
      {/* <TiHome /> */}
      {Icon && <Icon />}
      <Link to={route} className='text-neutral-800 font-bold'>
        {children}
      </Link>
    </li>
  );
};

export default List;
