<template>
  <div
    class="relative flex justify-center w-auto shadow-app rounded-2"
    :class="{'shadow-app-light': state.theme === 'light'}"
    >
    <div
    class="flex items-center justify-center w-auto animate hover:shadow-app-inner rounded-2"
    :class="{'hover:shadow-app-light-inner': state.theme === 'light'}"
    >
    <div class="flex w-auto px-6 py-7">
        <img class="w-4 mr-2" :class="lang?.class" :src="lang.icon">
        <span class="text-white uppercase" :class="{'text-dark': state.theme === 'light'}">{{lang.name}}</span>
    </div>
    </div>
</div>
</template>

<script>
import { useState } from '../store';
export default {
  props: {
    lang: Object
  },
  setup(){
    const { state } = useState();
    return { state }
  }
};
</script>
