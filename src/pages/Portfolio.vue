<template>
  <div class="portfolio min-h-40">
    <section id="header">
      <h3
        class="mb-2 text-base font-bold uppercase"
        :class="{'text-dark': state.theme === 'light', 'text-white': state.theme === 'dark'}"
      >My works</h3>
      <BigDivider class="mb-8" />
      <nav class="flex flex-col items-center justify-center">
        <ul class="flex mb-8 text-muted">
          <li v-for="nav in navs" :key="nav" class="mr-4 rounded-2">
            <a
              class="block px-5 py-2 uppercase cursor-pointer rounded-2 hover:shadow-app-inner"
              :class="{ 'shadow-app-inner active': active === nav, 'hover:shadow-app-light-inner text-dark': state.theme === 'light', 'shadow-app-light-inner active': active === nav &&  state.theme === 'light'}"
              @click="moveTo(nav)"
              >{{nav}}</a
            >
          </li>
        </ul>
        <Divider class="mb-4" />
      </nav>
    </section>
    <section id="works" class="mb-12">
      <div class="flex flex-wrap items-start -mx-4">
       <ProjectFrame
        v-for="project in comProjects"
        :key="project.name"
        @show="showModal"
        />
      </div>
      <Modal v-if="show" @close="closeModal"/>
    </section>
    <div class="flex flex-col items-center justify-center">
      <BottomLinks />
    </div>
  </div>
</template>
<script>
import {ref, computed} from 'vue';
import { useState } from '../store';
import BigDivider from '@/components/BigDivider';
import Divider from '@/components/Divider';
import BottomLinks from '@/components/BottomLinks';
import ProjectFrame from '@/components/ProjectFrame';
import Modal from '@/components/Modal';
export default {
  name: 'aboutPage',
  components: {
    BigDivider,
    Divider,
    BottomLinks,
    ProjectFrame,
    Modal
  },
  setup(){
    const { state } = useState();
    let active = ref('All');
    let show = ref(false);
    const navs = ['All', 'Web', 'Mobile'];
    const projects = [
      {
        name: 'new',
        image: 'new name',
        url: 'new name',
        type: 'Web'
      },
      {
        name: 'name',
        image: 'new name',
        url: 'new name',
        type: 'Web'
      },
      {
        name: 'jax',
        image: 'new name',
        url: 'new name',
        type: 'Web'
      },
      {
        name: 'mob',
        image: 'new name',
        url: 'new name',
        type: 'Web'
      },
      {
        name: 'wax',
        image: 'new name',
        url: 'new name',
        type: 'Mobile'
      },
      {
        name: 'never',
        image: 'new name',
        url: 'new name',
        type: 'Mobile'
      }
    ]
    function moveTo(navigation) {
      this.active = navigation;
    }
    function showModal(data){
      console.log(data)
      show.value = true;
    }
    function closeModal(){
      show.value = false;
    }
    const comProjects =  computed(() =>  {
      if(active.value === 'All') return projects;
      return projects.filter(p => p.type === active.value)
    })

    return {state, active, moveTo, navs, comProjects, show, showModal, closeModal}
  }
};
</script>
<style lang="scss">
.active{
  color: var(--priColor);
}
</style>
