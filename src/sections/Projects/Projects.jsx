import styles from './ProjectsStyles.module.css';
import electroFlow from '../../assets/electro2.png';
import Truxpoint from '../../assets/trux.jpg';
import brainy from '../../assets/brainy.png'
import usmakoye from '../../assets/usmakoye.png';
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
          src={Truxpoint}
          link="https://trux-nine.vercel.app/"
          h3="Truxpoint"
          p="Web3 project Landing Page"
          
        />
        
        <ProjectCard
          src={brainy}
          link="https://schoolbrainy.vercel.app/"
          h3="Brainy"
          p="Learning Management System"
        />
         <ProjectCard
          src={usmakoye}
          link="https://usmakoye-plumbing-services.vercel.app/"
          h3="Usmakoye"
          p="Plumbing Services"
        />
      </div>
    </section>
  );
}

export default Projects;
