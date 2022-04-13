/*
 * @Author: Azhou
 * @Date: 2022-04-14 03:19:05
 * @LastEditors: Azhou
 * @LastEditTime: 2022-04-14 04:08:33
 */
import { PageContainer, Button, View } from "@tarojs/components";
import Taro, { useReady } from "@tarojs/taro";
import { useState } from "react";
import { getWxUserInfo } from "@/utils";
import styles from "./index.module.scss";

const ECPageContainer = ({ children }) => {
  const [showLoginQuery, setShowLoginQuery] = useState(false);

  useReady(() => {
    let openid = Taro.getStorageSync("openid");
    if (!openid) setShowLoginQuery(true);
  });

  const onClickOverlay = () => {
    console.log("用户没有授权，给一定的提示");
  };

  const handleAuthorize = async () => {
    let result = await getWxUserInfo();
    setShowLoginQuery(false);
    if (result) {
      console.log("用户授权成功");
    } else {
      console.log("用户授权失败");
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
