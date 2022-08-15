import "./About.css"
import portrait from "../../images/currylabbit.png"


const About = () => {

    return (
        <div className="about-outer">
            <div className='about-header'>About</div>
            <div className="about-container">
                <div className='about-text'>
                    Organize your life with this fully functional calendar app. Build multiple calendars, add events, and never miss out on anything again! This project was built with a <span className='bold'>React/Redux</span> frontend and a <span className='bold'>Flask-SQLalchemy/Python</span> backend.
                </div>
                <div id='signature'>
                    <div>Live. Lau. Love.</div>
                    <div>-Eddie Lau</div>
                </div>
            </div>
            <div className="about-container-contact">

                <img id="portrait" src={portrait} alt='' />
                <div className='about-text-contact'>
                    <div className="about-contact-header">Contact Me</div>
                    <div>Email: <a className="contact-link" href="mailto:edwinjlau26@gmail.com"><span className='bold'>edwinjlau26@gmail.com</span></a></div>
                    <div>Project Repo: <a className="contact-link" href="https://github.com/elabbit/sportscalendar" target='_blank' rel="noreferrer"><span className='bold'>Fangenda</span></a></div>

                        <div>Github: <a className="contact-link" href="https://github.com/elabbit" target='_blank' rel="noreferrer"> <i className="fa-brands fa-github"></i></a></div>
                        <div>LinkedIn: <a className="contact-link" href="https://www.linkedin.com/in/edwin-lau-312a11241/" target='_blank' rel="noreferrer"> <i className="fa-brands fa-linkedin-in"></i></a></div>

                </div>
            </div>
        </div>

    )
}

export default About;
