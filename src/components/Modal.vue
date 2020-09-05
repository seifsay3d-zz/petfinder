<template>
  <div id="modal">
    <div
      v-if="isOpen"
      class="absolute top-0 z-10 w-screen h-screen bg-gray-900"
    >
      <div class="flex flex-col w-1/2 m-auto bg-white">
        <button class="inline w-6 p-2" @click="$emit('close')">
          X
        </button>
        <slot name="default"> </slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { reactive, watch } from 'vue';
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    return {
      isOpen: props.isOpen
    };
  }
};
</script>
