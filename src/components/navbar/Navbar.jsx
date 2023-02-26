import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { links } from "../../constants/navbar";
import { FaFacebookF, FaBars } from "react-icons/fa";
import { IoLogoTwitter, IoLogoInstagram } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { Image } from "cloudinary-react";

const Navbar = () => {
   const [bar, setBar] = useState(false);

   return (
      <nav className="container">
         <div className={`nav-logo ${bar && "nav-logo-on-click"}`}>
            <button onClick={() => setBar(!bar)} className="bar">
               {bar ? <AiOutlineClose size={30} /> : <FaBars size={30} />}
            </button>
            <Link to="/">
               <div className="logo">
                  <Image
                     cloudName="dqpuhvgdp"
                     publicId="https://res.cloudinary.com/dqpuhvgdp/image/upload/v1677308865/samwayle-coffee-shop/Logo_vnkjkv.png"
                     className="logo-img"
                  />
                  <Image
                     cloudName="dqpuhvgdp"
                     publicId="https://res.cloudinary.com/dqpuhvgdp/image/upload/v1677308872/samwayle-coffee-shop/Logo_text_rusjxm.png"
                     className="logo-text"
                  />
               </div>
            </Link>
            <span></span>
         </div>
         <div className={`nav-links ${bar && "remove-left"}`}>
            {links.map((link, i) => (
               <Link onClick={() => setBar(false)} to={link.link} key={i}>
                  <button className="btn-nav">{link.title}</button>
               </Link>
            ))}
            <Link to="/contactme">
               <button className="btn-contact">Contact Us</button>
            </Link>
            {/* mobile only */}
            <div className="list-icons-nav">
               <li className="social-icon">
                  <a target="_blank" href="/">
                     <IoLogoTwitter size={20} />
                  </a>
               </li>
               <li className="social-icon">
                  <a target="_blank" href="/">
                     <IoLogoInstagram size={20} />
                  </a>
               </li>
               <li className="social-icon">
                  <a target="_blank" href="/">
                     <FaFacebookF size={20} />
                  </a>
               </li>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
