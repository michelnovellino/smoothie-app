<template>
  <router-link to="/">
    <img src="back-arrow.png" alt="back" class="arrow-back" />
  </router-link>
</template>

<script>
export default {
  name: "BackButton",
};
</script>

<style lang="scss">
.arrow-back {
  width: 2em;
  margin: 1em 0 -1.68em -1.5em;
  z-index: 10;
  padding: 5px 8px;
  border: 3px solid #ffd369;
  border-radius: 15px;
}
</style>
