<template>
  <div class="community">
    <div class="nav">
      <router-link :to="{name: 'academic'}">学术讨论</router-link>
      <router-link :to="{name: 'download'}">资源下载</router-link>
      <router-link :to="{name: 'personal'}">个人中心</router-link>
    </div>

    <router-view />
  </div>
</template>
 
<script>
  export default {
    name: 'community',
    data () {
      return {
        msg:'Welcome to your community'
      }
    }
  }
</script>
 
<style scoped lang="scss">
  @import '../assets/styles/reset.css';

  .router-link-active {
    background: #000;
    color: #fff;
  }

  .nav a {
    display: inline-block;
    padding: 4px 10px;
    margin-right: 20px;
  }
</style>