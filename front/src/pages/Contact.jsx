/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Redux } from '../redux';

const Contact = () => {
    
  const navigate = useNavigate();
  const {dispatch: ctxDispatch } = useContext(Redux);
 
  const [data, setData] = useState({
    fullname:"",
    email:"",
    contact:""
  });
   const handleChange = ({currentTarget:input}) => {
    setData({...data, [input.name]:input.value});
   
    }
    
    const handleSubm = async (e) => {
    e.preventDefault();
    try {
    const url = "http://localhost:5000/api/users/contact";
    const {data:res} = await axios.post(url, data);
    ctxDispatch({type:'USER_SIGNIN', payload: data});
    localStorage.setItem('userInfo', JSON.stringify(data));
    console.log(res,data);
    {
      toast.success('Contact Successfully', {
        position: "top-center",
              autoClose: 1000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme:"dark",
      });
    }
    navigate("/")
    } catch (error){
      
      {
        toast.error('Contact Error', {
          position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme:"dark",
        });
      }
      navigate("/")
     
    }
    
    } 
    
  return (
<div>    
<div>
      <form onSubmit={handleSubm} >
        <div className='bg-primaryColor w-auto h-full mx-5 mt-20  font-[600] rounded-lg'>
        <p className='flex justify-center p-8 text-4xl font-[400] text-white'>Your Contact</p>

          <div className='flex justify-center mb-2'>
         </div>
         
         <div className='flex justify-center p-2 mt-1'>
             
            <input type='text' required
           name="fullname"
           value={data.fullname}
           placeholder='Full Name'
           onChange={handleChange} 
           className={'input p-6  w-[300px] h-[22px] rounded-[5px] placeholder:text-textColor font-[700]'} 
            />
 
         </div>
         <div className='flex justify-center p-2 mt-1'>
             
            <input type='email' required
           name="email"
           value={data.email}
           placeholder='Email'
           onChange={handleChange} 
           className={'input p-6  w-[300px] h-[22px] rounded-[5px] placeholder:text-textColor font-[700]'} 
            />
 
         </div>
         <div className='flex justify-center p-2 mt-1'>
             
             <textarea type='text' required
            name="contact"
            value={data.contact}
            placeholder='Contact'
            onChange={handleChange} 
            className={'input p-4 w-[300px] h-[100px]  placeholder:text-textColor font-[700]'} 
             />
  
          </div> 
          <div className='flex justify-center p-8'>
             <button className='btn2 mt-4' type='submit'>Submit</button>
          </div>
        </div> 
      </form> 
    </div>
     
    
    </div>
  );
};

export default Contact;
