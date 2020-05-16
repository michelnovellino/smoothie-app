<template>
  <div>
    <BackButton />
    <BrandHeader />
    <div class="container">
      <section class="row">
        <p>
          Smoothies for all Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Neque laudantium ut quod distinctio id amet, voluptate odit?
          Quae ratione exercitationem nemo inventore voluptatum dicta quam
          dolorem dolor eveniet delectus. Eius.
        </p>
      </section>
    </div>
  </div>
</template>

<script>
import BrandHeader from "@/components/BrandHeader.vue";
import BackButton from "@/components/BackButton";

export default {
  name: "Smoothies",
  components: {
    BrandHeader,
    BackButton
  }
};
</script>

<style lang="scss"></style>
