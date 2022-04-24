/*
 * @Author: Azhou
 * @Date: 2022-04-24 19:36:45
 * @LastEditors: Azhou
 * @LastEditTime: 2022-04-24 21:07:11
 */
import { View, Form, Input } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState } from "react";
import { FormInput, ECButton } from "@/components";
import styles from "./index.module.scss";

const JoinGroup = () => {
  const [familyNum, setFamilyNum] = useState(0);
  const formSubmit = (e) => {
    const formValue = e.detail.value;
    const { building_id, area_id, room_id, family_num } = formValue;
    const buildingInfo = building_id + area_id + room_id;
    if (!family_num || !buildingInfo) {
      Taro.showToast({
        title: "请完善必填信息(带*号为必填)",
        icon: "none",
        duration: 2000,
      });
    } else {
      console.log(formValue);
    }
  };
  return (
    <Form onSubmit={formSubmit} className={styles.formContainer}>
      <View className={styles.titleWrap}>
        <View style={{ color: "#999", fontSize: "20px" }}>邀请您加入组织</View>
        <View
          style={{
            fontWeight: "bold",
            fontSize: "24px",
            margin: "15px 0 5px 0",
          }}
        >
          汪汪队立大功
        </View>
        <View>组织简介信息</View>
      </View>
      <View className={styles.baseWrap}>
        <FormInput
          required
          label="楼栋号:"
          type="text"
          placeholder="请输入楼栋号, 例: 25号楼"
          name="building_id"
        />
        <FormInput
          required
          label="单元号:"
          type="text"
          placeholder="请输入单元号, 例: 3单元"
          name="area_id"
        />
        <FormInput
          required
          label="户号:"
          type="text"
          placeholder="请输入户号, 例: 211室"
          name="room_id"
        />
        <FormInput
          required
          label="家庭人数:"
          type="number"
          placeholder="请输入您的家庭人数"
          name="family_num"
          onConfirm={(e) => setFamilyNum(parseInt(e.detail.value))}
        />
        <FormInput
          label="你的姓名:"
          type="text"
          name="owner_name"
          placeholder="请输入你的姓名"
        />
        <FormInput
          label="联系方式:"
          type="number"
          placeholder="请输入您的联系方式"
          name="family_num"
        />
        {familyNum - 1 > 0 && (
          <View>
            {[...Array(familyNum - 1)].map((item, index) => (
              <View key={index}>
                <View>其他家庭成员{index + 1} 姓名：</View>
                <Input className={styles.input} name={`member_${index + 1}`} />
              </View>
            ))}
          </View>
        )}
      </View>

      <ECButton
        formType="submit"
        type="primary"
        style={{ width: "300px", marginTop: "20px" }}
      >
        提交
      </ECButton>
    </Form>
  );
};

export default JoinGroup;
