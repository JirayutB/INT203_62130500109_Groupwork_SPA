<template>
  <div class="CookieHome font-mono text-center">
    <h1 class="text-4xl font-bold">THE SWEETEST RUNNING GAME EVER</h1>
    <h2 class="text-2xl font-bold">Time for an adventure with the Cookies!</h2>
    <p class="mt-16 pl-64 pr-64 text-xl pb-8">
    Brave, smart, adorable, and sometimes scary Cookies are waiting for you!
    Collect and upgrade Cookies & Pets to reach higher scores.
    New Cookies added every month!
    </p>
    <router-link to="/cookies" class="text-2xl text-green-500">View Cookies</router-link>
    <img class="pt-8" alt="CookieRun Wallpaper" src="../assets/crob-wallpaper.jpg">
  </div>
</template>

<script>
export default {
  name: 'CookieHome',
  props: {
    msg: String
  }
}
</script>



