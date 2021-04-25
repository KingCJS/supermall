
<template>
  <div id="detail">
    <detail-nav-bar
      class="detail-navbar"
      @titleClick="titleClick"
      ref="nav"
    ></detail-nav-bar>

    <scroll
      class="content"
      :pullUpLoad="true"
      ref="scroll"
      @scroll="contentScroll"
      :probe-type="3"
    >
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detailInfo="detailInfo"
        @imageLoad="imageLoad"
      ></detail-goods-info>
      <detail-param-info
        ref="params"
        :param-info="paramInfo"
      ></detail-param-info>
      <detail-comment-info
        ref="comment"
        :comment-info="commentInfo"
      ></detail-comment-info>
      <div class="recommends">
        <!-- <goods-list ref="recommend" :goods="recommends"></goods-list> -->
        <detail-recommend-info
          ref="recommend"
          :recommendList="recommends"
        ></detail-recommend-info>
      </div>
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail";

import Scroll from "@/compoents/common/scroll/Scroll";
import GoodsList from "@/compoents/content/goods/GoodsList";
import BackTop from "@/compoents/content/backTop/BackTop";

import DetailNavBar from "@/views/detail/childCompoents/DetailNavBar";
import DetailSwiper from "@/views/detail/childCompoents/DetailSwiper";
import DetailBaseInfo from "@/views/detail/childCompoents/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childCompoents/DetailShopInfo";
import DetailGoodsInfo from "@/views/detail/childCompoents/DetailGoodsInfo";
import DetailParamInfo from "@/views/detail/childCompoents/DetailParamInfo";
import DetailCommentInfo from "@/views/detail/childCompoents/DetailCommentInfo";
import DetailRecommendInfo from "@/views/detail/childCompoents/DetailRecommendInfo";
import DetailBottomBar from "./childCompoents/DetailBottomBar.vue";

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
    GoodsList,
    DetailRecommendInfo,
    DetailBottomBar,
    BackTop,
  },

  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      currentIndex: 0,
      isShowBackTop: false,
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

      // this.$nextTick(() => {
      //   this.themeTopYs = [];
      //   this.themeTopYs.push(0);
      //   this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      //   console.log(this.themeTopYs);
      // });
    });

    getRecommend().then((res) => {
      this.recommends = res.data.list;
    });
  },
  updated() {},
  mounted() {},
  watch: {
    // recommends() {
    //   console.log(this.recommends);
    // }
  },
  methods: {
    // 监听图片是否加载完成
    imageLoad() {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop - 44);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 44);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 44);
      this.themeTopYs.push(Number.MAX_VALUE);

      console.log(this.themeTopYs);
      this.$refs.scroll.refresh();
    },

    // 点击对应的标题定位到相应的位置
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 300);
    },

    // 监听滚动到哪里
    contentScroll(position) {
      const positionY = -position.y;
      let length = this.themeTopYs.length;
      for (var i = 0; i < length; i++) {
        if (
          this.currentIndex !== i &&
          i < length - 1 &&
          positionY >= this.themeTopYs[i] &&
          positionY < this.themeTopYs[i + 1]
        ) {
          this.currentIndex = i;
          // console.log(this.currentIndex);
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }

      this.isShowBackTop = -position.y > 1000;
    },
    // 回到顶部
    backTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },

    // 获取商品信息加入购物车
    addToCart() {
      const product = {
        image: this.topImages[0],
        title: this.goods.title,
        desc: this.goods.desc,
        price: this.goods.nowPrice,
        iid: this.iid,
      };
      console.log(product);
      this.$store.dispatch("addCart", product);
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
  height: calc(100% - 44px - 48px);
}
.detail-navbar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.recommends {
  background-color: #fff;
}
</style>
