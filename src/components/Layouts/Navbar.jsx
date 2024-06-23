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
                alt='mahesa profile'
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
        <div className='flex flex-col justify-center relative lg:hidden h-full'>
          <div
            id='sidebar'
            className={`w-full bg-neutral-50 absolute z-10 h-screen left-0 -top-16 ${
              isSidebarVisible
                ? "translate-x-0 translate-y-16"
                : "-translate-y-full"
            } transition-transform duration-300`}>
            <div className='px-5 my-5'>
              {/* <div className='flex items-center gap-5'>
                <div className='flex items-center p-2 hover:bg-slate-300 rounded-full cursor-pointer gap'>
                  <MdDarkMode />
                </div>

                <div className='cursor-pointer'>
                  <RxHamburgerMenu
                    className='text-2xl'
                    onClick={handleNavbar}
                  />
                </div>
              </div> */}
              <div className='flex justify-between'>
                <h1>Mahesa Adi Kusuma</h1>
                <div className='hover:bg-slate-200 rounded-full cursor-pointer p-2'>
                  <MdDarkMode />
                </div>
              </div>
              <hr className='border-b-2 border-gray-300 my-3' />
            </div>

            <div className='flex px-5 '>
              <Navbar>
                <List route='/' Icon={() => <TiHome />}>
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
        </div>
      </section>
    </>
  );
};

export default NavbarLayout;
