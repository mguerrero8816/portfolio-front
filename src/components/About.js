import React from 'react';

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
                    </div>
                </div>
            </div>
        </header>
    );
}

export default About;
