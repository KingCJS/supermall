<template>
  <div id="home" class="wrapper">   
    <nav-bar class="home-nav" ><div slot="center" >购物街</div></nav-bar>
      <tab-control  :titles="['流行', '新款', '精选']"  
      @tabClick= "tabClick" 
      ref="tabControl1"
      class="tab-control"
      v-show="isFixed">
     </tab-control>
    <scroll class="content" ref="scroll" 
    :probeType= "3" @scroll="contentScroll" 
    @pullingUp= "loadMore" :pullUpLoad= "true">
      <home-swipter :banners= "banners" v-if="banners.length > 0" @swipterImageLoad= "swipterImageLoad"></home-swipter>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control  :titles="['流行', '新款', '精选']"  @tabClick= "tabClick" ref="tabControl2"></tab-control>
      <goods-list :goods= "showGoods"></goods-list>
    </scroll>
    <back-top @click.native= "backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  
  import HomeSwipter from '@/views/home/childCompoents/HomeSwipter'
  import RecommendView from '@/views/home/childCompoents/RecommendView'
  import FeatureView from '@/views/home/childCompoents/FeatureView'

  import NavBar from '@/compoents/common/navbar/NavBar'
  import TabControl from '@/compoents/content/tabControl/TabControl'
  import GoodsList from '@/compoents/content/goods/GoodsList'
  import Scroll from '@/compoents/common/scroll/Scroll'
  import BackTop from '@/compoents/content/backTop/BackTop'
  

  import {getHomeMultidata,getHomeGoods} from 'network/home'
  import { debounce } from '../../common/utils';





  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwipter,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop

    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType: 'pop',
        isShowBackTop: false,
        tabOffsetTop: 0,
        isFixed: false
}
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    created() {
      this.getHomeMultidata()
      
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },

    mounted() {
      const refresh = debounce(this.$refs.scroll.refresh,50)
      this.$bus.$on('itemImageLoad', () => {
        // this.$refs.scroll.refresh()
        refresh()
      })
    },
    methods: {

      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        // this.showGoods = this.goods[this.currentType].list;
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },
      getHomeMultidata() {
        getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1
          this.$refs.scroll.finishPullUp()
        })
        
      },
      
      backTop() {
        this.$refs.scroll.scrollTo(0,0)
      },

      contentScroll(position) {
        this.isShowBackTop = -position.y > 1000
        this.isFixed = (-position.y) > this.tabOffsetTop
       },

      loadMore() {
         this.getHomeGoods(this.currentType)
        //  this.$refs.scroll.refresh()
      },

      swipterImageLoad() {
        this.tabOffsetTop= this.$refs.tabControl2.$el.offsetTop
        // console.log(this.$refs.tabControl1.$el.offsetTop);
      }

      
    },
  }
</script>

<style scoped>
#home {
    /* padding-top: 44px; */
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    /*在使用浏览器原生滚动时, 为了让导航不跟随一起滚动*/
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9 */
  }

  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .tab-control {
    position: relative;
    z-index: 9;
  }



</style>
