import Vue from "vue";
import msgboxVue from "./messagebox.vue";
let currentMsg;
function open() {
  const MessageBoxInstance = Vue.extend(
    msgboxVue
    // 该对象就相当于 单文件组件中 export 导出的对象
    // 这就是为什么说 所有的Vue组件都是被扩展的Vue实例
  );
  // 创建扩展实例
  currentMsg = new MessageBoxInstance();
  // 会替换掉 HTML 文档中 id 为 app 的标签
  // new MessageBoxInstance({el: '#app'})
  // 但是这里不建议这么做，因为这样会与实例挂载点冲突
  // 这里仅仅是为了说明扩展实例与 根实例的相似之处

  // 挂载到虚拟DOM中
  // 不传递参数，若传递参数会挂载到指定的地方
  let msgBoxEl = currentMsg.$mount();
  // 通过原生语法将 扩展实例添加到HTML文档中
  document.body.appendChild(msgBoxEl.$el);
  // Vue根实例也可以通过该方式挂载到HTML中。
}
export default {
  alert(content, title, options) {
    if (!currentMsg) {
      open();
    }
    if (typeof content === "string") {
      currentMsg.content = content;
    }
    if (typeof title === "string") {
      currentMsg.title = title;
    }
    if (typeof options === "object") {
      Object.assign(currentMsg, options);
    }
    return currentMsg
      .showMsgBox()
      .then(val => {
        currentMsg = null;
        return Promise.resolve(val);
      })
      .catch(err => {
        currentMsg = null;
        return Promise.reject(err);
      });
  },
  prompt(options){
    if (!currentMsg) {
      open();
    }
    if (typeof options === "object") {
      Object.assign(currentMsg, options);
    }
    return currentMsg
      .showMsgBox()
      .then(val => {
        currentMsg = null;
        return Promise.resolve(val);
      })
      .catch(err => {
        currentMsg = null;
        return Promise.reject(err);
      });
  }
};
