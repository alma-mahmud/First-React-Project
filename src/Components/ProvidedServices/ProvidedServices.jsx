import React from 'react'
import webDesign from '../../assets/Images/Product Service/WebDesign.png'
import uxdesign from '../../assets/Images/Product Service/uxdesign.png'
import WebDevelopment from '../../assets/Images/Product Service/WebDevelopment.png'
import MotionGraphics from '../../assets/Images/Product Service/MotionGraphics.png'
import Animation from '../../assets/Images/Product Service/3DAnimation.png'
import DigitalMarketing from '../../assets/Images/Product Service/DigitalMarketing.png'

function ProvidedServices() {
    const servise = [
       {
        id: '1',
        image: webDesign,
        title: 'Web Design',
        desc: 'There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which do not look.',
       },
       {
        id: '2',
        image: uxdesign,
        title: 'UX Design',
        desc: 'There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which do not look.',
       },
       {
        id: '3',
        image: WebDevelopment,
        title: 'Web Development',
        desc: 'There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which do not look.',
       },
       {
        id: '4',
        image: MotionGraphics,
        title: 'Motion Graphics',
        desc: 'There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which do not look.',
       },
       {
        id: '5',
        image: Animation,
        title: '3D Animation',
        desc: 'There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which do not look.',
       },
       {
        id: '6',
        image: DigitalMarketing,
        title: 'Digital Marketing',
        desc: 'There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which do not look.',
       },
    ]
  return (
    <section className='px-4 md:px-8 lg:px-5 pb-10 lg:pb-25.75'>
        <div className="container">
            {/* Heading */}
            <div className='heading max-w-152.5 mx-auto text-center'>
                <h2 className='text-[#151515] text-[32px] lg:text-[45px] font-Inter font-bold leading-[100%] pb-5'>Our Provided Services</h2>
                <p className='text-[#737373] text-[14px] lg:text-[16px] font-Inter font-normal leading-6.5 pb-12.5'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-5 xl:gap-6'>
                {
                    servise.map(item => (
                        <div key={item} className="service-item transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                        hover:shadow-service hover:-translate-y-3 md:hover:-translate-y-8 hover:scale-[1.02] rounded-[20px] text-center 
                        pt-6 md:pt-8 lg:pt-10 xl:pt-20 
                        pb-6 md:pb-8 lg:pb-10 xl:pb-11.75 
                        px-4 md:px-6 lg:px-6 xl:px-12.25">
                        <img src={item.image} className='mx-auto pb-6 md:pb-8 lg:pb-10' alt="#" />
                        <h3 className='text-[#151515] text-[20px] sm:text-[22px] md:text-[24px] lg:text-[25px] font-Inter font-bold leading-[100%] pb-3 md:pb-4 lg:pb-5'>
                            {item.title}
                        </h3>
                        <p className='text-[#737373] text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-Inter font-normal leading-5 md:leading-6.5'>
                            {item.desc}
                        </p>
                    </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default ProvidedServices