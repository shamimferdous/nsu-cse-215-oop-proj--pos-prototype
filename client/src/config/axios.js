import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://binary-pos-prototype.herokuapp.com/api',
    //baseURL: 'http://localhost:8080/api',
    timeout: 5000,
    headers: {}
});

axiosInstance.interceptors.response.use(response => response, (error) => {
    console.log(error);

    return error;
})

export default axiosInstance;