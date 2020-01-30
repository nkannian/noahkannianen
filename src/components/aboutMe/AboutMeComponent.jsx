import React from 'react';
import './AboutMeComponent.css';

class AboutMeComponent extends React.Component {
    render() {
        return (
        <div className="aboutMeDiv">
            <div className="aboutMeContent">
                <div className="professionalImage">
                    <img src="professionalpic.jpeg" alt="Error pulling" width="243" height="324"></img>
                </div>
                <h1 className="aboutMeHeader">
                    Background
                </h1>
                <div className="aboutMeText">
                    I am originally from Indiana and recieved the North Central Honors Diploma from&nbsp;
                    <a href="https://www.nchs.cc/" target="_blank" rel="noopener noreferrer">North Central High School</a>.
                    I finished 23rd out of 800 in my graduating class with a GPA of 4.84 out of 4.00.
                    Since 7th grade, I have been an avid runner.
                    I was a member of the cross country and track teams from 7th grade through all of high school.
                    In track I primarily ran the 1600, 800, 400, and 4x400.
                    I played percussion in band from 6th grade to junior year of high school. 
                    Since I was very young, I had an interest in computers.
                    I began teaching myself Java as a freshmen in high school, and I have enjoyed coding ever since.
                    My passion for coding is what led me to pursue my a career in this field.
                </div>
                <h1 className="aboutMeHeader">
                    Academics
                </h1>
                <div className="aboutMeText">
                    I am currently a junior studying computer science at Purdue University. 
                    I am working toward a Bachelor's of Science in Computer Science.
                    My computer science tracks are Security, Database and Information Systems, Software Engineering, and Machine Intelligence.
                    I am also pursuing a minor in business economics and mathematics.
                    My current overall GPA is 3.77 out of 4.00.
                </div>
                <h1 className="aboutMeHeader">
                    Activities
                </h1>
                <div className="aboutMeText">
                    <h5>Purdue Running Club</h5>
                    <div>
                    I am currently a part of the Purdue Running Club.
                    I have run with the team almost daily since freshmen year.
                    I have participated in one meet with the club, being the Illinois relays where I was a part of the 4x800 relay team.
                    </div>
                    <br/>
                    <h5>Hello World Hackathon</h5>
                    <div>During my freshmen year of college, I particapated in the Hello World Hackathon.
                    In this hackathon, I worked on a team of freshmen to develop an Android app.
                    The app that we created assisted with choosing an outfit for the day.
                    It would randomly select from inputted clothes to choose an outfit for the day.
                    This app was very basic but it was a good introduction to Purdue Computer Science and working on a team.
                    </div>
                    <br/>
                    <h5>Purdue ACM SIGAI</h5>
                    <div>During my sophomore year of college, I was a part of&nbsp;
                    <a href="https://acm.cs.purdue.edu/">Purdue Association of Computing Machinery</a> Special Interest Group for Artifical Intelligence.
                    As a member of this club we were assisted in learning about artificial intelligence. 
                    In addition to this, we competed in a challenge against the other members of the club.
                    The challenge was to use data on house prices in California to build a script that could determine median house price based on coordinates.
                    Building this project was a great way for me to not only learn Python but also some of the basic concepts of artificial intelligence and machine learning.
                    </div>
                    <br/>
                    <h5>Purdue IEE Computer Society</h5>
                    <div>During my sophomore year of college, I was also a part of&nbsp;
                    <a href="https://purdueieee.org/csociety/">Purdue Institute of Electrical and Electronics Engineers Computer Society</a>.
                    In my time in this club, we worked on a machine learning project. 
                    The project that we pursued was a machine learning algorithm to recognize basic hand gestures.
                    This, in addition to SIGAI was a very enriching learning experience for me as an intro to Python and machine learning.
                    </div>
                    <br/>
                    <h5>Boilermake Hackathon</h5>
                    <div>During my junior year of college, I particapated in the&nbsp;
                    <a href="https://boilermake.org/">Boilermake Hackathon.</a>
                    In this hackathon, I worked with one other person to build a web application.
                    We wrote it with a Node.js backend hosted with google cloud functions, 
                    React.js frontend hosted on firebase, and a NoSQL databse hosted on MongoDB
                    The website we build was essentially a social media calendar application that can be 
                    used to assist with scheduling events with friends and teams.
                    The application can be found&nbsp;
                    <a href="https://whatyouon.online/">here</a>.
                    We are currently working to continue to develop this application and add more features.
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default AboutMeComponent;