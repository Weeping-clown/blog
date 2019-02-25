/**
 * 
 * @param {*} state 返回状态 
 * @param {*} data  返回数据
 */
var setCode = (state, data) => {
  switch (state) {
    case "OK":
      return { code: "200", success: true, data, message: "获取成功" };
    case "ERROR":
      return { code: "400", success: false, data, message: "获取失败" };
    default: {
      return { code: "200", success: true, data, message: "获取成功" };
    }
  }
};
module.exports = {
    setCode
}
// export default resState;
