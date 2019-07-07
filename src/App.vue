<template>
 <div id="app">
     <h1>Welcome to Your first Vue.js</h1>
     <HelloWorld/>
 </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
    name: "App",
    components: {
        HelloWorld
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smooting: antialiased;
    -moz-osx-font-smooting: grayscale;
    text-align: center;
    color: darkgrey;
    margin-top: 60px;
    
}
</style>