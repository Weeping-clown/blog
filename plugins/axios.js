import axios from "axios";
import Vue from "vue";
// import qs from "qs";

Vue.prototype.$axios = axios;
Vue.prototype.$axios.create({
  headers: {
    // "Content-Type": "application/json" //以json格式传参
    "Content-Type": "application/x-www-form-urlencoded" //以key - val 形式传参
  },
  timeout: 5000,
  baseURL: "http://192.168.2.23:8080/qianlou"
});

Vue.prototype.$axios.prototype.getData = (url, data, type) => {
  !type && (type = "post");
  let params = new URLSearchParams();
  for (let key in config.data) {
    let val = config.data[key];
    if (!config.data[key] && config.data[key] != 0) {
      val = "";
    }
    console.log(key, val);
    params.append(key, val);
  }
  Vue.prototype.$axios({
    method: type,
    url: url,
    data: params
  });
};

// import axios from "axios";
// // import qs from "qs";

// export function fetch(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       headers: {
//         // "Content-Type": "application/json" //以json格式传参
//         "Content-Type": "application/x-www-form-urlencoded" //以key - val 形式传参
//       },
//       timeout: 5000,
//       baseURL: "http://192.168.2.23:8080/qianlou"
//     });
//     // config.data = qs.stringify(config.data);
//     let params = new URLSearchParams();
//     for (let key in config.data) {
//       let val = config.data[key];
//       if (!config.data[key] && config.data[key] != 0) {
//         val = "";
//       }
//       console.log(key, val);
//       params.append(key, val);
//     }
//     config.data = params;
//     console.log(config);
//     instance(config)
//       .then(res => {
//         console.log(res);
//         resolve(res);
//       })
//       .catch(err => {
//         console.log(err);
//         reject(err);
//       });
//   });
// }

// export function getData(url, data, type) {
//   !type && (type = "post");
//   return fetch({ url, method: type, data });
// }
