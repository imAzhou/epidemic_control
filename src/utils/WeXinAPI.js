/*
 * @Author: Azhou
 * @Date: 2022-04-14 02:31:38
 * @LastEditors: Azhou
 * @LastEditTime: 2022-04-15 21:01:31
 */
import Taro from "@tarojs/taro";
import { BaseWxUrl } from "@/config";

/**
 * 获取微信用户的openid，不需要用户点击，可静默获取
 */
export const getWxOpenid = () => {
  return new Promise((resolve) => {
    Taro.login({
      success: async (res) => {
        if (res.code) {
          const response = await Taro.request({
            url: `${BaseWxUrl}/get_openid?code=${res.code}`,
            method: "GET",
          });
          resolve({
            error: false,
            data: response.data?.openid,
          });
        } else {
          console.log("登录失败！" + res.errMsg);
          resolve({
            error: true,
            data: null,
          });
        }
      },
    });
  });
};

/**
 * 获取微信的用户信息授权，需要用户点击按钮后才可调取api
 */
export const getWxUserInfo = () => {
  return new Promise((resolve) => {
    Taro.getUserProfile({
      lang: "zh_CN",
      desc: "获取你的昵称、头像、地区及性别",
      success: (response) => {
        const wxUserInfo = response.userInfo;
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
