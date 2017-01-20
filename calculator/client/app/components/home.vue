<template>
    <div class="home-test">
        <h1>Calculator Splash Page</h1>
        <h2>{{ msg }}</h2>
    </div>
</template>
<style>
    .home-test {
        background-color: blue;
    }
</style>
<script>
    export default{
        data(){
            return {
                msg: 'Calc It!'
            }
        }
    }
</script>
