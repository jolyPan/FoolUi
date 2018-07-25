<template>
  <div class="wrap">
    <h3>{{ msg }}</h3>
    <h2>基础组件</h2>
    <h3>按钮</h3>
    <!-- <h4>圆角按钮</h4> -->
    <f-button>普通</f-button>
    <f-button type="primary" @click="btnClick" icon="fool__icon--refresh">主要</f-button>
    <f-button type="error" icon="fool__icon--likefill"></f-button>
    <f-button type="warning" disabled>禁止</f-button>
    <f-button plain>简约</f-button>
    <br/>
    <br/>
    <f-button loading no-radius type="primary">loading状态</f-button>
    <f-button no-radius bg-color="#f56c6c" color="#fff" border-color="#f56c6c">自定义颜色</f-button>
    <f-button no-radius>无圆角</f-button>
    <f-button no-radius type="text" icon="fool__icon--checked">文字</f-button>
    <br/>
    <br/>
    <f-button circle type="primary" @click="btnClick" icon="fool__icon--refresh"></f-button>
    <f-button circle type="success" icon="fool__icon--checked"></f-button>
    <f-button circle @click="btnClick" icon="fool__icon--search"></f-button>
    <f-button circle type="error" icon="fool__icon--delete"></f-button>
    <f-button circle type="warning" icon="fool__icon--lock"></f-button>
    <br/>
    <br/>
    <f-button round long>100%宽圆角 </f-button>
    <br/>
    <br/>
    <f-button-group class="btn__group">
      <f-button type="warning">警告</f-button>
      <f-button type="primary" @click="btnClick" icon="fool__icon--checked">主要</f-button>
      <f-button type="success" icon="fool__icon--loading">成功</f-button>
    </f-button-group>
    <h3>单选按钮</h3>
    <f-radio v-model="radio" :value="1">备选项1</f-radio>
    <f-radio v-model="radio" :value="2">备选项2</f-radio>
    <f-radio v-model="radio" disabled :value="3">备选项2</f-radio>
    <f-radio v-model="radio" checked :value="4">备选项2</f-radio>
    <h3>复选按钮</h3>
    <f-checkbox v-model="checkbox" checked disabled value="1" name="1" @change="input">巴士</f-checkbox>
    <f-checkbox v-model="checkbox" value="2" name="1" @change="input">火车</f-checkbox>
    <f-checkbox v-model="checkbox" value="3" name="1" @change="input" disabled>飞机--disabled</f-checkbox>
    <f-checkbox v-model="checkbox" value="4" name="1" @change="input">单车</f-checkbox>
    <h3>标签</h3>
    <f-tag>default</f-tag>
    <f-tag v-if="closeFlag" closable @close="close">close</f-tag>
    <f-tag type="primary">primary</f-tag>
    <f-tag type="success">success</f-tag>
    <f-tag type="warning">warning</f-tag>
    <f-tag type="error">error</f-tag>
    <f-tag round bg-color="#fc0" color="#e0439a" border-color="#fc0">自定义颜色</f-tag>
    <h3>文本框</h3>
    <div class="row">
      <div class="col-md-12">
        <div class="col-md-6">
          <f-input type="email" v-model="inputval" @input="xminput" placeholder="请输入内容"></f-input>
          <f-input type="tel" v-model="inputval" @input="xminput" placeholder="请输入内容"></f-input>
          <f-input type="datetime-local" v-model="inputval" @input="xminput" placeholder="请输入内容"></f-input>
          <f-input type="date" v-model="inputval" @input="xminput" placeholder="请输入内容"></f-input>
          <f-input type="time" v-model="inputval" @input="xminput" placeholder="请输入内容"></f-input>
        </div>
        <div class="col-md-6">
          <f-input v-model="inputval" @input="xminput" placeholder="请输入内容"></f-input>
          <f-input v-model="inputval" @input="xminput" disabled placeholder="请输入内容"></f-input>
          <f-input v-model="inputval" @input="xminput" placeholder="请输入内容">
            <span slot="icon" class="fool__icon--search"></span>
          </f-input>
          <f-input type="search" v-model="inputval" @input="xminput" placeholder="请输入内容"></f-input>
          <f-input type="password" v-model="inputval" @input="xminput" placeholder="请输入内容"></f-input>
          <f-input type="number" v-model="inputval" @input="xminput" placeholder="请输入内容"></f-input>
        </div>
      </div>
    </div>
    <h4>slider滑块</h4>
    <div class="row">
      <div class="col-md-6">
        <f-slider :change="valueFun" :min="20" :max="80"></f-slider>
      </div>
      <div class="col-md-6">
        <f-slider :change="valueFun" v-model="slider" :range="false"></f-slider>
      </div>
    </div>
    <h4>步骤条</h4>
    <f-step :loading="loading" :step="step" :step-list="stepList"></f-step>
    <div class="row">
      <f-button type="primary" @click="next" icon="fool__icon--refresh">下一步</f-button>
    </div>
    <h4>标记</h4>
    <f-badge :value="5">
      <f-button plain>评论</f-button>
    </f-badge>
    <f-badge :value="10">
      <f-button plain>回复</f-button>
    </f-badge>
    <f-badge :value="100" :max="99">
      <f-button plain>点赞</f-button>
    </f-badge>
    <f-badge isDot>
      <f-button plain>关注</f-button>
    </f-badge>
    <f-badge bgColor="#fc0" color="#e0439a" value="自定义">
      <f-button plain>自定义颜色</f-button>
    </f-badge>
    <f-badge value="new">
    </f-badge>
    <f-badge value="hot">
    </f-badge>
    <h4>走马灯</h4>
    <div>
      <f-carousel :height="230" :autoplay="autoplay" :initialIndex="0" @change="carouselChange">
          <f-carousel-item v-for="(item,index) in carousel" :key="index">
            <a href="#"><img :src="item" alt=""></a>
          </f-carousel-item>
      </f-carousel>
      <br/>
      <f-button type="primary" @click="closeAutoplay">切换自动播放</f-button>
    </div>
    <!-- <h4>选项卡</h4> -->
    <!-- <f-tab :line-width="2" active-color="#fc378c">
        <f-tab-item :checked="demo2 === item" v-for="(item,index) in list2" @click="demo2 = item" :key="index"><h1>{{item}}</h1></f-tab-item>
    </f-tab> -->
    <h4>栅格和图标</h4>
      <f-grids row="6">
        <f-grid href="https://github.com/jolyPan/FoolUi">
          <span slot="icon" class="fool__icon--phone"></span>
          <span slot="text">phone</span>
        </f-grid>
        <f-grid @click="gridClick">
          <span slot="icon" class="fool__icon--lbs"></span>
          <span slot="text">lbs</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--qrcode"></span>
          <span slot="text">qrcode</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--date"></span>
          <span slot="text">date</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--nochecked"></span>
          <span slot="text">nochecked</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--checked"></span>
          <span slot="text">checked</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--radio"></span>
          <span slot="text">radio</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--search"></span>
          <span slot="text">search</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--close-outline"></span>
          <span slot="text">close-outline</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--close"></span>
          <span slot="text">close</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--homefill"></span>
          <span slot="text">homefill</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--home"></span>
          <span slot="text">home</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--myfill"></span>
          <span slot="text">myfill</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--my"></span>
          <span slot="text">my</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--userfill"></span>
          <span slot="text">userfill</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--user"></span>
          <span slot="text">user</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--contact"></span>
          <span slot="text">contact</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--link"></span>
          <span slot="text">link</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--unlock"></span>
          <span slot="text">unlock</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--lock"></span>
          <span slot="text">lock</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--likefill"></span>
          <span slot="text">likefill</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--like"></span>
          <span slot="text">like</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--reduce-outline"></span>
          <span slot="text">reduce-outline</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--reduce"></span>
          <span slot="text">reduce</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--add-outline"></span>
          <span slot="text">add-outline</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--add"></span>
          <span slot="text">add</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--edit"></span>
          <span slot="text">edit</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--delete"></span>
          <span slot="text">delete</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--photodel"></span>
          <span slot="text">photodel</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--photo"></span>
          <span slot="text">photo</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--msgfill"></span>
          <span slot="text">msgfill</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--msg"></span>
          <span slot="text">msg</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--menumore"></span>
          <span slot="text">menumore</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--menu"></span>
          <span slot="text">menu</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--tips"></span>
          <span slot="text">tips</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--refresh"></span>
          <span slot="text">refresh</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--share"></span>
          <span slot="text">share</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--totop"></span>
          <span slot="text">totop</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--attachment"></span>
          <span slot="text">attachment</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--emoji"></span>
          <span slot="text">emoji</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--scan"></span>
          <span slot="text">scan</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--mall"></span>
          <span slot="text">mall</span>
        </f-grid>

        <f-grid>
          <span slot="icon" class="fool__icon--filter"></span>
          <span slot="text">filter</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--sort"></span>
          <span slot="text">sort</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--loading"></span>
          <span slot="text">loading</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--left"></span>
          <span slot="text">left</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--right"></span>
          <span slot="text">right</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--up"></span>
          <span slot="text">up</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--down"></span>
          <span slot="text">down</span>
        </f-grid>
      </f-grids>
    </div>
</template>

<script>
const  baseUrl = process.env.NODE_ENV === 'development' ? '/static/' : '/FoolUi/dist/static/'
export default {
  name: "",
  data() {
    return {
      carousel:[baseUrl+'images/timg0.jpeg',baseUrl + 'images/timg1.jpeg',baseUrl + 'images/timg2.jpeg',baseUrl + 'images/timg3.jpeg',baseUrl + 'images/timg4.jpeg',baseUrl + 'images/timg5.jpeg'],
      msg: `Fool-ui - 基于vue2.x，可复用UI组件`,
      closeFlag: true,
      radio: null,
      checkbox: [],
      inputval: "",
      slider: 20,
      stepList: ['步骤一', '步骤二', '步骤三', '步骤四', '步骤五'],
      step: 2,
      loading: true,
      autoplay:false,
      demo2: '美食',
      list2: ['精选', '美食', '电影', '酒店', '外卖']
    };
  },
  methods: {
    carouselChange(index){
      console.log(index)
    },
    closeAutoplay(){
      this.autoplay = !this.autoplay 
    },
    next() {
      if (this.loading) {
        this.loading = false
      } else {
        this.loading = true
        if (this.step >= 4) {
          this.step = 0
        } else {
          this.step++
        }
      }
    },
    btnClick() {
      this.$toast.text({
        content: "风波之"
      });
    },
    valueFun(right, left, width) {
      console.log(right, left, width);
    },
    close() {
      this.closeFlag = false;
    },
    radioChange() {
      console.log(this.checkbox);
    },
    input(value) {
      console.log(this.checkbox);
    },
    gridClick() {
      alert(1);
    },
    xminput() {
      console.log(this.inputval);
    }
  }
};
</script>
<style scoped>
</style>
