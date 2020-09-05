<template>
  <nav class="flex bg-gray-700">
    <router-link to="/"><img src="https://picsum.photos/200/50"/></router-link>

    <ul class="flex items-center justify-end flex-1 text-yellow-600 ">
      <li class="ml-6 mr-6">
        <router-link to="/found">Found</router-link>
      </li>
      <li class="ml-6 mr-6">
        <router-link to="/lost">Lost</router-link>
      </li>
      <li class="ml-6 mr-6">
        <login />
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import Login from './Login.vue';
export default {
  components: {
    Login
  }
};
</script>
