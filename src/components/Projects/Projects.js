import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: `${process.env.PUBLIC_URL}/images/tetris.png`,
      title: 'Chinese character tetris',
      description: 'A fun and educational twist on the classic Tetris game that teaches Chinese vocabulary through gameplay! Instead of colored blocks, pieces are made of Chinese characters. When you complete a row containing valid Chinese words or phrases, you earn points and collect "food items" - traditional Chinese desserts and snacks!',
      link: 'https://chinese-character-tetris.vercel.app/'
    },
    // {
    //   id: 2,
    //   image: `${process.env.PUBLIC_URL}/images/robo.png`,
    //   title: 'Project 2',
    //   description: 'Description of Project 2',
    //   link: 'https://www.example.com/project2'
    // },
    // {
    //   id: 3,
    //   image: `${process.env.PUBLIC_URL}/images/camaro.png`,
    //   title: 'Project 3',
    //   description: 'Description of Project 3',
    //   link: 'https://www.example.com/project3'
    // }
  ];

  return (
    <section id="projects">
      <h1>My Projects</h1>
      <div className="container">
        {projects.map(project => (
          <div key={project.id} className="card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
