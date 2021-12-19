import React, { useState } from 'react';
import './About.css';
import { BsFacebook } from 'react-icons/bs';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillGithub } from 'react-icons/ai';
import aboutImg from '../../../img/myProfile.png';
import 'react-circular-progressbar/dist/styles.css';
import SkillData from '../../../hooks/SkillData';


const About = () => {
   const [skills] = SkillData();
   const [matchedSkills,setMatchedSkills] = useState(skills)
   
   const handleSkillItem = (category) => {
    const matchedItem = skills.filter(matched => matched.category === category);
    setMatchedSkills(matchedItem)
   }
   console.log(SkillData)
   return (
      <>
         <div className="about" id="about">
            <div className="container">
               <div className="sec_title text-center my-5" data-aos="fade-up">
                  <h2>ABOUT ME</h2>
               </div>
               <div className="row mt-5 align-items-center">
                  <div className="col-lg-5 col-md-5" data-aos="fade-up">
                     <div>
                        <div className="about_img text-center">
                           <img src={aboutImg} alt="" />
                        </div>
                        <div className="social_link text-center mt-4">
                           <a href="https://www.facebook.com/profile.php?id=100010169807336"
                              target="_blank" rel="noreferrer"> <BsFacebook /> </a>
                           <a href="https://www.linkedin.com/in/naim-uddin-2na/"
                              target="_blank" rel="noreferrer"> <RiLinkedinFill /> </a>
                           <a href="https://github.com/Naim-Ahmed-Mamun"
                              target="_blank" rel="noreferrer"> <AiFillGithub /> </a>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-7 col-md-7" data-aos="fade-up">
                     <div className="about_right_side">
                        <div className="about_content">
                           <h2>Web Developer</h2>
                           <p>
                              <span>I am Naim Ahmed from Bangladesh </span>
                              Web development is my passion since my early teenage. I believe that people should do things in which they are good at. I chose web development as my career because I believe I’m good at this and mas. I am always honest and I am never afraid of doing hard work.
                           </p>
                        </div>
                        <div className="personal_info">
                           <h2>Personal Information</h2>
                           <ul>
                              <li>
                                 <span>Name : </span> Naim Ahmed
                              </li>
                              <li>
                                 <span>Age : </span> 24
                              </li>
                              <li>
                                 <span>Address : </span> Sunamganj,Sylhet,Bangladesh
                              </li>
                              <li>
                                 <span>Email : </span> naim.uddin.official2@gmail.com
                              </li>
                              <li>
                                 <span>Phone : </span> +8801627815507
                              </li>
                           </ul>
                        </div>
                        <a className="resume_btn" href="https://drive.google.com/file/d/1Hr-jqOq0DJP_2oq9CLaO8tHoijmob_du/view?usp=sharing"
                           target="_blank" rel="noreferrer">
                           Download Resume
                        </a>
                     </div>
                  </div>
               </div>


               <div className="skills">
                  <div className="sec_title text-center my-5">
                     <h2>Professional Skills</h2>
                  </div>
                  <div className="text-center mb-5">
                     <button style={{background:'green'}} 
                     onClick={() => setMatchedSkills(skills)} className="btn btn-success mb-3">All </button>
                     <button style={{background:'green'}} 
                     onClick={() => handleSkillItem('expertise')} className="btn btn-success mb-3 mx-3">Expertise</button>
                     <button style={{background:'green'}} 
                     onClick={() => handleSkillItem('comfortable')} className="btn btn-success mb-3">Comfortable</button>
                     <button style={{background:'green'}} 
                     onClick={() => handleSkillItem('familiar')} className="btn btn-success mb-3 mx-3">Familiar</button>
                     <button style={{background:'green'}} 
                     onClick={() => handleSkillItem('tools')} className="btn btn-success mb-3">Tools</button>
                  </div>
                  <div className="row">
                     {
                        matchedSkills.map(skill => {
                           return (
                              <div key={skill.id} className="col-lg-3 col-xl-2 col-md-3 col-sm-6 mb-3" data-aos="fade-up">
                                 <div className="text-center skill_item">
                                    <h5>{skill.name}</h5>
                                     <img src={skill.img} alt=""/>
                                 </div>
                              </div>
                           )
                        })
                     }
                  </div>
               </div>

            </div>
         </div>
      </>
   );
};

export default About;