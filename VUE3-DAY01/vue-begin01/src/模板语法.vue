<script>
// 声明式渲染，可以提高开发效率
export default{
  data(){
    return{
      num:0,
      uname:"张三",
      msg:"<h1>标题</h1>",
      id:"d1",
      url:'https://img-blog.csdnimg.cn/20201123190540260.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NoaXFpYW54aVNISVFJQU5YSQ==,size_16,color_FFFFFF,t_70#pic_center',
      attributeName:"id",
      mouseEvent:"click"
    };
  },
  methods: {
    //给vue定义方法
    changeUname: function () {
      this.uname='李四'
    },
    changeColor:function(){
      this.id='d2'
    }
  },
};
</script>

<template>
  <div>
    <p>{{num}}</p>
    <p>{{uname}}</p>
    <!-- v-once：当数据改变时，插值处的内容不会更新 -->
    <p v-once>{{uname}}</p>
    <p>{{msg}}</p>
    <!-- v-html：让内容以html的形式显示 -->
    <p v-html="msg"></p>
    <button @click="changeUname">改变名字</button>
    <!-- v-bind：动态绑定属性的内容 -->
    <p v-bind:id="id">v-bind绑定</p>
    <img v-bind:src="url" alt="">
    <button @click="changeColor">改变颜色</button>
    <button @click="id='d2'">改变颜色2</button>
    <!-- 使用javascript表达式 -->
    <p>{{num+1}}</p>
    <p>{{uname.split('').reverse().join('')}}</p>
    <p v-bind:id="id+1">v-bind绑定</p>
    <!-- v-bind语法糖 -->
    <p :id="id">v-bind绑定</p>
    <!-- v-on:用于监听DOM事件 -->
    <button v-on:click='changeColor'>改变颜色</button>
    <!-- v-on语法糖：@ -->
    <button @click="changeColor">改变颜色</button>
    <!-- 动态参数 -->
    <!-- 动态属性 -->
    <p v-bind:[attributeName]="id">v-bind绑定</p>
    <button @click="attributeName='class'">改变属性</button>
    <!-- 动态事件 -->
    <button @[mouseEvent]="attributeName='class'">改变属性</button>
    <button @click="mouseEvent='mouseover'">改变事件</button>
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
