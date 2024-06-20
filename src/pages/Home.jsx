import { MdDarkMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import List from "../components/Elements/List";
import { TiHome } from "react-icons/ti";
import { GrProjects } from "react-icons/gr";
import { LuLeaf } from "react-icons/lu";
import { useState } from "react";

import Navbar from "../components/Fragment/Navbar";
import NavbarLayout from "../components/Layouts/Navbar";
import Profile from "../components/Elements/Profile";
import { IoMdDownload } from "react-icons/io";
import Card from "../components/Fragment/Card";

function Home() {
  return (
    <div>
      <NavbarLayout />
      <main>
        <div className='container my-10'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10  px-2'>
            {/* grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 */}
            <div className='lg:col-span-3 hidden lg:block rounded-3xl shadow-xl'>
              <div className='sticky top-0  p-3 h-screen  '>
                <div className='flex justify-between'>
                  <div className='flex items-center gap-3'>
                    <span className='w-3 h-3 animate-bounce bg-yellow-500 rounded-full flex items-center'></span>
                    <p className='font-bold text-neutral-700'> Hire Me</p>
                  </div>

                  <div className='flex items-center p-2 hover:bg-slate-300 rounded-full cursor-pointer'>
                    <MdDarkMode />
                  </div>
                </div>
                <div className='my-10'>
                  <Profile
                    title='Mahesa Adi Kusuma'
                    img='/profile.jpeg'
                    Class='w-20 h-20 rounded-full'
                  />
                </div>

                <div className='flex mt-10'>
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
            <div className='col-span-12 lg:col-span-9  '>
              <div className='flex justify-between flex-wrap '>
                <div className=''>
                  <h1 className='text-xl lg:text-3xl font-semibold'>
                    Hello, Everyone{" "}
                  </h1>
                  <ul className='list-disc ms-5 flex flex-wrap gap-4 my-2'>
                    <li>6th Semester Student</li>
                    <li className='ms-2'>Universitas Esa Unggul</li>
                  </ul>
                </div>
                <div className='animate-bounce'>
                  <IoMdDownload />
                </div>
              </div>

              <p className='text-sm text-justify tracking-wide leading-relaxed text-neutral-800'>
                My name is Mahesa Adi Kusuma, a student from Esa Unggul
                University, majoring in Informatics Engineering. I have a great
                interest in web development and focus on areas such as
                front-end, back-end, and full-stack development. I frequently
                use frameworks like Laravel, Tailwind CSS, and Bootstrap in my
                projects.
              </p>

              <div className=' border-t border-gray-300 dark:border-neutral-700 my-5'></div>

              <div className='w-full'>
                <h2 className='text-3xl font-semibold text-neutral-800'>
                  Project
                </h2>
                <p className='my-2 text-neutral-400'>Latest Project</p>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 self-center'>
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
                    <Card.Header
                      img='/thumbnail-capstone.jpg'
                      title='Capstone Project Nusantara Trip'
                    />
                    <Card.Body title='Capstone Project - Nusantara Trip'>
                      SIB Dicoding Cyle 6 Front End & Back End
                    </Card.Body>
                  </Card>

                  <Card>
                    <Card.Header
                      img='/thumbnail-capstone.jpg'
                      title='Capstone Project Nusantara Trip'
                    />
                    <Card.Body title='Capstone Project - Nusantara Trip'>
                      SIB Dicoding Cyle 6 Front End & Back End
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
