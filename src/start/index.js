import "./styles/index.scss";
import Button from "./components/button/index";
import loading from "./components/loading/index";
import Toast from "./components/toast/index";
import Tag from "./components/tag/index";
import Radio from "./components/radio/index";
import Checkbox from "./components/checkbox/index";
import Input from "./components/input/index";
import Grid from "./components/grid/index";

const components = {
  Button,
  Tag,
  ButtonGroup: Button.group,
  loading,
  Radio,
  Checkbox,
  Input,
  Grid
};
const install = function(Vue) {
  if (install.installed) return;
  //   components.map(component => Vue.component(component.name, component))
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key]);
  });
  Vue.prototype.$toast = Toast;
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

const API = {
  install,
  ...components
};

export default API;
