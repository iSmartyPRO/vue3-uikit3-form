<template>
  <div class="uk-margin">
    <label class="uk-form-label" for="form-stacked-text">
      {{ labelText }} <span v-if="required" class="uk-text-danger">*</span>
    </label>
    <div class="uk-form-controls">
      <select
        v-model="dataSelected"
        class="uk-select"
      >
        <option
          v-for="d in dataArray"
          :key="d.id"
          :value="d.id"
          :selected="dataSelected === d.id"
          :uk-tooltip="d.hint"
        >
          {{ d.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormSelect",
  props: ["labelText", "dataArray", "dataSelected", "required"],
  data() {
    return {
    }
  },
  watch: {
    dataSelected(val) {
        this.$emit('update:modelValue', val)
    }
  }
};
</script>

<style>
</style>