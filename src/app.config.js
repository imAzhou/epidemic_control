/*
 * @Author: Azhou
 * @Date: 2022-04-14 01:06:51
 * @LastEditors: Azhou
 * @LastEditTime: 2022-04-23 21:31:05
 */
// eslint-disable-next-line no-undef
export default defineAppConfig({
  pages: [
    "pages/Home/index",
    "pages/Home/pages/CoidUpload/index",
    "pages/My/index",
    "pages/Group/CreateGroup/index",
    "pages/Group/JoinGroup/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "防控toolkits",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    backgroundColor: "#FFF",
    color: "#444444",
    selectedColor: "#1296db",
    list: [
      {
        pagePath: "pages/Home/index",
        text: "首页",
        iconPath: "./assets/index.png",
        selectedIconPath: "./assets/index_activate.png",
      },
      {
        pagePath: "pages/My/index",
        text: "我的",
        iconPath: "./assets/my.png",
        selectedIconPath: "./assets/my_activate.png",
      },
    ],
  },
  permission: {
    "scope.userLocation": {
      desc: "授权获取您所在位置",
    },
  },
});
