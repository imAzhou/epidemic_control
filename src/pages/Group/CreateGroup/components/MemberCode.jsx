/*
 * @Author: Azhou
 * @Date: 2022-04-24 16:15:09
 * @LastEditors: Azhou
 * @LastEditTime: 2022-04-24 19:07:16
 */
import { View, Text, Input } from "@tarojs/components";
import { useState, useMemo } from "react";
import styles from "./index.module.scss";

const code_group = [
  { code: 1, text: "楼栋号", example_str: "25栋" },
  { code: 2, text: "单元号", example_str: "A单元" },
  { code: 3, text: "门牌号", example_str: "611室" },
];

const MemberCode = ({ name }) => {
  const [codeValue, setCodeValue] = useState([1, 2, 3]);
  const handleCodeChange = (value) => {
    const newCodeValue = [...codeValue];
    const valueIndex = codeValue.indexOf(value);
    valueIndex > -1
      ? newCodeValue.splice(valueIndex, 1)
      : newCodeValue.push(value);
    setCodeValue(newCodeValue);
  };
  const exampleStr = useMemo(() => {
    codeValue.sort();
    return code_group
      .filter((v) => codeValue.indexOf(v.code) > -1)
      .map((v) => v.example_str)
      .join(" ");
  }, [codeValue]);
  return (
    <View className={styles.memberCodeWrap}>
      <Text style={{ color: "red" }}>*</Text>
      请设置门户编号格式：
      <View style={{ margin: "15px 0 20px 0" }}>
        {code_group.map((item) => (
          <Text
            key={item.code}
            className={styles.codeText}
            onClick={() => handleCodeChange(item.code)}
            style={{
              borderColor: codeValue.indexOf(item.code) > -1 ? "green" : "#eee",
              marginRight: "20px",
            }}
          >
            {item.text}
          </Text>
        ))}
      </View>
      {exampleStr && (
        <>
          门户编号样例：
          <View className={styles.codeText}>{exampleStr}</View>
        </>
      )}
      <Input name={name} value={codeValue} style={{ display: "none" }} />
    </View>
  );
};

export default MemberCode;
