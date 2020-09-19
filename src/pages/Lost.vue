<template>
  <h2 class="text-4xl font-bold">Missing!</h2>
  <suspense>
    <template #default>
      <list status="lost"></list>
    </template>
    <template #fallback>
      <loading></loading>
    </template>
  </suspense>
</template>
<script>
import List from '../components/List.vue';

import Loading from '../components/Loading.vue';
import { onErrorCaptured, ref } from 'vue';

export default {
  name: 'App',
  components: {
    List,
    Loading
  },
  setup() {
    const e = ref(null);
    onErrorCaptured(e => {
      error.value = e;
    });
  }
};
</script>
