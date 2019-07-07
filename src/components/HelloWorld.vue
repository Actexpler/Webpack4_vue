<template>
    <div class="hello">
       <h1>{{msg}}</h1>
       <h2>Essential Links</h2>
       <ul>
           <li>
               <a
                 href="#"
               >
                Core Docs
               </a>
           </li>
       </ul>
       <img src="static/img/barM.png">
    </div>
</template>

<script>
    export default {
        name: "HelloWorld",
        data() {
            return {
                msg: "Welcome to Your Vue.js App"
            }
        }
    }

</script>
<style scoped>
h1, h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color:aquamarine;
}
</style>