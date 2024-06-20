import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { TiHome } from "react-icons/ti";
import List from "../Elements/List";
import { GrProjects } from "react-icons/gr";
import { LuLeaf } from "react-icons/lu";
import { MdDarkMode } from "react-icons/md";
import Navbar from "../Fragment/Navbar";
import Profile from "../Elements/Profile";

const NavbarLayout = (props) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleNavbar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    <>
      <section>
        <div className='container shadow-md '>
          <div className='flex justify-between p-2 items-center lg:hidden'>
            <div className=''>
              <img
                src='/profile.jpeg'
                alt=''
                className='rounded-full w-12 h-12'
              />
            </div>
            <div
              id='hamburger'
              className=' cursor-pointer'
              onClick={handleNavbar}>
              <RxHamburgerMenu className='text-2xl' />
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center relative lg:hidden'>
          <div
            id='sidebar'
            className={`w-1/2 bg-neutral-50 absolute z-10 h-screen left-0 -top-16 ${
              isSidebarVisible ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300`}>
            <div className='flex justify-between p-2 items-center'>
              <div className='flex items-center gap-3'>
                <span className='w-5 h-5 animate-bounce bg-blue-500 rounded-full flex items-center'></span>
                <p className='font-bold text-neutral-700'> Hire Me</p>
              </div>
              <div className='flex items-center p-2 hover:bg-slate-300 rounded-full cursor-pointer'>
                <MdDarkMode />
              </div>
            </div>

            <Profile
              title='Mahesa Adi Kusuma'
              img='/profile.jpeg'
              Class='w-20 h-20 rounded-full'
            />
            {/* <h1 className='text-center font-bold text-xl'>Mahesa Adi Kusuma</h1>
            <div className='flex justify-center my-5'>
              <img
                src='/profile.jpeg'
                alt='mahesa'
                className='w-20 h-20 rounded-full '
              />
            </div> */}

            <div className='flex p-5 mt-10'>
              <Navbar>
                <List route='/' Icon={() => <TiHome />}>
                  {" "}
                  Home
                </List>

                <List route='/' Icon={() => <GrProjects />}>
                  {" "}
                  Project
                </List>

                <List route='/' Icon={() => <LuLeaf />}>
                  {" "}
                  About
                </List>
              </Navbar>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavbarLayout;
