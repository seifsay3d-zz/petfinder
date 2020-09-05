<template>
  <navbar></navbar>
  <div class="max-w-6xl p-4 m-auto min-h-almost">
    <router-view> </router-view>
  </div>
  <v-footer></v-footer>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Navbar from './components/Navbar.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import List from './components/List.vue';
import Modal from './components/Modal.vue';
import VFooter from './components/Footer.vue';
import Loading from './components/Loading.vue';
import { onErrorCaptured, ref } from 'vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Navbar,
    List,
    Modal,
    VFooter,
    Login,
    Register,
    Loading
  }
};
</script>
