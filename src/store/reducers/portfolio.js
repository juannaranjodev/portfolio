import * as actionTypes from '../actions/actionTypes';

const initialState = {
  projects: null,
  showModal: false,
  modalContent: null,
  error: false
};

const fetchProjects = (state, action) => ({
  ...state,
  projects: action.projects,
  error: false
});

const fetchProjectsFail = (state, action) => ({
  ...state,
  error: true
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PROJECTS_SUCCESS: return fetchProjects(state, action);
    case actionTypes.FETCH_PROJECTS_FAIL: return fetchProjectsFail(state, action);
    default: return state;
  }
};

export default reducer;
