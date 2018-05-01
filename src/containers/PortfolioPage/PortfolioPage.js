import React, { Component } from 'react';

import styles from './PortfolioPage.css';
import axios from 'axios';
import ProjectPreview from '../../components/ProjectPreview/ProjectPreview';
import Spinner from '../../components/UI/Spinner/Spinner';
import Modal from '../../components/UI/Modal/Modal';
import ProjectModal from '../../components/ProjectModal/ProjectModal';
import Button from '../../components/UI/Button/Button';
import Container from '../../hoc/Container/Container';
import PageHeader from '../../components/PageHeader/PageHeader';

class PortfolioPage extends Component {
  state = {
    projects: null,
    showModal: false,
    modalContent: null,
    error: false
  }

  getProjects = () => {
    axios.get('https://olbesp-portfolio.firebaseio.com/projects.json')
      .then(response => {
        const projects = response.data;
        this.setState({ projects });
      })
      .catch(error => {
        this.setState({ error: true });
      });
  }

  showModalHandler = (e) => {
    if (this.state.projects) {
      this.state.projects.forEach(project => {
        if (e.target.parentNode.id === project.id) {
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
    let portfolio = (
      <p style={{
        marginTop: '7rem',
        width: '40%', 
        color: '#fff',
        fontSize: '2rem'
      }}>
        There is some problem with data, sorry. 
        Also you can see my projects on GitHub:
        <Button href="https://github.com/olbesp" textLink> https://github.com/olbesp</Button>
      </p>
    );

    if (!this.state.error) {
      portfolio = <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}><Spinner /></div>; 
    }

    let projectModal = <div></div>;
    let projectsPreview;

    if (this.state.projects) {
      projectsPreview = this.state.projects
        .map(project => (
          <ProjectPreview id={project.id} 
            key={project.id} 
            title={project.title} 
            img={project.image}
          />
        )
      );
      portfolio = (
        <Container>
          <PageHeader title="My featured works" />
          <div className={styles.Projects} onClick={this.showModalHandler}>
            {projectsPreview}
          </div>
        </Container>
      );
    }

    if (this.state.modalContent) {
      const project = this.state.modalContent;
      projectModal = <ProjectModal 
        title={project.title} 
        image={project.image}
        description={project.description}
        tools={project.tools}
        code={project.links.code}
        app={project.links.app}
        closeModal={this.closeModalHandler} />
    }

    return (
      <React.Fragment>
        <Modal show={this.state.showModal} modalClosed={this.closeModalHandler}>
          {projectModal}
        </Modal>
        {portfolio}
      </React.Fragment>
    );
  }
}

export default PortfolioPage;