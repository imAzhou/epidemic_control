/*
 * @Author: Azhou
 * @Date: 2022-04-14 01:06:51
 * @LastEditors: Azhou
 * @LastEditTime: 2022-04-14 03:27:53
 */
import { Component } from "react";
import "./app.scss";

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 对应 onLaunch
  onLaunch() {
    console.log("小程序启动");
  }

  // 对应 onShow
  componentDidShow() {}

  // 对应 onHide
  componentDidHide() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children;
  }
}

export default App;
