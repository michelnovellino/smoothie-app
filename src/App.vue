<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: $content-font;
  font-size: 1.1em;
  color: $black;
  max-width: 100%;
}

.title {
  font-family: $title-font;
  font-weight: 400;
  font-size: 2em;
  color: $white;
  border: none;
}
</style>
