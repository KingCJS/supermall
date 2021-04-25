<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartCount }})</div>
    </nav-bar>
    <cart-list :cart-list="cartList"></cart-list>

  </div>
</template>

<script>
import NavBar from "@/compoents/common/navbar/NavBar";
import CartList from '@/views/cart/childComponents/CartList'
import BottomBar from '@/views/cart/childComponents/BottomBar'
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    BottomBar,
  },
  computed: {
    cartCount() {
      return this.$store.getters.cartCount;
    },
    cartList() {
      return this.$store.getters.cartList;
    },
  },
};
</script>

<style scoped>
#cart {
  /*position: relative;*/
  height: 100vh;
}

.nav-bar {
  position: relative;
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
  z-index: 9;
}

.cart-list {
  position: absolute;
  top: 44px;
  bottom: 49px;
  width: 100%;
}
</style>
