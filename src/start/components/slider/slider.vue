<template>
    <div class="xm_slider" ref="mySlider">
        <div class="xm_left-btn" :class="{xm_active:myPosition.isBtn==2}"></div>
        <div class="xm_propo"></div>
        <div class="xm_propo-bg"></div>
        <div v-show="range" class="xm_right-btn" :class="{xm_active:myPosition.isBtn==1}"></div>
    </div>
</template>
<script type="text/javascript">
export default {
  name: "xm-slider",
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    change: {
      type: Function,
      required: true
    },
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    },
    value: {
      type: Number,
      default: 0
    },
    range: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      myPosition: {
        left: 0,
        right: 0,
        now: 0,
        isBtn: 0,
        propoWidth: 0
      },
      myDefault: null,
      isPressDown: false
    };
  },
  methods: {},
  mounted() {
    //滑块
    let that = this;
    let mySlider = this.$refs.mySlider; //最外部盒子
    let propo = mySlider.children[1]; //中间部分
    let rightBtn = mySlider.children[3]; //左边边按钮
    let leftBtn = mySlider.children[0]; //右边按钮
    let mySliderX = elementLeft(mySlider); //滑动块x坐标(组件距离浏览器的left值)
    let myWidth = 0;
    this.myDefault = () => {
      //初始化
      if (this.range) {
        this.myPosition.right = this.max;
        this.myPosition.left = this.min;
      } else {
        this.myPosition.right = this.value;
        this.myPosition.left = 0;
      }
      if (this.myPosition.right > this.myPosition.left) {
        //当max 大于 min的时候 计算中间部分宽度
        this.myPosition.propoWidth = this.myPosition.right - this.myPosition.left;
        //当max大于min的时候 min就是中间部分的left值
        propo.style.left = this.myPosition.left + "%";
      } else {
        //当max 小于 min的时候 计算中间部分宽度
        this.myPosition.propoWidth = this.myPosition.left - this.myPosition.right;
        //当max小于min的时候 max就是中间部分的left值
        propo.style.left = this.myPosition.right + "%";
      }
      //设置中间部分的宽度
      propo.style.width = this.myPosition.propoWidth + "%";
      //左边按钮lef值就是min值
      leftBtn.style.left = this.myPosition.right + "%";
      //右边按钮lef值就是min值
      rightBtn.style.left = this.myPosition.left + "%";
      //调用change钩子
      this.range
        ? this.change(
            parseInt(this.myPosition.left),
            parseInt(this.myPosition.right),
            parseInt(this.myPosition.propoWidth)
          )
        : this.change(parseInt(this.myPosition.right));
    };
    function elementLeft(e) {
      //计算x坐标
      var offset = e.offsetLeft; //获取对象左侧与定位父级之间的距离
      if (e.offsetParent != null) {
        //offsetParent返回最近的祖先定位元素
        offset += elementLeft(e.offsetParent);
      }
      //offset  计算出元素距离浏览器的left值
      return offset;
    }
    const myCount = () => {
      //计算滑动
      if (this.myPosition.right > this.myPosition.left) {
        //判断滑动范围
        this.myPosition.propoWidth =
          this.myPosition.right - this.myPosition.left;
        propo.style.width = this.myPosition.propoWidth + "%";
        propo.style.left = this.myPosition.left + "%";
        //调用change钩子
        this.range
          ? this.change(
              parseInt(this.myPosition.left),
              parseInt(this.myPosition.right),
              parseInt(this.myPosition.propoWidth)
            )
          : this.change(parseInt(this.myPosition.right));
      } else if (this.myPosition.right < this.myPosition.left) {
        this.myPosition.propoWidth =
          this.myPosition.left - this.myPosition.right;
        propo.style.width = this.myPosition.propoWidth + "%";
        propo.style.left = this.myPosition.right + "%";
        //调用change钩子
        this.range
          ? this.change(
              parseInt(this.myPosition.left),
              parseInt(this.myPosition.right),
              parseInt(this.myPosition.propoWidth)
            )
          : this.change(parseInt(this.myPosition.right));
      }
    };
    const move = e => {
      //屏幕滑动事件
      if (this.isPressDown) {
        let touchX;
        if (!e.touches) {
          //兼容移动端
          touchX = e.clientX;
        } else {
          //兼容PC端
          touchX = e.touches[0].pageX;
        }
        let pageX = touchX - mySliderX; //获取滑动x坐标
        myWidth = pageX / mySlider.offsetWidth * 100; //计算百分比
        if (myWidth > 100) {
          //判断不超出范围
          myWidth = 100;
        } else if (myWidth < 0) {
          myWidth = 0;
        }

        if (this.myPosition.isBtn == 1) {
          //判断焦点
          this.myPosition.left = myWidth;
          rightBtn.style.left = myWidth + "%";
        } else if (this.myPosition.isBtn == 2) {
          this.myPosition.right = myWidth;
          leftBtn.style.left = myWidth + "%";
        }

        myCount();
        e.preventDefault();
      }
    };
    const start = e => {
      //屏幕触摸事件
      let touchX;
      this.isPressDown = true;
      if (!e.touches) {
        //兼容移动端
        touchX = e.clientX;
      } else {
        //兼容PC端
        touchX = e.touches[0].pageX;
      }
      if(e.path){
        if(e.path[0] == rightBtn){
          this.myPosition.isBtn = 1;
        }else if(e.path[0] == leftBtn){
          this.myPosition.isBtn = 2;
        }else{
          this.myPosition.isBtn = 0;
        }
      }
    };
    const end = e => {
      this.isPressDown = false;
    };
    mySlider.addEventListener("touchmove", move);
    mySlider.addEventListener("mousemove", move);

    mySlider.addEventListener("touchstart", start);
    mySlider.addEventListener("mousedown", start);

    mySlider.addEventListener("touchend", end);
    mySlider.addEventListener("mouseup", end);
    // mySlider.addEventListener("mouseout", end);
    this.myDefault();
  },
  watch: {
    min(New, old) {
      this.myDefault();
    },
    max(New, old) {
      this.myDefault();
    },
    value(New, old) {
      this.myDefault();
    }
  }
};
</script>