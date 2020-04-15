<template>
  <div id="app">
    <div class="header">
      <div class="center">
        <img src="./assets/images/logo.png" alt="" class="logo">
        <ul class="nav">
          <router-link tag="li" to="/home">首页</router-link> 
          <router-link tag="li" to="/learn">课程学习</router-link>
          <router-link tag="li" to="/student">学员展示</router-link>
          <router-link tag="li" to="/about">关于</router-link>
          <router-link tag="li" to="/community">社区</router-link>
        </ul>
      </div>
    </div>

    <router-view class="router-view"/>

    <!--  组件复用 因为组件守卫时首页的登录无法完成，故注释-->
    <!-- <router-view class="router-view" name="/academic"/>    -->

    <div class="footer">
      footer
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import './assets/styles/reset.css';

.router-link-active {
  border-bottom: 2px solid #fff;
}

.router-link-exact-active {
  border-bottom: 2px solid #fff;
}

.header {
  background-color: #000;
  line-height: 70px;
  padding-bottom: 2px;
}

.header .center {
  display: flex;
  justify-content: space-between;
  width: 800px;
  margin: 0 auto;
}
.header .center img {
  width: 50px;
  height: 50px;
  vertical-align: middle;
  margin-top: 10px;
}

.header .center ul {
  display: flex;
}
.header .center ul li {
  color: #fff;
  padding: 0 30px;
  cursor: pointer;
}
.footer {
  position: fixed;
  bottom: 0;  
  width: 100%;
  height: 100px;
  background-color: #000;
}
.router-view {
  width: 800px;
  /* min-height: 500px; */
  margin: 0 auto;
  padding-top: 40px;
}
</style>
