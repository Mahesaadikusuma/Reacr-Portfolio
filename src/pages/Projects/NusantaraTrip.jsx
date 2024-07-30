import { Fragment, useState } from "react";
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
import Carousel from "../../components/Fragment/Carousel ";

const NusantaraTrip = () => {
  // const [thumbsImages, setfirst] = useState([
  //   { id: 1, src: "/thumbnail-capstone.jpg" },
  //   { id: 2, src: "/Furniluxe.webp" },
  //   { id: 3, src: "/Nomads.webp" },
  //   { id: 4, src: "/Store.webp" },
  // ]);

  const [NusantaraTripData, setNusantaraTrip] = useState([
    {
      id: 1,
      image: "/thumbnail-capstone.jpg",
      alt: "Nusantara Trip",
      caption: "Nusantara Trip - SIB Dicoding Cyle 6 Front End & Back End",
      description: `NusantaraTrip adalah hasil dari proyek capstone yang dilakukan sebagai bagian dari jalur pembelajaran SIB Dicoding Cycle 6, yang mencakup pengembangan front-end dan back-end. Proyek ini merupakan upaya kolaboratif dalam sebuah kelompok yang terdiri dari tiga anggota, termasuk saya sendiri, Mahesa Adi Kusuma. 
      
      Tujuan utama dari NusantaraTrip adalah untuk memberikan pengguna informasi lengkap tentang berbagai acara pariwisata dan artikel terkait. Selain itu, kami menyediakan fitur ulasan yang memungkinkan pengguna untuk mengirimkan ulasan mereka tentang acara yang mereka hadiri.`,
      fitur: [
        {
          id: 1,
          name: "Acara Pariwisata & Artikel: Menampilkan informasi terkini tentang acara pariwisata yang sedang berlangsung dan yang akan datang, serta artikel terkait.",
        },
        {
          id: 2,
          name: "Ulasan Pengguna: Memungkinkan pengguna untuk mengirim dan melihat ulasan, meningkatkan pengalaman pengguna dengan umpan balik yang autentik.",
        },
      ],

      teknologi: [
        {
          id: 1,
          name: "Progressive Web App (PWA): Memungkinkan pengguna untuk menginstal situs web sebagai aplikasi seluler, memberikan pengalaman seperti aplikasi native.",
        },
        {
          id: 2,
          name: "Webpack: Digunakan sebagai web bundler untuk menyederhanakan dan mengoptimalkan proses pengembangan",
        },
        {
          id: 3,
          name: "HTML, CSS, SCSS, dan JS: Membentuk inti dari pengembangan front-end, memastikan antarmuka pengguna yang responsif dan dinamis.",
        },

        {
          id: 4,
          name: "Bootstrap: Digunakan untuk mempercepat pengembangan antarmuka yang responsif dan menarik.",
        },
        {
          id: 6,
          name: "Laravel: Digunakan untuk API back-end, mengelola data dan operasi sisi server secara efisien.",
        },
        {
          id: 7,
          name: "Axios: Digunakan untuk melakukan pengambilan data dari back-end dengan mudah dan efisien.",
        },
        {
          id: 8,
          name: "URL Dinamis dengan Slug: Meningkatkan SEO dan memperbaiki pengalaman pengguna dengan menciptakan URL yang mudah dibaca dan deskriptif.",
        },
      ],
    },
  ]);

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

          <div className='flex lg:items-center lg:flex-row  flex-col  lg:justify-between'>
            <div className='flex items-center gap-3 text-2xl'>
              <p className='font-semibold text-base'>Tech Stack : </p>
              <SiWebpack className=' text-blue-500' />
              <FaLaravel className='text-red-500' />
              <FaSass className='text-pink-500' />
              <FaBootstrap className='text-purple-500' />
            </div>

            <div className='flex items-center mt-10 lg:mt-0'>
              <div className='flex items-center  gap-2'>
                <FaGithub className='text-2xl' />
                <Link to={"https://github.com/Mahesaadikusuma/nusantaraTrip"}>
                  Source Code{" "}
                </Link>
              </div>
              <p className='mx-2'>|</p>
              <div className='flex items-center flex-row gap-2 '>
                <PiEye />
                <Link to={"https://nusantara-trip.vercel.app/"}>Live Demo</Link>
              </div>
            </div>
          </div>

          <div className='my-10'>
            {NusantaraTripData.map((item) => {
              return (
                <div className='' key={item.id}>
                  <img
                    src={item.image}
                    alt={item.alt}
                    className='w-full object-cover bg-center'
                  />

                  <h2 className='text-lg lg:text-xl font-bold my-3'>
                    {item.caption}
                  </h2>

                  <p className='leading-relaxed'>{item.description}</p>

                  <hr className='border-dotted border-t-2 border-neutral-300 my-5' />

                  <h3 className='my-2 font-bold text-lg'>Fitur Utama: </h3>
                  <ul className='list-disc ms-5'>
                    {item.fitur.map((item) => {
                      return <li key={item.id}>{item.name}</li>;
                    })}
                  </ul>

                  <h4 className='my-2 font-bold text-lg'>
                    Teknologi yang Digunakan:{" "}
                  </h4>
                  <ul className='list-disc ms-5'>
                    {item.teknologi.map((item) => {
                      return <li key={item.id}>{item.name}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* <Carousel imageThumbnail={thumbsImages} /> */}
        </MainContent>
      </LayoutContent>
    </Fragment>
  );
};

export default NusantaraTrip;
