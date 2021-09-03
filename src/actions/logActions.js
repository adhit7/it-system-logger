import {ADD_LOG, DELETE_LOG, GET_LOGS, SEARCH_LOGS, SET_CURRENT, SET_LOADING, UPDATE_LOG} from './types';

export const getLogs = () => {
  return async dispatch => {
    setLoading();

    const res = await fetch('/logs');
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data
    });
  };
};




export const addLog = (log) => {
    return async dispatch => {
        setLoading();

        const res = await fetch('/logs',{
            method:'POST',
            body:JSON.stringify(log),
            headers:{
                'Content-Type':'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: ADD_LOG,
            payload: data
        });
    };
};

export const updateLog = (log) => {
    return async dispatch => {
        setLoading();

        const res = await fetch(`/logs/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();

        dispatch({
            type: UPDATE_LOG,
            payload: data
        });
    };
};

export const deleteLog = (id) => {
    return async dispatch => {
        setLoading();

        await fetch(`/logs/${id}`,{
            method:'DELETE'
        });

        dispatch({
            type: DELETE_LOG,
            payload: id
        });
    };
};



export const setLoading = () => {
    return {
        type: SET_LOADING
    }
};

export const setCurrent = (log) => {
    return {
        type:SET_CURRENT,
        payload:log
    }
}

export const clearCurrent = () => {
    return {
        type:DELETE_LOG,
    }
}

export const searchLog = (text) => {
    return async dispatch => {
        setLoading();

        const res = await fetch(`/logs?q=${text}`);

        const data = await res.json();


        dispatch({
            type: SEARCH_LOGS,
            payload: data
        });
    };
};