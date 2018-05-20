import * as actionTypes from '../actions/actionTypes';

const initialState = {
  projects: null,
  showModal: false,
  modalContent: null,
  error: null
};

const fetchProjects = (state, action) => ({
  ...state,
  projects: action.projects,
  error: null
});

const fetchProjectsFail = (state, action) => ({
  ...state,
  error: action.error
});

const modalOpened = (state, action) => ({
  ...state,
  showModal: true,
  modalContent: action.modalContent
});

const modalClosed = (state, action) => ({
  ...state,
  showModal: false,
  modalContent: action.modalContent
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PROJECTS_SUCCESS: return fetchProjects(state, action);
    case actionTypes.FETCH_PROJECTS_FAIL: return fetchProjectsFail(state, action);
    case actionTypes.MODAL_OPENED: return modalOpened(state,action);
    case actionTypes.MODAL_CLOSED: return modalClosed(state, action);
    default: return state;
  }
};

export default reducer;
