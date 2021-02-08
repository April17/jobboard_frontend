const defaultState = {
    jobBoards: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
      case 'INITIAL_FETCH':
        return {jobBoards: action.payload}
      default:
        return state
    }
  }