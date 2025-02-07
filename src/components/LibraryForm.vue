<template>
  <button class="btn btn-dark sticky-button" data-bs-toggle="offcanvas" data-bs-target="#add-library-offcanvas" aria-controls="#add-library-offcanvas">
    New Library
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="add-library-offcanvas" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">New Library</h5>
      <button type="button" id="close-offcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="text-start needs-validation" id="add-library-form" novalidate>
      <div class="mb-3">
        <label for="library-name" class="form-label">Library Name</label>
        <input type="text" class="form-control" id="library-name" v-model="libraryName" required>
        <div class="invalid-feedback">
          Please provide the library name.
        </div>
      </div>
      <div class="mb-3">
        <label for="programming-language" class="form-label">Programming Language</label>
        <select id="programming-language" class="form-select" v-model="programmingLanguage" required>
          <option value="" selected disabled>Choose...</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="PHP">PHP</option>
          <option value="CSS">CSS</option>
          <option value="C#">C#</option>
          <option value="C++">C++</option>
          <option value="TypeScript">TypeScript</option>
          <option value="Ruby">Ruby</option>
          <option value="C">C</option>
          <option value="Swift">Swift</option>
          <option value="R">R</option>
          <option value="Objective-C">Objective-C</option>
          <option value="Shell">Shell</option>
          <option value="Scala">Scala</option>
          <option value="Go">Go</option>
          <option value="PowerShell">PowerShell</option>
          <option value="Kotlin">Kotlin</option>
          <option value="Rust">Rust</option>
          <option value="Dart">Dart</option>
          <option value="other">other</option>
        </select>
        <div class="invalid-feedback">
          Please select a programming language or choose 'other'.
        </div>
      </div>
      <div class="mb-3">
        <label for="latest-version" class="form-label">Latest Version</label>
        <input type="text" class="form-control" id="latest-version" v-model="latestVersion" required>
        <div class="invalid-feedback">
          Please provide the latest version.
        </div>
      </div>
      <div class="mb-3">
        <label for="use-field" class="form-label">Field of Use</label>
        <input type="text" class="form-control" id="use-field" v-model="useField" required>
        <div class="invalid-feedback">
          Please provide the field of use.
        </div>
      </div>
      <div class="mb-3">
        <label for="website" class="form-label">Website</label>
        <input type="text" class="form-control" id="website" v-model="website">
      </div>
      <div v-if="this.serverValidationMessages">
        <ul>
          <li v-for="(message, index) in serverValidationMessages" :key="index" style="color: red">
            {{ message }}
          </li>
        </ul>
      </div>
      <div class="mt-5">
        <button class="btn btn-primary me-3" type="submit" @click.prevent="createLibrary">Create</button>
        <button class="btn btn-danger" type="reset">Reset</button>
      </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LibraryForm',
  data () {
    return {
      libraryName: '',
      programmingLanguage: '',
      latestVersion: '',
      useField: '',
      website: '',
      upvotes: 0,
      downvotes: 0,
      createdAt: '',
      updatedAt: '',
      serverValidationMessages: []
    }
  },
  emits: ['created'],
  methods: {
    async createLibrary () {
      if (this.validate()) {
        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/libraries'

        const headers = new Headers()
        headers.append('Content-Type', 'application/json')

        const library = JSON.stringify({
          libraryName: this.libraryName,
          programmingLanguage: this.programmingLanguage,
          latestVersion: this.latestVersion,
          useField: this.useField,
          website: this.website,
          upvotes: this.upvotes,
          downvotes: this.downvotes,
          createdAt: this.createdAt,
          updatedAt: this.updatedAt
        })

        const requestOptions = {
          method: 'POST',
          headers: headers,
          body: library,
          redirect: 'follow'
        }

        const response = await fetch(endpoint, requestOptions)
        await this.handleResponse(response)
      }
    },
    async handleResponse (response) {
      if (response.ok) {
        this.$emit('created', response.headers.get('location'))
        document.getElementById('close-offcanvas').click()
      } else if (response.status === 400) {
        response = await response.json()
        response.errors.forEach(error => {
          this.serverValidationMessages.push(error.defaultMessage)
        })
      } else {
        this.serverValidationMessages.push('Unknown error occurred')
      }
    },
    validate () {
      const form = document.getElementById('add-library-form')
      form.classList.add('was-validated')
      return form.checkValidity()
    }
  }
}
</script>

<style scoped>
.sticky-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  border-radius: 30px;
}
</style>
