<template>
  <div>
    <section class="container">
      <BrandHeader />
    </section>
    
    <section class="container info">
      <p>Smoothie Match was designed by smoothie specialist to find the perfect flavor to match mood and more.</p>  
    </section>
    <section class="container">
      <button class="button button--createSmothie">
        <router-link 
          to="/new-smoothie">
            Create your own smoothie
        </router-link>
      </button>

      <button class="button button--listSmothies">
        <router-link 
          to="/smoothies">
            Take me to the smotthies!
        </router-link>
      </button>
    </section>
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

<style lang="scss">
.info{
  background-color: #c0ffb3;
  font-weight: 600;
  padding: 5px;
  border-radius: 15px;
}


</style>