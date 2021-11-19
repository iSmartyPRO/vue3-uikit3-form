<template>
  <div class="uk-margin">
    <label class="uk-form-label" for="form-stacked-text"
      >{{labelText}} <span v-if="required" class="uk-text-danger">*</span></label
    >
    <div class="uk-form-controls">
      <input
        class="uk-input"
        type="text"
        :placeholder="placeHolderText"
        autocomplete="off"
        v-model="value"
      />
    </div>
  </div>
</template>

<script>

export default {
  name: "FormText",
  props: ['labelText', 'placeHolderText', 'required', 'valueText'],
  data() {
    return {
      value: this.valueText
    }
  },
  watch: {
    value(val){
      this.$emit('update:modelValue', val)
    }
  }

}
</script>

<style>

</style>