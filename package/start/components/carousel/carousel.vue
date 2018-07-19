<template>
    <div class="xm__box" ref="xm__box">
        <div class="xm__inner" ref="xm__inner" :style="{width:imgWidth + 'px',height:height+'px'}">
            <ul class="xm__imglist" ref="xm__imglist">
                <slot></slot>
            </ul>
            <div class="xm__list">
                <i @click="carouselButton" v-for="(item,index) in lis" :index="index" :key="index"></i>
            </div>
            <div class="xm__arrow" ref="xm__arrow">
                <span @click="arrowLeft" class="xm__arrow--left">
                    <span slot="icon" class="xm__icon--left"></span>
                </span>
                <span @click="arrowRight" class="xm__arrow--right">
                    <span slot="icon" class="xm__icon--right"></span>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import mixin from 'components/mixin'
export default {
    mixins:[mixin],
    name:'xm-carousel',
    props:{
        height:{
            type:Number,
            default:150,
        },
        initialIndex:{
            type:Number,
            default:0
        },
        autoplay:{
            type:Boolean,
            default:true
        },
    },
    watch:{
        initialIndex:function(){
            this.icons[this.initialIndex].click()
        },
        autoplay:function(){
            if(this.autoplay){
                //4. 自动播放
                this.startAutoplay()
            }else{
                this.timer && clearInterval(this.timer);
            }
        },
        height:function(){
            this.setItemSize()
        }
    },
    computed:{
        imgWidth:function(){
            return this.height * 2.5
        },
    },
    data() {
        return {
            ul:{},
            //指的是当前的索引
            count: 0,
            //小圆点
            icons:[],
            //1. 全局加一个把锁
            flag:true,
            //图片宽度
            // imgWidth:0,
            //lis集合
            lis:[]
        };
    },
    components: {},
    methods: {
        setItemSize(){
            for (let index = 0; index < this.lis.length; index++) {
                const element = this.lis[index];
                element.style.width = this.imgWidth + 'px';
                element.style.height = this.height + 'px';
                element.style.lineHeight = this.height + 'px';
            }
        },
        animate(element, obj, fn) {
            clearInterval(element.timer);
            element.timer = setInterval( () =>{

                var flag = true;

                for (var k in obj) {
                    var attr = k;
                    var target = obj[k];

                    if (attr == "opacity") {
                        var leader = this.getStyle(element, attr);
                        leader = parseFloat(leader) || 0;
                        //1. opacity是小数，我们为了方便做动画，leader和target都需要扩大100
                        leader *= 100;
                        target *= 100;

                        //2. 算出来的step也是扩大了100倍
                        var step = (target - leader) / 10;
                        step = step > 0 ? Math.ceil(step) : Math.floor(step);
                        leader = leader + step;

                        //3. 设置的时候，需要让leader缩小100倍,不要px
                        element.style[attr] = leader / 100;

                        if (leader != target) {
                            flag = false;
                        }

                    } else if (attr == "zIndex") {
                        //如果是zIndex，特殊处理
                        element.style.zIndex = target;
                    } else {
                        var leader = this.getStyle(element, attr);
                        leader = parseFloat(leader) || 0;
                        var step = (target - leader) / 10;
                        step = step > 0 ? Math.ceil(step) : Math.floor(step);
                        leader = leader + step;
                        element.style[attr] = leader + "px";

                        if (leader != target) {
                            flag = false;
                        }
                    }
                }

                if (flag) {
                    clearInterval(element.timer);
                    //1. 清除定时器的时候，说明我这次动画已经执行完了
                    //                if(fn){
                    //                    fn();
                    //                }

                    fn && fn();


                }
                //console.log("代码还在执行吗");
            }, 15);
        },
        getStyle(element, attr) {
            //能力检测
            if (window.getComputedStyle) {
                return window.getComputedStyle(element, null)[attr];
            } else {
                return element.currentStyle[attr];
            }
        },
        //点击左箭头
        arrowLeft (){

            //判断如果是第一张图片，瞬间换到最后一张图片
            if (this.count == 0) {
                this.count = this.lis.length - 1;
                this.ul.style.left = - this.count * this.imgWidth + "px";
            }else{
                this.count--;
            }
            var target = - this.count * this.imgWidth;
            this.animate(this.ul, { left: target });

            //先让所有的小圆点不亮
            for (var i = 0; i < this.icons.length; i++) {
                this.icons[i].className = "";
            }
            this.icons[this.count].className = "current";
            this.$emit('change',this.count)
        },
        //点击右边
        arrowRight() {
            //2. 如果锁开着，才执行
            if (this.flag) {
                //3. 记得锁门
                this.flag = false;
                //如果我们发现图片是最后一张了，我们瞬间把最后一张图片变成第一张图片
                if (this.count == this.lis.length - 1) {
                    this.count = 0;
                    this.ul.style.left = 0;
                }else{
                    this.count++;
                }
                //移动ul
                var target = - this.count * this.imgWidth;
                this.animate(this.ul, { left: target },  () => {
                    this.flag = true;
                });

                //先让所有的小圆点不亮
                for (var i = 0; i < this.icons.length; i++) {
                    this.icons[i].className = "";
                }
                //如果是假图片的时候，让0亮
                // if (this.count == this.lis.length - 1) {
                    // this.icons[0].className = "current";
                // } else {
                    this.icons[this.count].className = "current";
                    this.$emit('change',this.count)
                // }
            }
        },
        //2. 小圆点切换
        carouselButton(event){
            //2.1 当当前小圆点高亮
            //2.1.1 干掉所有人
            for (var i = 0; i < this.icons.length; i++) {
                this.icons[i].className = "";
            }
            //2.1.2 复活我自己
            event.target.className = "current";
            //2.2 移动ul
            var idx = parseInt(event.target.getAttribute('index'));
            this.count = idx;

            var target = - idx * this.imgWidth;

            this.animate(this.ul, { left: target });
            
            this.$emit('change',this.count)
        },
        startAutoplay(){
            this.timer = setInterval( ()=> {
                //触发了右箭头的click事件
                this.arrowRight&&this.arrowRight()
            }, 2000);
        }
    },
    mounted() {
        // 找对象
        var box = this.$refs.xm__box;
        this.ul = this.$refs.xm__imglist;
        this.lis = this.ul.children;
        var arrow = this.$refs.xm__arrow;
        var arrowLeft = arrow.children[0];
        var arrowRight = arrow.children[1];
        //鼠标经过盒子，箭头显示
        box.onmouseover =  ()=> {
            arrow.style.display = "block";
            //清除定时器
            this.timer && clearInterval(this.timer);
        }
        //鼠标离开盒子，箭头隐藏
        box.onmouseout =  () => {
            if(!this.isMobile){
                arrow.style.display = "none";
            }
            //离开的时候，重新开启定时器
            if(this.autoplay){
                // 自动播放
                this.startAutoplay()
            }
        }
        if(this.autoplay){
            //自动播放
            this.startAutoplay()
        }
        if(this.isMobile){
            arrow.style.display = "block";
        }
        this.setItemSize()
        this.$nextTick(()=>{
            this.icons = this.$refs.xm__inner.getElementsByTagName("i");
            this.icons[this.initialIndex].click()
        })
    },
}

</script>