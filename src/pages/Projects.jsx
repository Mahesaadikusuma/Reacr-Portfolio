import { Link } from "react-router-dom";
import LayoutContent from "../components/Layouts/Content";
import MainContent from "../components/Layouts/Main/MainContent";
import NavbarLayout from "../components/Layouts/Navbar";
import SideBarContent from "../components/Layouts/Sidebar/SideBarContent";
import Sidebar from "../components/Layouts/Sidebar/Sidebar";
import { FaBootstrap, FaLaravel, FaSass } from "react-icons/fa";
import { SiLivewire, SiWebpack } from "react-icons/si";
import CardProject from "../components/Fragment/Card/CardPoject";
import { RiTailwindCssFill } from "react-icons/ri";

const Projects = () => {
  return (
    <div>
      <NavbarLayout />

      <LayoutContent>
        <Sidebar>
          <SideBarContent />
        </Sidebar>

        <MainContent>
          <h1 className='text-2xl font-bold'>Projects</h1>
          <p className='text-neutral-500 my-2 text-base'>
            Showcase Project in Portfolio
          </p>

          <hr className='border-dotted border-t-2 border-neutral-300 my-5' />

          <div className='grid sm:grid-cols-2 gap-5'>
            <CardProject href={"/project/nusantara-trip"}>
              <CardProject.Header img='/thumbnail-capstone.jpg' />
              <CardProject.Body
                title='Capstone Project'
                description='SIB Dicoding Cyle 6 Front End & Back End'>
                <CardProject.Icon>
                  <SiWebpack className=' text-blue-500' />
                  <FaLaravel className='text-red-500' />
                  <FaSass className='text-pink-500' />
                  <FaBootstrap className='text-purple-500' />
                </CardProject.Icon>
              </CardProject.Body>
            </CardProject>

            <CardProject>
              <CardProject.Header img='/Furniluxe.webp' />
              <CardProject.Body
                title='Furniluxe '
                description='Full Satck Laravel Web Developer'>
                <CardProject.Icon>
                  <FaLaravel className='text-red-500' />
                  <FaSass className='text-pink-500' />
                  <SiLivewire className='text-pink-500' />
                  <RiTailwindCssFill className='text-blue-500' />
                </CardProject.Icon>
              </CardProject.Body>
            </CardProject>

            <CardProject>
              <CardProject.Header img='/Store.webp' />
              <CardProject.Body
                title='Store Online'
                description='Full Satck Laravel Web Developer Membuat Web Toko Online'>
                <CardProject.Icon>
                  <FaLaravel className='text-red-500' />
                  <FaSass className='text-pink-500' />
                  <FaBootstrap className='text-purple-500' />
                </CardProject.Icon>
              </CardProject.Body>
            </CardProject>

            <CardProject>
              <CardProject.Header img='/Nomads.webp' />
              <CardProject.Body
                title='Nomads'
                description='Full Satck Laravel Web Developer Membuat Web Travel'>
                <CardProject.Icon>
                  <FaLaravel className='text-red-500' />
                  <FaSass className='text-pink-500' />
                  <FaBootstrap className='text-purple-500' />
                </CardProject.Icon>
              </CardProject.Body>
            </CardProject>
          </div>
        </MainContent>
      </LayoutContent>
    </div>
  );
};

export default Projects;
