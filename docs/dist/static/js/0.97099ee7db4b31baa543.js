webpackJsonp([0],{"26dS":function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a="/FoolUi/dist/static/",l={name:"",data:function(){return{carousel:[a+"images/timg0.jpeg",a+"images/timg1.jpeg",a+"images/timg2.jpeg",a+"images/timg3.jpeg",a+"images/timg4.jpeg",a+"images/timg5.jpeg"],msg:"Fool-ui - 基于vue2.x，可复用UI组件",closeFlag:!0,radio:null,checkbox:[],inputval:"",slider:20,stepList:["步骤一","步骤二","步骤三","步骤四","步骤五"],step:2,loading:!0,autoplay:!1,demo2:"美食",list2:["精选","美食","电影","酒店","外卖"]}},methods:{promptloading:function(){this.$Prompt({isShowCancelBtn:!0,isShowConfimrBtn:!0,beforeClose:function(t,o,s){o.confirmBtnText="执行中...",o.confirmButtonLoading=!0,setTimeout(function(){o.confirmBtnText="确认",o.confirmButtonLoading=!1,s()},1e3)}}).then(function(t){console.log(t)},function(t){console.log(t)})},prompt:function(){this.$Prompt({isShowCancelBtn:!0,isShowConfimrBtn:!0}).then(function(t){console.log(t)},function(t){console.log(t)})},cancelmessagebox:function(){this.$Alert("标题名称","这是一段内容！",{isShowCancelBtn:!0,isShowConfimrBtn:!0}).then(function(t){console.log(t)},function(t){console.log(t)})},messagebox:function(){this.$Alert().then(function(t){console.log(t)},function(t){console.log(t)})},carouselChange:function(t){console.log(t)},closeAutoplay:function(){this.autoplay=!this.autoplay},next:function(){this.loading?this.loading=!1:(this.loading=!0,this.step>=4?this.step=0:this.step++)},btnClick:function(){this.$toast.text({content:"风波之"})},valueFun:function(t,o,s){console.log(t,o,s)},close:function(){this.closeFlag=!1},radioChange:function(){console.log(this.checkbox)},input:function(t){console.log(this.checkbox)},gridClick:function(){alert(1)},xminput:function(){console.log(this.inputval)}}},n={render:function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"wrap"},[s("h3",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("基础组件")]),t._v(" "),s("h3",[t._v("按钮")]),t._v(" "),s("f-button",[t._v("普通")]),t._v(" "),s("f-button",{attrs:{type:"primary",icon:"fool__icon--refresh"},on:{click:t.btnClick}},[t._v("主要")]),t._v(" "),s("f-button",{attrs:{type:"error",icon:"fool__icon--likefill"}}),t._v(" "),s("f-button",{attrs:{type:"warning",disabled:""}},[t._v("禁止")]),t._v(" "),s("f-button",{attrs:{plain:""}},[t._v("简约")]),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("f-button",{attrs:{loading:"","no-radius":"",type:"primary"}},[t._v("loading状态")]),t._v(" "),s("f-button",{attrs:{"no-radius":"","bg-color":"#f56c6c",color:"#fff","border-color":"#f56c6c"}},[t._v("自定义颜色")]),t._v(" "),s("f-button",{attrs:{"no-radius":""}},[t._v("无圆角")]),t._v(" "),s("f-button",{attrs:{"no-radius":"",type:"text",icon:"fool__icon--checked"}},[t._v("文字")]),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("f-button",{attrs:{circle:"",type:"primary",icon:"fool__icon--refresh"},on:{click:t.btnClick}}),t._v(" "),s("f-button",{attrs:{circle:"",type:"success",icon:"fool__icon--checked"}}),t._v(" "),s("f-button",{attrs:{circle:"",icon:"fool__icon--search"},on:{click:t.btnClick}}),t._v(" "),s("f-button",{attrs:{circle:"",type:"error",icon:"fool__icon--delete"}}),t._v(" "),s("f-button",{attrs:{circle:"",type:"warning",icon:"fool__icon--lock"}}),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("f-button",{attrs:{round:"",long:""}},[t._v("100%宽圆角 ")]),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("f-button-group",{staticClass:"btn__group"},[s("f-button",{attrs:{type:"warning"}},[t._v("警告")]),t._v(" "),s("f-button",{attrs:{type:"primary",icon:"fool__icon--checked"},on:{click:t.btnClick}},[t._v("主要")]),t._v(" "),s("f-button",{attrs:{type:"success",icon:"fool__icon--loading"}},[t._v("成功")])],1),t._v(" "),s("h3",[t._v("单选按钮")]),t._v(" "),s("f-radio",{attrs:{value:1},model:{value:t.radio,callback:function(o){t.radio=o},expression:"radio"}},[t._v("备选项1")]),t._v(" "),s("f-radio",{attrs:{value:2},model:{value:t.radio,callback:function(o){t.radio=o},expression:"radio"}},[t._v("备选项2")]),t._v(" "),s("f-radio",{attrs:{disabled:"",value:3},model:{value:t.radio,callback:function(o){t.radio=o},expression:"radio"}},[t._v("备选项2")]),t._v(" "),s("f-radio",{attrs:{checked:"",value:4},model:{value:t.radio,callback:function(o){t.radio=o},expression:"radio"}},[t._v("备选项2")]),t._v(" "),s("h3",[t._v("复选按钮")]),t._v(" "),s("f-checkbox",{attrs:{checked:"",disabled:"",value:"1",name:"1"},on:{change:t.input},model:{value:t.checkbox,callback:function(o){t.checkbox=o},expression:"checkbox"}},[t._v("巴士")]),t._v(" "),s("f-checkbox",{attrs:{value:"2",name:"1"},on:{change:t.input},model:{value:t.checkbox,callback:function(o){t.checkbox=o},expression:"checkbox"}},[t._v("火车")]),t._v(" "),s("f-checkbox",{attrs:{value:"3",name:"1",disabled:""},on:{change:t.input},model:{value:t.checkbox,callback:function(o){t.checkbox=o},expression:"checkbox"}},[t._v("飞机--disabled")]),t._v(" "),s("f-checkbox",{attrs:{value:"4",name:"1"},on:{change:t.input},model:{value:t.checkbox,callback:function(o){t.checkbox=o},expression:"checkbox"}},[t._v("单车")]),t._v(" "),s("h3",[t._v("标签")]),t._v(" "),s("f-tag",[t._v("default")]),t._v(" "),t.closeFlag?s("f-tag",{attrs:{closable:""},on:{close:t.close}},[t._v("close")]):t._e(),t._v(" "),s("f-tag",{attrs:{type:"primary"}},[t._v("primary")]),t._v(" "),s("f-tag",{attrs:{type:"success"}},[t._v("success")]),t._v(" "),s("f-tag",{attrs:{type:"warning"}},[t._v("warning")]),t._v(" "),s("f-tag",{attrs:{type:"error"}},[t._v("error")]),t._v(" "),s("f-tag",{attrs:{round:"","bg-color":"#fc0",color:"#e0439a","border-color":"#fc0"}},[t._v("自定义颜色")]),t._v(" "),s("h3",[t._v("文本框")]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"col-md-6"},[s("f-input",{attrs:{type:"email",placeholder:"请输入内容"},on:{input:t.xminput},model:{value:t.inputval,callback:function(o){t.inputval=o},expression:"inputval"}}),t._v(" "),s("f-input",{attrs:{type:"tel",placeholder:"请输入内容"},on:{input:t.xminput},model:{value:t.inputval,callback:function(o){t.inputval=o},expression:"inputval"}}),t._v(" "),s("f-input",{attrs:{type:"datetime-local",placeholder:"请输入内容"},on:{input:t.xminput},model:{value:t.inputval,callback:function(o){t.inputval=o},expression:"inputval"}}),t._v(" "),s("f-input",{attrs:{type:"date",placeholder:"请输入内容"},on:{input:t.xminput},model:{value:t.inputval,callback:function(o){t.inputval=o},expression:"inputval"}}),t._v(" "),s("f-input",{attrs:{type:"time",placeholder:"请输入内容"},on:{input:t.xminput},model:{value:t.inputval,callback:function(o){t.inputval=o},expression:"inputval"}})],1),t._v(" "),s("div",{staticClass:"col-md-6"},[s("f-input",{attrs:{placeholder:"请输入内容"},on:{input:t.xminput},model:{value:t.inputval,callback:function(o){t.inputval=o},expression:"inputval"}}),t._v(" "),s("f-input",{attrs:{disabled:"",placeholder:"请输入内容"},on:{input:t.xminput},model:{value:t.inputval,callback:function(o){t.inputval=o},expression:"inputval"}}),t._v(" "),s("f-input",{attrs:{placeholder:"请输入内容"},on:{input:t.xminput},model:{value:t.inputval,callback:function(o){t.inputval=o},expression:"inputval"}},[s("span",{staticClass:"fool__icon--search",attrs:{slot:"icon"},slot:"icon"})]),t._v(" "),s("f-input",{attrs:{type:"search",placeholder:"请输入内容"},on:{input:t.xminput},model:{value:t.inputval,callback:function(o){t.inputval=o},expression:"inputval"}}),t._v(" "),s("f-input",{attrs:{type:"password",placeholder:"请输入内容"},on:{input:t.xminput},model:{value:t.inputval,callback:function(o){t.inputval=o},expression:"inputval"}}),t._v(" "),s("f-input",{attrs:{type:"number",placeholder:"请输入内容"},on:{input:t.xminput},model:{value:t.inputval,callback:function(o){t.inputval=o},expression:"inputval"}})],1)])]),t._v(" "),s("h4",[t._v("slider滑块")]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("f-slider",{attrs:{change:t.valueFun,min:20,max:80}})],1),t._v(" "),s("div",{staticClass:"col-md-6"},[s("f-slider",{attrs:{change:t.valueFun,range:!1},model:{value:t.slider,callback:function(o){t.slider=o},expression:"slider"}})],1)]),t._v(" "),s("h4",[t._v("步骤条")]),t._v(" "),s("f-step",{attrs:{loading:t.loading,step:t.step,"step-list":t.stepList}}),t._v(" "),s("div",{staticClass:"row"},[s("f-button",{attrs:{type:"primary",icon:"fool__icon--refresh"},on:{click:t.next}},[t._v("下一步")])],1),t._v(" "),s("h4",[t._v("标记")]),t._v(" "),s("f-badge",{attrs:{value:5}},[s("f-button",{attrs:{plain:""}},[t._v("评论")])],1),t._v(" "),s("f-badge",{attrs:{value:10}},[s("f-button",{attrs:{plain:""}},[t._v("回复")])],1),t._v(" "),s("f-badge",{attrs:{value:100,max:99}},[s("f-button",{attrs:{plain:""}},[t._v("点赞")])],1),t._v(" "),s("f-badge",{attrs:{isDot:""}},[s("f-button",{attrs:{plain:""}},[t._v("关注")])],1),t._v(" "),s("f-badge",{attrs:{bgColor:"#fc0",color:"#e0439a",value:"自定义"}},[s("f-button",{attrs:{plain:""}},[t._v("自定义颜色")])],1),t._v(" "),s("f-badge",{attrs:{value:"new"}}),t._v(" "),s("f-badge",{attrs:{value:"hot"}}),t._v(" "),s("h4",[t._v("走马灯")]),t._v(" "),s("div",[s("f-carousel",{attrs:{height:230,autoplay:t.autoplay,initialIndex:0},on:{change:t.carouselChange}},t._l(t.carousel,function(t,o){return s("f-carousel-item",{key:o},[s("a",{attrs:{href:"#"}},[s("img",{attrs:{src:t,alt:""}})])])})),t._v(" "),s("br"),t._v(" "),s("f-button",{attrs:{type:"primary"},on:{click:t.closeAutoplay}},[t._v("切换自动播放")])],1),t._v(" "),s("h4",[t._v("弹框")]),t._v(" "),s("f-button",{on:{click:t.messagebox}},[t._v("消息提示")]),t._v(" "),s("f-button",{attrs:{type:"primary"},on:{click:t.cancelmessagebox}},[t._v("确认消息")]),t._v(" "),s("f-button",{attrs:{type:"success"},on:{click:t.prompt}},[t._v("提交内容")]),t._v(" "),s("f-button",{attrs:{type:"warning"},on:{click:t.promptloading}},[t._v("loading状态")]),t._v(" "),s("h4",[t._v("栅格和图标")]),t._v(" "),s("f-grids",{attrs:{row:"6"}},[s("f-grid",{attrs:{href:"https://github.com/jolyPan/FoolUi"}},[s("span",{staticClass:"fool__icon--phone",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("phone")])]),t._v(" "),s("f-grid",{on:{click:t.gridClick}},[s("span",{staticClass:"fool__icon--lbs",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("lbs")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--qrcode",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("qrcode")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--date",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("date")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--nochecked",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("nochecked")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--checked",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("checked")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--radio",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("radio")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--search",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("search")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--close-outline",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("close-outline")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--close",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("close")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--homefill",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("homefill")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--home",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("home")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--myfill",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("myfill")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--my",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("my")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--userfill",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("userfill")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--user",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("user")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--contact",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("contact")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--link",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("link")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--unlock",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("unlock")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--lock",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("lock")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--likefill",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("likefill")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--like",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("like")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--reduce-outline",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("reduce-outline")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--reduce",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("reduce")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--add-outline",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("add-outline")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--add",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("add")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--edit",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("edit")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--delete",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("delete")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--photodel",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("photodel")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--photo",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("photo")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--msgfill",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("msgfill")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--msg",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("msg")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--menumore",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("menumore")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--menu",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("menu")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--tips",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("tips")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--refresh",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("refresh")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--share",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("share")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--totop",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("totop")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--attachment",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("attachment")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--emoji",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("emoji")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--scan",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("scan")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--mall",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("mall")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--filter",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("filter")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--sort",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("sort")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--loading",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("loading")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--left",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("left")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--right",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("right")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--up",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("up")])]),t._v(" "),s("f-grid",[s("span",{staticClass:"fool__icon--down",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("down")])])],1)],1)},staticRenderFns:[]};var i=s("VU/8")(l,n,!1,function(t){s("Txh+")},"data-v-dd890156",null);o.default=i.exports},"Txh+":function(t,o){}});
//# sourceMappingURL=0.97099ee7db4b31baa543.js.map