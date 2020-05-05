import * as actions from './actionTypes';

const bugAdded = (description) => ({
  type: actions.BUG_ADDED,
  payload: {
    description: description
  }
})

export default bugAdded