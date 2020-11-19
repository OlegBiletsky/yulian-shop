import {
    GET_POSTS_BY_ID_REQUEST,
    GET_POSTS_BY_ID_SUCCESS,
    GET_POSTS_BY_ID_FAIL,

    GET_POSTS_BULK_REQUEST,
    GET_POSTS_BULK_SUCCESS,
    GET_POSTS_BULK_FAIL,

    GET_PLANETS_REQUEST,
    GET_PLANETS_SUCCESS,
    GET_PLANETS_FAIL,

    GET_MORE_PLANETS_REQUEST,
    GET_MORE_PLANETS_SUCCESS,
    GET_MORE_PLANETS_FAIL

} from "../constants/ActionTypes";

import {
    getPostsById,
    getPostsBulk,
    getPlanets,
    getMorePlanets
} from "../api/shop";

const getPostById = async (dispatch, id) => {
    dispatch({ type: GET_POSTS_BY_ID_REQUEST });

    try {
        const response = await getPostsById(id);
        const res = await response.json();
        dispatch({ type: GET_POSTS_BY_ID_SUCCESS, payload: res });
    } catch (e) {
        dispatch({ type: GET_POSTS_BY_ID_FAIL, payload: e });
    }
};

const getPostBulk = async dispatch => {
    dispatch({ type: GET_POSTS_BULK_REQUEST });

    try {
        const response = await getPostsBulk();
        const res = await response.json();
        dispatch({ type: GET_POSTS_BULK_SUCCESS, payload: res });
    } catch (e) {
        dispatch({ type: GET_POSTS_BULK_FAIL, payload: e });
    }
};

const getPlanet = async dispatch => {
    dispatch({ type:  GET_PLANETS_REQUEST });

    try {
        const response = await getPlanets();
        const res = await response.json();
        dispatch({ type: GET_PLANETS_SUCCESS, payload: res });
    } catch (e) {
        dispatch({ type: GET_PLANETS_FAIL, payload: e });
    }
};

const getMorePlanet = async (dispatch, url) => {
    dispatch({ type:  GET_MORE_PLANETS_REQUEST });

    try {
        const response = await getMorePlanets(url);
        const res = await response.json();
        dispatch({ type: GET_MORE_PLANETS_SUCCESS, payload: res });
    } catch (e) {
        dispatch({ type: GET_MORE_PLANETS_FAIL, payload: e });
    }
};

export const getPlanetFunc = dispatch => {
    return () => getPlanet(dispatch);
}

export const getMorePlanetFunc = dispatch => {
    return (url) => getMorePlanet(dispatch, url);
}

export const getPostByIdFunc = dispatch => {
    return id => getPostById(dispatch, id);
}

export const getPostsBulkFunc = dispatch => {
    return () => getPostBulk(dispatch);
}