/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Appointments = () => {
    const [results, setResults] = useState([]);
    async function getData(){
    
      const data = await axios.get("https://optician-back.vercel.app/optician/appointments");
     setResults(data.data);
     //console.log(data.data) 
    }
   useEffect(()=> {
    getData();
    },[]);
    
  return (
    <div>
      <div className="bg-primaryColor w-auto h-full mx-5 mt-20  font-[600] rounded-lg">
        <p className='flex justify-center p-8 text-4xl font-[400] text-white'>
          <p className="hidden md:block">
          Appointments
        </p>
        </p>
        <p className='flex justify-center p-1 text-2xl font-[400] text-white'>
          <p className="md:hidden">
          Appointments
        </p>
        </p>  
        <div className='overflow-auto shadow hidden md:block'>   
     <table className='w-full'>
    <thead className='bg-white'>
        <tr>
            <th className='text-1xl  p-2 font-[800]  text-primaryColor tracking-wide text-center'>Full Name</th>
            <th className='text-1xl p-2 font-[800] text-primaryColor tracking-wide text-center'>Email</th>
            <th className='text-1xl p-2 font-[800] text-primaryColor tracking-wide text-center'>Phone</th>
            <th className='text-1xl p-2 font-[800] text-primaryColor tracking-wide text-center'>Date</th>
            <th className='text-1xl p-2 font-[800] text-primaryColor tracking-wide text-center'>Time</th>
        </tr>
    </thead>

    <tbody>
    {
 results.map((user) => {
   return (
<tr className='bg-primaryColor' key={user._id}>
    <td className='p-3 text-sm text-white text-center'>
        {user.fullname}
    </td>
    <td className='p-3 text-sm text-white   text-center'>
    {user.email}
    </td>
    <td className='p-3 text-sm text-white  text-center'>
    {user.phone}
    </td>
    <td className='p-3 text-sm text-white   text-center'>
    {user.date}
    </td>
    {user.pm === "" ? 
    <td className='p-3 text-sm text-white  text-center'>
     08:00 AM
    </td> : null}
    {user.am === "" ? 
     <td className='p-3 text-sm text-white  text-center'>
      14:00 PM
     </td>: null}
   
</tr>
) })
}
    </tbody>
</table>

</div>

  

{
results.map((user) => {
   return (
    <div key={user._id}>
<div className="max-w-sm p-6 shadow m-4 md:hidden border-solid border-2 rounded-lg border-white" key={user._id}>
    <div className="text-[8px] items-center font-[700] text-white p-1">
        Full Name : {user.fullname}
    </div>
    <div className="text-[8px] items-center font-[700] text-white p-1">
        Email : {user.email} 
    </div>
    <div className="text-[8px] items-center font-[700] text-white p-1">
        Phone : {user.phone} 
    </div>
    <div className="text-[8px] items-center font-[700] text-white p-1">
        Date : {user.date}
    </div>
    {user.pm === "" ? 
    <div className="text-[8px] items-center font-[700] text-white p-1">
        Time :  08:00 AM
    </div>
    : null}
    {user.am === "" ? 
    <div className="text-[8px] items-center font-[700] text-white p-1">
        Time :  14:00 PM
    </div>
    : null}
    
</div>
</div>
 ) })
}
     </div>
    
    </div>
  );
};

export default Appointments;
