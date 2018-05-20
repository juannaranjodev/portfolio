import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './PortfolioPage.scss';
import ProjectPreview from '../../components/ProjectPreview/ProjectPreview';
import Spinner from '../../components/UI/Spinner/Spinner';
import Modal from '../../components/UI/Modal/Modal';
import ProjectModal from '../../components/ProjectModal/ProjectModal';
import Button from '../../components/UI/Button/Button';
import Container from '../../hoc/Container/Container';
import PageHeader from '../../components/PageHeader/PageHeader';
import * as actions from '../../store/actions/index';

class PortfolioPage extends Component {
  
  componentDidMount() {
    this.props.onFetchProjects();
  }

  render() {
    let portfolio = (
      <div className={styles.Projects__error}>
        There is some problem with data, sorry. 
        Also you can see my projects on GitHub:
        <Button href="https://github.com/olbesp" textLink> https://github.com/olbesp</Button>
      </div>
    );

    if (!this.props.error) {
      portfolio = <div className={styles.Projects__loading}><Spinner /></div>; 
    }

    let projectModal = <div></div>;
    let projectsPreview;

    if (this.props.projects) {
      projectsPreview = this.props.projects.map(project => (
        <ProjectPreview id={project.id} 
          key={project.id} 
          title={project.title} 
          img={project.image}
        />
      ));

      portfolio = (
        <Container>
          <PageHeader title="My featured works" />
          <div className={styles.Projects} onClick={(e) => this.props.onModalOpened(e, this.props.projects)}>
            {projectsPreview}
          </div>
        </Container>
      );
    }

    if (this.props.modalContent) {
      const project = this.props.modalContent;
      projectModal = <ProjectModal 
        title={project.title} 
        image={project.image}
        description={project.description}
        tools={project.tools}
        code={project.links.code}
        app={project.links.app}
        closeModal={this.props.onModalClosed} />
    }

    return (
      <React.Fragment>
        <Modal 
          show={this.props.showModal}
          modalClosed={this.props.onModalClosed}
        >
          {projectModal}
        </Modal>
        {portfolio}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.portfolio.projects,
  showModal: state.portfolio.showModal,
  modalContent: state.portfolio.modalContent,
  error: state.portfolio.error
});

const mapDispatchToProps = dispatch => ({
  onFetchProjects: () => dispatch(actions.fetchProjects()),
  onModalOpened: (event, projects) => dispatch(actions.modalHandler(event, projects)),
  onModalClosed: () => dispatch(actions.modalClosed())
});

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioPage);
