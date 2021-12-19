import { useState } from 'react';
import skillImg_1 from '../img/firebase.png';
import skillImg_2 from '../img/react.png';
import skillImg_3 from '../img/javascript.png';
import skillImg_4 from '../img/css3.png';
import skillImg_5 from '../img/html5.png';
import skillImg_6 from '../img/mongodb.png';
import skillImg_7 from '../img/heroku.png';
import skillImg_8 from '../img/node.png';
import skillImg_9 from '../img/material-ui.png';
import skillImg_10 from '../img/tailwindcss.png';
import tools_1 from '../img/vscode.png';
import tools_2 from '../img/netlify.png';
import tools_3 from '../img/git.png';
import familiar_1 from '../img/scss.png';
import familiar_2 from '../img/react-native.png';


const SkillsItem = [
  {
    id:'1',
    img:skillImg_2,
    name:'React js',
    category:'expertise'
  },
  {
    id:'2',
    img:skillImg_7,
    name:'Heroku',
    category:'comfortable'
  },
  
  {
    id:'3',
    img:skillImg_3,
    name:'Javascript',
    category:'expertise'
  },
  {
    id:'4',
    img:skillImg_4,
    name:'CSS3',
    category:'expertise'
  },
  {
    id:'5',
    img:skillImg_5,
    name:'HTML5',
    category:'expertise'
  },
  {
    id:'6',
    img:skillImg_6,
    name:'Mongo Db',
    category:'comfortable'
  },
  {
    id:'7',
    img:skillImg_1,
    name:'Firebase',
    category:'expertise'
  },
  {
    id:'8',
    img:skillImg_8,
    name:'Node js',
    category:'comfortable'
  },
  {
    id:'9',
    img:skillImg_9,
    name:'Metarial ui',
    category:'comfortable'
  },
  {
    id:'10',
    img:skillImg_10,
    name:'Tailwind css',
    category:'comfortable'
  },
  {
    id:'11',
    img:tools_1,
    name:'Vs code',
    category:'tools'
  },
  {
    id:'12',
    img:tools_2,
    name:'Netlify',
    category:'tools'
  },
  {
    id:'13',
    img:tools_3,
    name:'Git',
    category:'tools'
  },
  {
    id:'14',
    img:familiar_1,
    name:'Sass',
    category:'familiar'
  },
  {
    id:'15',
    img:familiar_2,
    name:'React Native',
    category:'familiar'
  },
]

const SkillData = () => {
  const [skills,setSkills] = useState(SkillsItem);
  return [skills,setSkills]
};

export default SkillData;