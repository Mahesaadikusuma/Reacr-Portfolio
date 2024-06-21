import { Fragment } from "react";
import NavbarLayout from "../components/Layouts/Navbar";
import LayoutContent from "../components/Layouts/Content";
import Sidebar from "../components/Layouts/Sidebar/Sidebar";
import SideBarContent from "../components/Layouts/Sidebar/SideBarContent";
import MainContent from "../components/Layouts/Main/MainContent";
import { IoCodeSlashSharp } from "react-icons/io5";
import { FaLaravel, FaSass } from "react-icons/fa6";
import { SiLivewire } from "react-icons/si";

const About = () => {
  return (
    <Fragment>
      <NavbarLayout />
      <LayoutContent>
        <Sidebar>
          <SideBarContent />
        </Sidebar>

        <MainContent>
          <h1 className='text-2xl font-bold'>About </h1>
          <p className='text-neutral-500 my-2 text-base'>
            Showcase My projct in Protofolio
          </p>

          <hr className='border-dotted border-t-2 border-neutral-300 my-5' />

          <div>
            <p className='text-sm lg:text-base my-2 text-justify tracking-wide leading-relaxed text-neutral-800'>
              My name is Mahesa Adi Kusuma, a student from Esa Unggul
              University, majoring in Informatics Engineering. I have a great
              interest in web development and focus on areas such as front-end,
              back-end, and full-stack development. I frequently use frameworks
              like Laravel, Tailwind CSS, and Bootstrap in my projects.
            </p>

            <hr className='border-dotted border-t-2 border-neutral-300 my-10' />

            <div className=''>
              <div className='flex items-center gap-3 text-2xl'>
                <IoCodeSlashSharp />
                <h2 className='text-neutral-800 font-semibold'>Skill</h2>
              </div>
              <p className='text-neutral-500 my-2 text-base'>My Skill</p>

              <div className='flex items-center gap-3 flex-wrap'>
                <div className='flex items-center gap-3  shadow-md px-4 py-2 rounded-full'>
                  <FaLaravel className='text-red-500 text-2xl' />
                  <p className='text-neutral-800 text-lg '>Laravel</p>
                </div>

                <div className='flex items-center gap-3  shadow-md px-4 py-2 rounded-full'>
                  <FaSass className='text-pink-500 text-2xl' />
                  <p className='text-neutral-800 text-lg '>Sass</p>
                </div>

                <div className='flex items-center gap-3  shadow-md px-4 py-2 rounded-full'>
                  <SiLivewire className='text-pink-500 text-2xl' />
                  <p className='text-neutral-800 text-lg '>Livewire</p>
                </div>
              </div>
            </div>
          </div>
        </MainContent>
      </LayoutContent>
    </Fragment>
  );
};

export default About;
