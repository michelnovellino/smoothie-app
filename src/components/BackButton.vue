<template>
  <router-link to="/">
    <img src="back-arrow.png" alt="back" class="arrow-back" />
  </router-link>
</template>

<script>
export default {
  name: "BackButton"
};
</script>

<style lang="scss">
.arrow-back {
  position: absolute;
  width: 2em;
  z-index: 10;
  padding: 5px 8px;
  border: 3px solid #ffd369;
  border-radius: 15px;
}
</style>
