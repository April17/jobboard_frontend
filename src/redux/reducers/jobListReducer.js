const defaultState = {
    companyName: "",
    jobListRow: null,
    pagy: {}
}

export default (state = defaultState, action) => {
    switch (action.type) {
      case 'GET_LIST':
        return {companyName: action.payload.companyName, jobListRow: action.payload.data.data, pagy: action.payload.data.pagy}
      default:
        return state
    }
  }