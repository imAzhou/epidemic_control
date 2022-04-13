/*
 * @Author: Azhou
 * @Date: 2022-04-14 02:31:38
 * @LastEditors: Azhou
 * @LastEditTime: 2022-04-14 04:10:54
 */
import Taro from "@tarojs/taro";
/**
 * 获取微信的用户信息授权，需要用户点击按钮后才可调取api
 */
const getWxUserInfo = async () => {
  return new Promise((resolve) => {
    Taro.getUserInfo({
      lang: "zh_CN",
      desc: "获取你的昵称、头像、地区及性别",
      success: (response) => {
        const wxUserInfo = response.userInfo;
        console.log(wxUserInfo);
        Taro.setStorageSync("UserInfo", wxUserInfo);
        resolve(true);
      },
      fail: () => {
        console.log("用户拒绝了授权");
        resolve(false);
      },
    });
  });
};

export default getWxUserInfo;
