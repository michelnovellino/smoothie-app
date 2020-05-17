<template>
  <div class="container container-accordion">
    <section class="row">
      <div
        class="accordion "
        v-for="(smoothie, index) in smoothies"
        :key="smoothie._id"
      >
        <div class="header" @click="toggle(index)">
          <eva-icon
            class="smooth-icon"
            name="droplet"
            animation="pulse"
            fill="tomato"
          ></eva-icon>
          <label class="label" for="droplet">{{ smoothie.tastes }}%</label>
          <div class="header-title">{{ smoothie.title }}</div>
          <label class="label" for="heart">
            {{ smoothie.totalFlavor }}
          </label>
          <eva-icon
            class="smooth-icon"
            name="heart"
            animation="pulse"
            fill="limegreen"
          ></eva-icon>
        </div>
        <transition
          name="accordion"
          v-on:before-enter="beforeEnter"
          v-on:enter="enter"
          v-on:before-leave="beforeLeave"
          v-on:leave="leave"
        >
          <div class="body" v-show="smoothies[index].show">
            <div class="body-inner">
              <p class="list-title">Fruits:</p>
              <p v-for="fruit in smoothie.fruits" :key="fruit._id">
                {{ fruit.name }}
              </p>
              <p class="list-title">Liquid:</p>
              <p>{{ liquid.name }}</p>
              <p class="list-title">Proteins:</p>
              <p>{{ protein.name }}</p>
            </div>
          </div>
        </transition>
      </div>
    </section>
  </div>
</template>

<script>
import { EvaIcon } from "vue-eva-icons";
import axios from "axios";
export default {
  name: "Accordion",
  components: {
    [EvaIcon.name]: EvaIcon,
  },
  data: () => ({
    show: false,
    smoothies: [],
    liquid: "",
    fruits: [],
    protein: "",
    totalFlavor: [],
  }),
  created() {
    this.getSmoothies();
  },
  computed: {
    totalValue() {
      console.info("");
      return "";
    },
  },
  methods: {
    getSmoothies() {
      axios
        .get("https://smoothie-api1.herokuapp.com/smoothies/")
        .then((resp) => {
          if (resp.status === 200) {
            //this.listas = resp.data;
            this.smoothies = resp.data.map((smoothie) => {
              const { liquids, fruits, proteins } = smoothie;
              this.liquid = liquids;
              this.protein = proteins;
              this.fruits = fruits;

              const fruitValuesArray = fruits.map((fruit) => {
                return fruit.value;
              });
              const totalFruitValue = fruitValuesArray.reduce(
                (acc, value) => acc + value
              );
              const liquidValue = liquids.value;
              const totalFlavor = totalFruitValue + liquidValue;
              smoothie.show = false;
              smoothie.totalFlavor = totalFlavor;

              return smoothie;
            });
          }
        })
        .catch((e) => {
          console.error(e);
        });
    },
    toggle: function(i) {
      console.log("toggle ", i);
      this.smoothies[i].show = !this.smoothies[i].show;
    },
    beforeEnter: function(el) {
      el.style.height = "0";
    },
    enter: function(el) {
      el.style.height = el.scrollHeight + "px";
    },
    beforeLeave: function(el) {
      el.style.height = el.scrollHeight + "px";
    },
    leave: function(el) {
      el.style.height = "0";
    },
  },
};
</script>

<style lang="scss">
.accordion {
  width: 90vw;
  margin-bottom: 1em;

  background-color: $dark-color;
  border-radius: 8px;
  font-weight: 400;
}

.accordion .header {
  height: 40px;
  line-height: 40px;
  padding: 0 0.5em;
  position: relative;
  color: $white;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}

.accordion .header-icon {
  position: absolute;
  top: 5px;
  right: 8px;
  transform: rotate(0deg);
  transition-duration: 0.3s;
}

.accordion .body {
  /*   display: none; */
  overflow: hidden;
  background-color: $second-color;
  border: 2px solid $dark-color;
  border-top: 0;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  transition: 150ms ease-out;
  color: $white;
}

.accordion .body-inner {
  padding: 0.5em;
}

.smooth-icon {
  font-size: 2em;
}

.header-title {
  width: 59%;
  text-align: center;
}

p {
  margin-bottom: 0.2em;
}

.list-title {
  font-weight: 600;
  margin-top: 1em;
  margin-bottom: 0.1em;
  color: $third-color;
  font-size: 1.1em;
}
</style>
