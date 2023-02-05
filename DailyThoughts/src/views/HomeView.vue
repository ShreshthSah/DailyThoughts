<script setup>

</script>

<template>
  <h1>DailyThought</h1>
<div id="image">  <img src='https://images.unsplash.com/photo-1674596346743-89398a9dde7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NTU0ODM1NA&ixlib=rb-4.0.3&q=80&w=1080' alt=""/></div>
    <div>
      <h3>Read your daily thought</h3>
      <button><RouterLink to="/thoughts">Click here</RouterLink></button>
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
#image{
  position:relative;
  left:0px;
  top:0px;
}
h3{
  color: blue;
  font-size: 30px;
  text-align: center;

}
button{
  margin-left: 50%;
}
</style>
