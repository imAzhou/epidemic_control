/*
 * @Author: Azhou
 * @Date: 2022-04-14 01:06:51
 * @LastEditors: Azhou
 * @LastEditTime: 2022-04-14 13:22:26
 */
import { View, Button, Text } from "@tarojs/components";
import { ECPageContainer } from "@/components";
import { useState } from "react";
import { useShareAppMessage } from "@tarojs/taro";
import styles from "./index.module.scss";
import CoidList from "./components/CoidList";

const Home = () => {
  const [currentTab, setCurrentTab] = useState("coid");
  const tabList = [
    { title: "核酸结果", tabIndex: "coid" },
    { title: "求助列表", tabIndex: "help" },
  ];
  useShareAppMessage((res) => {
    if (res.from === "button") {
      // 来自页面内转发按钮
      console.log(res.target);
    }
    return {
      title: "防控toolkits",
      path: "/pages/Home/index",
    };
  });
  return (
    <ECPageContainer>
      <View className={styles.homeContainer}>
        <View className={styles.title}>发布</View>
        <View className={styles.btnWrap}>
          <Button type="primary" plain>
            发起核酸上报
          </Button>
          <Button type="warn" plain>
            发布求救信息
          </Button>
        </View>
        <View className={styles.listWrap}>
          <View className={styles.tabWrap}>
            {tabList.map((item) => (
              <Text
                key={item.tabIndex}
                className={styles.tabItem}
                style={{
                  color: item.tabIndex == currentTab ? "#1296db" : "black",
                }}
                onClick={() => setCurrentTab(item.tabIndex)}
              >
                {item.title}
              </Text>
            ))}
          </View>
          {currentTab == "coid" && <CoidList />}
          {currentTab == "help" && <View>help</View>}
        </View>
      </View>
    </ECPageContainer>
  );
};

export default Home;
