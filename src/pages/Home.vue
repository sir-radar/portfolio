<template>
  <div class="home flex flex-col justify-center items-center">
    <h1 class="font-semibold text-white text-title mt-21 mb-1">Samson Nwokike</h1>
    <div class="mb-6 text-xl text-muted">Full Stack Developer</div>
    <ul class="flex justify-center text-muted mb-24">
      <li class="shadow-app rounded-2 mr-2 cursor-pointer">
        <a
          ref="icon"
          class="flex justify-center items-center hover:shadow-app-inner h-10 w-10 p-0 rounded-2"
        >
          <span id="icon" class="block w-2">
            <fa icon="facebook-f"></fa>
          </span>
        </a>
      </li>
      <li class="shadow-app rounded-2 mr-2 cursor-pointer">
        <a
          ref="icon"
          class="flex justify-center items-center hover:shadow-app-inner h-10 w-10 p-0 rounded-2"
        >
          <span id="icon" class="block w-3">
            <fa icon="google"></fa>
          </span>
        </a>
      </li>
      <li class="shadow-app rounded-2 mr-1 cursor-pointer">
        <a
          ref="icon"
          class="flex justify-center items-center hover:shadow-app-inner h-10 w-10 p-0 rounded-2"
        >
          <span id="icon" class="block w-3">
            <fa icon="twitter"></fa>
          </span>
        </a>
      </li>
    </ul>
    <Divider class="mb-12 w-60" />
    <div class="flex justify-between w-full text-muted">
      <div class="px-4">
        <a class="flex items-center mr-2 cursor-pointer p-0">
          <div class="shadow-app rounded-2 mr-4">
            <div
              class="flex inner justify-center rounded-50 items-center hover:shadow-app-inner w-12 h-12"
            >
              <span id="icon" class="block w-2">
                <Download />
              </span>
            </div>
          </div>

          <div class="uppercase font-semibold text-sm">Download my cv</div>
        </a>
      </div>
      <div class="px-4">
        <a class="flex items-center mr-2 cursor-pointer p-0">
          <div class="shadow-app rounded-2 mr-4">
            <div
              class="flex inner justify-center rounded-50 items-center hover:shadow-app-inner w-12 h-12"
            >
              <span id="icon" class="block w-2">
                <Print />
              </span>
            </div>
          </div>

          <div class="uppercase font-semibold text-sm">Print my resume</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Divider from "@/components/Divider";
import Download from "@/assets/images/svg/download.svg";
import Print from "@/assets/images/svg/print.svg";
export default {
  name: "Home",
  components: {
    Divider,
    Download,
    Print,
  },
};
</script>
<style>
.link:hover div {
  box-shadow: "inset 3px 3px 3px #202125, inset -3px -3px 3px #353535";
}
</style>
