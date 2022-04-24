/*
 * @Author: Azhou
 * @Date: 2022-04-24 16:44:17
 * @LastEditors: Azhou
 * @LastEditTime: 2022-04-24 16:57:59
 */
import { View, Textarea } from "@tarojs/components";
import styles from "./index.module.scss";

const GroupIntro = (props) => {
  return (
    <View className={styles.IntroWrap}>
      组织简介：
      <Textarea className={styles.textarea} autoHeight {...props} />
    </View>
  );
};

export default GroupIntro;
