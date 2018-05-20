import * as actionTypes from '../actions/actionTypes';

const initialState = {
  windowWidth: window.innerWidth,
  skills: null,
  error: false
};

const fetchSkills = (state, action) => ({
  ...state,
  skills: action.skills,
  error: false
});

const fetchSkillsFail = (state, action) => ({
  ...state,
  error: true
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SKILLS_SUCCESS: return fetchSkills(state, action);
    case actionTypes.FETCH_SKILLS_FAIL: return fetchSkillsFail(state, action);
    default: return state;
  }
};

export default reducer;
