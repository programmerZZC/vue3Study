<script>
import Content from './components/Content.vue'
import {provide,ref}  from 'vue';
export default {
  data(){
    return {
      message:"helloworld",
    };
  },
// 组合式API,将同一个逻辑关注点相关代码收集在一起
setup(){
  const name=ref('张三')
  provide('name',name)
  function changeName(){
    name.value='李四'
  }
  return {changeName};
},

components:{
  Content,
},
};
</script>

<template>
  <div>
    <Content/>
    <button @click="changeName">改变name</button>
  </div>
</template>

