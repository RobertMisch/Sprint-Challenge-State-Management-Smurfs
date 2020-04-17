import axios from 'axios'

export const FETCH_SMURF_START = 'FETCH_SMURF_START'
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS'
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE'
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS'
export const POST_SMURF_FAIL = 'POST_SMURF_FAIL'
export const FETCH_SMURF_DELETE = 'FETCH_SMURF_DELETE'


export const fetchSmurfs = () => {
    console.log('fetchSmurfs fetching')
      return dispatch => {
        dispatch({ type: FETCH_SMURF_START });
        axios
          .get('http://localhost:3333/smurfs')
          .then(res => {
            console.log(res)
            dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
          })
          .catch(err => {
            dispatch({
              type: FETCH_SMURF_FAILURE,
              payload: `Error ${err.response.status}: ${err.response.data}`
            });
          });
      };
    };
export const postSmurfs = (item)=>{
    console.log('postSmurfs posting')
    console.log(item)
    return dispatch => {
    axios
	      .post("http://localhost:3333/smurfs", item)
	      .then(res => {
	        dispatch({ type: POST_SMURF_SUCCESS, payload: res.data });
	        console.log("success", res);
	      })
	      .catch(err => {
            dispatch({
            type: FETCH_SMURF_FAILURE,
            payload: err.response.data
            })
          });
    }
};
export const deleteSmurf = (id)=>{
    return dispatch =>{
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
        console.log(res)
            dispatch({ type: FETCH_SMURF_DELETE, payload: res.data })
        }
    )
}
}