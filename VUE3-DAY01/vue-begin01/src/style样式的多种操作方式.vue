<script>
// 声明式渲染，可以提高开发效率
export default{
  data(){
    return{
      activeColor:'red',
      fontSize:'50px',
      bgcColor:'pink',
      styleObj:{
        color:'red',
        fontSize:'50px',
        'background-color':'pink',
      }
    };
  },
};
</script>

<template>
  <div>
    <!-- 第一种：放置字符串 -->
    <p style="color:red">hello</p>
    <!-- 第二种：放置对象 -->
    <p :style="styleObj">hello1</p>
    <p :style="[styleObj,{border:'5px solid blue'}]">hello2</p>
  </div>
</template>

<style>
    
</style>
