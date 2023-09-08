import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { hopeTheme } from "vuepress-theme-hope";
import { readingTimePlugin } from "vuepress-plugin-reading-time2";
import { copyrightPlugin } from "vuepress-plugin-copyright2";
import { autoCatalogPlugin } from "vuepress-plugin-auto-catalog";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "轻虹空雨的小圈",
  description: "热爱依然，生活仍然",

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
    }),
    readingTimePlugin({
      // 你的选项
    }),
    autoCatalogPlugin({
      level: 3
      
      //插件选项
    }),
  ],

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
