const Mixin = {
  data() {
    return {
      isMobile: navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
        ? true
        : false
    };
  }
};
const parentMixin = {
  ready() {
    this.updateIndex();
  },
  methods: {
    updateIndex() {
      if (!this.$children) return;
      this.number = this.$children.length;
      let children = this.$children;
      for (let i = 0; i < children.length; i++) {
        children[i].index = i;
        if (children[i].selected) {
          this.index = i;
        }
      }
    }
  },
  props: {
    index: {
      type: Number,
      default: -1
    }
  },
  watch: {
    index(val, oldVal) {
      oldVal > -1 &&
        this.$children[oldVal] &&
        (this.$children[oldVal].selected = false);
      val > -1 && (this.$children[val].selected = true);
    }
  },
  data() {
    return {
      number: this.$children.length
    };
  }
};

const childMixin = {
  props: {
    checked: {
      type: Boolean,
      default: false
    }
  },
  ready() {
    this.$parent.updateIndex();
  },
  beforeDestroy() {
    const $parent = this.$parent;
    this.$nextTick(() => {
      $parent.updateIndex();
    });
  },
  methods: {
    onItemClick() {
      if (typeof this.disabled === "undefined" || this.disabled === false) {
        this.selected = true;
        this.$parent.index = this.index;
        this.$emit("on-item-click");
      }
    }
  },
  watch: {
    checked(val) {
      if (val) {
        this.selected = val;
        this.$parent.index = this.index;
      }
    }
  },
  data() {
    return {
      index: -1
    };
  }
};

export { parentMixin, childMixin, Mixin };
