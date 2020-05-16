<template>
  <div>
    <BackButton />
    <BrandHeader />
    <Accordion />
  </div>
</template>

<script>
import BrandHeader from "@/components/BrandHeader";
import BackButton from "@/components/BackButton";
import Accordion from "@/components/Accordion";

export default {
  name: "Smoothies",
  components: {
    BrandHeader,
    BackButton,
    Accordion
  }
};
</script>

<style lang="scss"></style>
