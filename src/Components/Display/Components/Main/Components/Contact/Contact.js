import React from 'react';

// FONT-AWESOME ICONS
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {
//     faBolt,
//     faTint,
//     faToilet,
//     faCalendarAlt,
//     faRoad,
//     faChargingStation
// } from '@fortawesome/free-solid-svg-icons';
import {
    faLinkedin,
    faGithubSquare,
    faTwitterSquare
} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <div>
            <h1>Contact Component</h1>
            <form>
                <input placeholder="Name" />
                <input placeholder="Email" />
                <input placeholder="Message" />
                <button>Submit</button>
            </form>
            <div>
                <button><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</button>
                <button><FontAwesomeIcon icon={faGithubSquare} /> GitHub</button>
                <button><FontAwesomeIcon icon={faTwitterSquare} /> Twitter</button>
                <button><FontAwesomeIcon icon={faTwitterSquare} /> Other</button>
            </div>
        </div>
    )
}
export default Contact;