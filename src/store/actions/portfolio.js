import * as actionTypes from './actionTypes';
import axios from 'axios';

const fetchProjectsSuccess = projects => ({
  type: actionTypes.FETCH_PROJECTS_SUCCESS,
  projects
});

const fetchProjectsFail = (error) => ({
  type: actionTypes.FETCH_PROJECTS_FAIL,
  error
});

export const fetchProjects = () => dispatch => {
  axios.get('https://olbesp-portfolio.firebaseio.com/projects.json')
    .then(response => {
      dispatch(fetchProjectsSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchProjectsFail(error));
    });
};

const modalOpened = modalContent => ({
  type: actionTypes.MODAL_OPENED,
  modalContent
});

export const modalClosed = () => ({
  type: actionTypes.MODAL_CLOSED,
  modalContent: null
});

export const modalHandler = (event, projects) => dispatch => {
  if (projects) {
    projects.forEach(project => {
      if (event.target.parentNode.id === project.id) {
        dispatch(modalOpened(project));
      }
    });
  }
};
