import { SET_FILTER } from '../actionTypes';
import { VISIBILITY_FILTERS } from '../../constants';

const { FILTER_ALL } = VISIBILITY_FILTERS;

export default (state = FILTER_ALL, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};
