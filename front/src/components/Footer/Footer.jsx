import { Link } from "react-router-dom"
import Logo from "../../assets/images/logo.png";
import {RiLinkedinFill} from 'react-icons/ri';
import {AiFillGithub} from "react-icons/ai";
import {FaFreeCodeCamp} from 'react-icons/fa';
const Footer = () => {

     
  const navLink1 = [
    {
      path: "https://github.com/githubusefull",
      icon: <AiFillGithub className="group-hover:text-white w-4 h-5"/>
    },
    {
      path: "https://www.linkedin.com/in/mohamed-abdelouahidi-6b824b251/",
      icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5"/>
    },
    {
      path: "https://www.freecodecamp.org/abdelouahidi",
      icon: <FaFreeCodeCamp className="group-hover:text-white w-4 h-5"/>
    }
  ];
  const navLink2 = [
    {
      path: "/find-a-doctor",
      display: "Find a Doctor",
    },
    {
      path: "/",
      display: "Request an Appointment",
    },
    {
      path: "/",
      display: "Find a Location",
    },
    {
      path: "/",
      display: "Get a Opinion",
    },
  ];
  const navLink3 = [
    {
      path: "/",
      display: "Donate",
    },
    {
      path: "/contact",
      display: "Contact Us",
    },
    {
      path: "/services",
      display: "Services",
    },
    {
      path: "/",
      display: "Blog",
    },
  ];
  const year = new Date().getFullYear();
  return (
    <footer className="pb-16 pt-10">
       <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
        <div>
            <Link to="/">
              <img src={Logo} alt="" className="w-[50px]" />
            </Link>
          <p className="text-[16px] leading-7 font-[500] text-textColor mt-4">
            Copyright © {year} developed by Mohamed all right reserved.</p>
            <div className="flex items-center gap-3 mt-4">
                  {navLink1.map((link, index) => (
                    <Link to={link.path} key={index} className="w-10 h-10 border border-solid border-[#181A1E] rounded-[10px] flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                      {link.icon}
                    </Link>
                  ))}
            </div>
            </div>
            <div>
              <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
               Quick Links
              </h2>
              <ul>
                {navLink3.map((item, index) => (
                  <li key={index} className="mb-4">
                  <Link to={item.path}
                  className="text-[16px] leading-7 font-[500] text-textColor">
                    {item.display}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
               I want to:
              </h2>
              <ul>
                {navLink2.map((item, index) => (
                  <li key={index} className="mb-4">
                  <Link to={item.path}
                  className="text-[16px] leading-7 font-[500] text-textColor">
                    {item.display}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
           
        </div>
    </div>
    </footer>
   
  )
}

export default Footer
