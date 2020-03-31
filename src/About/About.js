import React, { Component } from 'react';
import Nav from '..//Nav/Nav';
import handstand from '../images/handstand.jpg';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import './About.css';

class About extends Component {
    render() {
      return (
          <div className='danielle'>
              <Nav />
              <section className='about-danielle'>
              <div className='bg-vid'>
              <img src={handstand} alt="handstand" />
              {/* <ReactPlayer className='vid' url='https://www.youtube.com/watch?v=NgJqwbNfTfs' playing /> */}
              </div>
              <div className="text-about">
              <p>Danielle Acoff, a native to Los Angeles, is a model, dancer and actress.</p>
                <br></br>
                <p>She began her career as a professional dancer and quickly gathered a long list of television credits in the U.S. and internationally. She was one of the iconic Fanta girls, the lead in a Micheal Jackson’s last music video, performed on Glee, and danced on tour with Robin Thicke, to name a few.</p>
                <br></br>
                <p>Danielle has also appeared on America’s Got Talent, The Voice, Jimmy Fallon, The View, Ellen, Crazy Ex Girlfriend and many more. Since then she has expanded into acting and modeling, signing with one of the top agencies, Wilhelmina. Danielle has represented some of the world’s most recognized brands such as Agent Provocateur, Adidas, Nike, Reebok, and Athleta. </p>
                <br></br>
                <p>Danielle uses yoga and meditation to keep her balanced in the high pressure industry. In 2014 she became a certified yoga instructor, and continues her studies of yoga and holistic health. Nonetheless, her goal remains the same as she first started, to inspire and to create.</p>  
              </div>
          </section>
          </div>
  
              
      )
    }
  }
  
  export default About;