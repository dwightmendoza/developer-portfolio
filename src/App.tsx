
import './App.css'

type Project = {
  title: string
  description: string
  technologies: string[]
  icon: string
  githubUrl: string
  liveUrl?: string
}

const projects: Project[] = [
  
{
  title: 'Healthcare Dashboard',
  description:
    'A patient management dashboard featuring heart-rate indicators, patient search, filtering, form validation, and patient data management.',
  technologies: ['Angular', 'TypeScript', 'CSS'],
  icon: '✚',
  githubUrl: 'https://github.com/dwightmendoza/healthcare-dashboard',
},


  {
    title: 'Assembly Game',
    description:
      'A component-based web application demonstrating reusable components, dynamic rendering, and interactive user interfaces.',
    technologies: ['React', 'JavaScript', 'CSS'],
    icon: '⚛',
    githubUrl: 'https://github.com/dwightmendoza/assembly-game'
  },
  {
    title: 'VanLife',
    description:
      'A web application demonstrating API integration and data management.',
    technologies: ['React', 'JavaScript', 'CSS'],
    icon: '</>',
    githubUrl: 'https://github.com/dwightmendoza/Vanlife'
  },
]

function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <a className="logo" href="#home" aria-label="Home">
          DM.
        </a>

        <nav aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <p className="eyebrow">FRONT-END SOFTWARE DEVELOPER</p>

          <h1>
            Building thoughtful software
            <span> that solves real problems.</span>
          </h1>

          <p className="hero-description">
            I build modern web applications using React, Angular,
            TypeScript, JavaScript, and Node.js.
          </p>

          <a className="primary-button" href="#projects">
            Explore My Projects →
          </a>
        </section>

        <section
          className="projects-section"
          id="projects"
          aria-labelledby="projects-heading"
        >
          <p className="eyebrow">MY WORK</p>
          <h2 id="projects-heading">Featured Projects</h2>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-icon" aria-hidden="true">
                  {project.icon}
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div
                  className="technologies"
                  aria-label="Technologies used"
                >
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                <div className="project-links">
  <a
    href={project.githubUrl}
    target="_blank"
    rel="noreferrer"
  >
    View Source on GitHub →
  </a>
</div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <p className="eyebrow">ABOUT ME</p>

          <h2>Developer focused on practical solutions.</h2>

          <p>
            I enjoy building responsive applications and solving
            problems through thoughtful software design. My background
            includes web development and healthcare technology.
          </p>
        </section>

        <section className="contact-section" id="contact">
          <p className="eyebrow">GET IN TOUCH</p>

          <h2>Let's build something useful.</h2>

          <p>
            I'm interested in software development opportunities and
            collaborating on meaningful projects.
          </p>


<p className="contact-email">
  Email me:{" "}
  <a href="mailto:dwightmendoza79@gmail.com">
    dwightmendoza79@gmail.com
  </a>
</p>


          <a
            className="primary-button"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            Visit GitHub →
          </a>
        </section>
      </main>

      <footer>
        <p>
          © {new Date().getFullYear()} Dwight Mendoza
        </p>
      </footer>
    </div>
  )
}

export default App
