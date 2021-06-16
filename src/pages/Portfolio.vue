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
        :project="project"
        @show="showModal"
        />
      </div>
      <transition name="modal" appear>
        <Modal :project="selectedProject" v-if="show" @close="closeModal"/>
      </transition>
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
    let selectedProject = ref({});
    const navs = ['All', 'Web'];
    const projects = [
      {
        name: 'Breaking Bad Cast',
        image: '/projects/breakingbad.png',
        description: `A web application built around the blockbuster movie series, Breaking bad.\n This application uses the open Breaking bad API to search for the casts of the movie rather easily.`,
        demoUrl: 'https://breaking-bad-cast.samiyke.com/',
        repoUrl: 'https://github.com/sir-radar/breaking-bad-cast',
        type: 'Web',
        stack: [
          {
            name: 'HTML5',
            icon: 'html-5.svg'
          },
          {
            name: 'Css3',
            icon: 'css-3.svg'
          },
          {
            name: 'Javascript',
            icon: 'javascript.svg'
          },
          {
            name: 'React',
            icon: 'react.svg'
          },
        ]
      },
      {
        name: 'Flappy Bird Web',
        image: '/projects/flappybird.png',
        description: `Web clone version of the popular Flappy bird game. Flappy Bird is a mobile game developed by Vietnamese video game artist and programmer Dong Nguyen, under his game development company and initailly relased in 2013.`,
        demoUrl: 'https://flappybird.samiyke.com/',
        repoUrl: 'https://github.com/sir-radar/flappyBirdClone',
        type: 'Web',
        stack: [
          {
            name: 'HTML5',
            icon: 'html-5.svg'
          },
          {
            name: 'Css3',
            icon: 'css-3.svg'
          },
          {
            name: 'Typescript',
            icon: 'typescript.svg'
          },
          {
            name: 'Svelte',
            icon: 'svelte.svg'
          }
        ]
      },
      {
        name: 'E-commerce Website',
        image: '/projects/ecommerce.png',
        description: `This is a basic E-commerce application to show an average user interactions with ecommerce websites. These actions include: selecting items and checking out.`,
        demoUrl: 'https://e-commerce.samiyke.com/',
        repoUrl: 'https://github.com/sir-radar/e-commerce',
        type: 'Web',
        stack: [
          {
            name: 'HTML5',
            icon: 'html-5.svg'
          },
          {
            name: 'SASS',
            icon: 'sass.svg'
          },
          {
            name: 'Javascript',
            icon: 'javascript.svg'
          },
          {
            name: 'Vue',
            icon: 'vue.svg'
          }
        ]
      },
      {
        name: 'Web StopWatch',
        image: '/projects/stopwatch.png',
        description: `Stopwatch prototype for the web with all the basic features. This application include the basic start, pause, stop and lap functionalities.`,
        demoUrl: 'https://web-stopwatch.samiyke.com/',
        repoUrl: 'https://github.com/sir-radar/vue-timer-app',
        type: 'Web',
        stack: [
          {
            name: 'HTML5',
            icon: 'html-5.svg'
          },
          {
             name: 'Vuetify',
             icon: 'vuetify.svg'
          },
          {
            name: 'Javascript',
            icon: 'javascript.svg'
          },
          {
            name: 'Vue',
            icon: 'vue.svg'
          }
        ]
      },
      {
        name: 'Movie Tracker',
        image: '/projects/movietracker.png',
        description: `A movie search website built around the moviedb API. You can easily search for movies, add them to watchlist or favourite list, read about them and see trailers.`,
        demoUrl: 'https://movie-tracker.samiyke.com/',
        repoUrl: 'https://github.com/sir-radar/movie-tracker',
        type: 'Web',
        stack: [
          {
            name: 'HTML5',
            icon: 'html-5.svg'
          },
          {
            name: 'Css3',
            icon: 'css-3.svg'
          },
          {
            name: 'Bootstrap',
            icon: 'bootstrap.svg'
          },
          {
            name: 'Javascript',
            icon: 'javascript.svg'
          },
          {
            name: 'React',
            icon: 'react.svg'
          },
          {
            name: 'Redux',
            icon: 'redux.svg'
          },
        ]
      },
      {
        name: 'CodEdit',
        image: '/projects/codedit.png',
        description: `A simple Codepen clone for quickly prototyping web applications or components using HTML, CSS and Javascript on the web.`,
        demoUrl: 'https://www.codedit.samiyke.com/',
        repoUrl: 'https://github.com/sir-radar/codepen-clone',
        type: 'Web',
        stack: [
          {
            name: 'HTML5',
            icon: 'html-5.svg'
          },
          {
            name: 'Css3',
            icon: 'css-3.svg'
          },
          {
            name: 'Javascript',
            icon: 'javascript.svg'
          },
          {
            name: 'React',
            icon: 'react.svg'
          },
        ]
      },
      {
        name: 'Active Learning Book Store',
        image: '/projects/bookstore.png',
        description: `A mini book-store demonstration with a basic user account and an admin account. It also has multilingual functionality.\n User login \n username: demo. password: secret. \n Admin login \n username: radar. password: secret.`,
        demoUrl: 'https://active-learning.samiyke.com',
        repoUrl: 'https://github.com/sir-radar/book-store',
        type: 'Web',
        stack: [
          {
            name: 'HTML5',
            icon: 'html-5.svg'
          },
          {
            name: 'Css3',
            icon: 'css-3.svg'
          },
          {
            name: 'Bootstrap',
            icon: 'bootstrap.svg'
          },
          {
            name: 'Javascript',
            icon: 'javascript.svg'
          },
          {
            name: 'Vue',
            icon: 'vue.svg'
          }
        ]
      },
    ]
    function moveTo(navigation) {
      this.active = navigation;
    }
    function showModal(data){
      selectedProject.value = data;
      show.value = true;
    }
    function closeModal(){
      show.value = false;
    }
    const comProjects =  computed(() =>  {
      if(active.value === 'All') return projects;
      return projects.filter(p => p.type === active.value)
    })

    return {state, active, moveTo, navs, comProjects, show, showModal, closeModal, selectedProject}
  }
};
</script>
<style lang="scss">
.active{
  color: var(--priColor);
}
.modal-enter-from,
.modal-leave-to{
  opacity: 0;
}

.modal-enter-active,
.modal-leave-active{
  transition: all .5s ease;
}

.modal-enter-to,
.modal-leave-from{
  opacity: 1;
}
</style>
