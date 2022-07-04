<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" height="240" width="180">
    <HelloWorld msg="Welcome to libview!"/>
    <p>If you're new, check out the About page. Otherwise go searching for the best library for your project.</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
