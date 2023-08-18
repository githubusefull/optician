import doctor from '../../assets/images/pic3.jpg'
import about from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section>
        <div className='container'>
           <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
              <div className='relative w-3/4 lg:w-1/2 xl:[770px] z-10 order-2 lg:order-1'>
                <img src={doctor} alt='' />
               <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30px] md:right-[-7%] lg:right-[23%]'>
               <img src={about} alt='' />
               </div>
              </div>
              <div className='w-full lg:w-1/2 xl:w-[670px] lg:order-2'>
            <h2 className='heading'>
           Proud to be one of the nations best.
            </h2>
            <p className='text__para'>Optician enables subscribers to complete all their CPD points in all competencies – without leaving the practice.</p>
            <p className='text__para'>Plans to expand primary eye care in Wales and deliver services closer to home for more patients have been welcomed by the optical profession.</p>
            <Link to="/">
                <button className='btn'> Learn More</button>
            </Link>
              </div>
           </div>
        </div>
    </section>
  )
}

export default About
