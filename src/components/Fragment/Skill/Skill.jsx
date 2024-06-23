const Skill = (props) => {
  const { children, Icon, iconClassName } = props;
  return (
    <>
      <div className='flex items-center gap-3 shadow-md px-4 py-2 rounded-full'>
        {Icon && <Icon className={iconClassName} />}
        <p className='text-neutral-800 text-lg'>{children}</p>
      </div>
    </>
  );
};

export default Skill;
