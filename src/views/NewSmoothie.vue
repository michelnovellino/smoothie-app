<template>
  <div>
    <BackButton />
    <BrandHeader/>
    <FormNewSmoothie />
  </div>
</template>

<script>
import BrandHeader from "@/components/BrandHeader.vue";
import BackButton from "@/components/BackButton.vue";
import FormNewSmoothie from "@/components/FormNewSmoothie.vue"

export default {
  name: "NewSmoothie",
  components: {
    BrandHeader,
    BackButton,
    FormNewSmoothie
  }
};
</script>

<style lang="scss">



</style>
