<template>
  <div id="home">   
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swipter :banners= "banner"></home-swipter>
    <RecommendView :recommend="recommends"></RecommendView>
  </div>

</template>

<script>
  import NavBar from '@/compoents/common/navbar/NavBar'
  import HomeSwipter from '@/views/home/childCompoents/HomeSwipter'
  import RecommendView from '@/views/home/childCompoents/RecommendView'

  import {getHomeMultidata} from 'network/home'
  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwipter,
      RecommendView,
    },
    data() {
      return {
        banner: [],
        recommends: [],
      }
    },
    created() {
      getHomeMultidata().then(res => {
        this.banner = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
#home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    /*在使用浏览器原生滚动时, 为了让导航不跟随一起滚动*/
    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index: 9;*/
  }

</style>
