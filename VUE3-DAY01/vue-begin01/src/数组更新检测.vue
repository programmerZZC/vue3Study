<script>
// 声明式渲染，可以提高开发效率
export default{
  data(){
    return{
        list:[1,3,6,4,7],
    };
  },
  methods:{
    changeList:function(){
        //通过索引值去修改数组，vue3可以
        //this.list[5]=7
        // push()给数组末尾添加元素
        // this.list.push(7,8,9)
        // pop()给数组删除掉数组最末尾的元素
        // this.list.pop();
        // shift();给数组第一位进行删除
        // this.list.shift()
        // unshift();给数组的首位开始添加元素
        // this.list.unshift(0,9,9);
        // splice(); 删除元素，插入元素，替换元素
        // 删除元素:第一个参数：表示开始插入或者开始删除的元素的位置下标
        //          第二个参数：表示传入言删除几个元素（如果没有传就删除后面所有的元素）
        //          this.list.splice(1,2)
        // 插入元素：
        // 第二个参数：传入0,并且后面接上要插入的元素
        // this.list.splice(1,0,7,8,9)
        // 替换元素：
        // 第二个参数：表示我们替换几个元素，后面的参数则表示用于替换前面的元素
        // this.list.splice(1,3,7,8,9)
        // sort();排序
        // reverse():反转
        // this.list.reverse()
    }
  }
};
</script>

<template>
  <div>
    <ul>
        <li v-for="item in list" :key="item">{{item}}</li>
    </ul>
    <button @click="changeList">改变数组</button>
  </div>
</template>

<style>
    
</style>
