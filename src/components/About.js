import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <header className="masthead">
            <div className="container">
                <div className="row">
                    <div className='col-sm-4'>
                        <div className='team-member'>
                            <img className='mx-auto stretch-image rounded-circle' src={`${process.env.PUBLIC_URL}/assets/img/Mike_Guerrero.jpeg`}></img>
                        </div>
                    </div>
                    <div className='col-sm-8'>
                        <div className='text-center'>
                            <h3 className='masthead-subheading'>Hi, I'm Mike Guerrero</h3>
                            <h2 className='masthead-heading'>Software Engineer Ruby on Rails</h2>
                            <h4>I have 8 years of professional experience building and maintaining Ruby on Rails applications.</h4>
                        </div>
                        
                        {/* <p className="large text-muted">
                            
                        </p>
                        <p className="large text-muted">
                             I've spent the last two years of my career leading a team of 3 developers in maintaining, updating and adding new features to a monolithic Ruby on Rails application and a collection of microservices designed as a business management platform for Ceatus Media Group.
                        </p>
                        <p className="large text-muted">
                            I believe that mentorship plays an important role in an engineers career and community. At Ceatus, I restarted and ran the internship program where I mentored a total of 20 junior developers in application development, stakeholder management, and professional team collaboration.  I also leveraged the internship program to hire 2 junior developers as full time employees to the Ceatus dev team.
                        </p> */}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default About;
