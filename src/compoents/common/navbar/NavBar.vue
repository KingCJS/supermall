<template>
<div class="nav-bar">
    <div class= "left"><slot name= "left"></slot></div>
    <div class= "center"><slot name= "center"></slot></div>
    <div class= "right"><slot name= "right"></slot></div>
</div>
</template>
<script>
export default {
  name: "NavBar",
  data () {
    return {
    };
  }
}
</script>
<style  scoped>
  .nav-bar {
    width: 100%;
    display: flex;
    text-align: center;
    height: 44px;
    line-height: 44px;
    font-size: 16px;
  }

  .left,.right {
    width: 60px;
  }

  .center {
    flex: 1;
  }
</style>