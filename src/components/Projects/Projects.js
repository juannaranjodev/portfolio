import React, { Component } from 'react';

import styles from './Projects.css';
import axios from 'axios';
import Project from './Project/Project';
import Spinner from '../UI/Spinner/Spinner';
import Modal from '../UI/Modal/Modal';
import Button from '../UI/Button/Button';
import Container from '../../hoc/Container/Container';
import PageHeader from '../UI/PageHeader/PageHeader';

class Projects extends Component {
  state = {
    projects: null,
    showModal: false,
    modalContent: null
  }

  getProjects = () => {
    axios.get('https://olbesp-portfolio.firebaseio.com/projects.json')
      .then(response => {
        const projects = response.data;
        this.setState({ projects });
        console.log(this.state.projects);
      })
      .catch(error => {
        console.log(error);
      });
  }

  showModalHandler = (e) => {
    if (this.state.projects) {
      this.state.projects.forEach(project => {
        if (e.target.id === project.id) {
          this.setState({ modalContent: project, showModal: true });
        }
      });
    }
  }

  closeModalHandler = () => {
    this.setState({ showModal: false, modalContent: null });
  }

  componentDidMount() {
    this.getProjects();
  }

  render() {

    let projectsUI = <Spinner />
    if (this.state.projects) {
      projectsUI = this.state.projects
        .filter(project => project.image)
        .map(project => (
            <Project id={project.id} 
              key={project.id} 
              title={project.title} 
              img={project.image}
            />
          )
        );
    }

    let projectDescription = <div></div>;
    if (this.state.modalContent) {
      const project = this.state.modalContent;
      projectDescription = (
        <div className={styles.ProjectModal}>
          <header className={styles.ProjectHeader}>
            <h3>{project.title}</h3>
            <div className={styles.CloseBtn} onClick={this.closeModalHandler}>
              &times;
            </div>
          </header>
          <figure className={styles.ProjectDescription}>
            <img src={project.image} alt={project.title} />
            <figcaption>{project.description}</figcaption>
          </figure>
          <ul className={styles.ProjectTools}>
            {
              project.tools.map((tool, index) => {
                return <li key={index}>{tool}</li>
              })
            }
          </ul>
          <footer className={styles.ProjectFooter}>
            <Button href={project.links.code} color="Action">Code</Button>
            <Button href={project.links.app} color="Action">Link</Button>
          </footer>
        </div>
      );
    }

    return (
      <div className={styles.Projects} onClick={this.showModalHandler}>
        <Container>
          <Modal show={this.state.showModal} modalClosed={this.closeModalHandler}>
            {projectDescription}
          </Modal>
          <PageHeader pageHeader="My featured works" />
          {projectsUI}
        </Container>
      </div>
    );
  }
}

export default Projects;