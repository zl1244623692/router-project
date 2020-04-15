<template>
  <div id="addStudent">
    学员姓名： 
      <input type="text" v-model="name">
      <!-- 触发add事件 -->
      <button type="button" class="btn" @click="add">添加姓名</button>
  </div>
</template>
 
<script>
  export default {
    name: 'addStudent',
    data () {
      return {
        name: ''
      }
    },
    methods: {
      add() {
        // 自定义一个add事件
        this.$emit('add', this.name)
        this.name = ''
      }
    }
  }
</script>
 
<style scoped lang="scss">
input {
  height: 28px;
}
.btn {
  margin-left: 20px;
  width: 80px;
  line-height: 30px;
  border: none;
  outline: none;
}
  
</style>