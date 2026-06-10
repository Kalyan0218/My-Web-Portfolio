import React from 'react';
import './Portfolio.css'
import project1Img from '../images/c#.png';
import project2Img from '../images/excel.png';
import project3Img from '../images/figma.png';
import project4Img from '../images/Python.png';
import project5Img from '../images/webdev.png';
import project6Img from '../images/workflow.png';


const Projects = () => {
  const projects = [
    { title: 'C# Gym Membership App', image: project1Img, description: 'A C# application for managing gym memberships that performs all CRUD functions.' },
    { title: 'MS Excel Data Analysis And Visualization', image: project2Img, description: 'An Excel-based tool for data analysis and visualization.'},
    { title: 'Figma UI Design', image: project3Img, description: 'A UI design project created in Figma.' },
    { title: 'Python Employee Management System', image: project4Img, description: 'A Python application for managing employee information and performing CRUD operations.' },
    { title: 'Web Development ', image: project5Img, description: 'A Website created and esigned for a tech company.' },
    { title: 'Workflow Design', image: project6Img, description: 'Designed and implemented a workflow solution for a manufacturing company.' },
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="mountains-hero">
        <div className="section-header-box">PROJECTS</div>
      </div>

      <div className="portfolio-filter-bar">
        <div className="portfolio-description">
          <p>Throughout my journey as a developer, I've had the opportunity to work on a variety of projects that have challenged me and helped me grow.</p>
          <p>From building responsive websites to developing complex applications, each project has been a stepping stone in my development journey. Below are some of the projects I've worked on, showcasing my skills and the diverse range of technologies I've utilized.</p>
        </div>
        
      </div>      

       <div className="portfolio-grid">
        {projects.map((project, index) => {
          return (
            <div key={index} className="portfolio-item circle-tile">
              <div className="circle-container">
                <img src={project.image} alt={project.title} className="portfolio-img-fill" />
                <div className="portfolio-overlay">
                  <h5>{project.title}</h5>
                  <p className="overlay-description">{project.description}</p>
                  <div className="overlay-links">{project.links}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div> 

    

      <div className="grid-footer">And many more to come!</div>
    </section>
  );
};

export default Projects;