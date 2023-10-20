/* eslint-disable no-unused-vars */
import React from 'react'

const Cards = [
   
    {
      text1: "Frequent headaches",
      style:'shadow-blue-500',
       text2: "New-onset headaches can be the only pointer to visual problems like nearsightedness or glaucoma. If you develop horrible headaches radiating to the eye socket, consider seeing an optician immediately to ascertain the cause of the headache.",
    },
    {
        text1: "Blurry vision",
        style:'shadow-blue-500',
        text2: "Whether you are struggling to see far or near objects, visiting an optician might help restore your vision.",
    },
    {
        text1: "Dry and itchy eyes",
        style:'shadow-blue-500',
        text2: " Dry eyes with light sensitivity or other associated features typically resolve in a few days for most people.",
    },
    {
        text1: "Frequent headaches",
        style:'shadow-blue-500',
        text2: "New-onset headaches can be the only pointer to visual problems like nearsightedness or glaucoma. If you develop horrible headaches radiating to the eye socket, consider seeing an optician immediately to ascertain the cause of the headache.",
      },
      {
          text1: "Blurry vision",
          style:'shadow-blue-500',
          text2: "Whether you are struggling to see far or near objects, visiting an optician might help restore your vision.",
      },
      {
          text1: "Dry and itchy eyes",
          style:'shadow-blue-500',
          text2: " Dry eyes with light sensitivity or other associated features typically resolve in a few days for most people.",
      }
    
  ];
const Reasons = () => {
  return (
    <div className='bg-primaryColor w-auto h-full mx-5 p-8 mt-20 font-[600] rounded-lg'>
          <div className='flex justify-center  p-8 text-4xl font-[400] text-white'>
            <span className='hidden md:block'>Reasons To See An Optician</span>
            <span className='md:hidden  text-2xl'>Reasons To See An Optician</span>
            </div>
          
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-2  sm:px-0 my-2'>
          {Cards.map(({id, text2, text1, style}) => (
   <div key={id}
   className={`shadow-md hover:scale-105 duration-500  rounded-lg my-3 ${style} project-card`}>
   <span className='text-white text-[16px] disc'>{text1} :</span>
   <div className='mt-1 p-4 text-white disc'>{text2}</div>
</div> 
  ))}
  </div>
          </div>
          
  )
}




export default Reasons
