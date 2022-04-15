/*
 * @Author: Azhou
 * @Date: 2022-04-14 16:30:18
 * @LastEditors: Azhou
 * @LastEditTime: 2022-04-14 18:10:07
 */
import { View, Form, Text } from "@tarojs/components";
import { FormInput, ECButton, ECPageContainer } from "@/components";
import styles from "./index.module.scss";

const CoidUpload = () => {
  const formSubmit = (e) => {
    console.log(e);
  };
  return (
    <ECPageContainer>
      <Form onSubmit={formSubmit}>
        <View className={styles.formContainer}>
          <FormInput
            label="楼栋号:"
            type="text"
            placeholder="请输入楼栋号"
            name="building_id"
          />
          <FormInput
            label="人数:"
            type="number"
            placeholder="请输入家庭人数"
            name="person_num"
            tail={<Text style={{ margin: "0 10px" }}>人</Text>}
          />
          <FormInput
            label="核酸阳性:"
            type="number"
            name="coid_pos"
            value={0}
            tail={<Text style={{ margin: "0 10px" }}>人</Text>}
          />
          <FormInput
            label="抗原阳性:"
            type="number"
            placeholder=""
            name="antigen_pos"
            value={0}
            tail={<Text style={{ margin: "0 10px" }}>人</Text>}
          />
        </View>
        <ECButton formType="submit" type="primary" style={{ width: "300px" }}>
          提交
        </ECButton>
      </Form>
    </ECPageContainer>
  );
};

export default CoidUpload;
