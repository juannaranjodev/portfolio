import React, { Component } from 'react';

import styles from './Projects.css';
import axios from 'axios';
import Project from './Project/Project';
import Spinner from '../UI/Spinner/Spinner';

class Projects extends Component {
  state = {
    projects: null
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

  componentDidMount() {
    this.getProjects();
  }

  render() {

    let projectsUI = <Spinner />
    if (this.state.projects) {
      projectsUI = this.state.projects
        .filter(project => project.image)
        .map(project => (
          <Project key={project.id} title={project.title} img={project.image} />
        )
      );
    }

    return (
      <div className={styles.Projects}>
        <div className={styles.Container}>
          {projectsUI}
        </div>
      </div>
    );
  }
}

export default Projects;