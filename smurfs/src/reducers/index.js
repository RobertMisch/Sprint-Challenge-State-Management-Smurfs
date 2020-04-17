import {
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAILURE,
    POST_SMURF_SUCCESS,
    POST_SMURF_FAIL,
    FETCH_SMURF_DELETE
  } from "../actions/smurfActions";

  export const initialState = {
    data:[],
    // smurfList:[],
    isFetching: false,
    error: ''
  };

  export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        //smurf fetch
        case FETCH_SMURF_START:
            console.log(action.payload)
            return {
                ...state,
                isFetching: true
            };
        case FETCH_SMURF_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                isFetching: false,
                data: action.payload,
                error: ''
            };
        case FETCH_SMURF_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        //smurf post
        case POST_SMURF_SUCCESS:
            console.log(action.payload)
            const newSmurf = {
                name: action.payload.name,
                age: action.payload.age,
                height: action.payload.height,
                id:action.payload.id
              };
              return { ...state, data: action.payload };
        case POST_SMURF_FAIL:
            console.log(action.payload)
            return {
                ...state,
                error: action.payload
            };
        case FETCH_SMURF_DELETE:
            console.log(action.payload)
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
};