/*
 * @Author: Azhou
 * @Date: 2022-04-23 20:29:59
 * @LastEditors: Azhou
 * @LastEditTime: 2022-04-24 18:56:57
 */
import { View, Form } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { FormInput, ECButton, FormAddress } from "@/components";
import styles from "./index.module.scss";
import { UploadAvatar, MemberCode, GroupIntro } from "./components";

const CreateGroup = () => {
  const formSubmit = (e) => {
    const formValue = e.detail.value;
    if (!formValue.group_name || !formValue.member_code?.length) {
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
      <View className={styles.baseWrap}>
        <UploadAvatar name="group_avatar" />
        <FormInput
          required
          label="组织名称:"
          type="text"
          placeholder="请输入组织名称"
          name="group_name"
        />
        <FormInput
          label="联系人:"
          type="text"
          placeholder="请输入组织联系人姓名"
          name="contact_name"
          //   tail={<Text style={{ margin: "0 10px" }}>人</Text>}
        />
        <FormInput
          label="联系方式:"
          type="number"
          name="contact_tel"
          placeholder="请输入组织联系人手机号"
        />
        <FormAddress
          label="组织地址:"
          name="group_address"
          placeholder="点击设置组织地址"
        />
      </View>
      <MemberCode name="member_code" />
      <GroupIntro name="group_intro" placeholder="请输入组织简介" />
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

export default CreateGroup;
