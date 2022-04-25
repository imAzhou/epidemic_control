/*
 * @Author: Azhou
 * @Date: 2022-04-17 10:35:48
 * @LastEditors: Azhou
 * @LastEditTime: 2022-04-25 10:29:51
 */
import { PageContainer, Button, View } from "@tarojs/components";
import Taro, { useReady } from "@tarojs/taro";
import { useState } from "react";
import { getWxUserInfo, getWxOpenid } from "@/utils";
import { BaseOrgUrl } from "@/config";
import styles from "./index.module.scss";

const WxLogin = () => {
  const [showLoginQuery, setShowLoginQuery] = useState(false);

  useReady(async () => {
    let UserInfo = Taro.getStorageSync("UserInfo");
    if (!UserInfo) setShowLoginQuery(true);
    // 获取用户openid
    const result = await getWxOpenid();
    if (!result.error) {
      Taro.setStorageSync("openid", result.data.openid);
      Taro.setStorageSync("cookie", result.data.cookie);
    }
    Taro.request({
      url: `${BaseOrgUrl}get/3`,
      method: "GET",
      header: {
        Cookie: `session=${result.data.cookie}`,
      },
    });
  });

  const onClickOverlay = () => {
    console.log("用户没有授权，给一定的提示");
  };

  const handleAuthorize = async () => {
    let result = await getWxUserInfo();
    setShowLoginQuery(false);
    if (result) {
      Taro.showToast({
        title: "授权成功",
        icon: "success",
        duration: 2000,
      });
    } else {
      Taro.showToast({
        title: "授权失败",
        icon: "error",
        duration: 2000,
      });
    }
  };

  return (
    <PageContainer show={showLoginQuery} onClickOverlay={onClickOverlay}>
      <View className={styles.loginBtn}>
        <Button type="primary" plain onClick={handleAuthorize}>
          微信授权昵称头像
        </Button>
      </View>
    </PageContainer>
  );
};

export default WxLogin;
