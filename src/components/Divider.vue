<template>
  <hr
    class="relative w-10 h-2 border-0 divider divider-center rounded-1 shadow-app-inner"
    :class="{'shadow-app-light-inner': state.theme === 'light'}"
   />
</template>

<script>
import { useState } from '../store';
export default {
  setup(){
    const { state } = useState();
    return { state }
  }
};
</script>

<style lang="scss" scoped>
hr.divider:after {
  position: absolute;
  content: "";
  height: 0.25rem;
  background: var(--priColor);
  width: 50%;
  border-radius: 3em;
}

hr.divider-center:after {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>>


