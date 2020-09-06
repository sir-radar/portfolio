<template>
  <div id="app" class="flex bg-app-black px-70">
    <div class="flex w-full py-32">
      <div class="w-3/4 bg-red-200 pr-2">
        <router-view />
      </div>
      <div class="w-1/4 pl-2">
        <Menu />
      </div>
    </div>

    <ColorPallete />
  </div>
</template>
<script>
import Menu from '@/components/Menu';
import ColorPallete from '@/components/ColorPallete';

export default {
  name: 'App',
  components: {
    Menu,
    ColorPallete,
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
</style>
