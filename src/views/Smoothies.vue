<template>
  <div>
    <BackButton />
    <BrandHeader />
    <p>
      Smoothies for all Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Neque laudantium ut quod distinctio id amet, voluptate odit? Quae ratione
      exercitationem nemo inventore voluptatum dicta quam dolorem dolor eveniet
      delectus. Eius.
    </p>
  </div>
</template>

<script>
import BrandHeader from "@/components/BrandHeader.vue";
import BackButton from "@/components/BackButton";

export default {
  name: "Smoothies",
  components: {
    BrandHeader,
    BackButton,
  },
};
</script>

<style lang="scss"></style>
