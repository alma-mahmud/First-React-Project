import React from 'react'
import choose1 from '../../assets/Images/Why Choose/choose1.png'
import choose2 from '../../assets/Images/Why Choose/choose2.png'
import choose3 from '../../assets/Images/Why Choose/choose3.jpg'

function WhyChoose() {
  return (
    <>
    <section className='pt-17 lg:pt-18 xl:pt-30 pb-15 lg:pb-18 lg:px-5 xl:pb-26.5'>
        <div className="container px-4 sm:px-5 lg:px-0">
            {/* Heading */}
            <div className='heading max-w-200.5 mx-auto text-center'>
                <h2 className='text-[#151515] text-[32px] lg:text-[45px] font-Inter font-bold leading-[100%] pb-5 lg:px-37.5'>Why You Should Choose Agenc</h2>
                <p className='text-[#737373] text-[14px] lg:text-[16px] font-Inter font-normal leading-5.5 lg:leading-6.5 pb-15 lg:pb-30'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className="md:flex justify-between md:items-center xl:gap-26.25">
                <div className="max-w-192.75 grid grid-cols-2 gap-x-6 xl:gap-x-25.75 gap-y-6 lg:gap-y-23.75">
                    <div>
                        <img src={choose1} alt="" />
                        <h3 className='text-[#151515] text-[20px] lg:text-[25px] font-Inter font-bold leading-[100%] pt-5'>Innovative Ideas</h3>
                        <p className='text-[#737373] text-[15px] lg:text-[16px] font-Inter font-normal leading-6.5 pt-2.5'>Because each project is different, we adapt to your business model.</p>
                    </div>
                    <div>
                        <img src={choose1} alt="" />
                        <h3 className='text-[#151515] text-[20px] lg:text-[25px] font-Inter font-bold leading-[100%] pt-5'>Innovative Ideas</h3>
                        <p className='text-[#737373] text-[15px] lg:text-[16px] font-Inter font-normal leading-6.5 pt-2.5'>Because each project is different, we adapt to your business model.</p>
                    </div>
                    <div>
                        <img src={choose2} alt="" />
                        <h3 className='text-[#151515] text-[20px] lg:text-[25px] font-Inter font-bold leading-[100%] pt-5'>Innovative Ideas</h3>
                        <p className='text-[#737373] text-[15px] lg:text-[16px] font-Inter font-normal leading-6.5 pt-2.5'>Because each project is different, we adapt to your business model.</p>
                    </div>
                    <div>
                        <img src={choose2} alt="" />
                        <h3 className='text-[#151515] text-[20px] lg:text-[25px] font-Inter font-bold leading-[100%] pt-5'>Innovative Ideas</h3>
                        <p className='text-[#737373] text-[15px] lg:text-[16px] font-Inter font-normal leading-6.5 pt-2.5'>Because each project is different, we adapt to your business model.</p>
                    </div>
                </div>
                    {/* Image section */}
                <div className="max-w-107 sm:pt-9 sm:mx-auto">
                    <img src={choose3} alt=""/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default WhyChoose