<template>
  <div class="uk-section uk-container">
    <h1>Text</h1>
    <FormText
      labelText="ФИО"
      placeHolderText="Введите имя"
      v-model="name"
      :valueText="name"
      required="1"
    ></FormText>
    <div v-if="output" class="uk-margin">
      <h3>Output:</h3>
      <p>{{output}}</p>
    </div>
  </div>
</template>

<script>
import FormText from '../components/form-text.vue'
export default {
  components: {FormText},
  data() {
    return {
      name: 'Айдар Ильяс',
      output: null,
    }
  },
  watch: {
    name(val) {
      this.output = val
    }
  }
};
</script>

<style>
</style>