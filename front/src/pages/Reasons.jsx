/* eslint-disable no-unused-vars */
import React from 'react'

const Cards = [
   
    {
      text1: "Frequent headaches",
      text2: "New-onset headaches can be the only pointer to visual problems like nearsightedness or glaucoma. If you develop horrible headaches radiating to the eye socket, consider seeing an optician immediately to ascertain the cause of the headache.",
    },
    {
        text1: "Blurry vision",
        text2: "Whether you are struggling to see far or near objects, visiting an optician might help restore your vision.",
    },
    {
        text1: "Dry and itchy eyes",
        text2: " Dry eyes with light sensitivity or other associated features typically resolve in a few days for most people.",
    },
    {
        text1: "Frequent headaches",
        text2: "New-onset headaches can be the only pointer to visual problems like nearsightedness or glaucoma. If you develop horrible headaches radiating to the eye socket, consider seeing an optician immediately to ascertain the cause of the headache.",
      },
      {
          text1: "Blurry vision",
          text2: "Whether you are struggling to see far or near objects, visiting an optician might help restore your vision.",
      },
      {
          text1: "Dry and itchy eyes",
          text2: " Dry eyes with light sensitivity or other associated features typically resolve in a few days for most people.",
      }
    
  ];
const Reasons = () => {
  return (
    <div className='bg-primaryColor w-auto h-full mx-5 mt-20  font-[600] rounded-lg'>
          <div className='flex justify-center p-8 text-4xl font-[400] text-white'>Reasons to See an Optician</div>
          {Cards.map((l, index) => (
            <div key={index} className='inline-flex'>
          <div className="w-80 p-6 m-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100
           dark:bg-primaryColor  dark:hover:bg-white">
    <h5 className="mb-2 text-2xl font-bold tracking-tight cursor-pointer dark:text-white hover:text-primaryColor">{l.text1} : </h5>
    <p className="hover:text-primaryColor  cursor-pointer text-white font-[600]">{l.text2}.</p>
</div>
</div>
        ))}
          </div>
  )
}

export default Reasons
