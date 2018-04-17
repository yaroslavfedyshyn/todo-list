import axios from 'axios';
import qs from 'qs';

export default axios.create({
    baseUrl: '/',
    timeout: 30000,
    paramsSerializer(params) {
        return qs.stringify(params);
    },
    validateStatus: (status) => {
        if (status === 401) {
            // handle 401 HTTP error;
        }

        return status >= 200 && status < 300;
    },
});
