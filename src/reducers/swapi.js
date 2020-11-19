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

const initialState = {
  byId: {
    isLoading: null,
    error: null,
    data: null
  },
  byBulk: {
    isLoading: null,
    error: null,
    data: null
  },
  planets: {
    isLoading: null,
    error: null,
    data: null
  },
};

const swapi = (state= initialState, action) => {
  switch (action.type) {
    case GET_POSTS_BY_ID_REQUEST:
      return {
        ...state,
        byId: {
          isLoading: true,
          error: null,
          data: null
        }
      }
    case GET_POSTS_BY_ID_SUCCESS:
      return {
        ...state,
        byId: {
          isLoading: false,
          error: false,
          data: action.payload
        }
      }
    case GET_POSTS_BY_ID_FAIL:
      return {
        ...state,
        byId: {
          isLoading: false,
          error: action.payload,
          data: false
        }
      }

    case GET_POSTS_BULK_REQUEST:
      return {
        ...state,
        byBulk: {
          isLoading: true,
          error: null,
          data: null
        }
      }
    case GET_POSTS_BULK_SUCCESS:
      return {
        ...state,
        byBulk: {
          isLoading: false,
          error: false,
          data: action.payload
        }
      }
    case GET_POSTS_BULK_FAIL:
      return {
        ...state,
        byBulk: {
          isLoading: false,
          error: action.payload,
          data: false
        }
      }
    case GET_PLANETS_REQUEST:
      return {
        ...state,
        planets: {
          isLoading: true,
          error: null,
          data: null
        }
      }
    case GET_PLANETS_SUCCESS:
      return {
        ...state,
        planets: {
          isLoading: false,
          error: false,
          data: action.payload
        }
      }
    case GET_PLANETS_FAIL:
      return {
        ...state,
        planets: {
          isLoading: false,
          error: action.payload,
          data: false
        }
      }
    case GET_MORE_PLANETS_REQUEST:
      return {
        ...state,
        planets: {
          isLoading: true,
          data: {
            next:  state.planets.data.next,
            results: [
              ...state.planets.data.results
            ]
          }
        }
      }
    case GET_MORE_PLANETS_SUCCESS:
      return {
        ...state,
        planets: {
          isLoading: false,
          error: false,
          data: {
            next: action.payload.next,
            results: [
                ...state.planets.data.results, ...action.payload.results
            ]
          }
        }
      }
    case GET_MORE_PLANETS_FAIL:
      return {
        ...state,
        planets: {
          isLoading: false,
          error: action.payload,
          data: null
        }
      }
    default: return state;
  }
}

export default swapi;