import { MdDarkMode } from "react-icons/md";
import Profile from "../../Elements/Profile";
import Navbar from "../../Fragment/Navbar";
import List from "../../Elements/List";
import { TiHome } from "react-icons/ti";
import { GrProjects } from "react-icons/gr";
import { LuLeaf } from "react-icons/lu";
import { RiHomeSmile2Line } from "react-icons/ri";

const SideBarContent = (props) => {
  return (
    <>
      <div className='sticky top-0 p-3 h-screen  '>
        <div className='flex justify-between'>
          <div className='flex items-center gap-3'>
            <span className='w-3 h-3 animate-bounce bg-yellow-500 rounded-full flex items-center'></span>
            <p className='font-bold text-neutral-700'> Hire Me</p>
          </div>

          <div className='flex items-center p-2 hover:bg-slate-300 rounded-full cursor-pointer'>
            <MdDarkMode />
          </div>
        </div>
        <div className='mt-10'>
          <Profile
            title='Mahesa Adi Kusuma'
            img='/profile.jpeg'
            Class='w-20 h-20 rounded-full'
          />
        </div>
        <div className=' border-t border-gray-300  '></div>

        <div className='flex mt-5'>
          <Navbar>
            <List route='/' Icon={() => <RiHomeSmile2Line />}>
              {" "}
              Home
            </List>

            <List route='/projects' Icon={() => <GrProjects />}>
              {" "}
              Project
            </List>

            <List route='/about' Icon={() => <LuLeaf />}>
              {" "}
              About
            </List>
          </Navbar>
        </div>
      </div>
    </>
  );
};

export default SideBarContent;
