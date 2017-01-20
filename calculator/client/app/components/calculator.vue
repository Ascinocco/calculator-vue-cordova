<template>
    <div class="calc-test">
        <h1>Calculator Page</h1>
        <h2>{{ msg }}</h2>
    </div>
</template>
<style>
    .calc-test {
        background-color: firebrick;
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'Calca palooza'
            }
        },
    }
</script>
