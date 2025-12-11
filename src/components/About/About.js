import './About.css';

const About = () => {
  return (
    <section id="about">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="profile-pic">
          <img src={`${process.env.PUBLIC_URL}/images/profile.JPG`} alt="Lingling Peng"/>
        </div>
        <div className="bio">
                <p>Born and raised in Guangzhou, China, I am currently a research software engineer at Sage Bionetworks, a non-profit organization in Seattle dedicated to open science. I am passionate about learning new technologies and continuously improve my engineering, analytical skills to tackle challenging problems.</p>
                <p>My journey in programming began during my master's studies at the University of Michigan, where I took Python classes and discovered that writing code is like solving puzzles. I enjoyed the problem-solving aspect and the ability to address real-world concerns through code.</p>
                <p>After graduation, I worked as a product analyst at a healthcare startup in Ann Arbor. There, I used SQL to extract data from databases, wrote clinical measures, visualized data in Tableau, and communicated the results and implications to clients. I contributed to many internal initiatives as the startup scaled, such as creating a Python library to make measure writing more efficient and automating Tableau workbook creation and modification.</p>
                <p>My passion for software engineering led me to Seattle, where I joined Sage Bionetworks. This non-profit helps researchers collaborate and share data and analysis tools. At Sage Bionetworks, I have been maintaining the Synapse Python Client, a library that provides an interface to Synapse, a collaborative, open-source research platform that allows teams to share data, track analyses, and collaborate. I've also designed and created new workflows, deployed applications to AWS using Fargate, and developed visualization tools to help users understand complex JSON schemas. One of my key projects involved building a chat application using AWS Bedrock and Knowledge Base to help answer user questions about our codebase, making technical documentation more accessible. I've also built an Airflow workflow to pull project data from Snowflake and publish it to Slack, helping the leadership team stay informed about newly created projects on our platform and identify potential funding and collaboration opportunities.</p>
                <p>When I'm not coding, I enjoy cooking, singing, practicing kendo, playing board games, and watching anime. I also love to travel and explore new cultures. I am always looking for new opportunities to learn and grow, and I am excited to see where my journey takes me next.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
