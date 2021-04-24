<template>
    <div class="goods">
        <goods-list-item v-for="item in goods" :goods-item = "item"></goods-list-item>
    </div>
</template>

<script>
import GoodsListItem from '@/compoents/content/goods/GoodsListItem'



export default {
    
    name: 'GoodsList',
    components: {
        GoodsListItem,
    },
    props: {
        goods: {
            type: Array,
            default() {
                return [] 
            }
        }
    },
    directives: {

    },
    data() {
        return {
            
        };
    },
    mounted() {
        
    },
    methods: {
        
    },
};
</script>

<style  scoped>
    .goods {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 2px;
    }
    </style>