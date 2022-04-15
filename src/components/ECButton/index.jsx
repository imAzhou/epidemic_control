/*
 * @Author: Azhou
 * @Date: 2022-04-14 17:18:29
 * @LastEditors: Azhou
 * @LastEditTime: 2022-04-14 17:37:24
 */
import { Button } from "@tarojs/components";
import styles from "./index.module.scss";

const btnTypeStyle = {
  primary: {
    backgroundColor: "#1296db",
    color: "#fff",
  },
};

const ECButton = (props) => {
  const { type, children, style, ...btnProps } = props;
  return (
    <Button
      {...btnProps}
      className={styles.btn}
      style={{ ...btnTypeStyle[type], ...style }}
    >
      {children}
    </Button>
  );
};

export default ECButton;
