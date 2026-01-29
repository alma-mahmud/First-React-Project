import React from 'react'
import work1 from '../../assets/Images/Recent Work/work1.png'
import work2 from '../../assets/Images/Recent Work/work2.png'
import work3 from '../../assets/Images/Recent Work/work3.png'
import work4 from '../../assets/Images/Recent Work/work4.png'
import work5 from '../../assets/Images/Recent Work/work5.png'
import work6 from '../../assets/Images/Recent Work/work6.png'

function RecentWork() {
    const work = [
        {
            id: 1,
            image: work1,
            title: 'Task Management App',
            desc: 'This is a task management application that can help you be more ',
        },
        {
            id: 2,
            image: work2,
            title: 'Saas Landing Page Design',
            desc: 'This is a task management application that can help you be more ',
        },
        {
            id: 3,
            image: work3,
            title: 'App Design',
            desc: 'This is a task management application that can help you be more ',
        },
        {
            id: 4,
            image: work4,
            title: 'Landing Page Design',
            desc: 'This is a task management application that can help you be more ',
        },
        {
            id: 5,
            image: work5,
            title: 'Dashboard Design',
            desc: 'This is a task management application that can help you be more ',
        },
        {
            id: 6,
            image: work6,
            title: 'Web App Design',
            desc: 'This is a task management application that can help you be more ',
        },
    ]
  return (
    <>
    <section className='bg-[#F3F3F3] px-4 lg:px-5 lg:py-20 xl:py-37.5 md:py-10'>
        <div className="container">
            {/* Heading */}
            <div className='heading max-w-152.5 mx-auto text-center'>
                <h2 className='text-[#151515] text-[32px] lg:text-[45px] pt-4 lg:pt-0 font-Inter font-bold leading-[100%] pb-5'>Our Recent Work</h2>
                <p className='text-[#737373] text-[14px] lg:text-[16px] font-Inter font-normal leading-5.5 lg:leading-6.5 pb-4 lg:pb-17 xl:pb-26.5'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    work.map(item => (
                        <div key={item} className='bg-[#FFFFFF] rounded-[20px] text-center'>
                    <img src={item.image} className='w-full' alt="" />
                    <div className='px-10.5 pb-7.5'>
                        <h3 className='text-[#151515] sm:text-[19px] text-[20px] font-Inter font-bold leading-[100%] pt-7.5'>{item.title}</h3>
                        <p className='text-[#737373] sm:text-[14px] text-[16px] font-Inter font-normal sm:leading-5 leading-6.5 pt-2.5'>{item.desc}</p>
                    </div>
                </div>
                    ))
                }
            </div>
        </div>
    </section>
    </>
  )
}

export default RecentWork