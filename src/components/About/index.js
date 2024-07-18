import './index.scss';
import AnimatedLetters from "../AnimatedLetters";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitAlt, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    return (
        <div className="container about-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', '', 'm', 'e']}
                    index={15}
                    />
                </h1>
                <p>Born and raised in Guangzhou, China, I am currently a research software engineer at Sage Bionetworks, a non-profit organization in Seattle dedicated to open science. I am passionate about learning new technologies and continuously improve my engineering, analytical skills to tackle challenging problems.</p>
                <p>My journey in programming began during my master's studies at the University of Michigan, where I took Python classes and discovered that writing code is like solving puzzles. I enjoyed the problem-solving aspect and the ability to address real-world concerns through code.</p>
                <p>After graduation, I worked as a product analyst at a healthcare startup in Ann Arbor. There, I used SQL to extract data from databases, wrote clinical measures, visualized data in Tableau, and communicated the results and implications to clients. I contributed to many internal initiatives as the startup scaled, such as creating a Python library to make measure writing more efficient and automating Tableau workbook creation and modification.</p>
                <p>My passion for software engineering led me to Seattle, where I joined Sage Bionetworks. This non-profit helps researchers collaborate and share data and analysis tools. At Sage Bionetworks, I have been developing Schematic, a Python package for metadata ingress and validation. I also work on AWS cloud infrastructure, including deploying Schematic APIs to the AWS Fargate environment.</p>
                <p>When I'm not coding, I enjoy cooking, singing, practcing kendo, playing board games, and watching anime. I also love to travel and explore new cultures. I am always looking for new opportunities to learn and grow, and I am excited to see where my journey takes me next.</p>
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faPython} color="#DD0031"/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faGitAlt} color="#F06529"/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faReact} color="#28A4D9"/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faJsSquare} color="#5ED4F4"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About