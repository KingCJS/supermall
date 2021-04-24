<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
 
<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",

  data() {
    return {
      scroll: null,
      PullUpLoad: false,
    };
  },

  props: {
    probeType: {
      type: Number,
      default: 0,
    },

    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    //创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true,
    });

    // 监听滚动的事件
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });

    // 监听上拉到顶部的事件
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
  },
};
</script>

<style  scoped>
</style>