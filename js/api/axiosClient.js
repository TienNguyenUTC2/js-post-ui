import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://js-post-api.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log('request interceptor', config);

    //attach token to request if exists
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    console.log('AxiosClient- response error', error.response);
    if (!error.response) throw new Error('Network. Please try again later');

    //redirect to login if not login
    if (error.response.status === 401) {
      window.localStorage.assign('/login.html');

      return;
    }
    // return Promise.reject(error);
    throw new Error(error);
  }
);
export default axiosClient;
