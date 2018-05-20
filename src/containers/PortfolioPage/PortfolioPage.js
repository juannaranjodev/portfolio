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
    let pageContent = null;
    let projectModal = <div></div>;
    let projectsPreview = null;

    if (this.props.error) {
      pageContent = (
        <div className={styles.Projects__error}>
          <div>{this.props.error.message}</div>
          You can check my projects on GitHub:
          <div>
            <Button buttonType="anchor" href="https://github.com/olbesp" newtab textLink size="medium">
              https://github.com/olbesp
            </Button>
          </div>
        </div>
      );
    }

    if (!this.props.error) {
      pageContent = <div className={styles.Projects__loading}><Spinner /></div>;
    }

    if (this.props.projects) {
      projectsPreview = this.props.projects.map(project => (
        <ProjectPreview id={project.id}
          key={project.id}
          title={project.title}
          img={project.image}
        />
      ));
      pageContent = (
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
        {pageContent}
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
