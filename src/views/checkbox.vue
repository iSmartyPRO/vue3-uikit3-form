<template>
  <div class="uk-section uk-container">
    <h1>Checkboxes</h1>
    <div class="uk-margin">
      <h3 class="uk-text-bold uk-text-danger">Checkbox Simple</h3>
      <FormCheckbox
        labelText="Пользователи"
        :dataArray="users"
        :dataSelected="selectedUsers"
        v-model="selectedUsers"
      ></FormCheckbox>
      <div v-if="output.length" class="uk-margin">
        <h3>Output</h3>
        <p>{{output}}</p>
        <p>{{outputDetails}}</p>
      </div>
    </div>

    <div class="uk-margin">
      <h3 class="uk-text-bold uk-text-danger">Checkbox Version 2</h3>
      <FormCheckboxV2
        labelText="Пользователи"
        v-model="selectedUsersV2"
        :dataArray="users"
        :dataSelected="selectedUsersV2"
      ></FormCheckboxV2>
      <div v-if="output2.length" class="uk-margin">
        <h3>Output</h3>
        <p>{{output2}}</p>
        <p>{{outputDetails2}}</p>
    </div>
  </div>
  </div>
</template>

<script>
import axios from "axios";
import FormCheckbox from "../components/form-checkbox.vue";
import FormCheckboxV2 from "../components/form-checkbox-v2.vue";
export default {
  components: { FormCheckbox, FormCheckboxV2 },
  data() {
    return {
      users: null,
      selectedUsers: [1, 3],
      selectedUsersV2: [2, 3],
      output: [],
      outputDetails: null,
      output2: [],
      outputDetails2: null,
    };
  },
  watch: {
    selectedUsers(val) {
      this.output = val;
      this.outputDetails = this.users.filter(item => val.includes(item.id))
    },
    selectedUsersV2(val) {
      this.output2 = val;
      this.outputDetails2 = this.users.filter(item => val.includes(item.id))
    },
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