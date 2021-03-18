
<template>
    <div id="detail">
      <scroll class="content" :pullUpLoad= "true" ref="scroll">
        <detail-nav-bar class="detail-navbar"></detail-nav-bar>
        <detail-swiper :top-images="topImages"></detail-swiper>
        <detail-base-info :goods= "goods"></detail-base-info>
        <detail-shop-info :shop= "shop"></detail-shop-info>
        <detail-goods-info :detailInfo= "detailInfo" :imageLoad= "imageLoad"></detail-goods-info>
      </scroll>
        
    </div>
</template>

<script>
import {getDetail,Goods,Shop} from "network/detail";

import Scroll from '@/compoents/common/scroll/Scroll'


import DetailNavBar from '@/views/detail/childCompoents/DetailNavBar'
import DetailSwiper from '@/views/detail/childCompoents/DetailSwiper'
import DetailBaseInfo from '@/views/detail/childCompoents/DetailBaseInfo'
import DetailShopInfo from '@/views/detail/childCompoents/DetailShopInfo'
import DetailGoodsInfo from '@/views/detail/childCompoents/DetailGoodsInfo'



export default {
    name: 'Detail',
    components: {
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        Scroll,
        DetailShopInfo,
        DetailGoodsInfo,
    },

    data() {
        return {
            iid: null,
            topImages: [],
            goods: {},
            shop: {},
            detailInfo: {},

        };
    },
    created() {
        // console.log(this.$route.params.iid);
        this.iid= this.$route.params.iid
        getDetail(this.iid).then(res => {
            const data = res.result
            this.topImages = data.itemInfo.topImages
            this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
            this.shop = new Shop(data.shopInfo)
            this.detailInfo = data.detailInfo

        })
    },
    mounted() {
        
    },
    methods: {
        imageLoad() {
          this.$refs.scroll.refresh()
        } 
    },
    
};
</script>

<style  scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .content {
    height: calc(100% - 44px);
  
  }
  .detail-navbar {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

</style>
