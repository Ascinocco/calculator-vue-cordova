<template>
    <div id="splash-screen">
        <img src="/img/splash.gif" alt="Splash" height="100%" width="100%">
    </div>
</template>
<style>

</style>
<script>
    export default{
        mounted() {
            console.log('Splash Component Mounted...');
            var that = this;

            $("div#splash-screen").delay(5000).fadeOut(1000);

            var changePage = function(that) {
                that.$router.push('/calculator')
            }

            setTimeout(changePage, 6100, that)
        }
    }
</script>
