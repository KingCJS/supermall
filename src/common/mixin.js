import BackTop from '@/compoents/content/backTop/BackTop'

export const backTopMixin = {
  data() {
    return {
      showBackTop: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    backTop: function () {
      this.$refs.scroll.scrollTo(0, 0, 300);
    }
  }
}