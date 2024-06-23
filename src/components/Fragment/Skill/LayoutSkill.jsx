import { Fragment } from "react";
import Skill from "./Skill";
import CardSkill from "../../Layouts/CardSkill";
import { FaCss3Alt, FaHtml5, FaLaravel, FaSass } from "react-icons/fa6";
import { SiLivewire } from "react-icons/si";
import { IoCodeSlashSharp, IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";

const LayoutSkill = () => {
  return (
    <Fragment>
      <div className='flex items-center gap-3 text-2xl'>
        <IoCodeSlashSharp />
        <h2 className='text-neutral-800 font-semibold'>Skill</h2>
      </div>
      <p className='text-neutral-500 my-2 text-base'>My Skill</p>
      <div className='w-full overflow-hidden p-5'>
        <CardSkill Class='flex items-center justify-center md:justify-start animate-infinite-scroll gap-3 '>
          <Skill Icon={FaLaravel} iconClassName='text-red-500 text-2xl'>
            Laravel
          </Skill>
          <Skill Icon={FaSass} iconClassName='text-pink-500 text-2xl'>
            Sass
          </Skill>
          <Skill Icon={SiLivewire} iconClassName='text-pink-500 text-2xl'>
            Livewire
          </Skill>
          <Skill Icon={FaHtml5} iconClassName='text-orange-500 text-2xl'>
            Html
          </Skill>
          <Skill Icon={FaCss3Alt} iconClassName='text-blue-500 text-2xl'>
            Css
          </Skill>
          <Skill
            Icon={IoLogoJavascript}
            iconClassName='text-yellow-500 text-2xl'>
            Javascript
          </Skill>
          <Skill
            Icon={RiTailwindCssFill}
            iconClassName='text-[#38bdf8] text-2xl'>
            Tailwind
          </Skill>
          {/* Duplicate the content */}
          <Skill Icon={FaLaravel} iconClassName='text-red-500 text-2xl'>
            Laravel
          </Skill>
          <Skill Icon={FaSass} iconClassName='text-pink-500 text-2xl'>
            Sass
          </Skill>
          <Skill Icon={SiLivewire} iconClassName='text-pink-500 text-2xl'>
            Livewire
          </Skill>
          <Skill Icon={FaHtml5} iconClassName='text-orange-500 text-2xl'>
            Html
          </Skill>
          <Skill Icon={FaCss3Alt} iconClassName='text-blue-500 text-2xl'>
            Css
          </Skill>
          <Skill
            Icon={IoLogoJavascript}
            iconClassName='text-yellow-500 text-2xl'>
            Javascript
          </Skill>
          <Skill
            Icon={RiTailwindCssFill}
            iconClassName='text-[#38bdf8] text-2xl'>
            Tailwind
          </Skill>
        </CardSkill>

        <CardSkill Class='flex items-center justify-center md:justify-start animate-infinite-scroll-reverse gap-3 my-4'>
          <Skill Icon={FaLaravel} iconClassName='text-red-500 text-2xl'>
            Laravel
          </Skill>
          <Skill Icon={FaSass} iconClassName='text-pink-500 text-2xl'>
            Sass
          </Skill>
          <Skill Icon={SiLivewire} iconClassName='text-pink-500 text-2xl'>
            Livewire
          </Skill>
          <Skill Icon={FaHtml5} iconClassName='text-orange-500 text-2xl'>
            Html
          </Skill>
          <Skill Icon={FaCss3Alt} iconClassName='text-blue-500 text-2xl'>
            Css
          </Skill>
          <Skill
            Icon={IoLogoJavascript}
            iconClassName='text-yellow-500 text-2xl'>
            Javascript
          </Skill>
          <Skill
            Icon={RiTailwindCssFill}
            iconClassName='text-[#38bdf8] text-2xl'>
            Tailwind
          </Skill>
          {/* Duplicate the content */}
          <Skill Icon={FaLaravel} iconClassName='text-red-500 text-2xl'>
            Laravel
          </Skill>
          <Skill Icon={FaSass} iconClassName='text-pink-500 text-2xl'>
            Sass
          </Skill>
          <Skill Icon={SiLivewire} iconClassName='text-pink-500 text-2xl'>
            Livewire
          </Skill>
          <Skill Icon={FaHtml5} iconClassName='text-orange-500 text-2xl'>
            Html
          </Skill>
          <Skill Icon={FaCss3Alt} iconClassName='text-blue-500 text-2xl'>
            Css
          </Skill>
          <Skill
            Icon={IoLogoJavascript}
            iconClassName='text-yellow-500 text-2xl'>
            Javascript
          </Skill>
          <Skill
            Icon={RiTailwindCssFill}
            iconClassName='text-[#38bdf8] text-2xl'>
            Tailwind
          </Skill>
        </CardSkill>
      </div>
    </Fragment>
  );
};

export default LayoutSkill;
