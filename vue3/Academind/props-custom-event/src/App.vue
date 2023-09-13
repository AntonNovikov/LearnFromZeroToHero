<template>
 <div>
  <active-user :username="user.name" :userage="user.age"></active-user>
  <user-data @set-data="setUserData"></user-data>
 </div>
</template>

<script>

export default {
data(){
  return{
    user:{
      name: "ds",
      age: 31,
    }
  }
},
methods: {
  setUserData(name,age){
this.user = {
  name,
  age: +age
}
  }
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

section{
    margin: 2rem auto;
    min-width: 40rem;
    border-radius: 12px;
    border: 1px solid #ccc;
    padding: 3px;
}
</style>
