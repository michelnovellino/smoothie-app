<template>
  <div class="container container-accordion">
    <section class="row">
      <div class="accordion" v-for="smoothie in smoothies" :key="smoothie._id">
        <div class="header" @click="toggle">
          <eva-icon
              class="smooth-icon"
              name="droplet"
              animation="pulse"
              fill="tomato"
            ></eva-icon>
            <label class="label" for="droplet">{{ smoothie.tastes }}%</label>
          <div class="header-title">
            {{ smoothie.title }}
          </div>
          <label class="label" for="heart"> 22 </label>
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
          <div class="body" v-show="show">
            <div class="body-inner">
              <p>Fruits:</p>
              <p v-for="fruit in smoothie.fruits" :key="fruit._id">
                {{ fruit.name }}
              </p>
              <p>Liquid:</p>
              <p>{{ smoothie.liquids }}</p>
              <p>Proteins:</p>
              <p>{{ smoothie.proteins }}</p>
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
    [EvaIcon.name]: EvaIcon
  },
  data: () => ({
    show: false,
    smoothies: []
  }),
  created() {
    this.getSmoothies();
  },
  methods: {
    getSmoothies() {
      axios
        .get("http://localhost:3000/smoothies/")
        .then(resp => {
          if (resp.status === 200) {
            //this.listas = resp.data;
            this.smoothies = resp.data;
            console.info(this.smoothies);
          }
        })
        .catch(e => {
          console.error(e);
        });
    },

    toggle: function() {
      this.show = !this.show;
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
    }
  }
};
</script>

<style lang="scss">
.accordion {
  width: 90vw;
  margin-bottom: 20px;

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
  padding: 8px;
}

.accordion .header-icon.rotate {
  transform: rotate(180deg);
  transition-duration: 0.3s;
}

.accordion.purple {
  background-color: #8c618d;
}

.accordion.purple .body {
  border-color: #8c618d;
}

.smooth-icon {
  font-size: 2em;
}


.header-title {
  width: 59%;
  text-align: center;
}

</style>
