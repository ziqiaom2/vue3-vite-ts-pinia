<script setup lang="ts">

import { useMainStore } from '../store/index'

import { ref } from 'vue'
import { storeToRefs } from 'pinia'

defineProps<{ msg: string }>()

const count = ref(0)
//下面不能解构赋值，会丢失响应式,可以使用storeToRefs from pinia 这个api
const mainStore = useMainStore()
console.log('counter:', mainStore.counter)

//可以取出来state，不能取出来actions,把解构出来的数据做响应式代理
const {counter, name,arr,count10} = storeToRefs(mainStore)

const change = () => {

  // 方式1
  // mainStore.counter++

  // 方式2 批量更新，有性能优化
  // mainStore.$patch({
  //   counter: mainStore.counter + 1,
  //   name: 'xxxx'
  // })

  // 方式3
  // mainStore.$patch(state =>{
  //   state.counter++
  //   state.name = 'yyyy'
  //   state.arr.push(4)
  // })

  // 方式4 封装业务逻辑到actions
  // mainStore.increment()
  // mainStore.changeName()
  // mainStore.arrChange()

  // 方式5 actions内部使用$patch批量修改
  mainStore.changeAll()
}




</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    See
    <code>README.md</code> for more information.
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <div>{{ mainStore.counter }}</div>
  <button @click="mainStore.increment">点击+1</button>
  <hr />
  <div>{{ counter }}</div>
  <button @click="mainStore.increment">点击+1</button>
  <hr />
  <div>{{ name }}</div>
  <div>{{ counter }}</div>
  <button @click="change">点击+1并修改名称</button>
  <hr />
  <div>{{ arr }}</div>
  <button @click="change">点击数组加入</button>
  <hr />
  <div>{{ count10 }}</div>

</template>


<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
