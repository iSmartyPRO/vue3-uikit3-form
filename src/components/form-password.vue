<template>
  <div class="uk-margin">
    <label class="uk-form-label" for="form-stacked-text"
      >{{labelText}} <span v-if="required" class="uk-text-danger">*</span></label
    >
    <div class="uk-form-controls">
      <input
        class="uk-input"
        type="password"
        v-model="value"
        :placeholder="placeHolderText"
        autocomplete="current-password"
      />
    </div>
  </div>
</template>

<script>

export default {
  name: "FormPassword",
  props: ['labelText', 'placeHolderText', 'required', 'valueText'],
  data() {
    return {
      value: this.valueText
    }
  },
  watch: {
    value(val) {
      this.$emit('update:modelValue', val)
    }
  }
}
</script>

<style>

</style>