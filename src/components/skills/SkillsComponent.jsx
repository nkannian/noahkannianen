import React from 'react';
import './SkillsComponent.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

class SkillsComponent extends React.Component {
    render() {
        return (
        <div className="skillsDiv">
            <div className="skillsContent">
                <div className="skillsBody">
                <h1 className="skillsHeader">Programming Languages</h1>
                    <CardDeck>
                        <Card bg="light"style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Java</Card.Title>
                                <Card.Text align="left">
                                    Proficiency: Advanced<br/>
                                    Classes: Problem Solving &amp; Object Oriented Programming, Foundations of Computer Science, Data Structure &amp; Algorithms<br/>
                                    School Projects: Chat server<br/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card bg="light"style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>C</Card.Title>
                                <Card.Text align="left">
                                    Proficiency: Advanced<br/>
                                    Classes: Programming in C, Systems Programming<br/>
                                    School Projects: Malloc, Shell project<br/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card bg="light"style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>C++</Card.Title>
                                <Card.Text align="left">
                                    Proficiency: Intermediate<br/>
                                    Classes: Programming in C<br/>
                                    School Projects: Chat server
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                    <br />
                    <CardDeck>
                        <Card bg="light"style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Javascript</Card.Title>
                                <Card.Text align="left">
                                    Proficiency: Advanced<br/>
                                    Projects: See Javascript Libraries Section<br/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card bg="light"style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Python</Card.Title>
                                <Card.Text align="left">
                                    Proficiency: Intermediate<br/>
                                    Large Projects: Script to take company dropbox and rename all of the files and insert into correct amazon folder and company database,
                                    Script to take internation basketball transactions from&nbsp;
                                    <a href="https://basketball.realgm.com/international/transactions/2020" target="_blank" rel="noopener noreferrer">here </a>
                                    and insert them into a SQLite database<br/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card bg="light"style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>SQL</Card.Title>
                                <Card.Text align="left">
                                    Proficiency: Advanced<br/>
                                    Classes: Information Systems<br/>
                                    Projects: See SQL Databases section<br/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                    <br />
                    <h1 className="skillsHeader">Javascript Libraries</h1>
                    <CardDeck>
                        <Card bg="light"style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>React.js</Card.Title>
                                <Card.Text align="left">
                                    Proficiency: Advanced<br/>
                                    School Projects:&nbsp;
                                    <a href="https://songscore.online/" target="_blank" rel="noopener noreferrer">Songscore</a>,&nbsp;
                                    <a href="http://teambuilder2019frontend.herokuapp.com/" target="_blank" rel="noopener noreferrer">TeamBuilder</a>,&nbsp;
                                    <a href="https://www.youtube.com/watch?v=kcq-Cje-xjs" target="_blank" rel="noopener noreferrer">Seven Heaven</a>
                                    <br/>
                                    Large Projects:&nbsp;
                                    <a href="https://github.com/nkannian/awlonus/" target="_blank" rel="noopener noreferrer">Awl, on us</a><br/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card bg="light"style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>AngularJS</Card.Title>
                                <Card.Text align="left">
                                    Proficiency: Advanced<br/>
                                    Large Projects:&nbsp;
                                    <a href="https://grapevine.canaley.com/#!/sign-in" target="_blank" rel="noopener noreferrer">Grapevine</a><br/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card bg="light"style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Node.js</Card.Title>
                                <Card.Text align="left">
                                    Proficiency: Advanced<br/>
                                    Projects: Grapevine, Songscore, TeamBuilder, Seven Heaven<br/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                    <br />
                    <h1 className="skillsHeader">SQL Databases</h1>
                    <CardDeck>
                        <Card bg="light"style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>MySQL</Card.Title>
                                <Card.Text align="left">
                                    Proficiency: Advanced<br/>
                                    Classes: Information Systems<br/>
                                    Projects: Grapevine, Teambuilder<br/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card bg="light"style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>PostgreSQL</Card.Title>
                                <Card.Text align="left">
                                    Proficiency: Intermediate<br/>
                                    Large Projects: Songscore, Seven Heaven<br/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card bg="light"style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>SQLite</Card.Title>
                                <Card.Text align="left">
                                    Proficiency: Basic<br/>
                                    Projects: Project mentioned in python section<br/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                    <br />
                    <h1 className="skillsHeader">Development and hosting</h1>
                    <CardDeck>
                        <Card bg="light"style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Git/Github</Card.Title>
                                <Card.Text align="left">
                                    Proficiency: Advanced<br/>
                                    Projects: Used in almost all coding I do<br/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card bg="light"style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Heroku</Card.Title>
                                <Card.Text align="left">
                                    Proficiency: Advanced<br/>
                                    Large Projects: This website, Grapevine, Seven Heaven, TeamBuilder <br/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card bg="light"style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Amazon S3</Card.Title>
                                <Card.Text align="left">
                                    Proficiency: Advanced<br/>
                                    Projects: Grapevine, python script mentioned above<br/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                    <br />
                    <CardDeck>
                    <Card className="placeholderCard"style={{ width: '18rem' }}></Card>
                        <Card bg="light"style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Scrum</Card.Title>
                                <Card.Text align="left">
                                    Proficiency: Advanced<br/>
                                    Classes: Software Engineering 1, Software Testing<br/>
                                    School Projects: TeamBuilder, Songscore<br/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card bg="light"style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>CPanel</Card.Title>
                                <Card.Text align="left">
                                    Proficiency: Intermediate<br/>
                                    Projects: Grapevine<br/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="placeholderCard"style={{ width: '18rem' }}></Card>
                    </CardDeck>
                    <h1 className="skillsHeader">Other Skills</h1>
                    <CardDeck>
                        <Card bg="light"style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Microsoft Office</Card.Title>
                                <Card.Text align="left">
                                    Proficiency: Advanced<br/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card bg="light"style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>R/Rstudio</Card.Title>
                                <Card.Text align="left">
                                    Proficiency: Basic<br/>
                                    Classes: Introduction to Statistics<br/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card bg="light"style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Android Studio</Card.Title>
                                <Card.Text align="left">
                                    Proficiency: Basic<br/>
                                    Classes: Problem Solving and Object Oriented Programming<br/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                    <br />
                    <CardDeck>
                    <Card className="placeholderCard" style={{ width: '4rem' }}></Card>
                        <Card bg="light" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Chinese</Card.Title>
                                <Card.Text align="left">
                                    Proficiency: Conversational<br/>
                                    Classes: Chinese 1-10 7th - 12th grade<br/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card bg="light" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Matlab</Card.Title>
                                <Card.Text align="left">
                                    Proficiency: Basic<br/>
                                    Classes: Linear Algebra<br/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="placeholderCard"style={{ width: '4rem' }}></Card>
                    </CardDeck>
                </div>
            </div>
        </div>
        )
    }
}

export default SkillsComponent;