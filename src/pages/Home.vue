<template>
  <div class="home flex flex-col justify-center items-center">
    <h1 class="font-semibold text-center text-white text-title mt-21 mb-1">
      Samson Nwokike
    </h1>
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
    <BottomLinks />
  </div>
</template>

<script>
import BottomLinks from '@/components/BottomLinks';
export default {
  name: 'Home',
  components: {
    BottomLinks,
  },
};
</script>
