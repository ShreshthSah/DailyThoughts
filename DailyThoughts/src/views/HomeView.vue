<script setup>

</script>

<template>
    <div class="card">
      
      <div class="card-body">
    
        <p class="card-text">Read your daily Thoughts...</p>
      
        
        <RouterLink class="btn btn-primary" to="/thoughts">Click here</RouterLink>
  </div>
</div>
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://wallpaper.dog/large/5507831.jpg" class="d-block w-100"  alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://wallpaperaccess.com/full/1915140.jpg" class="d-block w-100"   alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://wallpaperaccess.com/full/1915195.jpg" class="d-block w-100"   alt="...">
    </div>
  </div>
</div>


 
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
                new_IMG:'',
               
                
                errorMessage:null
              }
              )
            },
            created:async function(){
              try{
                this.loading=true
                let response=await UserService.getwallpaper()
                
                this.loading=false
                this.users=response.request.responseURL
                this.new_IMG=response.request.responseURL
                console.log(response.request.responseURL)
              }
              catch(err){
                this.loading=false
                this.errorMessage=err
                console.log(err)
              }
              
            },
            
            
          }
         
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
