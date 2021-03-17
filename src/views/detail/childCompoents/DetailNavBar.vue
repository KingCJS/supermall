<template>
    <div>
        <nav-bar>
            <div slot="left" class="back" @click="backClick">
                <img src="~assets/img/common/back.svg" alt="">
            </div>
            <div slot="center" class="title">
                <div v-for="(item, index) in title" 
                class="title-item"
                :class="{active : index === currentIndex}"
                @click= "titleClick(index)">
                {{item}}
            </div>
            </div>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from '@/compoents/common/navbar/NavBar'

export default {
    name: 'DetailNavBar',
    components: { 
        NavBar,
    },

    data() {
        return {
            title: ['商品', '参数', '评论', '推荐'],
            currentIndex: 0,
        }
    },
    mounted() {
        
    },
    methods: {
        titleClick(index) {
            this.currentIndex = index
        },
        backClick() {
            this.$router.back()
        }
    },
};
</script>

<style  scoped>
    .title {
        display: flex;
        font-size: 13px;
    }
    .title-item {
        flex: 1;
    }
    .active {
        color: var(--color-high-text)
    }
    .back {
        margin-top: 6px;
    }

    

</style>