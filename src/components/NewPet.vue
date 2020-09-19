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

      <select v-model="state.status">
        <option value="lost"> Lost </option>
        <option value="found"> Found </option>
      </select>
      <input @change="uploadFile" type="file" placeholder="Photos" />
      <textarea v-model="state.description"> Some info</textarea>
      <input type="submit" />
    </form>
  </div>
</template>

<script lang="ts">
import Vue, { reactive } from 'vue';
import firebase from '../firebase';
export default {
  setup() {
    const db = firebase.firestore();
    const state = reactive({
      gender: 'm',
      type: 'cat',
      status: 'found',
      imageUrl: '',
      description: 'lorem5'
    });

    const uploadFile = e => {
      const imageData = e.target.files[0];
      console.log('setup -> imageData', imageData);

      const storageRef = firebase
        .storage()
        .ref(`${imageData.name}`)
        .put(imageData);
      storageRef.on(
        `state_changed`,
        snapshot => {
          const uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          console.log({ uploadValue });
        },
        error => {
          console.log(error.message);
        },
        () => {
          storageRef.snapshot.ref.getDownloadURL().then(url => {
            state.imageUrl = url;
            console.log({ state });
          });
        }
      );
    };
    const submitForm = e => {
      e.preventDefault();
      console.log(state);

      try {
        db.collection('pets').add({ ...state });

        alert('SAVED');
      } catch (e) {
        console.error("couldn't add pet");
      }
    };
    return { state, submitForm, uploadFile };
  }
};
</script>
