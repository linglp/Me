import './Experience.css';

const Experience = () => {
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

      <section id="work-experience">
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
            <h3>ArborMetrix, Inc.</h3>
            <p className="role">Product Analyst</p>
            <p className="date">November 2020 - January 2022</p>
            <ul>
              <li>Developed an internal tool with D3 and Flask to visualize dependencies and execution order of clinical measures, streamlining communication between data scientists and clients while reducing the need for static file maintenance</li>
              <li>Contributed to an internal Python library that converts clinical measures from SQL format to YAML, enabling measures to be processed much faster and clients to better interpret and utilize clinical data</li>
              <li>Used Python to automate Tableau workbook updates, reducing manual effort and enabling modifications at scale</li>
            </ul>
          </div>

          <div className="experience-item">
            <h3>Youth Policy Lab, University of Michigan</h3>
            <p className="role">Research Assistant for Brian Jacob</p>
            <p className="date">June 2020 - October 2020</p>
            <ul>
              <li>Cleaned household survey datasets, created alternative measures of material hardship, and performed descriptive analysis to look at association between various hardship variables</li>
              <li>Cleaned, validated, and aggregated juvenile justice datasets from Michigan State Court Administrative Office, contributing to research that demonstrated the negative effects of detention on youth outcomes</li>
            </ul>
          </div>

          <div className="experience-item">
            <h3>The World Bank</h3>
            <p className="role">Impact Evaluation Intern, Development Research Group</p>
            <p className="date">June 2019 - August 2019</p>
            <ul>
              <li>Reviewed over 300 articles published in the Journal of Development Economics and American Economic Journal within two weeks and summarized how articles transform savings and profits variables on Excel and LaTeX</li>
              <li>Utilized STATA packages designed by the Development Impact Evaluation (DIME) team to clean datasets, set up high frequency checks, run simple randomization, and produce descriptive statistics</li>
            </ul>
          </div>

          
        </div>
      </section>
    </>
  );
};

export default Experience;
