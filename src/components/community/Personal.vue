<template>
  <div class="personal">
    <button @click="handleClick">{{this.loginFlag ? '退出' : '登录'}}</button>
  </div>
</template>
 
<script>
  export default {
    name: 'personal',
    data () {
      return {
        loginFlag: false
      }
    },
    created() {
      console.log(this.$route.matched[0].meta.login)
      this.loginFlag = this.$route.matched[0].meta.login
    },
    methods: {
      handleClick() {
        this.loginFlag = !this.loginFlag;
        this.$route.matched[0].meta.login = this.loginFlag;
      }
    }

  }
</script>
 
<style scoped lang="scss">
  
</style>