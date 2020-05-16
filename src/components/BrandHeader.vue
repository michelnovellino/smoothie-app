<template>
  <div class="container">
    <section class="row">
      <div class="brand-content">
        <img class="brand-logo" src="smoothie-logo.png" alt="smoothie-logo" />
        <h1 class="title">Smoothie Match</h1>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "BrandHeader"
};
</script>

<style lang="scss">
.brand-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 4em auto 2em;
  background-color: #5b5656;
  border-radius: 15px;
  box-shadow: 0 10px 15px #c0ffb3;

  .brand-logo {
    max-width: 5em;
    max-height: 5em;

    transition: transform 0.3s ease;
    margin-bottom: -1em;

    transform: rotate(-20deg);
  }
  .brand-logo:hover {
    transition: transform 0.3s ease;
    transform: rotate(0deg);
  }
}
</style>
