<template>
  <div class="footer">
    <ul>
      <li>
        <router-link to="/">
          <font-awesome-icon icon="home" class="icon"/> 首页</router-link>
      </li>
      <li>
        <router-link to="/list">
          <font-awesome-icon icon="bolt" class="icon"/> 闪送超市</router-link>
      </li>
      <li>
        <router-link to="/cart">
          <font-awesome-icon icon="shopping-cart" class="icon"/> 购物车</router-link>
      </li>
      <li>
        <router-link to="/user">
          <font-awesome-icon icon="user" class="icon"/> 我的</router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  width: 100%;
  background-color: #f6f6f6;
  height: 60px;
  position: fixed;
  bottom: 0px;
  z-index: 999;

  li {
    float: left;
    width: 25%;
    text-align: center;

    .router-link-exact-active {
      color: #ffd600
    }

    .icon {
      // color: red;
      height: 36px;
      display: block;
      margin: 0 auto;
      font-size: 24px;
    }
  }
}
</style>

