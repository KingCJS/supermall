<template>
<div>
  <Swiper>
    <SwiperItem v-for= "item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </SwiperItem>
  </Swiper>
</div>
</template>
<script>
  import {Swiper, SwiperItem} from 'compoents/common/swiper'
export default {
  name: "HomeSwipter",
  data () {
    return {
      isLoad: false
    };
  },

  props: {
    banners: {
      type: Array,
      default() {
        return []
      } 
    }
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    imageLoad() {
      if(!this.isLoad) {
        this.$emit('swipterImageLoad');
        this.isLoad = true
      }
     
    }
  }
}
</script>

<style  scoped>
</style>