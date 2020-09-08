<template>
  <div id="app" class="bg-app-black px-3 sm:px-70 md:px-70">
    <div class="flex flex-col-reverse md:flex-row relative items-start w-full py-32 z-10">
      <Triangle
        class="hidden md:block triangle img"
        style="transform: translate3d(7.44px, 9.36px, 0px);"
      />

      <SquareRL
        style="transform: translate3d(45.64px, 4.76px, 0px);"
        class="md:block hidden square-rl img"
      />
      <img
        src="circle.svg"
        style="transform: translate3d(-6.5px, 9.1px, 0px);"
        class="md:block hidden circle img"
      />
      <img
        style="transform: translate3d(-6.78px, -25.02px, 0px);"
        class="md:block hidden dashed-circle img"
        src="dashed-circle.svg"
      />

      <img
        src="square-poly.svg"
        style="transform: translate3d(26.18px, 24.36px, 0px);"
        class="md:block hidden square-poly img"
      />

      <Square
        style="transform: translate3d(-4px, -52.5px, 0px);"
        class="md:block hidden square img"
      />

      <div class="w-full md:w-3/4 md:pr-2 z-10">
        <router-view class="bg-app-black rounded-2 shadow-app p-12" />
      </div>
      <div class="mb-8 md:mb-0 w-full md:w-1/4 md:pl-2 z-10">
        <Menu />
      </div>
    </div>

    <ColorPallete />
  </div>
</template>
<script>
import Menu from "@/components/Menu";
import ColorPallete from "@/components/ColorPallete";
import SquareRL from "@/assets/images/svg/square-rl.svg";
import Square from "@/assets/images/svg/square.svg";
import Triangle from "@/assets/images/svg/triangle.svg";

export default {
  name: "App",
  components: {
    Menu,
    ColorPallete,
    SquareRL,
    Square,
    Triangle,
  },
};
</script>
<style>
a {
  transition: all 0.3s ease 0s;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -ms-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
}

/* .art {
  transform: translate3d(0px, 0px, 0px);
  transform-style: preserve-3d;
  backface-visibility: hidden;
} */

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
</style>
