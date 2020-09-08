<template>
  <div id="color-pallete" class="fixed top-50 z-20" :class="{ 'left-30': show, hide: !show }">
    <div class="flex items-start">
      <div class="w-278 shadow-app p-33 bg-app-black rounded-2 mr-5">
        <h6 class="text-base font-semibold text-white mb-15">Theme Colors</h6>
        <Divider />
        <h6 class="text-base font-normal text-white mb-15 mt-5">Pick a color</h6>
        <ul class="flex flex-wrap mb-5">
          <li
            class="rounded-4 shadow-app-sm inline-block mr-1 mb-2 cursor-pointer"
            v-for="color in colors"
            :key="color"
          >
            <a
              class="hover:shadow-app-sm-inner rounded-4 flex justify-center items-center text-center h-4 w-4"
            >
              <span class="h-2 w-2 rounded-4 inline-block" :style="{ backgroundColor: color }"></span>
            </a>
          </li>
        </ul>
        <div class="flex">
          <div class="shadow-app rounded-2 mr-2 cursor-pointer">
            <a class="hover:shadow-app-inner block text-muted px-6 py-1 rounded-2">Reset</a>
          </div>
          <div @click="hideColors()" class="shadow-app rounded-2 cursor-pointer">
            <a class="hover:shadow-app-inner block text-muted px-6 py-1 rounded-2">Close</a>
          </div>
        </div>
      </div>

      <div @click="toggleColors()" class="bg-app-black shadow-app cursor-pointer rounded-1 mr-3">
        <a class="hover:shadow-app-inner flex justify-center items-center rounded-1 h-50 w-50">
          <span class="settings block text-white w-5 h-5">
            <fa icon="cog" />
          </span>
        </a>
      </div>
      <div class="bg-app-black shadow-app cursor-pointer rounded-1">
        <a class="hover:shadow-app-inner flex justify-center items-center rounded-1 h-50 w-50">
          <span class="block text-white w-5 h-5">
            <fa icon="sun" />
            <!-- <fa icon="moon"/> -->
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Divider from "@/components/Divider";
export default {
  name: "ColorPallete",
  components: {
    Divider,
  },
  data() {
    return {
      colors: [
        "#F56C6D",
        "#558D6A",
        "#00B4D9",
        "#15C8C8",
        "#7369B9",
        "#D0A068",
        "#EAD22D",
        "#EB874F",
        "#FDC62A",
        "#EF3E96",
        "#009473",
        "#55606E",
        "#FE8178",
        "#734854",
        "#113F59",
        "#FFD42C",
        "#A0CE4E",
        "#2897AB",
        "#4765A0",
        "#E53F50",
      ],
      show: false,
    };
  },
  methods: {
    hideColors() {
      this.show = false;
    },
    toggleColors() {
      this.show = !this.show;
    },
  },
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

.settings {
  animation: rotation 2s infinite linear;
}

@-webkit-keyframes rotation {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotation {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
