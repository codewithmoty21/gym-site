import React from 'react';
import './Programs.css';
import cardioImage from './cardio.jpg';
import strengthImage from './strength.jpg';
import yogaImage from './yoga.jpg';

const Programs = () => {
  return (
    <section className="programs" id="programs">
      <div className="container">
        <h2>Our Programs</h2>
        <div className="program-list">
          <div className="program">
            <img src={cardioImage} alt="Cardio Training" className="program-image" />
            <h3>Cardio Training</h3>
            <p>Improve your endurance with our cardio training programs.</p>
          </div>
          <div className="program">
            <img src={strengthImage} alt="Strength Training" className="program-image" />
            <h3>Strength Training</h3>
            <p>Build muscle and strength with our expert-led classes.</p>
          </div>
          <div className="program">
            <img src={yogaImage} alt="Yoga Classes" className="program-image" />
            <h3>Yoga Classes</h3>
            <p>Enhance your flexibility and mindfulness with yoga.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
