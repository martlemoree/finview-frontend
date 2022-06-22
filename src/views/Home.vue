<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" height="240" width="180">
    <HelloWorld msg="Welcome to libview!"/>
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
