<script>
// 声明式渲染，可以提高开发效率
export default{
  data(){
    return{
      message:"helloWorld",
      user:{
        name:"张三",
        age:18,
        sex:"男"
      }
    };
  },
  methods: {
    
  },
  watch:{ // 监听数据的变化
  // 每当message发生变化时，该函数将会执行
    // message:function(newValue,oldValue){//一个数据影响多个数据
    //     console.log(newValue);
    //     console.log(oldValue);
    //     // 执行异步操作，或者复杂的逻辑代码
    //     if(newValue.length<5 || newValue.length>10){
    //         console.log("输入框中的内容不能小于5或者大于10");
    //     }
    // }
    message:{
        immediate:true,//初始化的时候调用函数
        handler:function(newValue){
            if(newValue.length<5 || newValue.length>10){
             console.log("输入框中的内容不能小于5或者大于10");
            }
        }
    },
    // 监听不到对象中的属性变化，需要使用深度监听
    // user:{
    //     handler:function(newValue){
    //         console.log(newValue);
    //     },
    //     deep:true, //表示是否深度监听，侦听器会一层层向下遍历，给每一个属性都加上侦听器
    // }
     "user.name":{ //使用字符串的形式进行优化，只会单独监听对象中对应的属性
        handler:function(newValue){
            console.log(newValue);
        },
        deep:true, //表示是否深度监听，侦听器会一层层向下遍历，给每一个属性都加上侦听器
    }
  }
};
</script>

<template>
  <div>
    <p>{{message}}</p>
    <button @click="message='你好'">改变message</button>
    <!-- v-model：数据的双向绑定 -->
    <input type="text" v-model="message">
    <p>{{user.name}}</p>
    <button @click="user.name='李四'">改变名字</button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
#d1{
  color:red;
}
#d2{
  color:blue;
}
.d1{
  font-size:50px;
  color:blue;
}
</style>
