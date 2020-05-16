<template>
  <div>
    <BrandHeader />
    <div class="container">
      <section class="row">
        <p class="info mx-auto">
          Smoothie Match was designed by smoothie specialist to find the perfect
          flavor to match mood and more.
        </p>
      </section>
      <section class="row mt-5">
        <div class="column text-center">
          <button class="button button-large my-3">
            <router-link to="/new-smoothie"
              >Customize your smoothie</router-link
            >
          </button>
        </div>
      </section>
      <section class="row mt-5">
        <div class="column text-center">
          <button class="button button-large my-3">
            <router-link to="/smoothies">Take me to the smotthies!</router-link>
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BrandHeader from "@/components/BrandHeader.vue";

export default {
  name: "Home",
  components: {
    BrandHeader
  }
};
</script>
