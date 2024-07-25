import {Link, NavLink} from 'react-router-dom';
import './index.scss';
import LogoBubbleTea2 from '../../assets/images/LogoBubbleTea2.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faUser, faEnvelope, faFilePdf} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Sidebar = ()  => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoBubbleTea2} alt="logo" />
        </Link>

        <nav>
            <NavLink exact="true" activeclassname="active" to='/'>
                <FontAwesomeIcon icon={faHome} color="#fedc97" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="about-link" to='/aboutMe'>
                <FontAwesomeIcon icon={faUser} color="#fedc97" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="contact-link" to='/contactMe'>
                <FontAwesomeIcon icon={faEnvelope} color="#fedc97" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="resume-link" to='/resume'>
                <FontAwesomeIcon icon={faFilePdf} color="#fedc97" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                target="_blank"
                rel='noreferrer'
                href='https://www.linkedin.com/in/lingling-peng-891924128/'
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#fedc97" />
                </a>
            </li>

            <li>
                <a 
                target="_blank"
                rel='noreferrer'
                href='https://github.com/linglp'
                >
                    <FontAwesomeIcon icon={faGithub} color="#fedc97" />
                </a>
            </li>
        </ul>

    </div>

)

export default Sidebar