import AboutMe from '../../data/AboutMe';

import './About.css';

function About() {
    return (
        <div className="about_container">
            <div className="about_title">
                <h1 className="about_name">{AboutMe.name}</h1>
                <h4 className="about_status">{AboutMe.status}</h4>
            </div>
            <div className="section_title">
                <span className="section_icon">
                    {AboutMe.icon}
                </span>
                <h1>{AboutMe.title}</h1>
            </div>
            <div className="about_text">{AboutMe.text}</div>
        </div>
    );
}

export default About;