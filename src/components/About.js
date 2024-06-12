import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <section className="page-section bg-light">
            <div className="container">
                <div className="row">
                    <div className='col-sm-4'>
                        <div className='team-member'>
                            <img className='mx-auto rounded-circle' src={`${process.env.PUBLIC_URL}/assets/img/Mike_Guerrero.jpeg`}></img>
                        </div>
                    </div>
                    <div className='col-sm-8'>
                        <p className="large text-muted">
                            I am Software Engineer with 8 years of professional experience working with Ruby on Rails, Javascript, jQuery and PostgreSQL. I've spent the last two years of my career leading a team of 3 developers in maintaining, updating and adding new features to a monolithic Ruby on Rails application and a collection of microservices designed as a business management platform for Ceatus Media Group.
                        </p>
                        <p className="large text-muted">
                            I believe that mentorship plays an important role in an engineers career and community. At Ceatus, I restarted and ran the internship program where I mentored a total of 20 junior developers in application development, stakeholder management, and professional team collaboration.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
