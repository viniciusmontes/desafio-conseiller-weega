import axios, { AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';

import { history } from './history';
import { BASE_URL } from './system';

export function requestBackend(config: AxiosRequestConfig) {
  return axios({ ...config, baseURL: BASE_URL });
}

axios.interceptors.request.use(
  function (config) {
    // DO SOMETHING BEFORE REQUEST IS SENT
    return config;
  },
  function (error) {
    // DO SOMETHING WITH REQUEST ERROR
    return Promise.reject(error);
  }
);

// RESPONSE INTERCEPTOR
axios.interceptors.response.use(
  function (response) {
    // DO SOMETHING WITH RESPONSE DATA IF STATUS IS 2xx
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      history.push("/");
    }
    if (error.response.status === 403) {
      history.push("/");
    }
    if (error.response.status === 400) {
      toast.error(error.response.data.error);
    }
    if (error.response.status === 404) {
      toast.error(error.response.data.error);
    }
    if (error.response.status === 500) {
      toast.error(error.response.data.error);
    }
    return Promise.reject(error);
  }
);
