import React, { Component } from 'react';

import styles from './Projects.css';
import axios from 'axios';
import Project from './Project/Project';
import Spinner from '../UI/Spinner/Spinner';
import Modal from '../UI/Modal/Modal';

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
          <Project id={project.id} key={project.id} title={project.title} img={project.image} />
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
            <div className={styles.CloseBtn}>
              X
            </div>
          </header>
          <figure className={styles.ProjectDescription}>
            <img src={project.image} alt={project.title} />
            <figcaption>{project.description}</figcaption>
          </figure>
          <footer className={styles.ProjectFooter}>
            <a href={project.links.code}>Code</a>
            <a href={project.links.app}>Link</a>
          </footer>
        </div>
      );
    }

    return (
      <div className={styles.Projects} onClick={this.showModalHandler}>
        <div className={styles.Container}>
          <Modal show={this.state.showModal} modalClosed={this.closeModalHandler}>
            {projectDescription}
          </Modal>
          {projectsUI}
        </div>
      </div>
    );
  }
}

export default Projects;