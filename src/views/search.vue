<template>
  <div class="uk-section uk-container">
    <h1>Search</h1>
    <button class="uk-button uk-button-default" @click="showUsers">Список пользователей</button>

    <h2 class="uk-text-bold uk-text-danger">Search Simple</h2>
    <FormSearch
      labelText="Поиск пользователя"
      placeHolderText="Начните вводить текст для начала поиска"
      v-model="selectedData"
      :filterredData="filterredUsers"
      @filterData="searchUser"
    ></FormSearch>
    <div v-if="output.id" class="uk-margin">
      <h3>Output</h3>
      <p>{{output}}</p>
    </div>


    <h2 class="uk-text-bold uk-text-danger">Search & Select</h2>
    <div class="uk-tile uk-tile-muted uk-padding-small">
      <h4 class="uk-text-bold">Параметры:</h4>
      <p><strong>labelText</strong><br>Подпись</p>
      <p><strong>selectedDataV2</strong><br>передать массив объектов с полями: id, name, [hint]</p>
      <p><strong>filterData</strong><br>вызывает метод (в нашем случае searchUser) с искомой строкой, которая в свою очередь обновляет перменную filterredData</p>
    </div>

    <FormSearchSelect
      labelText="Поиск пользователя"
      placeHolderText="Начните вводить текст для начала поиска"
      v-model="selectedDataResult"
      :selectedData="selectedData2"
      :filterredData="filterredUsers"
      @filterData="searchUser"
    ></FormSearchSelect>
    <div v-if="output2.length" class="uk-margin">
      <h3>Output</h3>
      <p>{{output2}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import FormSearch from '../components/form-search.vue'
import FormSearchSelect from '../components/form-search-select.vue'
export default {
  components: {FormSearch, FormSearchSelect},
  data() {
    return {
      users: null,
      selectedData: [],
      filterredUsers: [],
      output: {},

      selectedDataIds: [3,4],
      selectedDataResult: [],
      selectedData2: [],
      output2: []
    }
  },
  methods: {
    searchUser(s) {
      let search = new RegExp(s, 'ig')
      this.filterredUsers = this.users.filter(item => item.name.match(search))
      //console.log(this.filterredUsers)
    },
    showUsers() {
      let stringUsers = ''
      this.users.forEach(item => {
        stringUsers += `<strong>${item.name}</strong><br>${item.hint}<br><hr>`
      })
      UIkit.modal.alert(stringUsers)
    }
  },
  watch: {
    selectedData(val) {
      this.output.id = val
      this.output.details = this.users.filter(item => item.id === val)
    },
    selectedDataResult(val){
      this.output2 = val
    }
  },
  created() {
    axios
      .get(`${process.env.VUE_APP_API}/users/?per_page=12`)
      .then((response) => {
        this.users = response.data.data.map((item) => {
          return {
            id: item.id,
            name: `${item.first_name} ${item.last_name}`,
            hint: item.email,
          }
        })
        this.selectedData2 = this.users.filter(item => this.selectedDataIds.includes(item.id))
      })

      .catch((err) => console.log(err));
  },
};
</script>

<style>
</style>