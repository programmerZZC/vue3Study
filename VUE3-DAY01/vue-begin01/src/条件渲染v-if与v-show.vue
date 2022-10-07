<script>
// 声明式渲染，可以提高开发效率
export default{
  data(){
    return{
     age:18,
     sex:'woman',
     isShow:true
    };
  },
};
</script>

<template>
  <div>
    <!-- v-if -->
    <p v-if="age>18">我是成年人了</p>
    <p v-else-if="age==18">我今天正好18岁</p>
    <!-- <p v-if="age<18">我还是个小朋友</p> -->
    <p v-else>我还是个小朋友</p>
    <!-- 在<template>元素上使用v-if条件渲染分组 -->
    <template v-if="age>=18">
        <p>你好</p>
        <p>你好</p>
        <p>你好</p>
        <p>你好</p>
        <p>你好</p>
    </template>  
    <!-- v-show -->
    <p v-show="sex=='man'">男</p>
    <p v-show="sex=='woman'">女</p>
    <!-- v-show只是简单的切换元素的display CSS property 带有v-show的元素始终被渲染并保留在DOM里-->
    <!-- v-if: 只有后面为false，对应的元素以及子元素都不会被渲染，控制DOM元素的创建和销毁-->
    <h2 v-if="isShow">标题内容1-v-if</h2>
    <h2 v-show="!isShow">标题内容2-v-show</h2>
    <button @click="isShow=!isShow">转换isShow</button>
  </div>
</template>

<style>
    
</style>
