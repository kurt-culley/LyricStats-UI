import {
    FETCH_CHART_DATA,
    FETCH_CHART_DATA_SUCCESS,
    FETCH_CHART_DATA_ERROR
} from '../Actions/index';

const initialState = {
    chart: [],
    isLoading: false
};

export default function rootReducer (state = initialState, action) {
    switch (action.type) {
        case FETCH_CHART_DATA:
            return {...state, isLoading: true};
        case FETCH_CHART_DATA_SUCCESS:
            return {chart: action.payload.data, isLoading: false};
        case FETCH_CHART_DATA_ERROR:
            return {chart: action.payload.data, isLoading: false};
        default:
            return state
    }
}