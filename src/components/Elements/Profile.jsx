const Profile = (props) => {
  const { title, img, Class } = props;
  return (
    <>
      <h1 className='text-center font-bold text-base'>{title}</h1>
      <div className='flex justify-center my-5'>
        <img src={img} alt={title} className={Class} />
      </div>
    </>
  );
};

export default Profile;
