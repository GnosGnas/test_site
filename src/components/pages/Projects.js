import React from 'react';
import '../../App.css';
import './Projects.css';

const Projects = () => {
  return (
    <div className='projects'>
      <h1>Projects</h1>

      <div className='projects-section'>
        <h2>YEAR LONG PROJECTS</h2>
        <div className='cards-row'>
          {/* Render the four cards for YEAR LONG PROJECTS */}
          {/* Card 1 */}
          <div className='card'>
            <div className='card-image'>
              <img src='placeholder-image1.jpg' alt='Card Image 1' />
            </div>
            <div className='card-text'>
              <h3>Card 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className='card'>
            <div className='card-image'>
              <img src='placeholder-image2.jpg' alt='Card Image 2' />
            </div>
            <div className='card-text'>
              <h3>Card 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className='card'>
            <div className='card-image'>
              <img src='placeholder-image3.jpg' alt='Card Image 3' />
            </div>
            <div className='card-text'>
              <h3>Card 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          {/* Card 4 */}
          <div className='card'>
            <div className='card-image'>
              <img src='placeholder-image4.jpg' alt='Card Image 4' />
            </div>
            <div className='card-text'>
              <h3>Card 4</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the sections follow the same structure as above */}

    </div>
  );
};

export default Projects;
