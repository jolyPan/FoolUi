# Carousel 走马灯
----
#### 基础用法
<vuep  :options="{ tabSize: 2 }"  template="#example"></vuep>

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| height     | 设置走马灯高度   | Number  |    — | 150   |
| initialIndex     | 初始化显示index   |  Number   | - |     0   |
| autoplay     | 是否自动播放   | Boolean    |   - |     true    | 

<script v-pre type="text/x-template" id="example">
  <template>
        <div>
            <f-carousel :height="150" :autoplay="autoplay" :initialIndex="0" @change="carouselChange">
                <f-carousel-item v-for="(item,index) in carousel" :key="index">
                    <a href="#"><img  width="100%" height="100%" :src="item" alt=""></a>
                </f-carousel-item>
            </f-carousel>
        <br/>
      <f-button type="primary" @click="closeAutoplay">切换自动播放</f-button>
    </div>
  </template>
  <script>
    export default {
      data: function () {
        return {
            autoplay:false,
            carousel:['/FoolUi/dist/static/images/timg0.jpeg', '/FoolUi/dist/static/images/timg1.jpeg', '/FoolUi/dist/static/images/timg2.jpeg', '/FoolUi/dist/static/images/timg3.jpeg', '/FoolUi/dist/static/images/timg4.jpeg', '/FoolUi/dist/static/images/timg5.jpeg'],
         }
      },
      methods: {
        closeAutoplay(){
          this.autoplay = !this.autoplay 
        },
        carouselChange(index){
          console.log(index)
        },
      }
    }
  </script>
</script>