import React from 'react';
import { Link } from 'react-router-dom';

function Education() {
    return (
        <div className='page-section' id='education'>
            <div className='container'>
                <div className='text-center'>
                    <h2 className='section-heading text-uppercase'>Education</h2>
                    <h3 className='section-subheading text-muted'></h3>
                </div>
                <div className='row text-center'>

                </div>
            </div>
        </div>
    );
}

// function AchievementPost({imageName, imageLabel, postText}) {
//     return (
//         <div className='col-sm-4'>
//             <div className='team-member'>
//                 <img className='mx-auto rounded-circle' src={`${process.env.PUBLIC_URL}/assets/img/${imageName}`}></img>
//             </div>
//             <h4>{imageLabel}</h4>
//             <p className='text-muted text-left'>
//                 {postText}
//             </p>
//         </div>
//     );
// }

export default Education;

// export { AchievementPost };