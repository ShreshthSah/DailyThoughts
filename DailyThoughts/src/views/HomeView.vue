<script setup>

</script>

<template>
    <div class="card">
      <!-- <h5 class="card-header">Featured</h5> -->
      <div class="card-body">
        <!-- <h5 class="card-title">Special title treatment</h5> -->
        <p class="card-text">Read your daily Thoughts...</p>
        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        
        <RouterLink class="btn btn-primary" to="/thoughts">Click here</RouterLink>
  </div>
</div>
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  src="https://wallpaperaccess.com/full/1915195.jpg" class="d-block w-70" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG5aFBX7uDGfEptcC-HvN7U3CHMd4iuvtmYQ&usqp=CAU" class="d-block w-70" alt="">
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="hhttps://wallpaperaccess.com/full/1915153.jpg" class="d-block w-70" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<!-- <div id="image">  <img src='https://images.unsplash.com/photo-1674596346743-89398a9dde7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NTU0ODM1NA&ixlib=rb-4.0.3&q=80&w=1080' alt=""/></div> -->
    <!-- <div id="item">
      <h3>Read your daily thought</h3>
    </div> -->
  
 
</template> 

<script>

import {UserService} from "../services/UserService"
export default{
  name:"Home",
  components:{
  
},
  data:function(){
        return(
            {
                users:UserService.getwallpaper(),
                loading:false,
                users:[],
               
                
                errorMessage:null
              }
              )
            },
            created:async function(){
              try{
                this.loading=true
                let response=await UserService.getwallpaper()
                
                this.loading=false
                this.users=response.request
                
                console.log(response.request.responseURL)
              }
              catch(err){
                this.loading=false
                this.errorMessage=err
                console.log(err)
              }
              
            },
            
          }
          // console.log(this.users)
</script>
<style>

h3{
  color: blue;
  font-size: 30px;
  text-align: center;

}
button{
  margin-left: 50%;
}
#item{
  position: absolute;
  top: 100px;
  left:100px;
}

</style>
