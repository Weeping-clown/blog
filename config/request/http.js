import axios from "axios";
import qs from "qs";

axios.create({
  headers: {
    // "Content-Type": "application/json" //以json格式传参
    "Content-Type": "application/x-www-form-urlencoded" //以key - val 形式传参
  },
  timeout: 5000,
  baseURL: "http://192.168.2.23:8011"
});

/**
 * 请求拦截
 */
axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.error(error);
  }
);

/**
 * 响应拦截
 * 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
 */
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    if (error.response && error.response.status) {
      this.$message.error("忘网络开小差了,请稍后再试");
    }
  }
);

export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, qs.stringify(params))
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}

export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}

export function $axios() {
  return axios;
}
