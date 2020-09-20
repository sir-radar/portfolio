<template>
  <div class="about">
    <section id="header">
      <h3 class="uppercase text-white text-base font-bold mb-2">
        Map location
      </h3>
      <BigDivider class="mb-8" />
      <div class="w-full py-4 relative">
        <div class="shadow-app-inner p-2 h-388 rounded-1">
          <div class="shadow-app w-full p-1 h-full rounded-1"></div>
        </div>
      </div>
    </section>
    <section class="info">
      <h3 class="uppercase text-white text-base font-bold mb-2">
        Contact info
      </h3>
      <BigDivider class="mb-8" />
    </section>
  </div>
</template>
<script>
import BigDivider from '@/components/BigDivider';
export default {
  name: 'aboutPage',
  components: {
    BigDivider,
  },
};
</script>
