<template>
  <div class="col" v-for="library in libraries" :key="library.id">
    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            <img :src="getImage(library)" :alt="library.libraryName" height="36" width="54"> {{ library.libraryName }}
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
          <div class="accordion-body">
            <strong>The {{ library.libraryName }} library is written in {{ library.programmingLanguage }}.</strong> At the moment the latest version is <code>{{ library.latestVersion }}</code>. The library is used in {{ library.useField }}.
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
      if (library.programmingLanguage === 'JavaScript') {
        return require('../assets/javascript.png')
      } else if (library.programmingLanguage === 'Python') {
        return require('../assets/python.png')
      } else if (library.programmingLanguage === 'Java') {
        return require('../assets/java.png')
      } else if (library.programmingLanguage === 'PHP') {
        return require('../assets/php.png')
      } else if (library.programmingLanguage === 'CSS') {
        return require('../assets/css.png')
      } else if (library.programmingLanguage === 'C#') {
        return require('../assets/csharp.png')
      } else if (library.programmingLanguage === 'C++') {
        return require('../assets/cplusplus.png')
      } else if (library.programmingLanguage === 'Typescript') {
        return require('../assets/typescript.png')
      } else if (library.programmingLanguage === 'Ruby') {
        return require('../assets/ruby.png')
      } else if (library.programmingLanguage === 'C') {
        return require('../assets/c.png')
      } else if (library.programmingLanguage === 'Swift') {
        return require('../assets/swift.png')
      } else if (library.programmingLanguage === 'R') {
        return require('../assets/r.png')
      } else if (library.programmingLanguage === 'Objective-C') {
        return require('../assets/objectivec.png')
      } else if (library.programmingLanguage === 'Shell') {
        return require('../assets/shell.png')
      } else if (library.programmingLanguage === 'Scala') {
        return require('../assets/scala.png')
      } else if (library.programmingLanguage === 'Go') {
        return require('../assets/go.png')
      } else if (library.programmingLanguage === 'PowerShell') {
        return require('../assets/powershell.png')
      } else if (library.programmingLanguage === 'Kotlin') {
        return require('../assets/kotlin.png')
      } else if (library.programmingLanguage === 'Rust') {
        return require('../assets/rust.png')
      } else if (library.programmingLanguage === 'Dart') {
        return require('../assets/dart.png')
      } else if (library.programmingLanguage === 'other') {
        return require('../assets/other.png')
      }
    }
  }
}
</script>

<style scoped>

</style>
