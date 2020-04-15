<template>
  <div class="academic">
    <ul>
      <router-link
        :to="{name: 'question', params: {id: item.questionId}}" 
        tag="li" 
        v-for="item in questionList"
        :key="item.questionId"
        >{{item.title}}</router-link>
    </ul>

    <router-view />
  </div>
</template>
 
<script>
export default {
  name: "academic",

  // 组件内守卫
  // beforeRouteEnter(to, from, next) {
  //   // 如果现在的状态是登录的，则直接进入，不用登录询问
  //   const isLogin = to.matched[0].meta.login;
  //   if(isLogin) {
  //     next();
  //     return
  //   }
  //   const answer = confirm('你还没有登录，要登录后才能浏览信息，要登录吗？')
  //   if(answer) {
  //     next({name: 'personal'})
  //   } else {
  //     next(false)
  //   }
  // },

  // 是否要离开
  beforeRouteLeave(to, from, next) {
    const answer = confirm('你确定要离开吗？');
    if(answer) {
      next()
    } else {
      next(false)
    }
  },

  data() {
    return {
      questionList: [
        {
          questionId: 201801,
          title: "到底什么是es6中的class（类）？怎么实现class（类）？"
        },
        {
          questionId: 201802,
          title:
            "什么是es6箭头函数？与普通函数主要区别在哪里？到底该不该使用箭头函数？"
        },
        {
          questionId: 201803,
          title:
            "什么是es6的解构赋值，每次都创建一个对象吗？会加重GC的负担吗？为什么？"
        }
      ]
    };
  }
};
</script>
 
<style scoped lang="scss">
  ul {
    margin-top: 20px;
  }
   ul li{
     line-height: 34px;
   }
</style>