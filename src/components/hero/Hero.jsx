import "./hero.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { IoLogoTwitter, IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";

const Hero = () => {
   return (
      <section className="container" id="hero">
         <main className="flex">
            <div className="right">
               <p className="title">Drink coffee, enjoy with Samwyle</p>
               <h1>Coffee Shop</h1>
               <Link to="/products">
                  <button className="btn-order">Order here</button>
               </Link>
            </div>
            <div className="left">
               <button className="btn-arrow">
                  <HiOutlineArrowNarrowRight size={28} />
               </button>
               <div className="image-container">
                  <Image
                     cloudName="dqpuhvgdp"
                     publicId="https://res.cloudinary.com/dqpuhvgdp/image/upload/v1677310938/samwayle-coffee-shop/hero-image_gxspv5.png"
                     className="hero-image"
                  />
               </div>
               <ul className="list-icons">
                  <li className="social-icon">
                     <a
                        target="_blank"
                        href="https://www.instagram.com/helka_septyawan/">
                        <IoLogoTwitter size={20} />
                     </a>
                  </li>
                  <li className="social-icon">
                     <a
                        target="_blank"
                        href="https://www.instagram.com/helka_septyawan/">
                        <IoLogoInstagram size={20} />
                     </a>
                  </li>
                  <li className="social-icon">
                     <a
                        target="_blank"
                        href="https://www.instagram.com/helka_septyawan/">
                        <FaFacebookF size={20} />
                     </a>
                  </li>
                  <li className="follow">Follow Us</li>
               </ul>
            </div>
         </main>
      </section>
   );
};

export default Hero;
