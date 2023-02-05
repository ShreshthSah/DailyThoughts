<template>
  <nav>
   <div><router-link to="/">Home</router-link></div>
   <div><router-link to="/thoughts">TodayThought</router-link></div>
   <div><router-link to="/about">About</router-link></div>
   <div><router-link to="/register">Login</router-link></div>
   
  </nav>

</template>
<script>
export default{
    name:"Navbar"
}
</script>
<style>
nav{
    display: flex;
    justify-content: space-around;
}
</style>