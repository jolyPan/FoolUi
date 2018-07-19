<template>
  <div class="wrap">
    <h3>{{ msg }}</h3>
    <h2>基础组件</h2>
    <h3>按钮</h3>
    <!-- <h4>圆角按钮</h4> -->
    <xm-button>普通</xm-button>
    <xm-button type="primary" @click="btnClick" icon="xm__icon--refresh">主要</xm-button>
    <xm-button type="error" icon="xm__icon--likefill"></xm-button>
    <xm-button type="warning" disabled>禁止</xm-button>
    <xm-button plain>简约</xm-button>
    <!-- <h4>无圆角按钮</h4> -->
    <br/>
    <br/>
    <xm-button loading no-radius type="primary">loading状态</xm-button>
    <xm-button no-radius bg-color="#f56c6c" color="#fff" border-color="#f56c6c">自定义颜色</xm-button>
    <xm-button no-radius>无圆角</xm-button>
    <xm-button no-radius type="text" icon="xm__icon--checked">文字</xm-button>
    <!-- <h4>圆形按钮</h4> -->
    <br/>
    <br/>
    <xm-button circle type="primary" @click="btnClick" icon="xm__icon--refresh"></xm-button>
    <xm-button circle type="success" icon="xm__icon--checked"></xm-button>
    <xm-button circle @click="btnClick" icon="xm__icon--search"></xm-button>
    <xm-button circle type="error" icon="xm__icon--delete"></xm-button>
    <xm-button circle type="warning" icon="xm__icon--lock"></xm-button>
    <!-- <h4>long按钮</h4> -->
    <br/>
    <br/>
    <xm-button round long>100%宽圆角</xm-button>
    <br/>
    <br/>
    <!-- <h4>组合按钮</h4> -->
    <xm-button-group class="btn__group">
      <xm-button type="warning">警告</xm-button>
      <xm-button type="primary" @click="btnClick" icon="xm__icon--checked">主要</xm-button>
      <xm-button type="success" icon="xm__icon--loading">成功</xm-button>
    </xm-button-group>
    <h3>单选按钮</h3>
    <xm-radio v-model="radio" :value="1">备选项1</xm-radio>
    <xm-radio v-model="radio" :value="2">备选项2</xm-radio>
    <xm-radio v-model="radio" disabled :value="3">备选项2</xm-radio>
    <xm-radio v-model="radio" checked :value="4">备选项2</xm-radio>
    <h3>复选按钮</h3>
    <xm-checkbox v-model="checkbox" checked disabled value="1" name="1" @change="input">巴士</xm-checkbox>
    <xm-checkbox v-model="checkbox" value="2" name="1" @change="input">火车</xm-checkbox>
    <xm-checkbox v-model="checkbox" value="3" name="1" @change="input" disabled>飞机--disabled</xm-checkbox>
    <xm-checkbox v-model="checkbox" value="4" name="1" @change="input">单车</xm-checkbox>
    <h3>标签</h3>
    <xm-tag>default</xm-tag>
    <xm-tag v-if="closeFlag" closable @close="close">close</xm-tag>
    <xm-tag type="primary">primary</xm-tag>
    <xm-tag type="success">success</xm-tag>
    <xm-tag type="warning">warning</xm-tag>
    <xm-tag type="error">error</xm-tag>
    <xm-tag round bg-color="#fc0" color="#e0439a" border-color="#fc0">自定义颜色</xm-tag>
    <h3>文本框</h3>
    <div class="row">
      <div class="col-md-12">
        <div class="col-md-6">
          <xm-input type="email" v-model="inputval" @input="xminput" placeholder="请输入内容"></xm-input>
          <xm-input type="tel" v-model="inputval" @input="xminput" placeholder="请输入内容"></xm-input>
          <xm-input type="datetime-local" v-model="inputval" @input="xminput" placeholder="请输入内容"></xm-input>
          <xm-input type="date" v-model="inputval" @input="xminput" placeholder="请输入内容"></xm-input>
          <xm-input type="time" v-model="inputval" @input="xminput" placeholder="请输入内容"></xm-input>
        </div>
        <div class="col-md-6">
          <xm-input v-model="inputval" @input="xminput" placeholder="请输入内容"></xm-input>
          <xm-input v-model="inputval" @input="xminput" disabled placeholder="请输入内容"></xm-input>
          <xm-input v-model="inputval" @input="xminput" placeholder="请输入内容">
            <span slot="icon" class="xm__icon--search"></span>
          </xm-input>
          <xm-input type="search" v-model="inputval" @input="xminput" placeholder="请输入内容"></xm-input>
          <xm-input type="password" v-model="inputval" @input="xminput" placeholder="请输入内容"></xm-input>
          <xm-input type="number" v-model="inputval" @input="xminput" placeholder="请输入内容"></xm-input>
        </div>
      </div>
    </div>
    <h4>slider滑块</h4>
    <div class="row">
      <div class="col-md-6">
        <xm-slider :change="valueFun" :min="20" :max="80"></xm-slider>
      </div>
      <div class="col-md-6">
        <xm-slider :change="valueFun" v-model="slider" :range="false"></xm-slider>
      </div>
    </div>
    <h4>步骤条</h4>
    <xm-step :loading="loading" :step="step" :step-list="stepList"></xm-step>
    <div class="row">
      <xm-button type="primary" @click="next" icon="xm__icon--refresh">下一步</xm-button>
    </div>
    <h4>标记</h4>
    <xm-badge :value="5">
      <xm-button plain>评论</xm-button>
    </xm-badge>
    <xm-badge :value="10">
      <xm-button plain>回复</xm-button>
    </xm-badge>
    <xm-badge :value="100" :max="99">
      <xm-button plain>点赞</xm-button>
    </xm-badge>
    <xm-badge isDot>
      <xm-button plain>关注</xm-button>
    </xm-badge>
    <xm-badge bgColor="#fc0" color="#e0439a" value="自定义">
      <xm-button plain>自定义颜色</xm-button>
    </xm-badge>
    <xm-badge style="margin-left:2rem;" value="new">
    </xm-badge>
    <xm-badge style="margin-left:2rem;" value="hot">
    </xm-badge>
    <h4>走马灯</h4>
    <div>
      <xm-carousel :height="230" :autoplay="autoplay" :initialIndex="0" @change="carouselChange">
          <xm-carousel-item v-for="(item,index) in carousel" :key="index">
            <a href="#"><img :src="item" alt=""></a>
          </xm-carousel-item>
      </xm-carousel>
      <br/>
      <xm-button type="primary" @click="closeAutoplay">切换自动播放</xm-button>
    </div>
    <h4>网格和图标</h4>
      <xm-grids row="6">
        <xm-grid href="https://github.com/monw3c/foolui">
          <span slot="icon" class="xm__icon--phone"></span>
          <span slot="text">phone</span>
        </xm-grid>
        <xm-grid @click="gridClick">
          <span slot="icon" class="xm__icon--lbs"></span>
          <span slot="text">lbs</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--qrcode"></span>
          <span slot="text">qrcode</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--date"></span>
          <span slot="text">date</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--nochecked"></span>
          <span slot="text">nochecked</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--checked"></span>
          <span slot="text">checked</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--radio"></span>
          <span slot="text">radio</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--search"></span>
          <span slot="text">search</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--close-outline"></span>
          <span slot="text">close-outline</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--close"></span>
          <span slot="text">close</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--homefill"></span>
          <span slot="text">homefill</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--home"></span>
          <span slot="text">home</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--myfill"></span>
          <span slot="text">myfill</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--my"></span>
          <span slot="text">my</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--userfill"></span>
          <span slot="text">userfill</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--user"></span>
          <span slot="text">user</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--contact"></span>
          <span slot="text">contact</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--link"></span>
          <span slot="text">link</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--unlock"></span>
          <span slot="text">unlock</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--lock"></span>
          <span slot="text">lock</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--likefill"></span>
          <span slot="text">likefill</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--like"></span>
          <span slot="text">like</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--reduce-outline"></span>
          <span slot="text">reduce-outline</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--reduce"></span>
          <span slot="text">reduce</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--add-outline"></span>
          <span slot="text">add-outline</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--add"></span>
          <span slot="text">add</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--edit"></span>
          <span slot="text">edit</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--delete"></span>
          <span slot="text">delete</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--photodel"></span>
          <span slot="text">photodel</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--photo"></span>
          <span slot="text">photo</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--msgfill"></span>
          <span slot="text">msgfill</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--msg"></span>
          <span slot="text">msg</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--menumore"></span>
          <span slot="text">menumore</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--menu"></span>
          <span slot="text">menu</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--tips"></span>
          <span slot="text">tips</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--refresh"></span>
          <span slot="text">refresh</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--share"></span>
          <span slot="text">share</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--totop"></span>
          <span slot="text">totop</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--attachment"></span>
          <span slot="text">attachment</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--emoji"></span>
          <span slot="text">emoji</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--scan"></span>
          <span slot="text">scan</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--mall"></span>
          <span slot="text">mall</span>
        </xm-grid>

        <xm-grid>
          <span slot="icon" class="xm__icon--filter"></span>
          <span slot="text">filter</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--sort"></span>
          <span slot="text">sort</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--loading"></span>
          <span slot="text">loading</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--left"></span>
          <span slot="text">left</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--right"></span>
          <span slot="text">right</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--up"></span>
          <span slot="text">up</span>
        </xm-grid>
        <xm-grid>
          <span slot="icon" class="xm__icon--down"></span>
          <span slot="text">down</span>
        </xm-grid>
      </xm-grids>
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
      autoplay:false
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
