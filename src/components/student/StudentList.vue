<template>
  <div id="studentList">
    学员列表：
      <ul>
        <!-- 渲染数据 -->
        <li v-for="(item,index) in studentList" :key="index">
          {{item}}
        </li>
      </ul>
  </div>
</template>
 
<script>
  export default {
    name: 'studentList',
    props: ['studentList'],
    data () {
      return {
          
      }
    }
  }
</script>
 
<style scoped lang="scss">
  
</style>