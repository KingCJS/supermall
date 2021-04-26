<template>
  <scroll class="content" :pullUpLoad="true" :probe-type="3">
    <div>
      <cart-list-item
        v-for="item in cartList"
        :key="item.iid"
        :item-info="item"
      ></cart-list-item>
    </div>
  </scroll>
</template>

<script>
import CartListItem from "@/views/cart/childComponents/CartListItem";
import Scroll from "@/compoents/common/scroll/Scroll";
export default {
  name: "Cartlist",
  components: {
    Scroll,
    CartListItem,
  },
  data() {
    return {};
  },
  props: {
    cartList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  mounted() {},
  methods: {},
};
</script>

<style  scoped>
.content {
  background-color: #fff;
  height: calc(100% - 44px - 48px - 44px);
}
</style>