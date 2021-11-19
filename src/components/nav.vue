<template>
  <nav class="uk-navbar-container uk-margin" uk-navbar>
    <div class="uk-container">
      <div class="uk-navbar-left">
        <router-link class="uk-navbar-item uk-logo" :to="{ name: 'Home' }"
          >Формы</router-link
        >

        <ul class="uk-navbar-nav">
          <li>
            <router-link :to="{ name: 'Home' }">
              <span
                class="uk-icon uk-margin-small-right"
                uk-icon="icon: home"
              ></span>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Text' }"> Text </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Password' }"> Password </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Select' }"> Select </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Checkbox' }"> Checkbox </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Radio' }"> Radio </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Search' }"> Search </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>