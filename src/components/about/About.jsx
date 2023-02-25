import "./about.css";
import { articles } from "../../constants/about";
import Image from "cloudinary-react";

const About = () => {
   return (
      <section className="container about" id="about">
         <main className="content-about">
            <div className="flex-about">
               <div className="image-container-about-1">
                  <Image
                     cloudName="dqpuhvgdp"
                     publicId="https://res.cloudinary.com/dqpuhvgdp/image/upload/v1677310986/samwayle-coffee-shop/glass-cup_wnpgm9.png"
                     className="glass-cup"
                  />
                  <span className="title title-rotate">About us</span>
               </div>
               <div className="column article-content">
                  <p className="article-title">{articles[0].title}</p>
                  <article>{articles[0].article}</article>
               </div>
            </div>
            <div className="flex-about flex-about-reverse">
               <div className="column article-content">
                  <p className="article-title">{articles[1].title}</p>
                  <article>{articles[1].article}</article>
                  <button className="about-btn-order">Order Now</button>
               </div>
               <div className="image-container-about-1 bg-light-grey">
                  <Image
                     cloudName="dqpuhvgdp"
                     publicId="https://res.cloudinary.com/dqpuhvgdp/image/upload/v1677310987/samwayle-coffee-shop/plastic-cup_tf0g19.png"
                     className="about-plastic-img"
                  />
                  <span className="title about-promotion-rotate">
                     Promotion
                  </span>
               </div>
            </div>
         </main>
      </section>
   );
};

export default About;
