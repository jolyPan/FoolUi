webpackJsonp([0],{"26dS":function(t,s,o){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a="/FoolUi/dist/static/",n={name:"",data:function(){return{carousel:[a+"images/timg0.jpeg",a+"images/timg1.jpeg",a+"images/timg2.jpeg",a+"images/timg3.jpeg",a+"images/timg4.jpeg",a+"images/timg5.jpeg"],msg:"Fool-ui - 基于vue2.x，可复用UI组件",closeFlag:!0,radio:null,checkbox:[],inputval:"",slider:20,stepList:["步骤一","步骤二","步骤三","步骤四","步骤五"],step:2,loading:!0,autoplay:!1,demo2:"美食",list2:["精选","美食","电影","酒店","外卖"]}},methods:{carouselChange:function(t){console.log(t)},closeAutoplay:function(){this.autoplay=!this.autoplay},next:function(){this.loading?this.loading=!1:(this.loading=!0,this.step>=4?this.step=0:this.step++)},btnClick:function(){this.$toast.text({content:"风波之"})},valueFun:function(t,s,o){console.log(t,s,o)},close:function(){this.closeFlag=!1},radioChange:function(){console.log(this.checkbox)},input:function(t){console.log(this.checkbox)},gridClick:function(){alert(1)},xminput:function(){console.log(this.inputval)}}},i={render:function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"wrap"},[o("h3",[t._v(t._s(t.msg))]),t._v(" "),o("h2",[t._v("基础组件")]),t._v(" "),o("h3",[t._v("按钮")]),t._v(" "),o("xm-button",[t._v("普通")]),t._v(" "),o("xm-button",{attrs:{type:"primary",icon:"xm__icon--refresh"},on:{click:t.btnClick}},[t._v("主要")]),t._v(" "),o("xm-button",{attrs:{type:"error",icon:"xm__icon--likefill"}}),t._v(" "),o("xm-button",{attrs:{type:"warning",disabled:""}},[t._v("禁止")]),t._v(" "),o("xm-button",{attrs:{plain:""}},[t._v("简约")]),t._v(" "),o("br"),t._v(" "),o("br"),t._v(" "),o("xm-button",{attrs:{loading:"","no-radius":"",type:"primary"}},[t._v("loading状态")]),t._v(" "),o("xm-button",{attrs:{"no-radius":"","bg-color":"#f56c6c",color:"#fff","border-color":"#f56c6c"}},[t._v("自定义颜色")]),t._v(" "),o("xm-button",{attrs:{"no-radius":""}},[t._v("无圆角")]),t._v(" "),o("xm-button",{attrs:{"no-radius":"",type:"text",icon:"xm__icon--checked"}},[t._v("文字")]),t._v(" "),o("br"),t._v(" "),o("br"),t._v(" "),o("xm-button",{attrs:{circle:"",type:"primary",icon:"xm__icon--refresh"},on:{click:t.btnClick}}),t._v(" "),o("xm-button",{attrs:{circle:"",type:"success",icon:"xm__icon--checked"}}),t._v(" "),o("xm-button",{attrs:{circle:"",icon:"xm__icon--search"},on:{click:t.btnClick}}),t._v(" "),o("xm-button",{attrs:{circle:"",type:"error",icon:"xm__icon--delete"}}),t._v(" "),o("xm-button",{attrs:{circle:"",type:"warning",icon:"xm__icon--lock"}}),t._v(" "),o("br"),t._v(" "),o("br"),t._v(" "),o("xm-button",{attrs:{round:"",long:""}},[t._v("100%宽圆角")]),t._v(" "),o("br"),t._v(" "),o("br"),t._v(" "),o("xm-button-group",{staticClass:"btn__group"},[o("xm-button",{attrs:{type:"warning"}},[t._v("警告")]),t._v(" "),o("xm-button",{attrs:{type:"primary",icon:"xm__icon--checked"},on:{click:t.btnClick}},[t._v("主要")]),t._v(" "),o("xm-button",{attrs:{type:"success",icon:"xm__icon--loading"}},[t._v("成功")])],1),t._v(" "),o("h3",[t._v("单选按钮")]),t._v(" "),o("xm-radio",{attrs:{value:1},model:{value:t.radio,callback:function(s){t.radio=s},expression:"radio"}},[t._v("备选项1")]),t._v(" "),o("xm-radio",{attrs:{value:2},model:{value:t.radio,callback:function(s){t.radio=s},expression:"radio"}},[t._v("备选项2")]),t._v(" "),o("xm-radio",{attrs:{disabled:"",value:3},model:{value:t.radio,callback:function(s){t.radio=s},expression:"radio"}},[t._v("备选项2")]),t._v(" "),o("xm-radio",{attrs:{checked:"",value:4},model:{value:t.radio,callback:function(s){t.radio=s},expression:"radio"}},[t._v("备选项2")]),t._v(" "),o("h3",[t._v("复选按钮")]),t._v(" "),o("xm-checkbox",{attrs:{checked:"",disabled:"",value:"1",name:"1"},on:{change:t.input},model:{value:t.checkbox,callback:function(s){t.checkbox=s},expression:"checkbox"}},[t._v("巴士")]),t._v(" "),o("xm-checkbox",{attrs:{value:"2",name:"1"},on:{change:t.input},model:{value:t.checkbox,callback:function(s){t.checkbox=s},expression:"checkbox"}},[t._v("火车")]),t._v(" "),o("xm-checkbox",{attrs:{value:"3",name:"1",disabled:""},on:{change:t.input},model:{value:t.checkbox,callback:function(s){t.checkbox=s},expression:"checkbox"}},[t._v("飞机--disabled")]),t._v(" "),o("xm-checkbox",{attrs:{value:"4",name:"1"},on:{change:t.input},model:{value:t.checkbox,callback:function(s){t.checkbox=s},expression:"checkbox"}},[t._v("单车")]),t._v(" "),o("h3",[t._v("标签")]),t._v(" "),o("xm-tag",[t._v("default")]),t._v(" "),t.closeFlag?o("xm-tag",{attrs:{closable:""},on:{close:t.close}},[t._v("close")]):t._e(),t._v(" "),o("xm-tag",{attrs:{type:"primary"}},[t._v("primary")]),t._v(" "),o("xm-tag",{attrs:{type:"success"}},[t._v("success")]),t._v(" "),o("xm-tag",{attrs:{type:"warning"}},[t._v("warning")]),t._v(" "),o("xm-tag",{attrs:{type:"error"}},[t._v("error")]),t._v(" "),o("xm-tag",{attrs:{round:"","bg-color":"#fc0",color:"#e0439a","border-color":"#fc0"}},[t._v("自定义颜色")]),t._v(" "),o("h3",[t._v("文本框")]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-12"},[o("div",{staticClass:"col-md-6"},[o("xm-input",{attrs:{type:"email",placeholder:"请输入内容"},on:{input:t.xminput},model:{value:t.inputval,callback:function(s){t.inputval=s},expression:"inputval"}}),t._v(" "),o("xm-input",{attrs:{type:"tel",placeholder:"请输入内容"},on:{input:t.xminput},model:{value:t.inputval,callback:function(s){t.inputval=s},expression:"inputval"}}),t._v(" "),o("xm-input",{attrs:{type:"datetime-local",placeholder:"请输入内容"},on:{input:t.xminput},model:{value:t.inputval,callback:function(s){t.inputval=s},expression:"inputval"}}),t._v(" "),o("xm-input",{attrs:{type:"date",placeholder:"请输入内容"},on:{input:t.xminput},model:{value:t.inputval,callback:function(s){t.inputval=s},expression:"inputval"}}),t._v(" "),o("xm-input",{attrs:{type:"time",placeholder:"请输入内容"},on:{input:t.xminput},model:{value:t.inputval,callback:function(s){t.inputval=s},expression:"inputval"}})],1),t._v(" "),o("div",{staticClass:"col-md-6"},[o("xm-input",{attrs:{placeholder:"请输入内容"},on:{input:t.xminput},model:{value:t.inputval,callback:function(s){t.inputval=s},expression:"inputval"}}),t._v(" "),o("xm-input",{attrs:{disabled:"",placeholder:"请输入内容"},on:{input:t.xminput},model:{value:t.inputval,callback:function(s){t.inputval=s},expression:"inputval"}}),t._v(" "),o("xm-input",{attrs:{placeholder:"请输入内容"},on:{input:t.xminput},model:{value:t.inputval,callback:function(s){t.inputval=s},expression:"inputval"}},[o("span",{staticClass:"xm__icon--search",attrs:{slot:"icon"},slot:"icon"})]),t._v(" "),o("xm-input",{attrs:{type:"search",placeholder:"请输入内容"},on:{input:t.xminput},model:{value:t.inputval,callback:function(s){t.inputval=s},expression:"inputval"}}),t._v(" "),o("xm-input",{attrs:{type:"password",placeholder:"请输入内容"},on:{input:t.xminput},model:{value:t.inputval,callback:function(s){t.inputval=s},expression:"inputval"}}),t._v(" "),o("xm-input",{attrs:{type:"number",placeholder:"请输入内容"},on:{input:t.xminput},model:{value:t.inputval,callback:function(s){t.inputval=s},expression:"inputval"}})],1)])]),t._v(" "),o("h4",[t._v("slider滑块")]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("xm-slider",{attrs:{change:t.valueFun,min:20,max:80}})],1),t._v(" "),o("div",{staticClass:"col-md-6"},[o("xm-slider",{attrs:{change:t.valueFun,range:!1},model:{value:t.slider,callback:function(s){t.slider=s},expression:"slider"}})],1)]),t._v(" "),o("h4",[t._v("步骤条")]),t._v(" "),o("xm-step",{attrs:{loading:t.loading,step:t.step,"step-list":t.stepList}}),t._v(" "),o("div",{staticClass:"row"},[o("xm-button",{attrs:{type:"primary",icon:"xm__icon--refresh"},on:{click:t.next}},[t._v("下一步")])],1),t._v(" "),o("h4",[t._v("标记")]),t._v(" "),o("xm-badge",{attrs:{value:5}},[o("xm-button",{attrs:{plain:""}},[t._v("评论")])],1),t._v(" "),o("xm-badge",{attrs:{value:10}},[o("xm-button",{attrs:{plain:""}},[t._v("回复")])],1),t._v(" "),o("xm-badge",{attrs:{value:100,max:99}},[o("xm-button",{attrs:{plain:""}},[t._v("点赞")])],1),t._v(" "),o("xm-badge",{attrs:{isDot:""}},[o("xm-button",{attrs:{plain:""}},[t._v("关注")])],1),t._v(" "),o("xm-badge",{attrs:{bgColor:"#fc0",color:"#e0439a",value:"自定义"}},[o("xm-button",{attrs:{plain:""}},[t._v("自定义颜色")])],1),t._v(" "),o("xm-badge",{staticStyle:{"margin-left":"2rem"},attrs:{value:"new"}}),t._v(" "),o("xm-badge",{staticStyle:{"margin-left":"2rem"},attrs:{value:"hot"}}),t._v(" "),o("h4",[t._v("走马灯")]),t._v(" "),o("div",[o("xm-carousel",{attrs:{height:230,autoplay:t.autoplay,initialIndex:0},on:{change:t.carouselChange}},t._l(t.carousel,function(t,s){return o("xm-carousel-item",{key:s},[o("a",{attrs:{href:"#"}},[o("img",{attrs:{src:t,alt:""}})])])})),t._v(" "),o("br"),t._v(" "),o("xm-button",{attrs:{type:"primary"},on:{click:t.closeAutoplay}},[t._v("切换自动播放")])],1),t._v(" "),o("h4",[t._v("网格和图标")]),t._v(" "),o("xm-grids",{attrs:{row:"6"}},[o("xm-grid",{attrs:{href:"https://github.com/monw3c/foolui"}},[o("span",{staticClass:"xm__icon--phone",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("phone")])]),t._v(" "),o("xm-grid",{on:{click:t.gridClick}},[o("span",{staticClass:"xm__icon--lbs",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("lbs")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--qrcode",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("qrcode")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--date",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("date")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--nochecked",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("nochecked")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--checked",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("checked")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--radio",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("radio")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--search",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("search")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--close-outline",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("close-outline")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--close",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("close")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--homefill",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("homefill")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--home",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("home")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--myfill",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("myfill")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--my",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("my")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--userfill",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("userfill")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--user",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("user")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--contact",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("contact")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--link",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("link")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--unlock",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("unlock")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--lock",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("lock")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--likefill",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("likefill")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--like",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("like")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--reduce-outline",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("reduce-outline")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--reduce",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("reduce")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--add-outline",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("add-outline")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--add",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("add")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--edit",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("edit")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--delete",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("delete")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--photodel",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("photodel")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--photo",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("photo")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--msgfill",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("msgfill")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--msg",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("msg")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--menumore",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("menumore")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--menu",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("menu")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--tips",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("tips")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--refresh",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("refresh")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--share",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("share")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--totop",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("totop")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--attachment",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("attachment")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--emoji",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("emoji")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--scan",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("scan")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--mall",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("mall")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--filter",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("filter")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--sort",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("sort")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--loading",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("loading")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--left",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("left")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--right",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("right")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--up",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("up")])]),t._v(" "),o("xm-grid",[o("span",{staticClass:"xm__icon--down",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("down")])])],1)],1)},staticRenderFns:[]};var l=o("VU/8")(n,i,!1,function(t){o("zSZj")},"data-v-809781ba",null);s.default=l.exports},zSZj:function(t,s){}});
//# sourceMappingURL=0.9765c696b4cf3ed57940.js.map