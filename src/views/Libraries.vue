<template>
  <h1>Welcome to Libraries</h1>
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
  name: 'Libraries',
  data () {
    return {
      libraries: []
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
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/libraries'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(library => {
        this.libraries.push(library)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
