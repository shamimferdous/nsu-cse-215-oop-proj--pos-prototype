import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://www.breakingbadapi.com/api/',
    timeout: 5000,
    headers: {}
});

axiosInstance.interceptors.response.use(response => response, (error) => {
    console.log(error);

    return error;
})

export default axiosInstance;