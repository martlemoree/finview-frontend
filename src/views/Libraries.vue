<template>
  <h1>Welcome to Libraries</h1>
    <div class="container-fluid">
      <library-list :libraries="this.libraries"></library-list>
    </div>
    <library-form></library-form>
</template>

<script>
import LibraryList from '@/components/LibraryList'
import LibraryForm from '@/components/LibraryForm'

export default {
  name: 'Libraries',
  components: {
    LibraryForm,
    LibraryList
  },
  data () {
    return {
      libraries: []
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
