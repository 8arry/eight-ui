import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { AntdTheme } from "vite-plugin-vitepress-demo/theme";
import Antd from "ant-design-vue";
import "eight-ui/dist/style.css";
import "ant-design-vue/dist/antd.css";
import "./index.css";
import "./style.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("Demo", AntdTheme).use(Antd);
  },
} as Theme;
