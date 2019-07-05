import axios from 'axios'

export const getWine = () => {
  return dispatch => {
    dispatch({
      type: 'GET_DATA_REQUEST'
    })
    axios({
      method: 'get',
      url: 'https://wines-api.herokuapp.com/api/regions'
    })
    .then(response => {
      dispatch({
        type: 'GET_DATA_DONE',
        payload: {
          data: response.data,
        }
      })
    })
    .catch( error => {
      dispatch({
        type: 'GET_DATA_ERROR'
      })
    })
  }
}