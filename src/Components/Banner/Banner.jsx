import Bannerimg from '../../assets/Images/Banner/Banner.jpg';
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    //  sm & md Device e  dots off
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
        },
      },
    ],
};

  const SliderData = [
    {
      title: 'We Help brands with high quality services',
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look',
      btn: 'Get Started',
    },
    {
      title: 'Grow your business with smart solutions',
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look',
      btn: 'Explore Now',
    },
    {
      title: 'Grow your business with smart solutions',
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look',
      btn: 'Explore Now',
    },
    {
      title: 'Grow your business with smart solutions',
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look',
      btn: 'Explore Now',
    },
  ];

  return (
    <section className="banner-section relative w-full h-screen">
      <img 
        src={Bannerimg} 
        className="w-full h-full object-cover" 
        alt="Banner" 
      />

      {/* Overlay + Slider */}
      <div className="banner-overlay absolute inset-0 flex items-center justify-center bg-black/40">
        <div className="w-full max-w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-237.5 px-4">
          <Slider {...settings}>
            {SliderData.map((item, index) => (
              <div 
                key={index} 
                className="banner-slide text-center transition-transform duration-1000 ease-in-out"
              >
                <h2 className="text-white text-[24px] sm:text-[28px] md:text-[75px] leading-[1.2] font-bold pb-4 sm:pb-5 md:pb-8">
                  {item.title}
                </h2>
                <p className="text-white text-[12px] sm:text-[14px] md:text-[16px] leading-5 sm:leading-6 md:leading-7 font-normal pb-4 sm:pb-4 md:pb-8 max-w-[90%] sm:max-w-[85%] md:max-w-150 mx-auto">
                  {item.desc}
                </p>
                <a
                  href="#"
                  className="inline-block bg-[#6A4DF4] py-2 px-6 sm:py-3 sm:px-8 md:py-3 md:px-10 text-white text-[16px] sm:text-[18px] md:text-[20px] font-semibold rounded-lg sm:rounded-[10px] hover:bg-[#5a3cd1] transition-colors duration-300"
                >
                  {item.btn}
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Banner;
