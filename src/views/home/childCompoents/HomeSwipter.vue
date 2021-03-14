<template>
<div>
  <Swiper>
    <SwiperItem v-for= "item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="">
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
    };
  },

  props: {
    banner: {
      type: Array,
      default() {
        return []
      } 
    }
  },
  components: {
    Swiper,
    SwiperItem,
  }
}
</script>

<style  scoped>
</style>