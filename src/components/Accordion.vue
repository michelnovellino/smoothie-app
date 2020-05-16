<template>
  <div class="container container-accordion">
    <section class="row">
      <div class="accordion" v-bind:class="theme">
        <div class="header" v-on:click="toggle">
          <slot>Smoothie name</slot>
          <slot>
            <eva-icon
              class="smooth-icon"
              name="heart"
              animation="pulse"
              fill="limegreen"
            ></eva-icon>
            <label class="label" for="heart">25</label>

            <eva-icon
              class="smooth-icon"
              name="droplet"
              animation="pulse"
              fill="tomato"
            ></eva-icon>
            <label class="label" for="droplet">85%</label>
          </slot>
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
              <p># banana fresa aguacate</p>
              <p># Water</p>
              <p># V.Protein</p>
            </div>
          </div>
        </transition>
      </div>
    </section>
  </div>
</template>

<script>
import { EvaIcon } from "vue-eva-icons";
export default {
  name: "Accordion",
  components: {
    [EvaIcon.name]: EvaIcon
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    toggle: function() {
      this.show = !this.show;
    },
    // enter: function(el, done) {
    //   $(el).slideDown(150, done);
    // },
    // leave: function(el, done) {
    //   $(el).slideUp(150, done);
    // },
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
  font-weight: 600;
}

.accordion .header {
  height: 40px;
  line-height: 40px;
  padding: 0 40px 0 8px;
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
  font-size: 1.8em;
}

.label {
  margin-left: -1.5em;
}
</style>
