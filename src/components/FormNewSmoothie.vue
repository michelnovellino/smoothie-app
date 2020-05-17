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
          required
        />

        <div class="select-fruit">
          <label for="smoothie-fruits">Fruits:</label>
          <select
            v-model="fruitsModel"
            class="select-fruit__select"
            name="smoothie-fruits"
            id="smoothie-fruits"
            required
          >
            <option v-for="fruit in fruits" :value="fruit" :key="fruit._id">
              {{
              fruit.name
              }}
            </option>
          </select>

          <button class="button button--plus" @click="addFruit(fruitsModel)">+</button>
        </div>
        <div class="dropdown">
          <div v-if="selectedFruits.length > 0" class="fruits">
            ver frutas
            <eva-icon class="ml-2" name="eye"></eva-icon>
          </div>
          <div class="dropdown-content">
            <transition-group name="list-complete" tag="p">
              <p class="list-complete-item" v-for="(fruit, index) in selectedFruits" :key="index">
                {{ fruit.name }}
                <span class="remove" @click="Remove(index)">x</span>
              </p>
            </transition-group>
          </div>
        </div>

        <label for="smoothie-liquid">Liquid:</label>
        <select v-model="liquidModel" name="smoothie-liquid" id="smoothie-liquid" required>
          <option v-for="liquid in liquids" :value="liquid._id" :key="liquid._id">{{ liquid.name }}</option>
        </select>

        <label for="smoothie-protein">Protein:</label>
        <select v-model="proteinModel" name="smoothie-protein" id="smoothie-protein" required>
          <option
            v-for="protein in proteins"
            :value="protein._id"
            v-bind:key="protein._id"
          >{{ protein.name }}</option>
        </select>

        <div class="taste-container">
          <div class="input-taste">
            <label for="smoothie-taste">Taste:</label>
            <input
              v-model="tasteModel"
              type="number"
              name="smoothie-taste"
              id="smoothie-taste"
              required
            />
          </div>
          <div class="droplet-icon">
            <eva-icon name="droplet" width="40" height="40" animation="pulse" fill="tomato"></eva-icon>
          </div>
        </div>

        <button class="button button-large submit mx-auto" type="submit">Save it!</button>
      </form>
      <p v-if="errors.length">
    <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
    <ul>
      <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
    </ul>
  </p>
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
    fruitsModel: null,
    selectedFruits: [],
    liquidModel: null,
    proteinModel: null,
    tasteModel: null,
    liquids: "",
    proteins: "",
    fruits: "",
    totalFruitFlavor: "",
    fruitsValues: [],
    errors: [],
    isEmpty: false
  }),
  created() {
    //this.getSmoothies();
    this.getLiquids();
    this.getProteins();
    this.getFruits();
  },
  methods: {
    addFruit(val) {
      if (!val) return;
      this.selectedFruits.push(val);
    },
    getSmoothies() {
      axios
        .get("http://localhost:3000/smoothies/")
        .then(resp => {
          if (resp.status === 200) {
            //this.listas = resp.data;
            this.smoothies = resp.data;
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
          }
        })
        .catch(e => {
          console.error(e);
        });
    },
    checkForm: function(e) {
      if (
        this.proteinsModel &&
        this.liquidModel &&
        this.selectedFruits &&
        this.tasteModel &&
        this.proteinModel
      ) {
        return true;
      }

      this.errors = [];

      !this.smoothieNameModel && this.errors.push("Please fill Smoothie name");
      !this.fruitsModel &&
        this.errors.push("Please select at least 1 fruit for you smoothie");
      !this.liquidNameModel &&
        this.errors.push("Please select 1 Liquid for you smoothie");
      !this.proteinModel &&
        this.errors.push("Please select 1 Protein for you smoothie");
      !this.tasteModel &&
        this.errors.push("Put how much Taste have your smoothie.!");

      e.preventDefault();
    },
    saveSmoothie(e) {
      e.preventDefault()
      const newSmoothie = {
        title: this.smoothieNameModel,
        fruits: this.selectedFruits,
        proteins: this.proteinModel,
        liquids: this.liquidModel,
        tastes: this.tasteModel
      };

      console.info(newSmoothie);
      axios
        .post("http://localhost:3000/smoothies/", newSmoothie)
        .then(result => console.info(result));

      this.smoothieNameModel = null;
      this.fruitsModel = null;
      this.proteinModel = "";
      this.liquidModel = "";
      this.tasteModel = "";
    },
    Remove(e) {
      if (!Number.isInteger(e)) return;
      this.selectedFruits.splice(e, 1);
    }
  }
};
</script>

<style lang="scss">
form {
  max-width: 100%;
  margin: auto;
  background: $light-color;
  padding: 2rem;
  border-radius: 0.8rem;
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
  .list-complete-item {
    transition: all 1s;
    display: inline-block;
    margin-right: 10px;
  }
  .list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
  .list-complete-leave-active {
    position: absolute;
  }
}
</style>
