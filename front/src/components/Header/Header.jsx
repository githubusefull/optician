import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import "./Header.css";
import Doctor from "../../assets/images/pic3.jpg";
import { BiMenu } from "react-icons/bi";
import { useEffect, useRef } from "react";
const navLink = [
  {
    path: "/",
    display: <img src={Logo} alt="" className="w-16 md:hidden" />,
  },
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/appointments",
    display: "Appointments",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];
const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const handleSticky = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };
  useEffect(() => {
    handleSticky();
    return () => window.removeEventListener("scroll", handleSticky);
  });
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  return (
    <header className="header flex items-center mt-3" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex w-[55px] mb-2 ml-5 first-letter: items-center justify-center">
            <Link to="/">
              <img src={Logo} alt=""/>
            </Link>
          </div>
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLink.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[600]"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img src={Doctor} className="w-full rounded-full" alt="" />
                </figure>
              </Link>
            </div>
            <Link to="/login">
              <button
                className="bg-primaryColor flex py-2 px-6 text-white font-[600] h-[44px] first-letter: items-center justify-center rounded-[10px]">
                Login
              </button>
            </Link>
           
            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-8 h-8 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
