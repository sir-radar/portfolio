<template>
  <div class="portfolio">
    <section id="header">
      <h3 class="uppercase text-white text-base font-bold mb-2">My works</h3>
      <BigDivider class="mb-8" />
      <nav class="flex flex-col justify-center items-center">
        <ul class="flex mb-8 text-muted">
          <li class="rounded-2 mr-4">
            <a
              class="block uppercase rounded-2 px-5 py-2 cursor-pointer hover:shadow-app-inner"
              :class="{ 'shadow-app-inner text-white': active === 'All' }"
              @click="moveTo('All')"
              >All</a
            >
          </li>
          <li class="rounded-2 mr-4">
            <a
              class="block uppercase rounded-2 px-5 py-2 cursor-pointer hover:shadow-app-inner"
              :class="{ 'shadow-app-inner': active === 'Web' }"
              @click="moveTo('Web')"
              >Web</a
            >
          </li>
          <li class="rounded-2 mr-4">
            <a
              class="block uppercase rounded-2 px-5 py-2 cursor-pointer hover:shadow-app-inner"
              :class="{ 'shadow-app-inner': active === 'Mobile' }"
              @click="moveTo('Mobile')"
              >Mobile</a
            >
          </li>
        </ul>
        <Divider class="mb-4" />
      </nav>
    </section>
    <section id="works" class="mb-12">
      <div class="flex items-start flex-wrap -mx-4">
        <div class="w-1/3 px-4 py-4 relative">
          <div class="shadow-app-inner p-2 h-188 rounded-1">
            <div class="shadow-app w-full p-1 h-full rounded-1">
              <img
                src="../assets/images/sam.jpeg"
                class="w-full h-full rounded-1 object-cover object-center"
              />
            </div>
          </div>
        </div>
        <div class="w-1/3 px-4 py-4">
          <div class="shadow-app-inner p-2 h-188 rounded-1">
            <div class="shadow-app w-full p-1 h-full rounded-1">
              <img
                src="https://images.unsplash.com/photo-1553531384-397c80973a0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                class="w-full h-full rounded-1 object-cover object-center"
              />
            </div>
          </div>
        </div>
        <div class="w-1/3 px-4 py-4">
          <div class="shadow-app-inner p-2 h-188 rounded-1">
            <div class="shadow-app w-full p-1 h-full rounded-1">
              <img
                src="../assets/images/sam.jpeg"
                class="w-full h-full rounded-1 object-cover object-center"
              />
            </div>
          </div>
        </div>
        <div class="w-1/3 px-4 py-4">
          <div class="shadow-app-inner p-2 h-188 rounded-1">
            <div class="shadow-app w-full p-1 h-full rounded-1">
              <img
                src="../assets/images/sam.jpeg"
                class="w-full h-full rounded-1 object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="flex flex-col items-center justify-center">
      <BottomLinks />
    </div>
  </div>
</template>
<script>
import BigDivider from '@/components/BigDivider';
import Divider from '@/components/Divider';
import BottomLinks from '@/components/BottomLinks';
export default {
  name: 'aboutPage',
  components: {
    BigDivider,
    Divider,
    BottomLinks,
  },
  data() {
    return {
      active: 'All',
    };
  },
  methods: {
    moveTo(navigation) {
      this.active = navigation;
    },
  },
};
</script>
