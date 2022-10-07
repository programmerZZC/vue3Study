<script>
// 声明式渲染，可以提高开发效率
export default{
  data(){
    return{
      message:"helloWorld"
    };
  },
  computed:{//计算属性，只要依赖值不变，就不会重新计算，计算属性将基于它们的响应依赖关系缓存，提高性能
    // 简写： reverseMsg:function(){
    //     console.log("计算属性");
    //     return this.message.split('').reverse().join('')
    // }
    // 每一个计算属性中都有一个getter和setter
    // 完整的写法:
    reverseMsg:{
        // 计算属性一般是没有set方法，计算属性是只读属性
        set:function(newValue){
             // 在设计或者更改计算属性的时候调用
             console.log(newValue);
             this.message=newValue;
        },
        get:function(){
            return this.message.split('').reverse().join('')
        }
    }
  },
  methods: {
    reverseMessage:function(){
        console.log("methods");
        return this.message.split('').reverse().join('');
    }
  },
};
</script>

<template>
  <div>
    <p>{{message}}</p>
    <!-- 第一种：js表达式，总共会计算三次 -->
    <p>{{message.split('').reverse().join('')}}</p>
    <!-- 第二种：计算属性 -->
    <p>{{reverseMsg}}</p>
    <p>{{reverseMsg}}</p>
    <!-- 第三种：使用methods中的方法 -->
    <p>{{reverseMessage()}}</p>
    <p>{{reverseMessage()}}</p>
    <button @click="message='你好'">改变message</button>
    <button @click="reverseMsg='你好'">改变reverseMessage</button>
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
