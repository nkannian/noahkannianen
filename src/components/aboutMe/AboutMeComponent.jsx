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
                    I am originally from Indianapolis and recieved the North Central Honors Diploma from&nbsp;
                    <a href="https://www.nchs.cc/" target="_blank" rel="noopener noreferrer">North Central High School</a>.
                    I finished 23rd out of approximately 800 in my graduating class with a GPA of 4.84 out of 4.00.
                    Since 7th grade, I have been an avid runner.
                    I was part of the cross country and track teams from 7th grade through all of high school.
                    In track I ran primarily the 1600, 800, 400, and 4x400. The cross country races were primarily 5k.
                    I was also a part of band from 6th grade to junior year of high school. 
                    I played percussion in the band.
                    I have been interested in computers since a very young age.
                    I began teaching myself Java as a freshmen in high school and have enjoyed coding ever since.
                    This is what led me to pursue my current degree and career path.
                </div>
                <h1 className="aboutMeHeader">
                    Academics
                </h1>
                <div className="aboutMeText">
                    I am currently a junior studying computer science at Purdue University. 
                    I am pursuing a Bachelor's of Science in Computer Science.
                    My computer science tracks are Security, Database and Information Systems, Software Engineering, and Machine Intelligence.
                    I am also pursuing a minor in business economics and mathematics.
                    My current overall GPA is 3.77 out and my computer science GPA is 3.84 (4.00 scale for both).
                </div>
                <h1 className="aboutMeHeader">
                    Activities
                </h1>
                <div className="aboutMeText">
                    <h5>Purdue Running Club</h5>
                    I am currently a part of the Purdue Running Club.
                    I mainly am a casual member of the club, running with the team almost daily since freshmen year.
                    I have participated in one meet with the club, being the Illinois relays where I was a part of the 4x800 team.
                    <h5>Hello World Hackathon</h5>
                    During my freshmen year of college, I particapated in the Hello World Hackathon.
                    In this hackathon, I worked on a team of freshmen to develop an Android app.
                    The app that we created was an app that assisted with choosing an outfit for the day.
                    It would randomly select from inputted clothes to choose an outfit for the day.
                    This app was very basic but it was a good introduction to Purdue Computer Science and working on a team.
                    <h5>Purdue ACM SIGAI</h5>
                    During my sophomore year of college, I was a part of&nbsp;
                    <a href="https://acm.cs.purdue.edu/">Purdue Association of Computing Machinery</a> Special Interest Group for Artifical Intelligence.
                    As a member of this club we were assisted in learning about artificial intelligence. 
                    In addition to this, we competed in a challenge against the other members of the club.
                    The challenge was to use data on house prices in California to build a script that could determine median house price based on coordinates.
                    Building this project was a great way for me to not only learn Python but also some of the basic concepts of artificial intelligence and machine learning.
                    <h5>Purdue IEE Computer Society</h5>
                    During my sophomore year of college, I was also a part of&nbsp;
                    <a href="https://purdueieee.org/csociety/">Purdue Institute of Electrical and Electronics Engineers Computer Society</a>.
                    In my time in this club, we worked on a machine learning project. 
                    The project that we pursued was a machine learning algorithm to recognize basic hand gestures.
                    This, in addition to SIGAI was a really good learning experience for me as an intro to Python and machine learning.
                </div>
            </div>
        </div>
        )
    }
}

export default AboutMeComponent;