<template>
  <div id="nav" class="bg-red-300 flex justify-center space-x-5 text-2xl">
    <router-link to="/">Home</router-link> 
    <router-link to="/cookies">Cookies</router-link> 
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #4473cc;
}

#nav a.router-link-exact-active {
  color: rgb(255, 255, 255);
}
</style>
