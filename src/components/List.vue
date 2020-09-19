<template>
  <ul>
    <li v-for="pet in state.list" :key="pet.id">
      {{ pet.gender }} - {{ pet.type }} - {{ pet.description }} {{ pet.status }}
      <img :src="pet.imageUrl" width="300" />
    </li>
    <li v-if="!state.list.length">No data</li>
  </ul>
</template>

<script lang="ts">
import firebase from '../firebase';
import { reactive, onMounted, ref } from 'vue';

interface Pet {}
export default {
  props: {
    status: {
      type: String,
      requied: true
    }
  },
  async setup(props, context) {
    console.log('setup -> context', props.status);
    let state: {
      list: Pet[];
    } = reactive({
      list: []
    });
    const error = ref(null);

    await new Promise(resolve => setTimeout(resolve, 1500));
    let response = await fetch('https://jsonplaceholder.typicode.com/todos');
    state.list = await response.json();

    const db = firebase.firestore();

    let queries = await db.collection('pets').get();
    console.log({ queries });
    state.list = [];
    queries.forEach(pet => {
      const petData = pet.data();

      if (petData.status == props.status) state.list.push(petData);
      console.log('setup -> petData.status', petData.status);
      console.log('setup -> props.status', props.status);
    });

    console.log('setup -> state', state);
    return { state };
  }
};
</script>
