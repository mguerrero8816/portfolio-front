import React from 'react';
import { Link } from 'react-router-dom';

function Career() {
    const posts = [
        {
            imageName: '',
            postCompany: 'Ceatus Media Group',
            postDates: 'April 2023 - June 2024',
            postTitle: 'Lead Senior Software Engineer',
            postText: `
                Led a team of 3 developers in the maintenance and continuous development of in-house monolithic CRM built in Ruby on Rails, Slim, Javascript, JQuery, and PostgreSQL.
                Managed 6-week sprint internship program in partnership with a local tech boot camp, mentoring 8 groups totaling 20 junior developers in application development, stakeholder management, and team collaboration.  Successfully utilized internship as a recruitment pipeline for junior talent.
                Migrated external order systems from Salesforce to internal tools, including Docusign API integration, custom sales order generation, and microservice-based payment storage.
                Integrated Ceatus Media Group’s Ruby on Rails features into MyAdvice’s PHP-based codebase.
                Used Docker as a test environment to facilitate migrating server based web scrapers to AWS Lambda, increasing throughput to accommodate higher client volume.
            `
        },
        {
            imageName: '',
            postCompany: 'Ceatus Media Group',
            postDates: 'February 2022 - April 2023',
            postTitle: 'Lead Software Engineer',
            postText: `
                Addressed significant technical debt within in-house CRM, overhauling page readability and load times and developing custom microservices and features.
                Transitioned client text messaging from Amazon SNS to Twilio, improving engineering integrations and decreasing per-text fees.
                Updated Google Analytics 3 integration to Google Analytics 4, ensuring continuity and leveraging new features for enhanced data analysis.
                Generated monthly revenue reports, automating processes to match existing manual spreadsheet requirements, increasing efficiency and accuracy.
            `
        },
        {
            imageName: '',
            postCompany: 'Lloyd Pest Control',
            postDates: 'November 2019 - February 2022',
            postTitle: 'Software Engineer',
            postText: `
                Collaborated on a cross-company team to maintain and enhance the in-house monolithic CRM used by multiple pest control providers, improving scalability and user experience.
                Developed a calendar grid based scheduling system which allowed offices to manage multiple technicians working in the same areas and quickly respond to scheduling gaps.
                Led system migrations for multiple companies, transitioning from external CRMs to in-house solution, ensuring seamless data integration and minimal downtime.
                Developed and automated performance reports based on interdepartmental communications, providing actionable insights that improved decision-making efficiency.
                Automated commission calculations within the CRM, replacing manual processes and reducing errors, saving time, and improving accuracy.
                Integrated the CRM with multiple APIs, including DocuSign and Twilio, to enhance functionality and streamline workflows.
            `
        },
        {
            imageName: '',
            postCompany: 'Ceatus Media Group',
            postDates: 'July 2016 - November 2019',
            postTitle: 'Software Engineer',
            postText: `
                Developed a client-facing review management platform, enhancing user experience and meeting diverse departmental needs.
                Developed automated review scraping software which compiled and stored customer reviews from multiple websites.
                Added performance reports with filtering and sorting options, providing various departments with valuable insights and data analysis tools.
                Refactored existing code to improve performance, ensuring more efficient and maintainable applications.
                Integrated applications with multiple APIs, including Google Analytics, Salesforce, AWS, and Stripe, to extend functionality and streamline operations.
            `
        },
        {
            imageName: '',
            postCompany: 'Alere',
            postDates: 'November 2015 - August 2016',
            postTitle: 'Product Support Associate',
            postText: `
                Conducted customer complaint investigations using various laboratory techniques, software, and data analysis skills, ensuring accurate and timely resolutions.
                Documented investigation results in multiple formats, maintaining comprehensive records for both hardcopy and electronic storage.
                Streamlined workflow for the management team by generating monthly performance data using JSL, and Salesforce SQL report generation, improving efficiency and decision-making.
            `
        },
        {
            imageName: '',
            postCompany: 'Alere',
            postDates: 'December 2014 - November 2015',
            postTitle: 'Process Analyst',
            postText: `
                Provided critical support to Manufacturing and QC Testing departments, ensuring seamless operations and quality control.
                Monitored lot performance, identifying trends and issues to maintain product quality and consistency.
                Recommended and implemented solutions for manufacturing and performance issues, enhancing overall efficiency and output.
                Standardized and accelerated analyst team procedures using JSL and MS SQL, improving workflow and data processing speed.
            `
        },
        {
            imageName: '',
            postCompany: 'Alere',
            postDates: 'January 2013 - December 2014',
            postTitle: 'Quality Control Technician',
            postText: `
                Performed testing procedures on product lots according to SOPs, calculated and documented results, and coordinated with the team to ensure efficient throughput and optimal production schedules.
            `
        },
    ]

    return (
        <div className='page-section' id='career'>
            <div className='container'>
                <div className='text-center'>
                    <h2 className='section-heading text-uppercase'>Career</h2>
                    <h3 className='section-subheading text-muted'></h3>
                </div>
                <ul className='timeline'>
                    {posts.map((post, index) => (
                        <CareerPost key={index} imageName={post.imageName} postCompany={post.postCompany} postDates={post.postDates} postTitle={post.postTitle} postText={post.postText} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

function CareerPost({imageName, postCompany, postDates, postTitle, postText}) {
    return (
        <li>
            <div className="timeline-image">
                <img className="rounded-circle img-fluid" src=""></img>
            </div>
            <div className="timeline-panel">
                <div className="timeline-heading">
                    <h4>{postCompany}</h4>
                    <h4 className="subheading">{postDates}</h4>
                    <h4 className="subheading">{postTitle}</h4>
                </div>
                <div className="timeline-body">
                    <p>{postText}</p>
                </div>
            </div>
        </li>
    );
}

export default Career;

export { CareerPost };