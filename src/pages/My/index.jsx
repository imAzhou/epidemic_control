/*
 * @Author: Azhou
 * @Date: 2022-04-14 02:13:03
 * @LastEditors: Azhou
 * @LastEditTime: 2022-04-14 11:38:35
 */
import { View, Text, Image } from "@tarojs/components";
import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import styles from "./index.module.scss";

const My = () => {
  const [UserInfo, setUserInfo] = useState({});

  const menuConfig = [
    { text: "我的组织", onClick: () => {} },
    { text: "我的填报", onClick: () => {} },
    { text: "我的求救", onClick: () => {} },
  ];

  useEffect(() => {
    let userInfo = Taro.getStorageSync("UserInfo");
    if (!userInfo) {
      // 用户数据不存在
      userInfo = {
        avatarUrl: "",
        nickName: "未登录",
      };
    }
    setUserInfo(userInfo);
  }, []);
  return (
    <View className={styles.myContainer}>
      <Image
        mode="aspectFill"
        className={styles.userAvatar}
        src={UserInfo.avatarUrl}
      />
      <Text>{UserInfo.nickName}</Text>
      <View className={styles.menuContainer}>
        {menuConfig.map((item, index) => (
          <View className={styles.menuItem} key={index}>
            <Text>{item.text}</Text>
            <Text className={styles.arrow}>{">"}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default My;
