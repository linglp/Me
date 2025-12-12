import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Debugging on AWS Cloud: How to solve the dreaded "504 gateway timeout"',
      date: 'March 2024',
      description: 'A guide to troubleshooting and resolving 504 gateway timeout errors in AWS cloud environments, covering common causes and practical solutions for ECS Fargate, Application Load Balancers, and API Gateway configurations.',
      link: 'https://sagebionetworks.pubpub.org/pub/debuggingaws/release/1'
    },

    {
      id: 2,
      title: 'How can I set up key pair authentication for Snowflake connections in Airflow',
      date: 'March 2024',
      description: 'A guide to setting up key pair authentication for secure Snowflake connections in Apache Airflow, including generating key pairs, configuring Airflow connections, and best practices for managing credentials.',
      link: 'https://medium.com/@linglp/how-can-i-set-up-key-pair-authentication-for-snowflake-connections-in-airflow-92c70eee5e4e'
    },
    
  ];

  return (
    <section id="blog">
      <h1>Blog Posts</h1>
      <div className="blog-content">
        {blogPosts.map(post => (
          <div key={post.id} className="blog-item">
            <h3><a href={post.link} target="_blank" rel="noopener noreferrer">{post.title}</a></h3>
            <p className="blog-date">{post.date}</p>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
