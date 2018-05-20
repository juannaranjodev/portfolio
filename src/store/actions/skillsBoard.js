import * as actionTypes from './actionTypes';
import axios from 'axios';

const fetchSkillsSuccess = skills => ({
  type: actionTypes.FETCH_SKILLS_SUCCESS,
  skills
});

const fetchSkillsFail = () => ({
  type: actionTypes.FETCH_SKILLS_FAIL
});

export const fetchSkills = () => dispatch => {
  axios.get('https://olbesp-portfolio.firebaseio.com/skills.json')
    .then(response => {
      dispatch(fetchSkillsSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchSkillsFail());
    });
};

const getWindowWidth = windowWidth => ({
  type: actionTypes.RESIZE_WINDOW,
  windowWidth
});

export const resizeWindow = event => dispatch => {
  dispatch(getWindowWidth(event.target.innerWidth));
};
