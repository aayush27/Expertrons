import axios from 'axios';

export const MENTOR_DATA = "MENTOR_DATA";
export const ADD_MENTOR_DATA = "ADD_MENTOR_DATA";

export function getMentors () {
    return dispatch => {
       return axios.get(`http://localhost:8001/getMentors`)
        .then((response) => {
            const result = response.data;
            dispatch({type: MENTOR_DATA, data: result});
        })
        .catch(({...error}) => {
            dispatch({type: MENTOR_DATA, data: error});
            throw(error);
        });
    }
}

export function addMentor (params) {
    return dispatch => {
       return axios.post(`http://localhost:8001/addMentor`, params)
        .then((response) => {
            const result = response.data;
            dispatch({type: ADD_MENTOR_DATA, data: result});
        })
        .catch(({...error}) => {
            dispatch({type: ADD_MENTOR_DATA, data: error});
            throw(error);
        });
    }
}