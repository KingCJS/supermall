
<template>
  <div id="detail">
    <scroll class="content" :pullUpLoad="true" ref="scroll">
      <detail-nav-bar class="detail-navbar"></detail-nav-bar>
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detailInfo="detailInfo"
        :imageLoad="imageLoad"
      ></detail-goods-info>
      <detail-param-info :paramInfo="paramInfo"></detail-param-info>
      <detail-comment-info :commentInfo="commentInfo"></detail-comment-info>
    </scroll>
  </div>
</template>

<script>
import { getDetail, Goods, Shop, GoodsParam } from "network/detail";

import Scroll from "@/compoents/common/scroll/Scroll";

import DetailNavBar from "@/views/detail/childCompoents/DetailNavBar";
import DetailSwiper from "@/views/detail/childCompoents/DetailSwiper";
import DetailBaseInfo from "@/views/detail/childCompoents/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childCompoents/DetailShopInfo";
import DetailGoodsInfo from "@/views/detail/childCompoents/DetailGoodsInfo";
import DetailParamInfo from "@/views/detail/childCompoents/DetailParamInfo";
import DetailCommentInfo from "@/views/detail/childCompoents/DetailCommentInfo";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    Scroll,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
  },

  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
    };
  },
  created() {
    // console.log(this.$route.params.iid);
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      console.log(res);
      // 获取结果
      const data = res.result;
      // 获取顶部信息
      this.topImages = data.itemInfo.topImages;
      // 获取商品信息获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 获取店铺信息
      this.shop = new Shop(data.shopInfo);
      // 获取商品信息
      this.detailInfo = data.detailInfo;
      // 保存参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 保存评论信息
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0];
      }
    });
  },
  mounted() {},
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
    },
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
  background-color: #fff;
  height: calc(100% - 44px);
}
.detail-navbar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>
