/*
 * @Author: Azhou
 * @Date: 2022-04-14 03:19:05
 * @LastEditors: Azhou
 * @LastEditTime: 2022-04-15 21:03:17
 */
import { PageContainer, Button, View } from "@tarojs/components";
import Taro, { useReady } from "@tarojs/taro";
import { useState } from "react";
import { getWxUserInfo, getWxOpenid } from "@/utils";
import styles from "./index.module.scss";

const ECPageContainer = ({ children }) => {
  const [showLoginQuery, setShowLoginQuery] = useState(false);

  useReady(() => {
    // 获取用户openid
    getWxOpenid();
    let UserInfo = Taro.getStorageSync("UserInfo");
    if (!UserInfo) setShowLoginQuery(true);
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
    <View>
      <PageContainer show={showLoginQuery} onClickOverlay={onClickOverlay}>
        <View className={styles.loginBtn}>
          <Button type="primary" plain onClick={handleAuthorize}>
            微信授权昵称头像
          </Button>
        </View>
      </PageContainer>
      {children}
    </View>
  );
};

export default ECPageContainer;
