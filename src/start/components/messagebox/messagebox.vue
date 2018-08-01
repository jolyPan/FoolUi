<template>
  <transition name="fade">
    <div class="fool__message--box--box" v-show="isShowMessageBox">
      <div class="fool__message--box--mask" @click="cancel"></div>
      <div class="fool__message--box--content">
        <h3 class="fool__message--box--title">
          {{ title }}
          <i class="fool__icon--close fool__message--box--icon" @click="cancel"></i>
        </h3>
        <p class="fool__message--box--content--text">{{ content }}</p>
        <div v-if="isShowInput">
          <input type="text" v-model="inputValue" ref="input" @keyup.enter="confirm">
        </div>
        <div class="fool__messagebox--btn-group">
          <button class="fool__btn fool__btn--default is-plain" @click="cancel" v-show="isShowCancelBtn">{{ cancelBtnText }}</button>
          <button class="fool__btn fool__btn--primary " :class="{'fool__message--loading':confirmButtonLoading}" @click="confirm" v-show="isShowConfimrBtn">
            <i class="fool__icon--loading" v-if="confirmButtonLoading"></i>
            {{ confirmBtnText }}</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '标题'
    },
    content: {
      type: String,
      default: '这是弹框内容'
    },
    isShowInput: false,
    inputValue: '',
    isShowCancelBtn: {
      type: Boolean,
      default: false
    },
    isShowConfimrBtn: {
      type: Boolean,
      default: false
    },
    cancelBtnText: {
      type: String,
      default: '取消'
    },
    confirmBtnText: {
      type: String,
      default: '确定'
    },
    confirmButtonLoading: {
      type: Boolean,
      default: false
    },
    beforeClose: {
      type: Function,
      default: (action, instance ,done) => { done() }
    }
  },
  data() {
    return {
      isShowMessageBox: false,
      resolve: '',
      reject: '',
      promise: '', // 保存promise对象
    };
  },
  methods: {
    // 确定,将promise断定为resolve状态
    confirm() {
      this.beforeClose('confirm', this, () => {
        this.isShowMessageBox = false;
        if (this.isShowInput) {
          this.resolve(this.inputValue);
        } else {
          this.resolve('confirm');
        }
        this.remove();
      })
    },
    // 取消,将promise断定为reject状态
    cancel() {
      this.beforeClose('cancel', this, () => {
        this.isShowMessageBox = false;
        this.reject('cancel');
        this.remove();
      })
    },
    // 弹出messageBox,并创建promise对象
    showMsgBox() {
      this.isShowMessageBox = true;
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
      // 返回promise对象
      return this.promise;
    },
    remove() {
      setTimeout(() => {
        this.destroy();
      }, 300);
    },
    destroy() {
      this.$destroy();
      document.body.removeChild(this.$el);
    }
  }
};
</script>