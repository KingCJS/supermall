<template>
  <div class="shop-info"> 
    <div class="shop-top">
      <img :src="shop.logo" alt="">
      <span class="shop-name">{{shop.name}}</span>
    </div>
  
    <!-- <div class="shop-mid-left">
      <div class="left">
        <span class="sells">{{sell + "万"}}</span>
        <div class="sells-font">总销量</div>
      </div>

      <div class="right">
        <div class="goodsCount">{{shop.goodsCount}}</div>
        <div class="baby-font">全部宝贝</div>
      </div>
    </div> -->
    <div class="shop-mid">
      <div class="shop-mid-left shop-mid-item">
      <div class="info-sells">
        <div class="sells-count">{{sell}}</div>
        <div class="sells-text">总销量</div>
      </div>
      <div class="info-goods">
        <div class="goods-count">{{shop.goodsCount}}</div>
        <div class="goods-text">全部宝贝</div>
      </div>
      </div>
      <div class="shop-mid-right shop-mid-item">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
  
</template>

<script>

export default {
  name: 'DetailShopInfo',
  props: {
    shop: {
      type: Object,
    }
  },
  data() {
    return {
      
    };
  },
  computed: {
    sell() {
       
       return parseFloat(this.shop.sells/10000).toFixed(1) + '万'
    }
  },
  mounted() {
 
  },
  methods: {
    
  },
}
</script>

<style scoped>
  .shop-info {
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .shop-top img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.1);
  }
  .shop-name {
    position: relative;
    color: #999;
    top: -20px;
    margin-left: 10px;
  }
  .shop-mid {
    margin-top: 15px;
    display: flex;
    align-items: center;
  }

  .shop-mid-item {
    flex: 1;
  }

  .shop-mid-left {
    display: flex;
    justify-content: space-evenly;
    color: #333;
    text-align: center;
    border-right: 1px solid rgba(0,0,0,.1);
  }

  .sells-count, .goods-count {
    font-size: 18px;
  }

  .sells-text, .goods-text {
    margin-top: 10px;
    font-size: 12px;
  }
   .shop-mid-right table {
    width: 120px;
    margin-left: 30px;
  }

  .shop-mid-right table td {
    padding: 5px 0;
    font-size: 14px;
  }

  .shop-mid-right .score {
    color: #5ea732;
  }

  .shop-mid-right .score-better {
    color: #f13e3a;
  }

  .shop-mid-right .better span {
    background-color: #5ea732;
    color: #fff;
    text-align: center;
  }

  .shop-mid-right .better-more span {
    background-color: #f13e3a;
  }
  .shop-bottom {
    text-align: center;
    margin-top: 10px;
  }

  .enter-shop {
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
  }



</style>