/*
 * @Author: Azhou
 * @Date: 2022-04-24 15:30:44
 * @LastEditors: Azhou
 * @LastEditTime: 2022-04-24 16:06:01
 */
import { View, Image, Text, Input } from "@tarojs/components";
import { useState } from "react";
import Taro from "@tarojs/taro";
import styles from "./index.module.scss";

const UploadAvatar = ({ name }) => {
  const [avatarUrl, setAvatarUrl] = useState(
    "https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"
  );
  const changeAvatar = () => {
    Taro.chooseImage({
      count: 1,
      sizeType: ["compressed"],
      sourceType: ["album"],
      success: function (res) {
        const tempFilePaths = res.tempFilePaths;
        setAvatarUrl(tempFilePaths);
      },
    });
  };
  return (
    <View className={styles.avatarWrap}>
      <Image
        mode="aspectFill"
        className={styles.avatarImg}
        src={avatarUrl}
        onClick={changeAvatar}
      />
      <Text>上传组织头像</Text>
      {/* form需要通过表单组件才能拿到avatarUrl，name为键，value为值 */}
      <Input name={name} value={avatarUrl} style={{ display: "none" }} />
    </View>
  );
};

export default UploadAvatar;
