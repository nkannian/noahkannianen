import React from 'react';
import './HomeComponent.css';
import ParticlesBg from 'particles-bg';


class HomeComponent extends React.Component {
    render() {
        return (
        <div>
            <ParticlesBg num={10} type="circle" bg={true} />
            <div className="MainDiv">
                <div className="MainDivContent">
                    <h3>Noah Kannianen</h3>
                    <a href="/JuniorResume5.pdf" download className="MainDivLinks">Static Resume Download</a>
                    <br/>
                    <a href="/aboutme" className="MainDivLinks">Dynamic Resume</a>
                </div>
            </div>
            <div className="PageBottom">
                Written by me using React.js. Find the source code&nbsp;
                <a href="https://github.com/nkannian/noahkannianen" target="_blank" rel="noopener noreferrer">
                    here
                </a>
            </div>
        </div>
        )
    }
}

export default HomeComponent;