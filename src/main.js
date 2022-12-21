import { createApp } from 'vue'
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";
// import TDesign from "tdesign-mobile-vue";
import {
  Button,
  Grid,
  GridItem,
  Lazyload,
  Loading,
  Icon,
  Dialog,
  Swipe,
  SwipeItem,
  ImagePreview,
  Tab,
  Tabs,
} from "vant";
// 2. 引入组件样式
import "vant/lib/index.css";
import ViewUIPlus from "view-ui-plus";
import "view-ui-plus/dist/styles/viewuiplus.css";
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App)
  .use(store)
  .use(router)
  .use(ViewUIPlus)
  .use(Button)
  .use(Grid)
  .use(GridItem)
  .use(Loading)
  .use(Icon)
  .use(Dialog)
  .use(SwipeItem)
  .use(Swipe)
  .use(ImagePreview)
  .use(Tab)
  .use(Tabs)
  // .use(showImagePreview)
  // .use(TDesign)
  .use(Lazyload, { lazyComponent: true })
  .mount("#app");
