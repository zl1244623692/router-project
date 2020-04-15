<template>
  <div class="student">
    <!-- 父组件监听add事件 -->
    <AddStudent @add="add"></AddStudent>
     <!-- 将值赋值给 StudentList 组件 -->
    <StudentList :studentList="studentList"></StudentList>
    
  </div>
</template>
 

<script>
  import AddStudent from '@/components/student/AddStudent'
  import StudentList from '@/components/student/StudentList'

  export default {
    name: 'student',
    components:{
      AddStudent,
      StudentList
    },
    data () {
      return {
        studentList: []
      }
    },
    methods: {
      add(name) {
        // 添加值给 studentList 数组
        this.studentList.push(name);
      },
    }
  }
</script>
 
<style scoped lang="sass">
  
</style>