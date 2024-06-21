import NavbarLayout from "../components/Layouts/Navbar";
import { IoMdDownload } from "react-icons/io";
import Card from "../components/Fragment/Card/Card";

import LayoutContent from "../components/Layouts/Content";
import SideBarContent from "../components/Layouts/Sidebar/SideBarContent";
import Sidebar from "../components/Layouts/Sidebar/Sidebar";
import MainContent from "../components/Layouts/Main/MainContent";

function Home() {
  return (
    <div>
      <NavbarLayout />

      <LayoutContent>
        <Sidebar>
          <SideBarContent />
        </Sidebar>
        <MainContent>
          <div className='flex justify-between flex-wrap '>
            <div className=''>
              <h1 className='text-xl lg:text-3xl font-semibold'>
                Hello, Everyone{" "}
              </h1>
              <ul className='ml-5 flex list-disc flex-col gap-1 text-neutral-600 dark:text-neutral-400 lg:flex-row lg:gap-8 my-2'>
                <li>6th Semester Student</li>

                <li className=''>Universitas Esa Unggul</li>
              </ul>
            </div>
            <div className='animate-bounce'>
              <IoMdDownload />
            </div>
          </div>

          <p className='text-sm lg:text-base my-2 text-justify tracking-wide leading-relaxed text-neutral-800'>
            My name is Mahesa Adi Kusuma, a student from Esa Unggul University,
            majoring in Informatics Engineering. I have a great interest in web
            development and focus on areas such as front-end, back-end, and
            full-stack development. I frequently use frameworks like Laravel,
            Tailwind CSS, and Bootstrap in my projects.
          </p>

          <div className=' border-t border-gray-300 dark:border-neutral-700 my-5'></div>

          <div className='w-full'>
            <h2 className='text-2xl font-semibold text-neutral-800'>Project</h2>
            <p className='my-2 text-neutral-400'>Latest Project</p>

            <div className='mt-4 flex flex-row space-x-3 pt-2 overflow-hidden'>
              <Card href='https://nusantara-trip.vercel.app/'>
                <Card.Header
                  img='/thumbnail-capstone.jpg'
                  title='Capstone Project Nusantara Trip'
                />
                <Card.Body title='Capstone Project - Nusantara Trip'>
                  SIB Dicoding Cyle 6 Front End & Back End
                </Card.Body>
              </Card>

              <Card>
                <Card.Header img='/Furniluxe.webp' title='Furniluxe' />
                <Card.Body title='Capstone Project - Nusantara Trip'>
                  Furniluxe - Laravel
                </Card.Body>
              </Card>

              <Card>
                <Card.Header img='/Store.webp' title='Store Online' />
                <Card.Body title='Store Online - Full Satck Laravel'>
                  Full Stack Laravel
                </Card.Body>
              </Card>

              <Card>
                <Card.Header img='/Nomads.webp' title='Nomads' />
                <Card.Body title='Nomads - Full Satck Laravel'>
                  Nomads - Full Stack Laravel
                </Card.Body>
              </Card>
            </div>

            <div className=' border-t border-gray-300 dark:border-neutral-700 my-5'></div>
          </div>
        </MainContent>
      </LayoutContent>
    </div>
  );
}

export default Home;
