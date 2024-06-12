import React from 'react';
import { Link } from 'react-router-dom';

function Achievements() {
    const mentorshipMessage = "I believe that mentorship plays an important role in an engineer'ss career and community. At Ceatus, I restarted and ran the internship program for two years, mentoring a total of 20 junior developers in application development, stakeholder management, and professional team collaboration. Through this program, I successfully hired two junior developers as full-time employees for the Ceatus engineering team."

    const leadMessage = "I've spent the last two years of my career leading a team of 3 developers in maintaining, updating and adding new features to a monolithic Ruby on Rails application and a collection of microservices designed as a business management platform for Ceatus Media Group. One of my most important functions was regularly meeting with stakeholders from other departments in order to gather feedback and convert it into a prioritized requirements list for my team to work on."

    const engineerMessage = "I've been a professional software engineer for eight years across two companies and have designed and deployed many features, microservices and platforms in that time. I will list some of the more noteable ones here. A review scraping tool running on a Linode server designed to visit websites and store any reviews found as a consolidated list. Partner to this tool was a review management platform where our clients could manage the list and solicit reviews from their customers. I have also built a calendar based scheduling tool designed for managers to rapidly adjust technician schedules based on availability changes resulting from service cancellations and high prioirty call ins."

    return (
        <div className='page-section' id='achievements'>
            <div className='container'>
                <div className='text-center'>
                    <h2 className='section-heading text-uppercase'>Achievements</h2>
                    <h3 className='section-subheading text-muted'></h3>
                </div>
                <div className='row text-center'>
                    <AchievementPost imageName={'pexels-cottonbro-6321928.jpg'} imageLabel={'Mentor'} postText={mentorshipMessage}/>

                    <AchievementPost imageName={'pexels-alphatradezone-5784805.jpg'} imageLabel={'Lead'} postText={leadMessage}/>

                    <AchievementPost imageName={'pexels-luis-gomes-166706-546819.jpg'} imageLabel={'Engineer'} postText={engineerMessage}/>
                </div>
            </div>
        </div>
    );
}

function AchievementPost({imageName, imageLabel, postText}) {
    return (
        <div className='col-sm-4'>
            <div className='team-member'>
                <img className='mx-auto rounded-circle' src={`${process.env.PUBLIC_URL}/assets/img/${imageName}`}></img>
            </div>
            <h4>{imageLabel}</h4>
            <p className='text-muted text-left'>
                {postText}
            </p>
        </div>
    );
}

export default Achievements;

export { AchievementPost };