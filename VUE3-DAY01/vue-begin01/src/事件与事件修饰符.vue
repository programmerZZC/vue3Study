<script>
// 声明式渲染，可以提高开发效率
export default{
  data(){
    return{
        counter:0,
        age:18
    };
  },
  methods:{
    // addCounter(number){
    //     this.counter+=number;
    // }
    addCounter(number,e){
        this.counter+=number;
        console.log(e);
    },
    addAge(){
        this.age++
    },
    divClick:function(){
        console.log('父元素展示');
    },
    btnClick:function(){
        console.log('子元素展示');
    },
    submitClick:function(){
        console.log('提交数据成功');
    },
    oneClick:function(){
        console.log('只会触发一次');
    },
    keyUp:function(){
        console.log('键盘被按下了，数据提交成功');
    }
  }
};
</script>

<template>
  <div>
    <!-- 绑定事件，直接通过js代码处理 -->
    <h2 @click="counter++">{{counter}}</h2>
    <!-- 绑定事件，没有传递参数 -->
    <h2 @click="addCounter">{{counter}}</h2>
    <!-- 绑定事件，传递参数 -->
    <h2 @click="addCounter(5)">{{counter}}</h2>
    <!-- 绑定事件，既传递参数，也要有事件对象 -->
    <h2 @click="addCounter(5,$event)">{{counter}}</h2>
    <!-- 一个事件绑定多个处理函数 -->
    <h2 @click="addCounter(5),addAge()">{{counter}}---{{age}}</h2>
    <!-- 事件修饰符 -->
    <!-- .stop阻止事件冒泡 -->
    <div @click="divClick">
        <button @click.stop="btnClick">按钮</button>
    </div>
    <!-- .prevent 阻止默认行为 -->
    <form action="">
        <input type="submit" value="提交" @click.prevent="submitClick">
    </form>
    <!-- .once 只会出发一次回调 -->
    <button @click.once="oneClick">只触发一次</button>
    <!-- 按键修饰符 -->
    <!-- .{keyCode(键盘编码) | keyAlias(键盘的简写)} 监听键盘的某一个键帽-->
    <input type="text" @keyup.enter="keyUp">
  </div>
</template>

<style>
    
</style>
