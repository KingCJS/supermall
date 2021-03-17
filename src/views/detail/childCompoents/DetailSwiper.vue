<template>
    <div class="detail-swiper">
        <Swiper>
            <SwiperItem v-for="item in topImages" class="item">
               <img :src="item" alt="">
            </SwiperItem>
        </Swiper>
    </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'compoents/common/swiper'


export default {
    name: 'DetailSwipter',
    components: { 
        Swiper,
        SwiperItem,
    },
    
    data() {
        return {
          
        };
    },

    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    },
    mounted() {
        
    },
    methods: {
        
    },
};
</script>

<style  scoped>
.item {
    text-align: center;
    height: 300px;
  }
</style>