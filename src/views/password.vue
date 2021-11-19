<template>
  <div class="uk-section uk-container">
    <h1>Password</h1>
    <FormPassword
        labelText="Пароль"
        placeHolderText="Введите пароль"
        v-model="password"
        required="1"
      ></FormPassword>
      <div v-if="output.length" class="uk-margin">
        <h3>Output</h3>
        <p>{{output}}</p>
      </div>
  </div>
</template>

<script>
import FormPassword from '../components/form-password.vue'
export default {
  components: {FormPassword},
  data() {
    return {
      password: null,
      output: {}
    }
  },
  watch: {
    password(val) {
      this.output.plaintext = val
      this.output.starred = val.replace(new RegExp(/./, 'gi'), '*')
      this.output.length = val.length
    }
  }

}
</script>

<style>

</style>