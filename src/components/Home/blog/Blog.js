import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import blog_1 from '../../../img/blog-1.jpg';
import blog_2 from '../../../img/blog-2.jpg';
import blog_3 from '../../../img/img-3.jpg';
import { AiOutlineCalendar } from 'react-icons/ai';
import Modal from '../../Modal/SharedModal';
import './Blog.css';

const Blog = () => {
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const blogData = [
      {
         id: 1,
         img: blog_1,
         title: 'Web Design',
         subject: 'Best Way To Design',
         date: 'September 15,2021'
      },
      {
         id: 2,
         img: blog_2,
         title: 'Personal',
         subject: 'Thing I Need To Get Started',
         date: 'October 15,2021'
      },
      {
         id: 3,
         img: blog_3,
         title: 'Design',
         subject: 'My Current Workspace',
         date: 'November 15,2021'
      },
   ]
   return (
      <>
         <section id="blog">
            <div className="py-5">
               <div className="container">
                  <div className="sec_title text-center my-5" data-aos="fade-up">
                     <h2>Blog</h2>
                  </div>
                  <div className="row" data-aos="fade-up">
                     {
                        blogData.map(blog => {
                           return (
                              <div key={blog.id} className="col-lg-4 col-md-6 mb-3">
                                 <Card className="blog_card">
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className="blog_details d-flex justify-content-between align-items-center">
                                       <h5><i><AiOutlineCalendar /></i> {blog.date}</h5>
                                       <h4>{blog.title}</h4>
                                    </Card.Body>
                                    <button onClick={() => handleShow(show)} className="btn blog_btn">Read More</button>
                                 </Card>
                              </div>
                           )
                        })
                     }
                  </div>
               </div>
            </div>
         </section>

         <Modal show={show} handleClose={handleClose}></Modal>
      </>
   );
};

export default Blog;