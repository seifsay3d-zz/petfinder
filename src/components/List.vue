<template>
  <h1>list of dogs</h1>
  <ul>
    <li v-for="pet in state.list" :key="pet.id">
      {{ pet.title }}
    </li>
  </ul>
</template>

<script lang="ts">
import { reactive, onMounted, ref } from 'vue';

interface Pet {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}
export default {
  async setup() {
    let state: {
      list: Pet[];
    } = reactive({
      list: []
    });
    const error = ref(null);

    await new Promise(resolve => setTimeout(resolve, 1500));
    let response = await fetch('https://jsonplaceholder.typicode.com/todos');
    state.list = await response.json();

    return { state };
  }
};
</script>
