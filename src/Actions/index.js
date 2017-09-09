import axios from 'axios';

const ROOT_URL = `http://127.0.0.1:3000`;

export const FETCH_CHART_DATA = 'FETCH_CHART_DATA';

export function fetchChartData(requestType, requestUrl) {
    const url = `${ROOT_URL}/${requestType}`;
    const request = axios.post(url, {'url': requestUrl});

    return {
        type: FETCH_CHART_DATA,
        payload: request
    };
}
