<script>
import Hello1 from './components/Content1.vue' 
// 声明式渲染，可以提高开发效率
export default{
  data(){
    return{
      message:"helloworld",
      isShow:true
    };
  },
  components:{
    Hello1
  }
};
</script>

<template>
  <div>
    <Hello1 v-if="isShow"/>
    <button @click="isShow=!isShow">控制Hello组件aaa</button>
  </div>
</template>

<style>
    
</style>
