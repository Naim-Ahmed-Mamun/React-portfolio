import React from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';
import { MdLocationOn } from 'react-icons/md';
import { MdOutlineEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {

   // handleFormSubmit
   const handleFormSubmit = e => {
      e.preventDefault()

      emailjs.sendForm('service_vrsqg2b', 'template_gner54o',
         e.target, 'user_OzTPfmhpYhR8c7KXUOUjY'
      ).then(res => {
         // console.log(res.text)
         if (res.status === 200) {
            toast.success('Message Send Successfully', {
               position: "top-center",
            });
         }
      })
         .catch(err => {
            console.log(err)
         })
   }

   return (
      <>
         <div id="contact" className="contact py-5">
            <div className="container">
            <div className="sec_title text-center my-4" data-aos="fade-up">
                  <h2>Contact Me</h2>
               </div>
               <div className="row mt-5">
                  <div className="col-lg-6 col-md-6" data-aos="fade-up">
                     <div className="contact_left_side_">
                        <h2>Let's Talk</h2>
                        <ul>
                           <li> <i><MdLocationOn/></i> <span>Address: Sunamganj,Sylhet,Bangladesh</span></li>
                           <li> <i><MdOutlineEmail/> </i> <span>Email: naim.uddin.official2@gmail.com</span></li>
                           <li> <i><FaPhoneAlt/></i> <span>Phone: +8801627815507</span></li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-6 col-md-6" data-aos="fade-up">
                     <div className="contact_right_side">
                        <form onSubmit={handleFormSubmit}>
                           <input name="name" type="text" placeholder="Your Name" required />
                           <input name="email" type="text" placeholder="Your Email" required />
                           <textarea name="message" id="" cols="10" rows="7" placeholder="Your Message" required></textarea>
                           <input type="submit" value="Send Message" />
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <ToastContainer />
      </>
   );
};

export default Contact;

