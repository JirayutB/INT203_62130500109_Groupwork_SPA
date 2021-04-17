<template>
  <div class="home bg-yellow-200">
    <img class="mx-auto mb-16 pt-16" alt="CookieRun Logo" src="../assets/CROB-logo.jpg">
    <CookieHome/>
  </div>
</template>

<script>
// @ is an alias to /src
import CookieHome from '@/components/CookieHome.vue'

export default {
  name: 'Home',
  components: {
    CookieHome
  }
}
</script>
