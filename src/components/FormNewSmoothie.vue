<template>
  <div class="container">
    <div class="row">
      <form action>
        <label for="smoothie-name">Smoothie name:</label>
        <input type="text" name="smoothie-name" id="smoothie-name" />

        <div class="select-fruit">
          <label for="smoothie-fruits">Fruits:</label>
          <select
            class="select-fruit__select"
            name="smoothie-fruits"
            id="smoothie-fruits"
          >
            <option value="pina">Piña</option>
            <option value="fresa">Fresa</option>
            <option value="manzana">Manzana</option>
          </select>

          <button class="button button--plus">+</button>
        </div>

        <label for="smoothie-liquid">Liquid:</label>
        <select name="smoothie-liquid" id="smoothie-liquid">
          <option value="mantecado">Mantecado</option>
          <option value="chocolate">Chocolate</option>
        </select>

        <label for="smoothie-protein">Protein:</label>
        <select name="smoothie-protein" id="smoothie-protein">
          <option value="herbalife">Herbalife</option>
          <option value="huevo">Huevo</option>
        </select>

        <div class="taste-container">
          <div class="input-taste">
            <label for="smoothie-taste">Taste:</label>
            <input type="number" name="smoothie-taste" id="smoothie-taste" />
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

        <input
          class="button button-large submit mx-auto"
          type="submit"
          value="Save it!"
        />
      </form>
    </div>
  </div>
</template>

<script>
import { EvaIcon } from "vue-eva-icons";

export default {
  name: "FormNewSmoothie",
  components: {
    [EvaIcon.name]: EvaIcon
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
