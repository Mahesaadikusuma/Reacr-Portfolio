const Sidebar = (props) => {
  const { children } = props;

  return (
    <>
      <aside className='lg:col-span-3 hidden lg:block rounded-md shadow-md'>
        {children}
      </aside>
    </>
  );
};

export default Sidebar;
