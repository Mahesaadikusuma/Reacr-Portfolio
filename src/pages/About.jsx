import { Fragment } from "react";
import NavbarLayout from "../components/Layouts/Navbar";
import LayoutContent from "../components/Layouts/Content";
import Sidebar from "../components/Layouts/Sidebar/Sidebar";
import SideBarContent from "../components/Layouts/Sidebar/SideBarContent";
import MainContent from "../components/Layouts/Main/MainContent";
import { IoCodeSlashSharp, IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt, FaHtml5, FaLaravel, FaSass } from "react-icons/fa6";
import { SiLivewire } from "react-icons/si";
import Skill from "../components/Fragment/Skill/Skill";
import { RiTailwindCssFill } from "react-icons/ri";
import CardSkill from "../components/Layouts/CardSkill";
import LayoutSkill from "../components/Fragment/Skill/LayoutSkill";

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
              <LayoutSkill />
            </div>
          </div>
        </MainContent>
      </LayoutContent>
    </Fragment>
  );
};

export default About;
