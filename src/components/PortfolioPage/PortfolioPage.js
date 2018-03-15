import React, { Component } from 'react';

import styles from './PortfolioPage.css';
import axios from 'axios';
import ProjectPreview from './ProjectPreview/ProjectPreview';
import Spinner from '../UI/Spinner/Spinner';
import Modal from '../UI/Modal/Modal';
import ProjectModal from './ProjectModal/ProjectModal';
import Button from '../UI/Button/Button';
import Container from '../../hoc/Container/Container';
import PageHeader from '../UI/PageHeader/PageHeader';
import Aux from '../../hoc/Aux';

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
        console.log(this.state.projects);
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
        <Button href="https://github.com/olbesp" color="Action"> https://github.com/olbesp</Button>
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

      const setProjectWidth = () => {
        if (window.innerWidth >= 768) {
          const amountOfProjects = this.state.projects.length;
          if (amountOfProjects % 4 === 0) {
            return '25%';
          } else if (amountOfProjects % 2 === 0) {
            return '20%';
          }
          return '33%';
        }
        return false;
      }

      projectsPreview = this.state.projects
        .map(project => (
          <ProjectPreview id={project.id} 
            key={project.id} 
            title={project.title} 
            img={project.image}
            width={setProjectWidth()}
          />
        )
      );
      portfolio = (
        <Aux>
          <Container>
            <PageHeader title="My featured works" />
            <div className={styles.Projects} onClick={this.showModalHandler}>
              {projectsPreview}
            </div>
          </Container>
        </Aux>
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
      <Aux>
        <Modal show={this.state.showModal} modalClosed={this.closeModalHandler}>
          {projectModal}
        </Modal>
        {portfolio}
      </Aux>
    );
  }
}

export default PortfolioPage;