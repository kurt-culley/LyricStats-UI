import axios from 'axios';

const ROOT_URL = `http://127.0.0.1:3005`;

export const FETCH_CHART_DATA = 'FETCH_CHART_DATA';
export const FETCH_CHART_DATA_SUCCESS = 'FETCH_CHART_DATA_SUCCESS';
export const FETCH_CHART_DATA_ERROR = 'FETCH_CHART_DATA_ERROR';

export const fetchChartData = (requestType, requestUrl) => (dispatch) => {
    const url = `${ROOT_URL}/${requestType}`;
    const request = axios.post(url, {'url': requestUrl});
    dispatch({
        type: FETCH_CHART_DATA,
    });

    return request.then(
        response => {
            dispatch({
                type: FETCH_CHART_DATA_SUCCESS,
                payload: response
            });
        },
        error => {
            dispatch({
                type: FETCH_CHART_DATA_ERROR,
                payload: error
            });
        }
    );
}
