<template>
  <div class="relative w-1/3 px-4 py-4">
    <div
      class="p-2 shadow-app-inner h-188 rounded-1"
      :class="{'shadow-app-light-inner': state.theme === 'light'}"
    >
      <div
        class="w-full h-full p-1 shadow-app rounded-1"
        :class="{'shadow-app-light': state.theme === 'light'}"
      >
        <img
          src="../assets/images/sam.jpeg"
          class="object-cover object-center w-full h-full rounded-1"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useState } from '../store';
export default {
  props: {
    project: Object
  },
  setup(){
    const { state } = useState();
    return { state }
  }
};
</script>
