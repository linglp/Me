import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <section id="education">
        <h1>Education</h1>
        <div className="experience-content">
          <div className="experience-item">
            <h3>University of Michigan, Ann Arbor</h3>
            <p className="role">Master of Public Policy</p>
            <p className="role">Certificate in Data Science</p>
            <p className="date">2018-2020</p>
            <p>Focused on quantitative policy analysis and data science, with coursework in statistics, microeconomics, programming (R and Python), data visualization (Tableau and Altair), and machine learning. Developed a strong passion for programming and building data-driven solutions to real-world problems.</p>
            
            <p><strong>School Project:</strong> Built <a href="https://linglp.github.io/" target="_blank" rel="noopener noreferrer">"Neighborhood Divide: Coronavirus and Boston"</a>, a comprehensive data journalism webpage visualizing income inequality across Boston neighborhoods and its intersection with the early COVID-19 pandemic, featuring interactive maps and visualizations created with Altair.</p>
          </div>
        </div>
      </section>

      <section id="contact">
        <h1>Work Experience</h1>
        <div className="experience-content">
          <div className="experience-item">
            <h3>Sage Bionetworks</h3>
            <p className="role">Research Software Engineer</p>
            <p className="date">Feb 2022 - Present</p>
            <ul>
              <li>Developed core Python tools for biomedical metadata ingestion, validation, and visualization, accelerating data curation for high-impact NIH-funded programs.</li>
              <li>Monitored and benchmarked API performance in production using AWS CloudWatch; implemented OpenTelemetry for distributed tracing and configured real-time alerts, accelerating bug resolution and improving user experience.</li>
              <li>Developed Airflow DAGs to validate external data sources and alert users on slack if data quality issues occur.</li>
              <li>Deployed and maintained application stacks on Kubernetes, using ArgoCD for GitOps-based continuous deployment.</li>
              <li>Integrated external secrets into the Kubernetes stack to enable secure secret management and retrieval by ArgoCD applications.</li>
              <li>Migrated Snowflake Airflow connection to use key-pair authentication instead of hard-coded password and username.</li>
              <li>Led deployment of Flask APIs to AWS fargate using Nginx and uWSGI and created architecture diagrams and documentation for knowledge sharing.</li>

            </ul>
          </div>

          <div className="experience-item">
            <h3>Healthcare Startup</h3>
            <p className="role">Product Analyst</p>
            <p className="date">2017 - 2019</p>
            <ul>
              <li>Used SQL to extract and analyze data from databases</li>
              <li>Created data visualizations in Tableau and communicated results to clients</li>
              <li>Developed Python library to improve measure writing efficiency</li>
              <li>Automated Tableau workbook creation and modification</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
