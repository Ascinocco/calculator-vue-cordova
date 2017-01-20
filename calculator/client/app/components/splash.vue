<template>
    <div id="splash-screen">
        <img src="/img/splash.gif" alt="Splash" height="100%" width="100%">
    </div>
</template>
<style>

</style>
<script>
    export default{
        data(){
            return {
                msg: 'Calc It!'
            }
        },

        mounted() {
            console.log('Splash Component Mounted...');

            // annoying transference of state
            var that = this;

            var splashCount = function(that) {
                that.$router.push('/contact')
            }

            setTimeout(splashCount, 5000, that)
        }
    }
</script>
