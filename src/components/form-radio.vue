<template>
  <div class="uk-margin">
    <label class="uk-form-label" for="form-stacked-text">
      {{ labelText }}
    </label>
    <div class="uk-form-controls">
      <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
        <label v-for="d in dataArray" :key="d.id" :uk-tooltip="d.hint"
          ><input
            class="uk-radio"
            type="radio"
            name="selectedLanguage"
            v-model="dataSelected"
            :value="d.id"
            :checked="d.id === dataSelected"
          />
          {{ d.name }}
        </label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FormRadio",
  props: ["labelText", "required", "dataArray", "dataSelected"],
  watch: {
    dataSelected(val) {
        this.$emit('update:modelValue', val)
    }
  }
};
</script>

<style>
</style>