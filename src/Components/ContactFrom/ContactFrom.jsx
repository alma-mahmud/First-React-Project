import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
<Toaster position="top-right" />
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';

function ContactFrom() {
   const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name) newErrors.name = 'Please enter your name';

    if (!formData.email) newErrors.email = 'Please enter your email';
    else if (!emailRegex.test(formData.email))
      newErrors.email = 'Please enter a valid email';

    if (!formData.phone) newErrors.phone = 'Please enter your phone number';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  if (validate()) {
    toast.success('Form submitted successfully!');
    console.log(formData);
  }
};
  return (
    <>
    <section className='bg-[#F3F3F3] py-10 lg:py-35 lg:px-5'>
        <div className="container px-4 lg:px-0">
            <div className="md:flex md:gap-10 xl:gap-36 items-center">
                  {/* left Site */}
                <div className="left-site w-full lg:w-131.5">
                <h2 className='text-[#151515] text-center lg:text-left text-[28px] lg:text-[40px] xl:text-[45px] font-Inter font-bold leading-[100%] pb-5 lg:pr-18.75'>We Do design, Code & Development</h2>
                <p className='text-[#737373] text-[14px] lg:text-[16px] font-Inter font-normal leading-6.5 pb-2.5 pr-4.75'>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                <p className='text-[#737373] text-[14px] lg:text-[16px] font-Inter font-normal leading-6.5 pb-6 lg:pb-0'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.</p>
            </div>
                {/* Right Site */}
            <div className="Right-site w-full lg:w-134 py-6 lg:py-15.25 px-6 lg:px-10.75 rounded-[10px] bg-[#FFFFFF]">
              <form onSubmit={handleSubmit}>
                  <h2 className='text-[#151515] text-[25px] lg:text-[30px] font-Inter font-bold leading-[100%] text-center pb-7.5'>Get a free quote now</h2>

                  {/* Name */}
                  <div className="mb-3">
                    <label className='text-[#151515] text-[14px] lg:text-[16px] font-Inter font-normal leading-6.5 block pb-2.5'>Name</label>
                    <input
                    className='w-full border border-[#E8E8E8] py-2.5 lg:py-4.75 px-2.5 lg:px-5.75 rounded-[10px] text-[#D0D0D0] text-[14px] lg:text-[16px] font-Inter font-normal leading-6.5 outline-0'
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange} 
                      placeholder='Enter your name'
                    />
                    {errors.name && <strong style={{ color: 'red' }}>{errors.name}</strong>}
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label className='text-[#151515] text-[14px] lg:text-[16px] font-Inter font-normal leading-6.5 block pb-2.5'>Email</label>
                    <input
                    className='w-full border border-[#E8E8E8] py-2.5 lg:py-4.75 px-2.5 lg:px-5.75 rounded-[10px] text-[#D0D0D0] text-[14px] lg:text-[16px] font-Inter font-normal leading-6.5 outline-0'
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder='Enter your email'
                    />
                    {errors.email && <strong style={{ color: 'red' }}>{errors.email}</strong>}
                  </div>

                  {/* Phone */}
                  <div className="mb-3">
                    <label className='text-[#151515] lg:text-[16px] font-Inter font-normal leading-6.5 block pb-2.5'>Phone</label>
                    <PhoneInput
                      country={'bd'}
                      value={formData.phone}
                      onChange={(phone) =>
                        setFormData((prev) => ({ ...prev, phone }))
                      }
                      enableSearch={true}
                      placeholder='Enter your phone number'
                      containerClass="w-full"
                      inputClass="!w-full !h-[62px] !py-2.5 lg:!py-4.75 !pr-5.75 !pl-14 !border !border-[#E8E8E8] !rounded-[10px] !text-[#151515] !text-[16px] !font-Inter !outline-0"
                      buttonClass="!border !border-[#E8E8E8] !rounded-l-[10px]"
                    />
                    {errors.phone && <strong style={{ color: 'red' }}>{errors.phone}</strong>}
                  </div>

                  <div className="flex justify-center sm:justify-center lg:justify-start">
                    <button
                      type="submit"
                      className="bg-[#6A4DF4] py-2.5 xl:py-4.75 lg:py-3 px-10 lg:px-31 xl:px-36.25 text-[#FFFFFF] text-[16px] lg:text-[18px] xl:text-[20px] font-Inter font-semibold leading-6.5 rounded-[10px] cursor-pointer">Get Pricing Now
                    </button>
              </div>
        </form>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ContactFrom