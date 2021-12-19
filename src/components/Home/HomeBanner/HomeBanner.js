// import ParticlesBg from 'particles-bg';
import React from 'react';
// import myImg from '../../../img/myProfile.png';
// import homeBg from'../../../img/home-bg.jpg'
import './HomeBanner.css';
import Typical from 'react-typical'
import PerticlesData from './PerticlesData';


const HomeBanner = () => {


   return (
      <>
     
         <div id="home">
            <div className="home_banner" data-aos="fade-up">
            <PerticlesData/>
               <div className="container banner_wrapper">
                  <div className="row align-items-center justify-content-center">
                     <div className="col-lg-12">
                        <div className="my_text_info text-center">
                           <h2>Naim <span>Ahmed</span></h2>
                           <p>
                              I am a {' '}
                              <Typical
                                 steps={['Front End Developer', 1000, 'React Developer', 500]}
                                 loop={Infinity}
                                 wrapper="b" />
                           </p>
                        </div>
                     </div>
                     {/* <div className="col-lg-6">
                     <div className="my_img text-center">
                        <img src={myImg} alt="" />
                     </div>
                  </div> */}
                  </div>
               </div>
            </div>
         </div>

         {/* <ParticlesBg type="lines" bg={true} /> */}
      </>
   );
};

export default HomeBanner;