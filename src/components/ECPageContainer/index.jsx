/*
 * @Author: Azhou
 * @Date: 2022-04-14 03:19:05
 * @LastEditors: Azhou
 * @LastEditTime: 2022-04-17 10:48:40
 */
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import WxLogin from "./WxLogin";
import DDLogin from "./DDLogin";

const ECPageContainer = ({ children }) => {
  return (
    <View>
      {Taro.getEnv() === "WEAPP" ? <WxLogin></WxLogin> : <DDLogin></DDLogin>}
      {children}
    </View>
  );
};

export default ECPageContainer;
