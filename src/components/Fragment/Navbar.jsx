const Navbar = (props) => {
  const { children } = props;
  return (
    <>
      <nav className='w-full'>
        <ul className='flex flex-col gap-3'>
          {/* Icon={AiFillStar} */}
          {children}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
