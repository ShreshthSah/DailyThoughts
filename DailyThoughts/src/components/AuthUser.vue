<template>

    <h2>{{ this.isLoggedIn }}</h2>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div classname='card'>
                    <div  classname='card-body'>
                        <div v-if="isLoggedIn">
                             <p class="h3 fw-bold text-success">Welcome User</p>
                             <p class="fst-italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur incidunt ratione modi pariatur a eaque accusantium, nobis quisquam iusto rem adipisci nostrum, earum culpa voluptatum sunt facere ut omnis impedit.</p>

                        </div>
                        <div v-if="!isLoggedIn" >
                             <p class="h3 fw-bold text-danger">Thank You!</p>
                             <p class="fst-italic">Lorem, ipsum dolor.</p>

                        </div>
                        <div >
                            <button v-if="!isLoggedIn" @click="login()" class="btn btn-success btn-sm m-1">Login</button>
                            <button v-if="isLoggedIn" @click="logout()" class="btn btn-danger btn-sm m-1">Logout</button>
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name:"AuthUser",
    data:function(){
        return{
            isLoggedIn:false
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