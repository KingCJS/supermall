
<template>
    <div>
        <detail-nav-bar ></detail-nav-bar>
          <detail-swiper :top-images="topImages"></detail-swiper>
          <detail-base-info :goods= "goods"></detail-base-info>
          <detail-shop-info :shop= "shop"></detail-shop-info>
        
    </div>
</template>

<script>
import {getDetail,Goods,Shop} from "network/detail";

import Scroll from '@/compoents/common/scroll/Scroll'


import DetailNavBar from '@/views/detail/childCompoents/DetailNavBar'
import DetailSwiper from '@/views/detail/childCompoents/DetailSwiper'
import DetailBaseInfo from '@/views/detail/childCompoents/DetailBaseInfo'
import DetailShopInfo from '@/views/detail/childCompoents/DetailShopInfo'


export default {
    name: 'Detail',

    components: {
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        Scroll,
        DetailShopInfo
    },

    data() {
        return {
            iid: null,
            topImages: [],
            goods: {},
            shop: {},
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

        })
    },
    mounted() {
        
    },
    methods: {
        
    },
};
</script>

<style  scoped>

</style>