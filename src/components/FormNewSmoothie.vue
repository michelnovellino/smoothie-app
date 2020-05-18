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
        <div class="message">
          {{ validation.firstError("smoothieNameModel") }}
        </div>

        <div class="select-fruit">
          <label for="smoothie-fruits">Fruits:</label>
          <select
            v-model="fruitsModel"
            class="select-fruit__select"
            name="smoothie-fruits"
            id="smoothie-fruits"
          >
            <option v-for="fruit in fruits" :value="fruit" :key="fruit._id">
              {{ fruit.name }}
            </option>
          </select>

          <button class="button button--plus" @click="addFruit(fruitsModel)">
            +
          </button>
        </div>
        <div class="message">
          {{ validation.firstError("selectedFruits") }}
        </div>
        <div class="dropdown">
          <div v-if="selectedFruits.length > 0" class="fruits">
            ver frutas
            <eva-icon class="ml-2" name="eye"></eva-icon>
          </div>
          <div class="dropdown-content">
            <transition-group name="list-complete" tag="p">
              <p
                class="list-complete-item"
                v-for="(fruit, index) in selectedFruits"
                :key="index"
              >
                {{ fruit.name }}
                <span class="remove" @click="Remove(index)">x</span>
              </p>
            </transition-group>
          </div>
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
        <div class="message">
          {{ validation.firstError("liquidModel") }}
        </div>
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
        <div class="message">
          {{ validation.firstError("proteinModel") }}
        </div>
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
        <div class="message">
          {{ validation.firstError("tasteModel") }}
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
import SimpleVueValidation from "simple-vue-validator";
import router from "../router";
const Validator = SimpleVueValidation.Validator;

export default {
  name: "FormNewSmoothie",
  components: {
    [EvaIcon.name]: EvaIcon,
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
  }),
  created() {
    //this.getSmoothies();
    this.getLiquids();
    this.getProteins();
    this.getFruits();
  },
  validators: {
    smoothieNameModel: function(value) {
      return Validator.value(value)
        .required()
        .length(10);
    },
    tasteModel: function(value) {
      if (value > 100) {
        return Validator.custom(function() {
          return "smaller than 100";
        });
      }

      return Validator.value(value)
        .integer()
        .required();
    },
    liquidModel: function(value) {
      return Validator.value(value).required();
    },
    proteinModel: function(value) {
      return Validator.value(value).required();
    },
    selectedFruits: function(value) {
      return Validator.value(value).required();
    },
  },
  methods: {
    addFruit(val) {
      if (!val) return;
      this.selectedFruits.push(val);
    },
    getSmoothies() {
      axios
        .get("https://smoothie-api1.herokuapp.com/smoothies/")
        .then((resp) => {
          if (resp.status === 200) {
            //this.listas = resp.data;
            this.smoothies = resp.data;
          }
        })
        .catch((e) => {
          console.error(e);
        });
    },
    getLiquids() {
      axios
        .get("https://smoothie-api1.herokuapp.com/liquids/")
        .then((resp) => {
          if (resp.status === 200) {
            //this.listas = resp.data;
            this.liquids = resp.data;
          }
        })
        .catch((e) => {
          console.error(e);
        });
    },
    getProteins() {
      axios
        .get("https://smoothie-api1.herokuapp.com/proteins/")
        .then((resp) => {
          if (resp.status === 200) {
            //this.listas = resp.data;
            this.proteins = resp.data;
          }
        })
        .catch((e) => {
          console.error(e);
        });
    },
    getFruits() {
      axios
        .get("https://smoothie-api1.herokuapp.com/fruits/")
        .then((resp) => {
          if (resp.status === 200) {
            //this.listas = resp.data;
            this.fruits = resp.data;
          }
        })
        .catch((e) => {
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
      e.preventDefault();

      this.$validate().then(function(success) {
        if (success) {
          const newSmoothie = {
            title: this.smoothieNameModel,
            fruits: this.selectedFruits,
            proteins: this.proteinModel,
            liquids: this.liquidModel,
            tastes: this.tasteModel,
          };

          console.info(newSmoothie);
          axios
            .post("https://smoothie-api1.herokuapp.com/smoothies/", newSmoothie)
            .then((result) => {
              alert("¡Batido creado!");
              router.push({ path: "/" });
              console.info(result);
            });
        }
      });
      //e.preventDefault();

      this.smoothieNameModel = null;
      this.fruitsModel = null;
      this.proteinModel = "";
      this.liquidModel = "";
      this.tasteModel = "";
    },
    Remove(e) {
      if (!Number.isInteger(e)) return;
      this.selectedFruits.splice(e, 1);
    },
  },
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
