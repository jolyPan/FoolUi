import "./styles/index.scss";
import Button from "./components/button/index";
import loading from "./components/loading/index";
import Toast from "./components/toast/index";
import Tag from "./components/tag/index";
import Radio from "./components/radio/index";
import Checkbox from "./components/checkbox/index";
import Input from "./components/input/index";
import Grid from "./components/grid/index";
import Grids from "./components/grids/index";
import Slider from "./components/slider/index";
import Step from "./components/step/index";
import Carousel from "./components/carousel/index";
import Badge from "./components/badge/index";
import Tab from "./components/tab/index";
import MessageBox from "./components/messagebox/index";
const components = {
  Carousel,
  Tab,
  TabItem: Tab.TabItem,
  CarouselItem: Carousel.CarouselItem,
  Badge,
  Button,
  Tag,
  ButtonGroup: Button.group,
  loading,
  Radio,
  Checkbox,
  Input,
  Grid,
  Grids,
  Slider,
  Step,
};
const install = function(Vue) {
  //   components.map(component => Vue.component(component.name, component))
  Object.keys(components).forEach(key => {
    if (components[key].name) {
      Vue.component(components[key].name, components[key]);
    } else {
      // console.log("name为空");
    }
  });
  Vue.prototype.$Toast = Toast;
  Vue.prototype.$Alert = MessageBox.alert
  Vue.prototype.$Prompt = MessageBox.prompt
  
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

const API = {
  install,
  ...components
};

export default API;
