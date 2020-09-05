<template>
  <div class="w-1/2 m-auto ">
    <h1 class="text-2xl font-bold">We'll find your pet</h1>
    <form class="flex flex-col" @submit="submitForm">
      <select v-model="state.gender">
        <option value="m">Male</option>
        <option value="f">Female</option>
      </select>
      <select v-model="state.type">
        <option value="cat"> Cat </option>
        <option value="dog"> Dog </option>
      </select>
      <input type="file" placeholder="Photos" />
      <textarea v-model="state.description"> Some info</textarea>
      <input type="submit" />
    </form>
  </div>
</template>

<script lang="ts">
import Vue, { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      gender: 'm',
      type: 'cat',
      files: [],
      description: 'lorem5'
    });

    const submitForm = e => {
      e.preventDefault();
      console.log(state);
    };
    return { state, submitForm };
  }
};
</script>
