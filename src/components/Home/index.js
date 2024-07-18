import './index.scss';
import { Link } from 'react-router-dom';
import ProfileImage from '../../assets/images/ProfileImage.JPG';
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
   const nameArray = ['L', 'i', 'n', 'g', 'l', 'i', 'n', 'g']
   const [letterClass, setLetterClass] = useState('text-animate')

   return (
      <div className="container home-page">
         <div className="content-wrapper"> 
               <img src={ProfileImage} alt="profile-image" className="profile-image"/>
               <div className="text-zone"> 
                  <h1>Hello, <br />I'm <AnimatedLetters letterClass={letterClass} strArray={nameArray} index={15} /></h1>
                     <h2>a software engineer</h2>
                     <h2>Proficient in Python / Love learning new tech / AWS infrastructure  </h2>
                     <Link to="/contact" className="flat-button"> CONTACT ME </Link>
               </div>
         </div>
      </div>
   )
}

export default Home