import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProject from '../../../hooks/useProject';
import './Portfolio.css';

const Portfolio = () => {
   const [projects] = useProject();
   return (
      <>
         <section id="portfolio" className="py-5">
            <div className="container">
               <div className="sec_title text-center my-4" data-aos="fade-up">
                  <h2>Portfolio</h2>
               </div>
               <div className="row" data-aos="fade-up">
                  {
                     projects.map(project => {
                        return (
                           <div key={project.id} className="col-lg-4 col-md-6 mb-3">
                              <Card>
                                 <Card.Img variant="top" src={project.img} />
                                 <Card.Body>
                                    <Card.Title>{project.appName} Website</Card.Title>
                                    {/* <h5>{project.websiteInfo}</h5> */}
                                    {/* <div>
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
                                    </div> */}
                                    <Link to={`/project/${project.id}`}>
                                       <Button style={{background:'green',color:'white'}} 
                                       className="btn">View full details</Button>
                                    </Link>
                                 </Card.Body>
                              </Card>
                           </div>
                        )
                     })
                  }
               </div>
            </div>
         </section>
      </>
   );
};

export default Portfolio;