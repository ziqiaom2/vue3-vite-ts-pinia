import { defineStore } from 'pinia'

export const useMainStore = defineStore('main',{
  state: ()=>{
    return {
      counter:100,
      name: 'aabb',
      arr: [1,2,3]
    }
  },

getters: {
  // count10 (state){
  //   return state.counter + 10
  // }

  count10 ():number {
    return this.counter + 20
  }
},
actions:{
  increment (){
    this.counter++
  },
  changeName (){
    this.name = 'qqqq'
  },
  arrChange(){
    this.arr.push(5) 
  },
  changeAll (){
    this.$patch(state =>{
      this.counter++
      this.name = 'qqqq'
      this.arr.push(5)
    })
  }
}

})