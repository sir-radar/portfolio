<template>
  <div id="app"
    class="px-3 bg-app-black sm:px-70 md:px-70"
    :class="{'bg-app-light': state.theme === 'light'}"
    >

    <Loader v-show="loading"/>

    <div
      class="relative z-10 flex flex-col-reverse items-start w-full py-32 md:flex-row"
      v-show="!loading"
    >
      <Triangle
        class="hidden md:block triangle img"
        style="transform: translate3d(10px, 4px, 0px);"
      />

      <SquareRL
        style="transform: translate3d(45.64px, 4.76px, 0px);"
        class="hidden md:block square-rl img"
      />
      <img
        src="circle.svg"
        style="transform: translate3d(-6.5px, 9.1px, 0px);"
        class="hidden md:block circle img"
        :class="{'shadow-app-light-inner': state.theme === 'light'}"
      />
      <img
        style="transform: translate3d(-6.78px, -25.02px, 0px);"
        class="hidden md:block dashed-circle img"
        :class="{'shadow-app-light-inner': state.theme === 'light'}"
        src="dashed-circle.svg"
      />

      <img
        src="square-poly.svg"
        style="transform: translate3d(26.18px, 24.36px, 0px);"
        class="hidden md:block square-poly img"
      />

      <img
        src="square.svg"
        style="transform: translate3d(-4px, -52.5px, 0px);"
        class="hidden md:block square img"
        :class="{'shadow-app-light': state.theme === 'light'}"
      />

      <div class="z-10 w-full md:w-3/4 md:pr-2">
        <router-view
          class="p-6 md:p-12 bg-app-black rounded-2 shadow-app"
          :class="{'bg-app-light shadow-app-light': state.theme === 'light'}"
          v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
      <div class="z-10 w-full mb-8 md:mb-0 md:w-1/4 md:pl-2">
        <Menu />
      </div>
    </div>

    <ColorPallete v-show="!loading" />
  </div>
</template>
<script>
import {onMounted, ref} from 'vue';
import { useState } from './store';
import Menu from "@/components/Menu";
import ColorPallete from "@/components/ColorPallete";
import Loader from "@/components/Loader";
import SquareRL from "@/assets/images/svg/square-rl.svg";
import Triangle from "@/assets/images/svg/triangle.svg";

export default {
  name: "App",
  components: {
    Menu,
    ColorPallete,
    Loader,
    SquareRL,
    Triangle,
  },
  setup() {
    onMounted(() => {
      setTimeout(()=> {
        loading.value = false;
      }, 4000)
    })
    const { state } = useState();
    let loading = ref(true);

    return {state, loading}
  }
};
</script>
<style>
:root {
  --priColor: '';
  --innerShadow: '';
  --bgColor:'';
}

body {
  font-family: 'Poppins';
}

a,
a .inner, .animate {
  transition: all 0.3s ease 0s;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -ms-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
}

.img {
  transform-style: preserve-3d;
  backface-visibility: hidden;
  position: absolute;
  display: block;
}
.square-rl {
  left: 7%;
  top: 30%;
  width: 9rem;
}
.circle {
  left: 15%;
  bottom: 30%;
  width: 9rem;
  border-radius: 5rem;
  box-shadow: inset 3px 3px 3px #202125, inset -3px -3px 3px #353535;
}
.dashed-circle {
  right: 23%;
  top: 6%;
  width: 9rem;
  border-radius: 5rem;
  box-shadow: inset 3px 3px 3px #202125, inset -3px -3px 3px #353535;
}
.square {
  right: 20%;
  bottom: 10%;
  width: 8rem;
  border-radius: 2rem;
  box-shadow: 3px 3px 3px #202125, -3px -3px 3px #353535;
}
.square-poly {
  right: 10%;
  top: 20%;
  width: 8rem;
}
.triangle {
  display: block;
  left: 25%;
  top: 10%;
  width: 8rem;
}
.st1 {
  fill: #fafafa;
}
.st2 {
  fill: #fafafa;
}
#SVGID_1_,
#SVGID_3_,
#SVGID_5_,
#SVGID_7_,
#SVGID_9_,
#SVGID_11_,
#SVGID_13_,
#SVGID_15_,
#SVGID_17_,
#SVGID_19_,
#SVGID_21_ {
  overflow: visible;
}
.fade-enter-from,
.fade-leave-to{
  opacity: 0;
  transform: translateY(30px);
}

.fade-enter-active,
.fade-leave-active{
  transition: all .4s ease;
}

.fade-enter-to,
.fade-leave-from{
  opacity: 1;
  transform: translateY(0);
}
</style>
