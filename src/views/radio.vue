<template>
  <div class="uk-section uk-container">
    <h1>Radio</h1>
    <div class="uk-margin">
      <FormRadio
        labelText="Пользователи"
        :dataArray="users"
        :dataSelected="selectedUser"
        v-model="selectedUser"
      ></FormRadio>
      <div v-if="output.id" class="uk-margin">
        <h3>Output:</h3>
        <h5 class="uk-text-bold">Selected ID:</h5>
        <p>{{ output }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import FormRadio from "../components/form-radio.vue";
export default {
  components: { FormRadio },
  data() {
    return {
      users: null,
      selectedUser: 3,
      output: {},
    };
  },
  watch: {
    selectedUser(val) {
      this.output.id = val
      this.output.details = this.users.find(item => item.id === val)
    }
  },
  mounted() {
    axios
      .get(`${process.env.VUE_APP_API}/users`)
      .then((response) => {
        this.users = response.data.data.map((item) => {
          return {
            id: item.id,
            name: `${item.first_name} ${item.last_name}`,
            hint: item.email,
          };
        });
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style>
</style>