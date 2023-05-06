import React from 'react';
import {Link} from 'react-router-dom';
import './Welcome.css'
import facebook from "../../Assets/SocialMediaIcons/facebook.png"
import github from "../../Assets/SocialMediaIcons/github.png"

import linkendin from "../../Assets/SocialMediaIcons/linkedin.png"

const Welcome =()=>{

  return (
    <div className='landingPage'>
      <div className='landing__box'>
        <h1 className='landing__title welcome'><b>Bienvenido</b></h1>
        <h2 className='landing__title'>Este es mi Proyecto</h2>
        <h3 className='landing__title'>Mi nombre es Mauro Gatica</h3>

        <Link to = '/Countries'>
          <button className='landing__button'>Toca aca</button>
        </Link>
      </div>
      <div className="social">
                    <a href="https://www.facebook.com/DamianGatica0/"><img src={facebook} alt="facebookLogo" className={"socialMediaIcon"} /></a>
                    <a href="https://github.com/Maurog5"><img src={github} alt="githubLogo" className={"socialMediaIcon"} /></a>
                    <a href="https://www.linkedin.com/in/mauro-gatica-a5aba3163/"><img src={linkendin} alt="linkedin"  /></a>
                </div>
    </div>
  )
}
export default Welcome;




