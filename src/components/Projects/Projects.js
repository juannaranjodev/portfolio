import React, { Component } from 'react';

import styles from './Projects.css';
import axios from 'axios';
// import Project from './Project/Project';

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

    let projectsUI = <div>Loading...</div>
    if (this.state.projects) {
      projectsUI = this.state.projects
        .filter(project => project.image)
        .map(project => <div key={project.id}>{project.title}</div>);
    }

    return (
      <div className={styles.Projects}>
        {projectsUI}
      </div>
    );
  }
}

export default Projects;