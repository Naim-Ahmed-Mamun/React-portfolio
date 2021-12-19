import React from 'react';
import { useParams } from 'react-router';
import useProject from '../../hooks/useProject';
// import Navigation from '../shared/Navigation/Navigation';
import './SingleProject.css';
import { FiCalendar } from 'react-icons/fi';
import { RiLink } from 'react-icons/ri';
import { BsGithub } from 'react-icons/bs';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
// import { GrClose } from 'react-icons/gr';

const SingleProject = () => {
   const { id } = useParams();
   console.log(id)
   const [projects] = useProject();
   const project = projects.find(project => project.id === id)
   // console.log(project)
   return (
      <>
         {/* <Navigation /> */}
         <div className="single_project">
            <div className="container project_wrapper">
               {/* <div className="back_home"><i><GrClose/></i></div> */}
               <Link to="/">
               <button style={{display:'inline-block'}} className="btn btn-success mb-5">Back Home</button>
               </Link>
               <div className="row" data-aos="fade-up">
                  <div className="col-lg-7">
                     <div className="single_item_left_side">
                        <div className="main_img">
                           <Carousel>
                              <div>
                                 <img src={project.img} alt=""/>
                                 {/* <p className="legend">Home</p> */}
                              </div>
                              <div>
                                 <img src={project?.img_2} alt="" />
                                 {/* <p className="legend">Login</p> */}
                              </div>
                              <div>
                                 <img src={project?.img_3} alt="" />
                                 {/* <p className="legend">All Products</p> */}
                              </div>
                           </Carousel>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-5">
                     <div className="single_item_right_side">
                        <h4 className="app_name mb-3">{project.appName}</h4>
                        <h4 className="app_name">Description</h4>
                        <h4 className="web_info">{project.websiteInfo}</h4>
                        <ul>
                           <li><i><FiCalendar /></i> 10/28/2021</li>
                           <li><i><RiLink /></i> <a href={project.link} target="_blank" rel="noreferrer">Live Site</a></li>
                           <li><i><BsGithub /></i>
                              <a href={project.gitClient} target="_blank" rel="noreferrer">Client Side Code </a>
                              <a href={project.gitServer ? project.gitServer : ''} target="_blank" rel="noreferrer">
                                 {project.gitServer ? 'Server Side Code' : ''}</a>
                           </li>
                        </ul>
                        <h4 className="app_name">Features</h4>
                        <ul className="website_details">
                           <li>{project?.projectDetails?.point_1}</li>
                           <li>{project?.projectDetails?.point_2}</li>
                           <li>{project?.projectDetails?.point_3}</li>
                        </ul>
                        <h4 className="app_name mb-3">Technologies</h4>
                        <div>
                           <span className="technology">{project.technologies.first}</span>
                           <span className="technology">{project.technologies.second}</span>
                           <span className="technology">{project.technologies.third}</span>
                           <span className="technology">{project.technologies.fourth}</span>
                           <span className={project.technologies.five ? `technology` : ''}>
                              {project.technologies.five}</span>
                           <span className={project.technologies.six ? `technology` : ''}>
                              {project.technologies.six}</span>
                           <span className={project.technologies.seven ? `technology` : ''}>
                              {project.technologies.seven}</span>
                           <span className={project.technologies.eight ? `technology` : ''}>
                              {project.technologies.eight ? project.technologies.eight : ''}</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default SingleProject;