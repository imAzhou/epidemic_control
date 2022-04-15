/*
 * @Author: Azhou
 * @Date: 2022-04-14 16:51:22
 * @LastEditors: Azhou
 * @LastEditTime: 2022-04-14 17:03:13
 */
import { Input, View, Text } from "@tarojs/components";
import styles from "./index.module.scss";

const FormInput = (props) => {
  return (
    <View className={styles.inputWrap}>
      <Text className={styles.label}>{props.label}</Text>
      <Input className={styles.input} {...props} />
      {props.tail}
    </View>
  );
};

export default FormInput;
