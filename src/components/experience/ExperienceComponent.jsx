import React from 'react';
import './ExperienceComponent.css';


class ExperienceComponent extends React.Component {
    render() {
        return (
        <div className="experienceDiv">
            <div className="experienceContent">
                <h1 className="experienceHeader">Relevant Experience</h1>
                <h6 className="experienceSubHeader">Software Engineering Intern -&nbsp;
                    <a href="http://canaley.com/" target="_blank" rel="noopener noreferrer">
                        Canaley Process Equipment
                    </a>
                </h6>
                <div className="experienceBody">
                    Period of employment: May 2019 - August 2019&nbsp;
                    <br />
                    Job Functions: Worked independently to develop their existing AngularJS frontend, Node.js backend website that was used for tracking orders within the company as well as the files associated with it. Used Heroku for deploying the API and CPanel for managing the frontend deployment and git for version control.
                </div>
                <h6 className="experienceSubHeader">Remote Website Developer -&nbsp;
                    <a href="http://canaley.com/" target="_blank" rel="noopener noreferrer">
                        Canaley Process Equipment
                    </a>
                </h6>
                <div className="experienceBody">
                    Period of employment: August 2019 - Present&nbsp;
                    <br />
                    Job Functions: Working remotely to continue development and debugging on the website I worked on over summer. 
                </div>
                <h6 className="experienceSubHeader">Student Athlete Tutor - Purdue University</h6>
                <div className="experienceBody">
                    Period of employment: August 2019 - Present&nbsp;
                    <br />
                    Job Functions: Tutor six Purdue University athletes in Problem Solving and Object-Oriented Programming, Data Structures And Algorithms, Introduction to Statistics, and Microeconomics.
                </div>
                <h6 className="experienceSubHeader">Freshmen Tools Teaching Assistant - Purdue University</h6>
                <div className="experienceBody">
                    Period of employment: August 2019 - Present&nbsp;
                    <br />
                    Job Functions: Lead Practice Study Observation classes one day a week to help students retain the material they learned in the lecture. 
                    I also grade student homework assignments.
                </div>
                <h1 className="experienceHeader">Other Experience</h1>
                <h6 className="experienceSubHeader">Seasonal Shipping Department Specialist -&nbsp;
                    <a href="https://theaccentshopinc.com/" target="_blank" rel="noopener noreferrer">
                        The Accent Shop Inc.
                    </a>
                </h6>
                <div className="experienceBody">
                    Period of employment: May 2017 - Present (Worked every summer, Thanksgiving break, and winter break)&nbsp;
                    <br />
                    Job Functions: Responsible for listing new products and updating inventories on Amazon, Ebay, and the store website as well as ensuring orders on these platforms were shipped in a correct and timely manner.
                </div>
                <h6 className="experienceSubHeader">Overnight Stocking Associate - Whole Foods Market</h6>
                <div className="experienceBody">
                    Period of employment: May 2018 - August 2018&nbsp;
                    <br />
                    Job Functions: Responsible for receiving the grocery load, sorting the dairy load, stocking the dairy cooler, carrying out advertisement changes, and taking inventory. Received grocery team member of the quarter award.
                </div>
                <h6 className="experienceSubHeader">Cook - Pietro's Pizza</h6>
                <div className="experienceBody">
                    Period of employment: May 2016 - August 2016&nbsp;
                    <br />
                    Job Functions: Responsible for making menu items as well as keeping the restaurant clean and being friendly and concise while taking orders over the phone and in the store.
                    <br />&nbsp;
                </div>
            </div>
        </div>
        )
    }
}

export default ExperienceComponent;