import axios from "axios";
import qs from "qs";

export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, qs.stringify(params))
      .then(res => {
          console.log("post请求",res.data)
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}
