<template>
  <div class="col" v-for="library in libraries" :key="library.id">
    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#panelsStayOpen-collapseOne'+library.id" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            <div class="container">
              <div class="row">
                <div class="col">
                  <img :src="getImage(library)" :alt="library.libraryName" height="24" width="24">
                </div>
                <div class="col-5">
                  {{ library.libraryName }}
                  <img :src="getNew(library)" height="24" width="24">
                  <img :src="getUpdate(library)" height="24" width="24">
                  <img :src="getHot(library)" height="24" width="24">
                  <img :src="getBadge(library)" height="24" width="24">
                  <!--<div v-if="library.createdAt > Date() - 1" img src="'../assets/new.png'"></div>
                  <div v-if="library.updatedAt < Date() - 1" img src="'../assets/update.png'"></div>
                  <div v-if="library.upvotes < 100" img src="'../assets/hot.png'"></div>-->
                  <div v-if="library.upvotes > 1000 && library.upvotes - library.downvotes > 500" img src="'../assets/badge.png'"></div>
                </div>
                <div class="col-2">
                  Projects: <!--{{ library.projects.length }}-->
                </div>
                <div class="col-3">
                  <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button @click="getUpvote" type="button" class="btn btn-success">Up {{ library.upvotes }}</button>
                    <button @click="getDownvote" type="button" class="btn btn-danger">Down {{ library.downvotes }}</button>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </h2>
        <div :id="'panelsStayOpen-collapseOne'+library.id" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne"> <!-- dynamsiche id (library.id) -->
          <div class="accordion-body">
            <p><strong>Website:</strong> <a :href="library.website">{{ library.website }}</a></p>
            <p>The {{ library.libraryName }} library is written in {{ library.programmingLanguage }}.<br>
              At the moment the latest version is <code>{{ library.latestVersion }}</code>.<br>
              The library is used in {{ library.useField }}.</p>
            <p><strong>Installations:</strong></p>
            <p></p>
            <p><strong>Example Projects:</strong></p>
            <!--<div class="col" v-for="project in libraries" :key="project.id">
              <p>{{ project.projectName }}</p>
            </div>-->
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
    },
    getUpvote (library) {
      library.upvotes += 1
    },
    getDownvote (library) {
      library.downvotes += 1
    },
    getNew (library) {
      if (library.createdAt === '2022-7-1') {
        return require('../assets/new.png')
      }
    },
    getUpdate (library) {
      if (library.updatedAt === '2022-7-1') {
        return require('../assets/update.png')
      }
    },
    getHot (library) {
      if (library.upvotes > 10 && library.upvotes <= 100 && library.upvotes > library.downvotes) {
        return require('../assets/hot.png')
      }
    },
    getBadge (library) {
      if (library.upvotes > 100 && library.upvotes > library.downvotes + 50) {
        return require('../assets/badge.png')
      }
    }
  }
}
</script>

<style scoped>

</style>
