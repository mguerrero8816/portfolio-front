import React from 'react';
import { Link } from 'react-router-dom';

function Skills() {
  return (
    <div className='page-section' id='skills'>
        <div className='container'>
            <div className='text-center'>
                <h2 className='section-heading text-uppercase'>Skills</h2>
                <h3 className='section-subheading text-muted'></h3>
            </div>
            <div className='row text-center'>
                <SkillIcon textLabel={'Ruby'} deviconClass={'ruby'} />
                <SkillIcon textLabel={'PHP'} deviconClass={'php'} />
                <SkillIcon textLabel={'Javascript'} deviconClass={'javascript'} />
                <SkillIcon textLabel={'HTML'} deviconClass={'html5'} />
                <SkillIcon textLabel={'CSS'} deviconClass={'css3'} />
                <SkillIcon textLabel={'Godot'} deviconClass={'godot'} />


                <SkillIcon textLabel={'Rails'} deviconClass={'rails'} />
                <SkillIcon textLabel={'jQuery'} deviconClass={'jquery'} />
                <SkillIcon textLabel={'React'} deviconClass={'react'} />
                <SkillIcon textLabel={'Vue.js'} deviconClass={'vuejs'} />
                <SkillIcon textLabel={'PostgreSQL'} deviconClass={'postgresql'} />
                <SkillIcon textLabel={'MySQL'} deviconClass={'mysql'} />
                
                <SkillIcon textLabel={'AWS'} deviconClass={'amazonwebservices'} />
                <SkillIcon textLabel={'Docker'} deviconClass={'docker'} />
                <SkillIcon textLabel={'Nginx'} deviconClass={'nginx'} />
                <SkillIcon textLabel={'Git'} deviconClass={'git'} />
                <SkillIcon textLabel={'Github'} deviconClass={'github'} />
                <SkillIcon textLabel={'Redis'} deviconClass={'redis'} />
            </div>
        </div>
    </div>
  );
}

function SkillIcon({textLabel, deviconClass}) {
    return (
        <div className='col-sm-2'>
            <i className={`devicon-${deviconClass}-plain colored skill-icon`}></i>
            <h4>{textLabel}</h4>
        </div>
    );
}

export default Skills;

export { SkillIcon };