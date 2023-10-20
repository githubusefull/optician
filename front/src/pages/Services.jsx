/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Redux } from '../redux';
const Services = () => {
 
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("")
  const [pm, setPm] = useState("")
  const [am, setAm] = useState("")
 const navigate = useNavigate();
 const {dispatch: ctxDispatch } = useContext(Redux);
    
 


    const handleSubmit = (e) => {
      e.preventDefault();
         const {data} = axios.post('https://optician-back.vercel.app/optician/appointment', {
       date,
       email,
       fullname,
       phone,
       am,
       pm       
      })
      .then(result => {console.log(result)
       localStorage.setItem("userInfo", JSON.stringify(result.data))
       ctxDispatch({type:'USER_SIGNIN', payload: result.data});
       setLoading(true)
        toast.success('Booking Successfully', {
          position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme:"dark",
        });
       navigate("/")})
       {/*   
      .catch(err => console.log(err)
      
      )*/}
   
};

  return (
   
    <div>
      <form onSubmit={handleSubmit} >
        <div className='bg-primaryColor w-auto h-full mx-5 mt-20  font-[600] rounded-lg'>
          <div className='flex justify-center  p-8 text-4xl font-[400] text-white'>
            <span className='hidden md:block'>Your Appointment</span>
            <span className='md:hidden  text-2xl'>Your Appointment</span>
            </div>
            
          {loading && (
                  <span className="loading loading-spinner loading-md"></span>
                )}
          <div className='flex justify-center mb-2'>
         </div>
          <div className='flex justify-center p-2'> 
            <input type='date'
            placeholder="DD-MM-YYYY"
            name="date" 
            onChange={(e) => setDate(e.target.value)}
           className={'input p-6 w-[300px] h-[22px] rounded-[5px]font-[700] text-red-700'} 
            />
         </div>
         <div className='flex justify-center p-2 mt-1'>  
            <input type='text' 
            placeholder='fullname'
           name="Fullname"
           onChange={(e) => setFullname(e.target.value)}
           className={'input p-6  w-[300px] h-[22px] rounded-[5px] placeholder:text-textColor font-[700]'} 
            />
 
         </div>
         <div className='flex justify-center p-2 mt-1'> 
            <input type='email' 
           name="email"
           placeholder="Email"
           onChange={(e) => setEmail(e.target.value)}
           className={'input p-6  w-[300px] h-[22px] rounded-[5px] placeholder:text-textColor font-[700]'} 
            />
 
         </div>
         <div className='flex justify-center p-2 mt-1'> 
             <input type='number'
              name="phone"
              placeholder='Phone'
              onChange={(e) => setPhone(e.target.value)}
            className={'input p-6 w-[300px] h-[22px] rounded-[5px] placeholder:text-textColor font-[700]'} 
             />
  
          </div>
         <div className='flex justify-center p-2'>
         <div className='flex justify-center p-2'>
         <span className="flex font-[500] text-white mr-2 mt-0" >14:00 PM</span>
          <label htmlFor="pm" className="bg-white rounded-[10px] cursor-pointer relative w-10 h-6" >
            <input type="checkbox"  name="pm"  id="pm" 
            onChange={(e) => setPm(e.target.value)}
            className="sr-only peer"/>
            <span className="w-2/5 h-3/5 bg-blue-400 absolute rounded-full left-1 top-1
            peer-checked:bg-primaryColor peer-checked:left-5 translate-all duration-500"></span>
          </label>
         </div>
         <div className='flex justify-center p-2'>
         <span className="flex font-[500] text-white mr-2 mt-0" >08:00 AM</span>
          <label htmlFor="am" className="bg-white rounded-[10px] cursor-pointer relative w-10 h-6" >
            <input type="checkbox"   name="am"  id="am"
             onChange={(e) => setAm(e.target.value)}
            className="sr-only peer"/>
            <span className="w-2/5 h-3/5 bg-blue-400 absolute rounded-full left-1 top-1
            peer-checked:bg-primaryColor peer-checked:left-5 translate-all duration-500"></span>
          </label>
         </div>
         </div>
        
          <div className='flex justify-center p-8'>
             <button className='btn2 mt-4' type='submit'>Submit</button>
          </div>
        </div> 
      </form> 
    </div>
     
            
  )
}

export default Services
