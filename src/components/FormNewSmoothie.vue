<template>
  <div class="container">
    <div class="row">
      <form @submit="saveSmoothie">
        <label for="smoothie-name">Smoothie name:</label>
        <input
          v-model="smoothieNameModel"
          type="text"
          name="smoothie-name"
          id="smoothie-name"
        />

        <div class="select-fruit">
          <label for="smoothie-fruits">Fruits:</label>
          <select
            v-model="fruitsModel"
            class="select-fruit__select"
            name="smoothie-fruits"
            id="smoothie-fruits"
          >
            <option
              v-for="fruit in fruits"
              :value="fruit._id"
              :key="fruit._id"
              >{{ fruit.name }}</option
            >
          </select>

          <button class="button button--plus">+</button>
        </div>

        <label for="smoothie-liquid">Liquid:</label>
        <select
          v-model="liquidModel"
          name="smoothie-liquid"
          id="smoothie-liquid"
        >
          <option
            v-for="liquid in liquids"
            :value="liquid._id"
            :key="liquid._id"
            >{{ liquid.name }}</option
          >
        </select>

        <label for="smoothie-protein">Protein:</label>
        <select
          v-model="proteinModel"
          name="smoothie-protein"
          id="smoothie-protein"
        >
          <option
            v-for="protein in proteins"
            :value="protein._id"
            v-bind:key="protein._id"
            >{{ protein.name }}</option
          >
        </select>

        <div class="taste-container">
          <div class="input-taste">
            <label for="smoothie-taste">Taste:</label>
            <input
              v-model="tasteModel"
              type="number"
              name="smoothie-taste"
              id="smoothie-taste"
            />
          </div>
          <div class="droplet-icon">
            <eva-icon
              name="droplet"
              width="40"
              height="40"
              animation="pulse"
              fill="tomato"
            ></eva-icon>
          </div>
        </div>

        <button class="button button-large submit mx-auto" type="submit">
          Save it!
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { EvaIcon } from "vue-eva-icons";
import axios from "axios";

export default {
  name: "FormNewSmoothie",
  components: {
    [EvaIcon.name]: EvaIcon
  },
  data: () => ({
    smoothieNameModel: null,
    fruitsModel: [],
    liquidModel: null,
    proteinModel: null,
    tasteModel: null,
    liquids: null,
    proteins: null,
    fruits: null
  }),
  created() {
    this.getSmoothies();
    this.getLiquids();
    this.getProteins();
    this.getFruits();
  },
  methods: {
    getSmoothies() {
      axios
        .get("http://localhost:3000/smoothies/")
        .then(resp => {
          if (resp.status === 200) {
            //this.listas = resp.data;
            this.smoothies = resp.data;
            console.info(resp.data);
          }
        })
        .catch(e => {
          console.error(e);
        });
    },
    getLiquids() {
      axios
        .get("http://localhost:3000/liquids/")
        .then(resp => {
          if (resp.status === 200) {
            //this.listas = resp.data;
            this.liquids = resp.data;
            console.info(resp.data);
          }
        })
        .catch(e => {
          console.error(e);
        });
    },
    getProteins() {
      axios
        .get("http://localhost:3000/proteins/")
        .then(resp => {
          if (resp.status === 200) {
            //this.listas = resp.data;
            this.proteins = resp.data;
            console.info(resp.data);
          }
        })
        .catch(e => {
          console.error(e);
        });
    },
    getFruits() {
      axios
        .get("http://localhost:3000/fruits/")
        .then(resp => {
          if (resp.status === 200) {
            //this.listas = resp.data;
            this.fruits = resp.data;
            console.info(resp.data);
          }
        })
        .catch(e => {
          console.error(e);
        });
    },
    saveSmoothie(e) {
      e.preventDefault();
      const newSmoothie = {
        title: this.smoothieNameModel,
        fruits: this.fruitsModel,
        proteins: this.proteinModel,
        liquids: this.liquidModel,
        tastes: this.tasteModel
      };
      // console.info(this.smoothieNameModel);
      // console.info(this.liquidModel);
      // console.info(this.proteinModel);
      // console.info(this.fruitsModel);
      // console.info(this.tasteModel);

      axios
        .post("http://localhost:3000/smoothies/", newSmoothie)
        .then(result => console.info(result));

      this.smoothieNameModel = null;
      this.fruitsModel = null;
      this.proteinModel = null;
      this.liquidModel = null;
      this.tasteModel = null;
    }
  }
};
</script>

<style lang="scss">
form {
  margin: auto;
  padding: 2rem;
  border-radius: 0.8rem;
  background: $light-color;
  .submit {
    background: $dark-color;
    width: 100%;
  }
  .select-fruit {
    &__select {
      width: 60%;
      margin-right: 10px;
    }
  }

  .input-taste {
    width: 30%;
  }

  .taste-container {
    display: flex;
    align-items: center;

    .droplet-icon {
      margin-bottom: -1em;
    }
  }
}
</style>
