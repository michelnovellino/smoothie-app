<template>
  <div class="container">
    <div class="row">
      <form action="">
        <label for="smoothie-name">Smoothie name:</label>
        <input type="text" name="smoothie-name" id="smoothie-name" />

        <label for="smoothie-fruits">Fruits:</label>
        <select name="smoothie-fruits" id="smoothie-fruits">
          <option value="pina">Piña</option>
          <option value="fresa">Fresa</option>
          <option value="manzana">Manzana</option>
        </select>

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

        <label for="smoothie-taste">Taste:</label>
        <input type="number" name="smoothie-taste" id="smoothie-taste" />

        <input type="submit" value="Save it!" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormNewSmoothie",
};
</script>

<style lang="scss">
form {
  margin: auto;
  background: $base-color;
}
</style>
