import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import {
  BiSolidChevronLeftCircle,
  BiSolidChevronRightCircle,
} from "react-icons/bi";

import review1 from "../../assets/Images/Reviews/reviews1.png";
import review2 from "../../assets/Images/Reviews/reviews2.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ================= Arrow Components =================
function PrevArrow({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="hidden lg:block absolute top-1/2 -left-12 xl:-left-16 -translate-y-1/2 z-20 cursor-pointer"
    >
      <BiSolidChevronLeftCircle className="text-[40px] text-[#4756DF]" />
    </button>
  );
}

function NextArrow({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="hidden lg:block absolute top-1/2 -right-12 xl:-right-16 -translate-y-1/2 z-20 cursor-pointer"
    >
      <BiSolidChevronRightCircle className="text-[40px] text-[#4756DF]" />
    </button>
  );
}

// ================= Reviews Component =================
function Reviews() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    speed: 600,
    cssEase: "ease-in-out",
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0px",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          arrows: false,
        },
      },
    ],
  };

  const review = [
    {
      id: 1,
      image1: review1,
      desc: "I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.",
      image2: review2,
      head: "Eric Drake",
      desc2: "Digital Marketor",
    },
    {
      id: 2,
      image1: review1,
      desc: "I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.",
      image2: review2,
      head: "Mim Islam",
      desc2: "Web Developer",
    },
    {
      id: 3,
      image1: review1,
      desc: "I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.",
      image2: review2,
      head: "Rosa Farmer",
      desc2: "UI Designer",
    },
    {
      id: 4,
      image1: review1,
      desc: "I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.",
      image2: review2,
      head: "Eric Drake",
      desc2: "Digital Marketor",
    },
  ];

  return (
    <section className="sm:pb-8 lg:pb-18 xl:pb-50">
      <div className="container px-4 lg:px-0 mx-auto">
        <div className="heading max-w-155 mx-auto text-center">
          <h2 className="text-[#151515] text-[32px] lg:text-[45px] font-Inter font-bold leading-[100%] pb-5">
            Some Client Reviews
          </h2>
          <p className="text-[#737373] text-[14px] lg:text-[16px] font-Inter font-normal leading-6.5 pb-10 lg:pb-30">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="relative">
          <Slider {...settings}>
            {review.map((item) => (
              <div key={item.id} className="px-4 outline-none">
                <div className="item py-8 px-5 lg:py-10 lg:px-12 xl:py-13.5 xl:px-14.5 rounded-[30px] bg-white transition-all duration-500">
                  <img src={item.image1} alt="quote" />
                  <p className="text-[#7B7B7B] text-[14px] lg:text-[16px] font-Inter font-normal leading-6.5 py-5 xl:pr-21.25">
                    {item.desc}
                  </p>
                  <div className="text-[#F9BD2C] text-[18px] lg:text-[20px] flex gap-1.75 pb-7.5">
                    {[...Array(5)].map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </div>
                  <div className="flex gap-5">
                    <img src={item.image2} alt="user" />
                    <div>
                      <h3 className="text-[#232323] text-[20px] font-Inter font-semibold leading-[120%]">
                        {item.head}
                      </h3>
                      <p className="text-[#7B7B7B] text-[16px] font-Inter font-normal leading-6.5">
                        {item.desc2}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Reviews;