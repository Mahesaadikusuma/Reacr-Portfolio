import { Fragment } from "react";
import NavbarLayout from "../../components/Layouts/Navbar";
import LayoutContent from "../../components/Layouts/Content";
import Sidebar from "../../components/Layouts/Sidebar/Sidebar";
import SideBarContent from "../../components/Layouts/Sidebar/SideBarContent";
import MainContent from "../../components/Layouts/Main/MainContent";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaBootstrap, FaGithub, FaLaravel, FaSass } from "react-icons/fa";
import { SiWebpack } from "react-icons/si";
import { PiEye } from "react-icons/pi";

const NusantaraTrip = () => {
  return (
    <Fragment>
      <NavbarLayout />

      <LayoutContent>
        <Sidebar>
          <SideBarContent />
        </Sidebar>

        <MainContent>
          <Link to={"/projects"} className='flex items-center gap-2'>
            <IoArrowBackCircleOutline className='text-2xl' />
            <p className='text-base '>Back</p>
          </Link>

          <h1 className='textlg lg:text-3xl font-bold my-3'>Nusantara Trip</h1>
          <p>SIB Dicoding Cycle 6 Front-End & Back-End</p>

          <hr className='border-dotted border-t-2 border-neutral-300 my-5' />

          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3 text-2xl'>
              <p className='font-semibold text-base'>Tech Stack : </p>
              <SiWebpack className=' text-blue-500' />
              <FaLaravel className='text-red-500' />
              <FaSass className='text-pink-500' />
              <FaBootstrap className='text-purple-500' />
            </div>
            <div className='flex items-center'>
              <div className='flex items-center gap-2'>
                <FaGithub className='text-2xl' />
                <Link to={"https://github.com/Mahesaadikusuma/nusantaraTrip"}>
                  Source Code{" "}
                </Link>
              </div>
              <p className='mx-2'>|</p>
              <div className='flex items-center gap-2'>
                <PiEye />
                <Link to={"https://nusantara-trip.vercel.app/"}>Live Demo</Link>
              </div>
            </div>
          </div>
        </MainContent>
      </LayoutContent>
    </Fragment>
  );
};

export default NusantaraTrip;
