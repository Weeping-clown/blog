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
    // res.writeHead(200, {'Content-Type':'application/json;charset=UTF-8'});
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
    let reParams = new URLSearchParams();
    for (let key in params) {
      let val = params[key];
      if (!params[key] && params[key] != 0) {
        val = "";
      }
      reParams.append(key, val);
    }
    axios
      .post(url, reParams)
      .then(res => {
        console.log("post请求", res.data);
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}

export function $axios(){
  return axios;
};
