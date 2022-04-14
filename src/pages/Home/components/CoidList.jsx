/*
 * @Author: Azhou
 * @Date: 2022-04-14 12:33:27
 * @LastEditors: Azhou
 * @LastEditTime: 2022-04-14 12:55:14
 */
import { View } from "@tarojs/components";
import styles from "./index.module.scss";

const CoidList = () => {
  const mockList = [
    { building: "3幢210", person_num: 3, coid_result: true, antigen: true },
    { building: "3幢210", person_num: 3, coid_result: true, antigen: false },
    { building: "3幢210", person_num: 3, coid_result: true, antigen: true },
    { building: "3幢210", person_num: 3, coid_result: false, antigen: true },
    { building: "3幢210", person_num: 3, coid_result: true, antigen: true },
    { building: "3幢210", person_num: 3, coid_result: true, antigen: true },
    { building: "3幢210", person_num: 3, coid_result: false, antigen: false },
    { building: "3幢210", person_num: 3, coid_result: true, antigen: true },
    { building: "3幢210", person_num: 3, coid_result: true, antigen: true },
  ];
  return (
    <View className={styles.coidContainer}>
      <View className={styles.listHead}>
        {["楼栋号", "人数", "核酸结果", "抗原结果"].map((item, index) => (
          <View key={index} className={styles.text}>
            {item}
          </View>
        ))}
      </View>
      {mockList.map((item, index) => (
        <View key={index} className={styles.listHead}>
          <View className={styles.text}>{item.building}</View>
          <View className={styles.text}>{item.person_num}</View>
          <View
            className={styles.text}
            style={{ color: item.coid_result ? "green" : "red" }}
          >
            {item.coid_result ? "阴" : "阳"}
          </View>
          <View
            className={styles.text}
            style={{ color: item.antigen ? "green" : "red" }}
          >
            {item.antigen ? "阴" : "阳"}
          </View>
        </View>
      ))}
    </View>
  );
};

export default CoidList;
