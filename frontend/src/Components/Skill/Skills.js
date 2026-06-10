
import React from "react";
import ProfDots from "./Dots";


const SkillCard = ({ name, icon, prof, learning }) => (
  <div className="skill-card" >
    <img src={icon} alt={name} className="skill-icon" />
    <div className="skill-info">
      <div className="skill-name-row">
        <span className="skill-name">{name}</span>
        {learning && <span className="skill-tag">learning</span>}
      </div>
      <ProfDots filled={prof} />
    </div>
  </div>
);

const skills = {
  FrontEnd: [
    { name: "HTML5",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",           prof: 5 },
    { name: "CSS3",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",             prof: 5 },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", prof: 4 },
    { name: "React",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",           prof: 3 },
    { name: "Git",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",               prof: 4 },
    { name: "Figma",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",           prof: 3 },
  ],
  BackEnd: [
    { name: "NodeJS",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",         prof: 2 },
    { name: "MySQL",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",           prof: 2 },
    { name: "MongoDB",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",       prof: 2 },
    { name: "TypeScript",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", prof: 2 },
    
  ],
};

const stats = [
  { num: "10", suffix: "+", label: "Technologies in toolkit" },
  { num: "6",  suffix: "+", label: "Projects completed"      },
  { num: "1",  suffix: "yr", label: "of hands-on learning"  },
];









const SkillGroup = ({ label, items, learning, baseDelay = 0 }) => (
  <div className="skill-group">
    <div className="skill-group-header">
      <span className="skill-group-label">{label}</span>
      <div className="skill-group-line" />
    </div>
    <div className="skills-grid">
      {items.map((skill, i) => (
        <SkillCard
          key={skill.name}
          {...skill}
          
          
        />
      ))}
    </div>
  </div>
);

const StatCard = ({ num, suffix, label }) => (
  <div className="stat-card">
    <div className="stat-num">
      {num}<span className="stat-suffix">{suffix}</span>
    </div>
    <div className="stat-label">{label}</div>
  </div>
);



const Skills = () => (
  <section id='skills' className="skills-section">
  
    <h2 className="section-heading">
      Technical skills &<br />tools
    </h2>

    <SkillGroup label="Front End"          items={skills.FrontEnd} learning={false} baseDelay={0.3} />
    <SkillGroup label="Back End" items={skills.BackEnd}  learning={true}  baseDelay={0.6} />

    <div className="stats-row">
      {stats.map((s) => <StatCard key={s.label} {...s} />)}
    </div>
  </section>
);


export default Skills;