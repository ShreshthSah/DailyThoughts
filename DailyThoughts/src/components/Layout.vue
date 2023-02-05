<template>
 <div id="container">
    <img src={{ linki }} alt="">

 </div>

</template>
<script>
 export default{
    name:"Layout",
    props:{
         linki:{type:Text,required:true},
        

    }

 }

</script>
<style>
#container{
    padding: 7px;
    border: 1px solid red;
}
</style>