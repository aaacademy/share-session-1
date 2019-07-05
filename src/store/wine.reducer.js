const initState = {
  data: [],
  isLoading: false,
  isError: false,
}

export default (state = initState, action) => {
  switch (action.type) {
    case 'GET_DATA_REQUEST':
      return {
        ...state,
        isLoading: true
      }
    case 'GET_DATA_DONE':
      return {
        ...state,
        isLoading: false,
        data: action.payload.data
      }
    case 'GET_DATA_ERROR':
      return {
        ...state,
        isError: true,
      }

    default:
      return state;
  }
}