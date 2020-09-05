<template>
  <button @click="state.isOpen = true">Login</button>
  <teleport to="body" v-if="state.isOpen">
    <modal :is-open="state.isOpen" @close="state.isOpen = false">
      Login Form in modal ok
    </modal>
  </teleport>
</template>

<script lang="ts">
import { ref, reactive } from 'vue';
import Modal from './Modal.vue';
export default {
  components: {
    Modal
  },
  setup() {
    let state = reactive({
      isOpen: false
    });

    return { state };
  }
};
</script>
