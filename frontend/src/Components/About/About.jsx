import React from 'react';
import './About.css'
function About({ Name,Info, Design, Maintenance, Development }) {

  return (
    <div id='about' className='about'>
      <div className='aboutN' >ABOUT MYSELF</div>


      <p className='info'>
       I started my Web and Software Development journey in 2024, and since then, I have been passionate about creating innovative and user-friendly digital experiences. With a strong foundation in front-end development, I specialize in crafting responsive and visually appealing websites that engage users and drive results. My expertise includes HTML, CSS, JavaScript, and popular frameworks like React.js. I am constantly exploring new technologies and trends to stay ahead in the ever-evolving world of web development.
      </p>

      <div className='explore'>
        | EXPLORE |
      </div>

      <div className='grid'>
        <div>
          <h3 className='dd'>WEB/APP DESIGN</h3>
          <p>I create modern, user-friendly web and app designs tailored to your business requirements and vision. Whether you have a detailed concept or need a completely custom design, I work closely with you throughout the process to ensure the final product aligns with your goals.</p>
        </div>

        <div>
          <h3 className='dd'>DEVELOPMENT</h3>
          <p>I develop responsive, high-performance websites using React.js and C#/Python applications, focusing on clean code, scalability, and an excellent user experience across all devices.</p>
        </div>

        <div className='center' >
          <h3 className='dd'>MAINTENANCE</h3>
          <p>I provide reliable website and application maintenance services, including content updates, performance optimization, bug fixes, and ongoing technical support. Maintenance can be performed remotely or on-site, depending on your requirements.</p>
        </div>
      </div>
    </div>
  );
}

export default About;