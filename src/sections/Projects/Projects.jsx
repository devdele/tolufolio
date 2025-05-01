import styles from './ProjectsStyles.module.css';
import electroFlow from '../../assets/electro2.png';
import foodie from '../../assets/foodie2.png';
import brainy from '../../assets/brainy.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={electroFlow}
          link="https://electroflow.vercel.app/?vercelToolbarCode=ozRyTTbwqFOd05w"
          h3="Electroflow"
          p="Power Company Landing Page"
        />
        <ProjectCard
          src={foodie}
          link="https://landing-react-sand.vercel.app"
          h3="Foodie"
          p="Restaurant Lading Page"
        />
        
        <ProjectCard
          src={brainy}
          link="https://schoolbrainy.vercel.app/"
          h3="Brainy"
          p="Learning Management System"
        />
      </div>
    </section>
  );
}

export default Projects;
