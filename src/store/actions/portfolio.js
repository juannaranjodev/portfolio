import * as actionTypes from './actionTypes';
import axios from 'axios';

const fetchProjectsSuccess = projects => ({
  type: actionTypes.FETCH_PROJECTS_SUCCESS,
  projects
});

const fetchProjectsFail = () => ({
  type: actionTypes.FETCH_PROJECTS_FAIL
});

export const fetchProjects = () => dispatch => {
  axios.get('https://olbesp-portfolio.firebaseio.com/projects.json')
    .then(response => {
      dispatch(fetchProjectsSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchProjectsFail());
    });
};
