import axios from 'axios';
import {API_BASE_URL} from "../../constans/index";

export default class Api {
    static auth = (username, password) => {
        return axios.post(`${API_BASE_URL}/auth`, {username, password}, {
            headers: {
                "X-Accept-OK": true
            }
        });
    }

    static uploadFile = (data) => {
        console.log("data", data);
        return axios.post(`${API_BASE_URL}/file/upload`, data, {
            headers: {
                "Authorization":"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI5NTU4YWRhMS1lOTBiLTQ1NTYtYWM1Yy01ZDIwNzQ4MTJkMDciLCJpYXQiOjE1OTQ3NTI0MjYsImV4cCI6MTU5NjQ4MDQyNn0.mRhw4q9mzgK9CHuJdkC8QOmrvZjKRSOIYcRHg2AYTd51LJet9tpO1cFMQBHr8eHZsZjWq9w6wG8oTjRseKWpHg",
                "Content-Type": "multipart/form-data"
            }
        });
    }
}