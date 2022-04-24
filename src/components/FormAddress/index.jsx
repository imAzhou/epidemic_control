/*
 * @Author: Azhou
 * @Date: 2022-04-23 21:00:11
 * @LastEditors: Azhou
 * @LastEditTime: 2022-04-24 19:28:31
 */
import { View, Text, Input } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState } from "react";
import styles from "./index.module.scss";

const FormAddress = (props) => {
  const [addressValue, setAddressValue] = useState({});

  const handleGetLocation = () => {
    Taro.chooseLocation({
      success: function (loca_res) {
        console.log(loca_res);
        const { address, latitude, longitude } = loca_res;
        setAddressValue({ address, latitude, longitude });
      },
    });
  };
  return (
    <View className={styles.inputWrap}>
      {props.required && <Text style={{ color: "red" }}>*</Text>}
      <Text className={styles.label}>{props.label}</Text>
      <View className={styles.input} onClick={handleGetLocation}>
        {addressValue.address ? (
          <View className={styles.addressText}>{addressValue.address}</View>
        ) : (
          <Text style={{ color: "#777" }}>{props.placeholder}</Text>
        )}
      </View>
      <Input
        value={JSON.stringify(addressValue)}
        style={{ display: "none" }}
        {...props}
      />
    </View>
  );
};

export default FormAddress;
