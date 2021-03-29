import axios from 'axios'
import {TOKEN_NAME} from "../constans";

export default function request(options) {
    let {data, url, method = 'get'} = options;

    try {
        let domain = '';
        const urlMatch = url.match(/[a-zA-z]+:\/\/[^/]*/);
        if (urlMatch) {
            [domain] = urlMatch;
            url = url.slice(domain.length)
        }
        url = domain + url
        console.log("url = ",url)
    } catch (e) {
    }
    data = data ? data : {path: ''};

    axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI5NTU4YWRhMS1lOTBiLTQ1NTYtYWM1Yy01ZDIwNzQ4MTJkMDciLCJpYXQiOjE1OTQ5MDMzOTksImV4cCI6MTU5NjYzMTM5OX0.WQMAdL5iDKIObTbPPJINJZEI_qTZ-_Z_tGCNvBPZ1_wT02ID5Xou_hQCfRBXZCb9SamjP_XDLmfXZqQNrrfHYA';
    // axios.defaults.headers.common['Authorization'] = localStorage.getItem(TOKEN_NAME);
    try {

        if (data.fileUpload) {
            options.headers = {
                "Content-Type": "multipart/form-data"
            };
            const formData = new FormData();
            if (data.file.length > 1) {
                Array.from(data.file).forEach((file, i) => formData.append('files' + i, file));
             } else {
                formData.append('file', data.file[0]);
            }
             delete data.file;
            options.data = formData;
        }
        delete data.fileUpload;
    } catch (e) {

    }

    return axios(options)
        .then(response => {
            const {statusText, status, data} = response;
            let result = {};
            if (typeof data === 'object') {
                result = data;
                if (Array.isArray(data)) {
                    result.list = data
                }
            } else {
                result.data = data
            }
            return Promise.resolve({
                success: true,
                message: statusText,
                statusCode: status,
                ...result,
            })
        })
        .catch(error => {
            const {response} = error;
            let msg;
            let statusCode;
            if (response && response instanceof Object) {
                const {data, statusText} = response;
                statusCode = response.status;
                msg = data.message || statusText
            } else {
                statusCode = 600;
                msg = error.message || 'Network Error'
            }
            /* eslint-disable */
            return Promise.resolve({
                success: false,
                statusCode,
                message: msg,
            })
        })
}