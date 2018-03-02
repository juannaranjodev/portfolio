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
    this.setState({ showModal: false });
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

    return (
      <div className={styles.Projects} onClick={this.showModalHandler}>
        <div className={styles.Container}>
          <Modal show={this.state.showModal} modalClosed={this.closeModalHandler} content={this.state.modalContent} />
          {projectsUI}
        </div>
      </div>
    );
  }
}

export default Projects;