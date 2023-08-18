/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'
import Doctor from '../assets/images/pic8.png'
import Doctor1 from '../assets/images/pic4.jpg'
import video from '../assets/images/video-icon.png'
import avatar from '../assets/images/avatar-icon.png'
import About from '../components/About/About'
import DoctorList from '../components/Doctors/DoctorList'
import FaqList from '../components/Faq/FaqList'
import Testimonial from '../components/Testimonial/Testimonial'

const Home = () => {
  return (
    <>
    <section className="hero__section pt-[60px] 2xl:h-[800px]">
    <div className="container">
     <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
      <div>
        <div className="lg:w-[570px]">
         <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[50px] md:leading-[70px]">
         We help patients live a healthy, and eyes healthy
         </h1>
         <p className="text_para">
         Our mission is simple yet profound - to change people's lives every day. This mission is not just a statement; it is the driving force behind everything we do.
         </p>
         <Link to="/appointment">
          <button className="btn">Request an Appointment</button>
         </Link>
        </div>
        {/* here we have counter */}
        <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
          <div>
            <h2 className="text-[36px] leading-[56px] lg:text-[34px] lg:leading-[54px] font-[700] text-headingColor">
           30+
            </h2>
            <span className="w-[60px] h-2 bg-primaryColor rounded-full block mt-[-10px]"></span>
            <p className="text_para"> Years of Experience</p>
          </div>
          <div>
            <h2 className="text-[36px] leading-[56px] lg:text-[34px] lg:leading-[54px] font-[700] text-headingColor">
           15+
            </h2>
            <span className="w-[60px] h-2 bg-purpleColor rounded-full block mt-[-10px]"></span>
            <p className="text_para"> Clinic Location</p>
          </div>
          <div>
            <h2 className="text-[36px] leading-[56px] lg:text-[34px] lg:leading-[54px] font-[700] text-headingColor">
           100%
            </h2>
            <span className="w-[90px] h-2 bg-irisBlueColor rounded-full block mt-[-10px]"></span>
            <p className="text_para"> Patient Satisfaction</p>
          </div>
        </div>
      </div>
      {/* content */}
      <div className="flex justify-end">
        <div className='mt-2 mr-14'>
       <img className="rounded-[10px]" src={Doctor} alt=""  />
        </div>
      </div>
     </div>
    </div>
    </section>
    <section>
      <div className='container'>
       <div className='lg:w-[470px] mx-auto'>
         <h2 className='heading text-center'>
         Discover how we can help you
         </h2>
       </div>
      </div>
    </section>
  <section>
    <div className='container'>
       <div className='flex items-center justify-between flex-col lg:flex-row'>
         <div className='xl:w-[670px]'>
            <h2 className='heading'>
              Get virtual treatement <br/> anytime.
            </h2>
            <ul className="pl-4">
            <li className='text__para'>
              1. Schedule the appointement directly.
            </li>
            <li className='text__para'>
              2. Search for your physician here, and contact their office.
            </li>
            <li className='text__para'>
              3. View our physicians who are accepting new patients, use the online scheduling tool to select 
              an  appointement time.
            </li>
            <li className='text__para'>
            4. Schedule the appointement directly.
            </li>
            </ul>
            <Link to='/'>
              <button className='btn'>Learn More</button>
            </Link>
         </div>
         <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
           <img src={Doctor1} className='w-3/4 rounded-[10px]'  alt=''/>
           <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px]
           md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-[6px] lg:gap-3'>
               <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>
             Tue, 24
               </p>
               <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>
             10:24AM
               </p>
              </div>
            <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center
            bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'> 
            <img src={video} />
             </span>
            </div>
            <div className='w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6] lg:px-[10px] text-[8px]
            leading-[8px] lg:text-[13px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-sm'>
              Consultation
            </div>
            <div className='flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]'>
        <img src={avatar} alt='' />
        <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor'>
      Jhon Bygie
        </h4>
            </div>
           </div>
         </div>
       </div>
    </div>
  </section>
  <section>
    <div className='container'>
       <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Our Great Doctors</h2>
            <p className='text__para text-center'>
            While opticians might have lesser qualifications and narrower scope of practice than other members of an eye care team, these technicians are the lifeline of vision care services. An optician is an ophthalmologic practitioner trained to design,
             fit and dispense lenses for correcting visual issues.
            </p>
       </div>
       <DoctorList/>
    </div>
  </section>
    <About />
    <section>
      <div className='container'>
        <div className='flex justify-between gap-[50px] lg:gap-0'>
          <div className='w-1/2 hidden md:block'>
         <img src={Doctor1} alt='' />
          </div>
       <div className='w-full md:w-1/2'>
        <h2 className='heading'>
       Most questions by our beloved patients
        </h2>
        <FaqList/>
       </div>
        </div>
      </div>
    </section>
    <section>
      <div className='container'>
    <div className='xl:w-[470px] mx-auto'>
      <h2 className='heading text-center'>What our patient say</h2>
    <p className='text__para text-center'>
    Optometrists have technical knowledge that enables them to dispense eyewear to customers.
    </p>
    </div>
    <Testimonial/>
      </div>
    </section>
    </>
  )
}

export default Home
