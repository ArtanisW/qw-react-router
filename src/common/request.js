import OriginAxios from 'axios';
import { message } from 'antd';
import qs from 'qs';

const axios = OriginAxios.create({
  // 可以通过自定义环境变量，来定制baseURL
  // baseURL: process.env.API_BASE_URL,
  timeout: 20000,
});
// RESTful API
export function get(url, data) {
  return axios.get(url, {
    params: data,
  });
}
export function post(url, data, config) {
  return axios.post(url, data, config);
}
export function put(url, data, config) {
  return axios.put(url, data, config);
}
export function del(url, data, config) {
  return axios.delete(url, data, config);
}
export function patch(url, data, config) {
  return axios.patch(url, data, config);
}
// form-data
const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
};

export function postForm(url, data) {
  return axios.post(url, qs.stringify(data), config);
}

// Add a request interceptor
axios.interceptors.request.use(
  function config(config) {
    // Do something before request is sent
    config.headers['xx'] = 'xx';

    return config;
  },
  function error(error) {
    // Do something with request error
    console.log('request error, HTTP CODE: ', error.response.status);

    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (res) => {
    // 不同公司api结构不一样，请自行修改
    const { data } = res;
    if (data && data.errCode !== '0') {
      const errorMsg = data.errMsg[0];
      message.error(errorMsg);

      return Promise.reject(errorMsg);
    }

    return res;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.reload();
      message.error('登录过期');

      return Promise.reject(error);
    }

    if (
      error.code === 'ECONNABORTED' &&
      error.message.indexOf('timeout') !== -1
    ) {
      message.error('请求超时');

      return;
    }

    message.error('接口错误');

    return Promise.reject(error);
  }
);

export default axios;

// 参考：https://ykloveyxk.github.io/2017/02/25/axios%E5%85%A8%E6%94%BB%E7%95%A5/
