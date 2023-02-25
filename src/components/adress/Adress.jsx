import React, { useEffect, useState } from "react";
import address from "../../constants/address";
import "./adress.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const Adress = () => {
   const [btnAddress, setBtnAddress] = useState(false);
   const width = window.innerWidth;
   useEffect(() => {
      if (width < 678) {
         setBtnAddress(true);
      } else {
         setBtnAddress(false);
      }
   }, [width]);
   return (
      <section id="address">
         <div className="flex">
            <div className="address-left-content">
               <Image
                  cloudName="dqpuhvgdp"
                  publicId="https://res.cloudinary.com/dqpuhvgdp/image/upload/v1677311176/samwayle-coffee-shop/map_prf1vu.png"
               />
               <span className="contact-title title">contact</span>
            </div>
            <div className="address-right-content">
               <span className="line-block"></span>
               <div className="flex-col">
                  <span className="our-address">Our Address</span>
                  {btnAddress
                     ? address.slice(0, 2).map((item, i) => (
                          <div key={i} className="our-address">
                             <li>{item.title}</li>
                          </div>
                       ))
                     : address.map((item, i) => <li key={i}>{item.title}</li>)}
                  {btnAddress && (
                     <button className="btn-address">
                        See more address
                        <HiOutlineArrowNarrowRight size={25} />
                     </button>
                  )}
               </div>
            </div>
         </div>
      </section>
   );
};

export default Adress;
