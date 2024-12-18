import styles from './ProjectsStyles.module.css';
import electroFlow from '../../assets/electroflow.png';
import foodie from '../../assets/foodie.png';
import dat from '../../assets/dat.png';
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
          p="Power Supply Company"
        />
        <ProjectCard
          src={foodie}
          link="https://landing-react-sand.vercel.app"
          h3="Foodie"
          p="Restaurant"
        />
        
        <ProjectCard
          src={dat}
          link="https://dat-rose.vercel.app/"
          h3="Dat"
          p="Data Analysis Company"
        />
      </div>
    </section>
  );
}

export default Projects;
