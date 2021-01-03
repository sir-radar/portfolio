<template>
  <div class="relative w-full px-4 py-4 md:w-1/3">
    <div
      class="relative p-2 shadow-app-inner h-188 rounded-1 box"
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
        <div class="after rounded-1">
          <span class="w-4 eye">
            <fa icon="eye" />
          </span>
        </div>
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
<style lang="scss" scoped>
  .box {
    &:hover {
      .after {
        @apply visible;
        @apply opacity-100;
        .eye{
          transform: translateY(80px);
        }
      }
    }
  }
  .after {
    @apply absolute;
    @apply inset-0;
    @apply text-white;
    background: rgba(0, 0, 0, .6);
    @apply flex;
    @apply opacity-0;
    @apply invisible;
    @apply justify-center;
    @apply items-center;
    -webkit-transition: opacity 600ms, visibility 600ms;
    transition: opacity 600ms, visibility 600ms;
  }
  .eye{
    @apply absolute;
    @apply top-0;
    transition: 400ms ease-in;
  }
</style>
