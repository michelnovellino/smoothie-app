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
/*Fonts*/
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Prompt:wght@300;600&display=swap");
$title-font: "Pacifico", sans-serif;
$content-font: "Prompt", sans-serif;

/*Color Palette*/
$base-color: #52de97;
$second-color: #3c9d9b;
$third-color: #ffd369;
$fourth-color: #e43f5a;
$dark-color: #5b5656;
$light-color: #c0ffb3;
$black: #4d4646;
$white: #f7f7f7;

#app {
  font-family: $content-font;
  font-size: 1.1em;
  color: $black;
  display: flex;
  align-items: center;
  max-width: 80vw;
}

.title{
  font-family: $title-font;
  font-weight: 400;
  font-size: 2em;
  color: $white;
  border: none;
}

.button{
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

  &--back{
    width: 4vw;
    padding: 1em 1em;
    margin: 1em 0 0 -2em;
  }
}

.container{
  margin: 3em auto;
}

</style>
