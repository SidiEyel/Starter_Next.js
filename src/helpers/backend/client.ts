import auth from "../auth";
import axios from 'axios';

const reqInterceptor = async (config: any) => {
    if (auth.getToken()) {
      config.headers = {
        Authorization: `Bearer ${auth.getToken()?.access}`,
      };
    }
    return config;
};

const reqErrorInterceptor = (error: any) => {
    return Promise.reject(error);
};

const resInterceptor = (response: any) => response;

const resErrorInterceptor = (error: any) => {
    if(error?.response?.status ===401) {
        
    }
    throw error;
}

const addInterceptors = (instance: any) => {
    instance.interceptors.request.use(reqInterceptor, reqErrorInterceptor);
    instance.interceptors.response.use(resInterceptor, resErrorInterceptor);
}

const fetchClient = () => {
    const instance = axios.create({
      baseURL: process.env.APP_URL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    addInterceptors(instance);
  
    return instance;
};
const getNextFetchClient = (defaultOptions = {}) => {
    const instance = fetchClient();
    return {
      get: (url: string, config = {}) =>
        instance.get(url, { ...defaultOptions, ...config }),
      put: (url: string, data: any, config = {}) =>
        instance.put(url, data, { ...defaultOptions, ...config }),
      post: (url: string, data: any, config = {}) =>
        instance.post(url, data, { ...defaultOptions, ...config }),
      del: (url: string, config = {}) =>
        instance.delete(url, { ...defaultOptions, ...config }),
    };
};

export async function get(url: string, config = {}) {
    const fetchClient = getNextFetchClient();
    const { get } = fetchClient;
    return get(url, { ...config }).then((response: any) => response.data);
}

export async function post(url: string, data: any, config = {}) {
    const fetchClient = getNextFetchClient();
    const { post } = fetchClient;
    return post(url, data, { ...config }).then(
      (response: any) => response.data
    );
}

export async function put(url: string, data: any, config = {}) {
  const fetchClient = getNextFetchClient();
  const { put } = fetchClient;
  return put(url, data, { ...config }).then(
    (response: any) => response.data
  );
}