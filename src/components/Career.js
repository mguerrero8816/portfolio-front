import React from 'react';
import { Link } from 'react-router-dom';

function Career() {
    return (
        <div className='page-section' id='career'>
            <div className='container'>
                <div className='text-center'>
                    <h2 className='section-heading text-uppercase'>Career</h2>
                    <h3 className='section-subheading text-muted'></h3>
                </div>
                <ul className='timeline'>
                    
                </ul>
            </div>
        </div>
    );
}

function CareerPost({imageName, postLabel, postText}) {
    return (
        <div className='col-sm-4'>
            <div className='team-member'>
                <img className='mx-auto rounded-circle' src={`${process.env.PUBLIC_URL}/assets/img/${imageName}`}></img>
            </div>
            <h4>{postLabel}</h4>
            <p className='text-muted text-left'>
                {postText}
            </p>
        </div>
    );
}

export default Career;

export { CareerPost };