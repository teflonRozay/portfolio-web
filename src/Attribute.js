import React from 'react';


const skills = [
  { name: 'HTML', rating: 4 },
  { name: 'CSS', rating: 5 },
  { name: 'JavaScript', rating: 4 },
  { name: 'Bootstrap', rating: 5 },
  { name: 'React JS', rating: 5 },
  { name: 'GIT', rating: 4 },
];

const SkillItem = ({ name, rating }) => (
  <div className="skill-item">
    <h3>{name}</h3>
    <div className="stars">
      {[...Array(5)].map((_, index) => (
        <span key={index} className={index < rating ? 'star-filled' : 'star-empty'}>&#9733;</span>
      ))}
    </div>
  </div>
);

const Attribute = () => (
  <div id='Attribute' className="bat  Skills">
    <h1 className='babe'>My Skills</h1>
    <div className="row">
      {skills.map((skill, index) => (
        <div key={index} className="col-md-4">
          <SkillItem {...skill} />
        </div>
      ))}
    </div>
  </div>
);

export default Attribute;




