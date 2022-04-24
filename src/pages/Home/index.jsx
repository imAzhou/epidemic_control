/*
 * @Author: Azhou
 * @Date: 2022-04-14 01:06:51
 * @LastEditors: Azhou
 * @LastEditTime: 2022-04-24 20:58:06
 */
import { View, Button } from "@tarojs/components";
import { ECPageContainer } from "@/components";
import Taro, { useShareAppMessage } from "@tarojs/taro";
import styles from "./index.module.scss";

const Home = () => {
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
  const handleCOIDStart = () => {
    Taro.navigateTo({ url: "/pages/Home/pages/CoidUpload/index" });
  };
  const handleCreateGroup = () => {
    Taro.navigateTo({ url: "/pages/Group/CreateGroup/index" });
  };
  const handleJoinGroup = () => {
    Taro.navigateTo({ url: "/pages/Group/JoinGroup/index" });
  };
  return (
    <ECPageContainer>
      <View className={styles.homeContainer}>
        <View className={styles.title}>发布</View>
        <View className={styles.btnWrap}>
          <Button type="primary" plain onClick={handleCOIDStart}>
            发起核酸上报
          </Button>
          <Button type="warn" plain>
            发布求救信息
          </Button>
        </View>
        <Button
          type="primary"
          plain
          onClick={handleCreateGroup}
          style={{ margin: "10px 0" }}
        >
          创建组织
        </Button>
        <Button type="primary" plain onClick={handleJoinGroup}>
          加入组织
        </Button>
      </View>
    </ECPageContainer>
  );
};

export default Home;
