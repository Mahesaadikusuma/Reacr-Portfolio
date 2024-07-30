import React, { useState, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function Carousel(props) {
  const { imageThumbnail } = props;

  const [activeIndex, setActiveIndex] = useState(0);

  const mainOptions = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    gap: "1rem",
    pagination: false,
    autoplay: true,
    interval: 3000,
    pauseOnHover: true,
  };

  const thumbsOptions = {
    rewind: true,
    autoplay: true,
    perMove: 1,
    perPage: 4,
    fixedWidth: 100,
    fixedHeight: 64,
    gap: "1rem",
    arrows: false,
    focus: "center",
    cover: true,
    pagination: false,
  };

  const mainRef = useRef(null);
  const thumbsRef = useRef(null);

  const handleThumbs = (index) => {
    setActiveIndex(index);
    if (mainRef.current && thumbsRef.current) {
      mainRef.current.go(index);
      thumbsRef.current.go(index);
    }
  };

  return (
    <div className='App_'>
      <div className='my-10'>
        {/* Komponen utama Splide untuk gambar besar */}
        <Splide
          options={mainOptions}
          ref={mainRef}
          onMove={(splide) => setActiveIndex(splide.index)}>
          {imageThumbnail.map((image) => (
            <SplideSlide key={image.id}>
              <div className='w-full h-[250px] lg:h-[500px] cursor-pointer'>
                <img
                  src={image.src}
                  alt={`product image ${image.id}`}
                  className='w-full h-full bg-cover object-cover '
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>

        {/* Komponen thumbs Splide untuk thumbnail */}
        <div className='max-w-xl mx-auto my-10 cursor-pointer'>
          <Splide options={thumbsOptions} ref={thumbsRef}>
            {imageThumbnail.map((image, index) => (
              <SplideSlide key={image.id} onClick={() => handleThumbs(index)}>
                <img
                  src={image.src}
                  alt={`product thumbnail ${image.id}`}
                  className='w-full h-full object-cover '
                  // h-[100px] lg:h-[500px]
                />

                {activeIndex === index && (
                  <div className='absolute inset-0 bg-blue-500 opacity-25'></div>
                )}
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
}
