import React from 'react';
import './HomeComponent.css';
import ParticlesBg from 'particles-bg';


class HomeComponent extends React.Component {
    render() {
        return (
        <div className="App">
            <ParticlesBg num={10} type="circle" bg={true} />
            <div className="MainDiv">
                <div className="MainDivContent">
                    Noah Kannianen<br/>
                    <a href="/JuniorResume5.pdf" download>Click here for a static copy of my resume</a>
                </div>
            </div>`
        </div>
        )
    }
}

export default HomeComponent;