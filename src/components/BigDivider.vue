<template>
  <hr
    class="relative h-2 border-0 divider divider-center w-60 rounded-1 shadow-app-inner"
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
  left: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
}
</style>>


