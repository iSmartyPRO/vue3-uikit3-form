<template>
  <div class="uk-section uk-container">
    <h1>Select</h1>
    <FormSelect
      required="true"
      labelText="User"
      v-model="selectedUser"
      :dataArray="users"
      :dataSelected="selectedUser"
    ></FormSelect>
    <div v-if="output.id" class="uk-margin">
      <h3>Output:</h3>
      <p>{{ output }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import FormSelect from "../components/form-select.vue";
export default {
  components: { FormSelect },
  data() {
    return {
      users: null,
      selectedUser: 4,
      output: {}
    };
  },
  watch: {
    selectedUser(val) {
      this.output.id = val,
      this.output.details = this.users.filter(item => item.id === val)
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