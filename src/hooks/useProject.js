import {useState} from 'react';
import hero_bike_1 from '../img/hero-bike.PNG';
import travel_tour_1 from '../img/travelo-tour.PNG';
import health_care_1 from '../img/helth-care.PNG';
import hero_bike_2 from '../img/hero-bike-login-page.PNG';
import hero_bike_3 from '../img/hero-bike-all-products.PNG';
import travel_tour_2 from '../img/travel-login.PNG';
import travel_tour_3 from '../img/travel-all-order.PNG';
import health_care_2 from '../img/health-care-medico-login-page.PNG';
import health_care_3 from '../img/health-care-all-services.PNG';
import e_commerceHtml from '../img/e-commerce-html-home-page.PNG';
import e_commerceHtml_2 from '../img/e-commerce-html-products.PNG';
import e_commerceHtml_3 from '../img/e-commerce-html-unique.PNG';
import appLanding from '../img/app-landing-page.PNG';
import appLanding_2 from '../img/app-landing-page-feature.PNG';
import appLanding_3 from '../img/app-landing-page-testi.PNG';


const projectData = [
    {
       id: '1',
       img: hero_bike_1,
       img_2:hero_bike_2,
       img_3:hero_bike_3,
       appName: 'Hero Bike',
       websiteInfo: 'Full Stack Road Bike Selling Website',
       technologies: {
          first: 'React',
          second: 'React Bootstrap',
          third: 'React Router v6',
          fourth: 'Node js',
          five: 'Express js',
          six: 'Mongodb',
          seven: 'Heroku',
          eight: 'Firebase',
       },
       link:'https://hero-bike.web.app/',
       gitServer:'https://github.com/Naim-Ahmed-Mamun/hero-bike-server-side',
       gitClient:'https://github.com/Naim-Ahmed-Mamun/hero-bike-website',
       projectDetails:{
          point_1:'Admin can see all order lists of the users and change the orders status.',
          point_2:'Admin can add a product and manage all product',
          point_3:'User can login the website and see the dashboard and see here order list and manage her product',
       }
    },
    {
       id: '2',
       img: travel_tour_1,
       img_2:travel_tour_2,
       img_3:travel_tour_3,
       appName: 'Travelo Tour',
       websiteInfo: 'Full Stack Travel Agency Website',
       technologies: {
          first: 'React',
          second: 'React Bootstrap',
          third: 'React Router v5',
          fourth: 'Node js',
          five: 'Express js',
          six: 'Mongodb',
          seven: 'Heroku',
          eight: 'Firebase',
       },
       link:'https://travelo-tour.web.app/',
       gitServer:'https://github.com/Naim-Ahmed-Mamun/travel-tour-server-side',
       gitClient:'https://github.com/Naim-Ahmed-Mamun/travel-tour-website',
       projectDetails:{
         point_1:'User can login the website and book her favourite place and see her orders,all orders,and add destination.',
         point_2:'User manage her orders,if he/she want cancel her order.',
         point_3:'User see all orders and change status and delete any order and add any destination',
      }
    },
    {
       id:'3',
       img: health_care_1,
       img_2: health_care_2,
       img_3: health_care_3,
       appName: 'Health Care',
       websiteInfo: 'Responsive Health Care Website',
       technologies: {
          first: 'React',
          second: 'React Bootstrap',
          third: 'React Router v5',
          fourth: 'Firebase',
       },
       link:'https://health-care-medico.web.app/',
       gitClient:'https://github.com/Naim-Ahmed-Mamun/health-care-website',
       projectDetails:{
         point_1:'This website fully responsive user smothly visit the website for mobile , tablet and laptop or desktop.',
         point_2:'User visit the website and see many services and some information.',
         point_3:'User can login and see the full details of service.',
      }
    },
    {
       id:'4',
       img: e_commerceHtml,
       img_2: e_commerceHtml_2,
       img_3: e_commerceHtml_3,
       appName: 'Halal Product',
       websiteInfo: 'Responsive Furniture Products Website',
       technologies: {
          first: 'Html5',
          second: 'Css3',
          third: 'Bootstrap5',
          fourth: 'Jquery',
       },
       link:'https://naim-ahmed-mamun.github.io/E-commerce-Website/index.html#',
       gitClient:'https://github.com/Naim-Ahmed-Mamun/E-commerce-Website',
       projectDetails:{
         point_1:'This website fully responsive user smothly visit the website for mobile , tablet and laptop or desktop.',
         point_2:'User visit the website and see many furniture Products and some information.',
         point_3:'User scrolling the website see and feel awesome animation and hover effect',
      }
    },
    {
       id:'5',
       img: appLanding,
       img_2: appLanding_2,
       img_3: appLanding_3,
       appName: 'App Landing Page',
       websiteInfo: 'Responsive App Landing Page',
       technologies: {
          first: 'Html5',
          second: 'Css3',
          third: 'Bootstrap5',
          fourth: 'javascript',
       },
       link:'https://naim-ahmed-mamun.github.io/app-landing-page/',
       gitClient:'https://github.com/Naim-Ahmed-Mamun/app-landing-page',
       projectDetails:{
         point_1:'This website responsive for mobile and desktop, tablet and laptop size coming soon',
         point_2:'User visit the website and see app related features',
         point_3:'User scrolling the website see and feel awesome animation and hover effect',
      }
    },
 ]

const useProject = () => {
    const [projects,setProjects] = useState(projectData);
    return [projects,setProjects]
};

export default useProject;