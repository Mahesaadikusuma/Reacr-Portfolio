import { Link } from "react-router-dom";

import { FaGithub, FaLaravel } from "react-icons/fa";
import { PiEye } from "react-icons/pi";
import { SiLivewire } from "react-icons/si";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import MainContent from "../../components/Layouts/Main/MainContent";
import SideBarContent from "../../components/Layouts/Sidebar/SideBarContent";
import Sidebar from "../../components/Layouts/Sidebar/Sidebar";
import LayoutContent from "../../components/Layouts/Content";
import NavbarLayout from "../../components/Layouts/Navbar";
import { Fragment, useState } from "react";
import { RiTailwindCssFill } from "react-icons/ri";

const Furniluxe = () => {
  const [FurniluxeData, setNusantaraTrip] = useState([
    {
      id: 1,
      image: "/Furniluxe.webp",
      alt: "Furniluxe",
      caption: "Furniluxe Livewire",
      description: `Furniluxe adalah sebuah website e-commerce yang dibuat untuk jual beli furniture, dikembangkan menggunakan teknologi Livewire dan Laravel. Saya, Mahesa Adi Kusuma, merancang dan mengembangkan Furniluxe dengan fitur-fitur yang lengkap untuk memberikan pengalaman berbelanja yang mudah dan nyaman bagi pengguna.
      
      `,
      fitur: [
        {
          id: 1,
          name: "Dashboard Admin CRUD Kategori dan Produk: Admin dapat membuat, membaca, memperbarui, dan menghapus kategori dan produk.",
        },

        {
          id: 2,
          name: "Dashboard Admin Daftar Transaksi: Menampilkan seluruh data transaksi pengguna.",
        },

        {
          id: 3,
          name: "Dashboard Admin Manajemen Role: Menggunakan Spatie untuk mengatur role admin.",
        },

        {
          id: 4,
          name: "Dashboard Pengguna Daftar Transaksi Pribadi: Menampilkan riwayat transaksi pengguna.",
        },

        {
          id: 5,
          name: "Halaman Home Kategori dan Produk: Menampilkan data kategori dan produk yang tersedia.",
        },

        {
          id: 6,
          name: "Detail Produk: Setiap produk memiliki halaman detail yang mencakup deskripsi produk dan ulasan produk.",
        },

        {
          id: 7,
          name: "Halaman Detail Produk : Deskripsi Produk dan Ulasan: Memiliki dua menu utama, yaitu deskripsi produk dan ulasan produk.",
        },

        {
          id: 8,
          name: "Halaman Detail Produk: Tombol Add to Cart dan Buy Now  Memungkinkan pengguna menambahkan produk ke keranjang belanja atau langsung membeli produk tersebut.",
        },
      ],
      teknologi: [
        {
          id: 1,
          name: "Livewire",
        },
        {
          id: 2,
          name: "Laravel",
        },

        {
          id: 3,
          name: "Tailwind CSS",
        },

        {
          id: 4,
          name: "Flowbite",
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
              <SiLivewire className=' text-pink-500' />
              <FaLaravel className='text-red-500' />
              <RiTailwindCssFill className='text-blue-500' />
            </div>

            <div className='flex items-center mt-10 lg:mt-0'>
              <div className='flex items-center  gap-2'>
                <FaGithub className='text-2xl' />
                <Link
                  to={"https://github.com/Mahesaadikusuma/Furniluxe-Livewire"}>
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
            {FurniluxeData.map((item) => {
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

export default Furniluxe;
