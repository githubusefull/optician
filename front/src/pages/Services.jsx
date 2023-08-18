import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Redux } from '../redux';
const Services = () => {
 
  
  const navigate = useNavigate();
  const {dispatch: ctxDispatch } = useContext(Redux);
 
  const [data, setData] = useState({
    date: "",
    fullname:"",
    email:"",
    phone:""
  });
   const handleChange = ({currentTarget:input}) => {
    setData({...data, [input.name]:input.value});
   
    }
    
    const handleSubm = async (e) => {
    e.preventDefault();
    try {
    const url = "http://localhost:5000/api/optician/appointment";
    const {data:res} = await axios.post(url, data);
    ctxDispatch({type:'USER_SIGNIN', payload: data});
    localStorage.setItem('userInfo', JSON.stringify(data));
    console.log(res,data);
    {
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
    }
    navigate("/")
    } catch (error){
      
      {
        toast.error('Booking Error', {
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
      <form onSubmit={handleSubm} >
        <div className='bg-primaryColor w-auto h-screen mx-5 mt-20  font-[600] rounded-lg'>
          <p className='flex justify-center p-8 text-4xl font-[400] text-white'>Your Appointment</p>
          <div className='flex justify-center mb-2'>
         </div>
          <div className='flex justify-center p-2'> 
            <input type='date' required
            placeholder='MM-DD-YYYY'
           name="date"
           value={data.date}
           onChange={handleChange} 
           className={'input p-6 w-[300px] h-[22px] rounded-[5px] placeholder:text-textColor font-[700]'} 
            />
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
             
             <input type='number' required
            name="phone"
            value={data.phone}
            placeholder='Phone'
            onChange={handleChange} 
            className={'input p-6 w-[300px] h-[22px] rounded-[5px] placeholder:text-textColor font-[700]'} 
             />
  
          </div>
         <div className='flex justify-center p-2'>
         <div className='flex justify-center p-2'>
         <span className="flex font-[500] text-white mr-2 mt-0" >14:00 PM</span>
          <label htmlFor="pm" className="bg-white rounded-[10px] cursor-pointer relative w-10 h-6" >
            <input type="checkbox"  name="pm"  id="pm" 
            value={data.pm}
            onChange={handleChange} 
            className="sr-only peer"/>
            <span className="w-2/5 h-3/5 bg-blue-400 absolute rounded-full left-1 top-1
            peer-checked:bg-primaryColor peer-checked:left-5 translate-all duration-500"></span>
          </label>
         </div>
         <div className='flex justify-center p-2'>
         <span className="flex font-[500] text-white mr-2 mt-0" >08:00 AM</span>
          <label htmlFor="am" className="bg-white rounded-[10px] cursor-pointer relative w-10 h-6" >
            <input type="checkbox"   name="am"  id="am"
             value={data.am}
             onChange={handleChange} 
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
