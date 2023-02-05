<template>
    
 <div id="container">

    <div v-if="!isLoggedIn" v-for="user in users" :key="'user.author'" >
        <!-- <h3>  {{ UserService.getAllUsers() }}</h3> -->
        <div><h3>{{ user.text }}</h3> --> <p>{{ user.author }}</p></div>
        <br>
        <!-- <div ></div> -->
        
    </div>
    <div v-if="!isLoggedIn">
        Please first login into your account
        <RouterLink to="/register">Register</RouterLink>
    </div>
    
    
</div>
<!-- <div><img src={{ wall }} alt=""></div>
p -->
</template>
<style>
#container{
    background-color:white;
    color: blue;
}
</style>
<script>

import {UserService} from "@/services/UserService"
// UserService.getwallpaper().then((res)=>{
//     wally=res.data
// })
// console.log(wall)

import Layout from './Layout.vue';
export default{
    name:'Thoughts',
    data:function(){
        return(
            {
                users:UserService.getAllUsers(),
                loading:false,
                users:[],
                wall:[],
                isLoggedIn:false,
              
                errorMessage:null
            }
        )
    },
    created:async function(){
        try{
            this.loading=true
            let response=await UserService.getAllUsers()
            
            this.loading=false
            this.users=response.data
            
            console.log(response.data)
        }
        catch(err){
            this.loading=false
            this.errorMessage=err
            console.log(err)
        }

    },
    methods:{
        login:function(){
            this.isLoggedIn=true
        },
        logout:function(){
            this.isLoggedIn=false
        }
    }
   
      
}


</script>