import React from 'react';
import { Link } from 'react-router-dom';

function Achievements() {
  return (
    <div className='page-section' id='achievements'>
        <div className='container'>
            <div className='text-center'>
                <h2 className='section-heading text-uppercase'>Achievements</h2>
                <h3 className='section-subheading text-muted'></h3>
            </div>
            <div className='row text-center'>
                test
            </div>
        </div>
    </div>
  );
}

// function SkillIcon({textLabel, deviconClass}) {
//     return (
//         <div className='col-sm-2'>
//             <i className={`devicon-${deviconClass}-plain colored skill-icon`}></i>
//             <h4>{textLabel}</h4>
//         </div>
//     );
// }

export default Achievements;

// export { SkillIcon };