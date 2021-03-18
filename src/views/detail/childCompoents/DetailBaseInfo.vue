<template>
    <div v-if="Object.keys(goods).length !== 0" class="base-info">
        <div class="info-title">{{goods.title}}</div>
        <div class="info-price">
          <span class="newPrice">{{goods.newPrice}}</span>
          <span class="oldPrice">{{goods.oldPrice}}</span>
          <span class="discount">{{goods.discount}}</span>
        </div>
        <div class="info-other">
          <span>{{goods.columns[0]}}</span>
          <span>{{goods.columns[1]}}</span>
          <span>{{goods.services[goods.services.length-1].name}}</span>
        </div>
        <div class="info-service">
          <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
            <img :src="goods.services[index-1].icon" alt="">
            <span>{{goods.services[index-1].name}}</span>
           </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailBaseInfo',

    data() {
        return {
            
        };
    },
    props: {
        goods: {
            type: Object,
        }
    },
    mounted() {

    },
    methods: {
        
    },
};
</script>

<style scoped>
    .base-info {
      margin-top: 15px;
      padding: 0 10px;
      color: #999;
      border-bottom: 5px solid #f2f5f8;
    }

    .info-title {
      color: #222;
    }
    .info-price {
      margin-top: 10px;
    }
    .newPrice{
      color: #ff5777;
      font-size: 24px;
    }
    .oldPrice {
      margin-left: 5px;
      font-size: 14px;
      text-decoration:line-through
    }
    .discount {
      position: relative;
      margin-left: 5px;
      font-size: 12px;
      padding: 2px 5px;
      background-color: var(--color-high-text);
      color: #ffffff;
      border-radius: 8px;
      top: -8px;
    }
    .info-other {
      display: flex;
      margin-top: 20px;
      line-height: 15px;
      margin-bottom: 20px;
      padding-bottom: 5px;
      font-size: 12px;
      justify-content: space-between;
      border-bottom: 1px solid rgba(100,100,100,.1);
    }
    .info-service {
      display: flex;
      justify-content: space-between;
      font-size: 10px;
      padding-bottom: 20px;
    }
    .info-service img {
      width: 14px;
      height: 14px;
      position: relative;
      top: 2px;
    }
    .info-service-item span {
    font-size: 13px;
    color: #333;
  }


</style>