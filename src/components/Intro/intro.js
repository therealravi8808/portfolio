import React from 'react';
import './intro.css';
import bg from '../../assets/img.png'
import {Link} from 'react-scroll';
import btnImg from '../../assets/hireme.png'

const Intro = () => {
  return (
   <section  id="intro">
    <div className="introContent">
     <span className="hello">Hello,</span>
     <span className="intoText">I'm<span className="introName"> Ravi</span> <br/>Website Designer <br/>Software Engineer</span>
    <p className="introPara">I am a skilled web Designer & Software Engineer in creative coding <br/>
    creating appealing and user friendly websites. </p> </div>
   <Link><button className="btn"><img src={btnImg} alt="Hire Me" className="btnImg" />Hire Me</button></Link>
   

    <img src={bg} alt="Profile " className="bg" />
   </section>
  );
};

export default Intro;