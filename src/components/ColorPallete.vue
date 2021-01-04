<template>
  <div id="color-pallete" class="fixed top-50" :class="{ 'left-30': show, hide: !show }">
    <div class="flex items-start h-1">
      <div class="mr-5 w-278 shadow-app p-33 bg-app-black rounded-2" :class="{'bg-app-light shadow-app-light': state.theme == 'light' }">
        <h6 class="text-base font-semibold text-white mb-15" :class="{'text-dark': state.theme == 'light' }">Theme Colors</h6>
        <Divider />
        <h6 class="mt-5 text-base font-normal text-white mb-15" :class="{'text-dark': state.theme == 'light' }">Pick a color</h6>
        <ul class="flex flex-wrap mb-5">
          <li
            class="inline-block mb-2 mr-1 cursor-pointer rounded-4 shadow-app-sm"
            :class="{'shadow-app-light-sm': state.theme == 'light' }"
            v-for="color in state.colors"
            :key="color"
          >
            <a
              class="flex items-center justify-center w-4 h-4 text-center hover:shadow-app-sm-inner rounded-4"
              :class="{'hover:shadow-app-light-sm-inner': state.theme == 'light' }"
              @click="setPriColor(color)"
            >
              <span class="inline-block w-2 h-2 rounded-4" :style="{ backgroundColor: color }"></span>
            </a>
          </li>
        </ul>
        <div class="flex">
          <div class="mr-2 cursor-pointer shadow-app rounded-2" :class="{'shadow-app-light': state.theme == 'light'}">
            <a class="block px-6 py-1 hover:shadow-app-inner text-muted rounded-2" :class="{'hover:shadow-app-light-inner text-dark': state.theme == 'light' }">Reset</a>
          </div>
          <div @click="hideColors" class="cursor-pointer shadow-app rounded-2" :class="{'shadow-app-light': state.theme == 'light'}">
            <a class="block px-6 py-1 hover:shadow-app-inner text-muted rounded-2" :class="{'hover:shadow-app-light-inner text-dark': state.theme == 'light' }">Close</a>
          </div>
        </div>
      </div>

      <div @click="toggleColors" class="mr-3 cursor-pointer bg-app-black shadow-app rounded-1" :class="{'shadow-app-light bg-app-light': state.theme == 'light' }">
        <a class="flex items-center justify-center hover:shadow-app-inner rounded-1 h-50 w-50" :class="{'hover:shadow-app-light-inner': state.theme == 'light' }">
          <span class="block w-5 h-5 text-white settings" :class="{'text-dark': state.theme === 'light'}">
            <fa icon="cog" />
          </span>
        </a>
      </div>
      <div @click="toggleTheme" class="cursor-pointer bg-app-black shadow-app rounded-1" :class="{'shadow-app-light bg-app-light': state.theme == 'light' }">
        <a class="flex items-center justify-center hover:shadow-app-inner rounded-1 h-50 w-50" :class="{'hover:shadow-app-light-inner': state.theme == 'light' }">
          <span class="block w-5 h-5 text-white" :class="{'text-dark': state.theme === 'light'}">
            <fa v-if="state.theme === 'dark'" icon="sun" />
            <fa v-if="state.theme === 'light'" icon="moon"/>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue';
import { useState } from '../store';
import Divider from "@/components/Divider";
export default {
  name: "ColorPallete",
  components: {
    Divider,
  },
  setup(){
    const { state, setPriColor, setTheme } = useState();
    let show = ref(false)
    function hideColors() {
      show.value = false;
    }
    function toggleColors() {
      show.value = !show.value;
    }
    function toggleTheme(){
      if(state.theme === 'dark'){
        setTheme('light')
      }else{
        setTheme('dark')
      }
    }

    return { state, show, hideColors, toggleColors, setPriColor, toggleTheme }
  }
};
</script>

<style lang="scss">
#color-pallete {
  transition: left 1s;
  -moz-transition: left 1s;
  -webkit-transition: left 1s;
  -o-transition: left 1s;
}

.hide {
  left: -285px;
}
</style>
