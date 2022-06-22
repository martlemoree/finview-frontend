<template>
  <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col" v-for="library in libraries" :key="library.id">
      <div class="col">
        <div class="card">
          <img :src="getImage(library)" class="card-img-top" :alt="library.libraryName">
          <div class="card-body">
            <h5 class="card-title">{{ library.libraryName }}</h5>
            <p class="card-text">
              {{ library.libraryName }} ist eine {{ library.programmingLanguage }} Bibliothek.
              Die neueste Version ist die {{ library.latestVersion }} und es wird für {{ library.useField }} benutzt.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LibraryList',
  props: {
    libraries: {
      type: Array,
      required: true
    }
  },
  methods: {
    getImage (library) {
      if (library.programmingLanguage === 'PYTHON') {
        return require('../assets/python.png')
      } else if (library.programmingLanguage === 'JAVASCRIPT') {
        return require('../assets/javascript.png')
      }
    }
  }
}
</script>

<style scoped>

</style>
