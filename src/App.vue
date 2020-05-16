<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
//import HelloWorld from "./components/HelloWorld.vue";

/*@Component({
  components: {HelloWorld}
})*/

export default class App extends Vue {}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

#app {
  font-family: $content-font;
  font-size: 1.1em;
  color: $black;
  display: flex;
  align-items: center;
  max-width: 80vw;
}

.title {
  font-family: $title-font;
  font-weight: 400;
  font-size: 2em;
  color: $white;
  border: none;
}

.button {
  width: 80vw;
  padding: 1em 2em;
  border-radius: 10px;
  font-weight: 600;
  margin: 1em auto;
  font-size: 1em;
  color: $light-color;
  cursor: pointer;
  border: 4px solid $light-color;
  background-color: $dark-color;

  &--back {
    width: 4vw;
    padding: 1em 1em;
    margin: 1em 0 0 -2em;
  }
}
</style>
