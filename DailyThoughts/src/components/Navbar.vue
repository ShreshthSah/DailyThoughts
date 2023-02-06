<template>
  <nav>
   <!-- <div><router-link to="/">Home</router-link></div>
   <div><router-link to="/thoughts">TodayThought</router-link></div>
   <div><router-link to="/about">About</router-link></div> -->
   <!-- <div><router-link to="/register">Login</router-link></div> -->
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <!-- <a class="navbar-brand" href="#">DailyThoughts</a> -->
      <div ><router-link class="navbar-brand fs-italic" to="/">DailyThoughts</router-link></div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item mx-2">
          <router-link class="nav-link fs-16px" to="/thoughts">Thoughts</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link fs-16px" to="/about">About</router-link>
        </li>
        
      
      </ul>
          <div class="nav-item mx-2"> 
            <router-link class="nav-link fs-15px" to="/login">
              Login
            </router-link>
           </div>
           
          </div>
  </div>
</nav>
   
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