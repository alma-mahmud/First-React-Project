import React from 'react'
import logo from '../../assets/Images/Logo/logo.png'

function Footer() {
  return (
    <footer className="bg-[#FFFFFF] pt-15 lg:pt-37.5 px-5 lg:px-5">
      <div className="container pb-10">
        <div className="lg:flex lg:gap-5 xl:gap-32.75">
          
          {/* Logo & Description */}
          <div className="w-full md:w-[80%] lg:w-89 pb-5 lg:pb-0">
            <img src={logo} alt="" />
            <p className="text-[#7B7B7B] text-[16px] font-Inter font-normal leading-6.5 pt-7.5">
              I had a good experience while using this app, what fascinated me was the live tracking feature
              There are many variations of passages of Lorem Ipsum available, but the majority.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 xl:gap-32.75 gap-y-6 lg:gap-y-0">
                {/* About */}
          <div className="w-[18]">
            <h3 className="text-[#151515] text-[20px] font-Inter font-semibold leading-[100%] pb-10">
              About
            </h3>
            <div className="flex flex-col">
              <a href="" className="text-[#7B7B7B] text-[16px] font-Inter font-normal leading-10 hover:underline">About us</a>
              <a href="" className="text-[#7B7B7B] text-[16px] font-Inter font-normal leading-10 hover:underline">Features</a>
              <a href="" className="text-[#7B7B7B] text-[16px] font-Inter font-normal leading-10 hover:underline">News</a>
              <a href="" className="text-[#7B7B7B] text-[16px] font-Inter font-normal leading-10 hover:underline">Careers</a>
            </div>
          </div>

          {/* Company */}
          <div className="w-[30.25]">
            <h3 className="text-[#151515] text-[20px] font-Inter font-semibold leading-[100%] pb-10">
              Company
            </h3>
            <div className="flex flex-col">
              <a href="" className="text-[#7B7B7B] text-[16px] font-Inter font-normal leading-10 hover:underline">Our Team</a>
              <a href="" className="text-[#7B7B7B] text-[16px] font-Inter font-normal leading-10 hover:underline">Partner With Us</a>
              <a href="" className="text-[#7B7B7B] text-[16px] font-Inter font-normal leading-10 hover:underline">FAQ</a>
              <a href="" className="text-[#7B7B7B] text-[16px] font-Inter font-normal leading-10 hover:underline">Blog</a>
            </div>
          </div>

          {/* Support */}
          <div className="w-[129.5]">
            <h3 className="text-[#151515] text-[20px] font-Inter font-semibold leading-[100%] pb-10">
              Support
            </h3>
            <div className="flex flex-col">
              <a href="" className="text-[#7B7B7B] text-[16px] font-Inter font-normal leading-10 hover:underline">About</a>
              <a href="" className="text-[#7B7B7B] text-[16px] font-Inter font-normal leading-10 hover:underline">Support Center</a>
              <a href="" className="text-[#7B7B7B] text-[16px] font-Inter font-normal leading-10 hover:underline">Feedback</a>
              <a href="" className="text-[#7B7B7B] text-[16px] font-Inter font-normal leading-10 hover:underline">Contact Us</a>
              <a href="" className="text-[#7B7B7B] text-[16px] font-Inter font-normal leading-10 hover:underline">Accesbility</a>
            </div>
          </div>

          {/* Get in touch */}
          <div className="w-[30.5]">
            <h3 className="text-[#151515] text-[20px] font-Inter font-semibold leading-[100%] pb-10">
              Get in touch
            </h3>
            <div className="flex flex-col gap-y-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=almahmudsujon9@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7B7B7B] hover:underline lg:break-all"
              >
                alma-mahmud.dev@gmail.com
              </a>

              <a
                href="https://wa.me/8801566068310"
                target="_blank"
                className="text-[#7B7B7B] hover:underline"
              >
                +88 01566068310
              </a>
            </div>
          </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="container py-8.25 text-center border-t border-[#E8E8E8]">
        <p className="text-[#7B7B7B] text-[16px] font-Inter font-normal leading-6.5">
          All credit goes to @agence.com
        </p>
      </div>
    </footer>
  )
}

export default Footer
