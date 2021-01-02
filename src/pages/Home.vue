<template>
  <div class="flex flex-col items-center justify-center text-white home">
    <h1
      class="mb-1 font-semibold text-center text-title mt-21"
      :class="{'text-dark': state.theme === 'light'}"
      >
      Samson Nwokike
    </h1>
    <div class="relative mb-6 text-sm md:text-xl text-muted">
      <h1 class="h-5">
        <a href="" id="typewrite" data-period="3000" data-type='[ "Hi, there ✌.", "Samson here!", "I am a Frontend developer", "with Fullstack development experience.", "Humble, Curious, Empathetic and Productive", "A Chelsea Fan." ]'>
          <span class="uppercase wrap"></span>
        </a>
      </h1>
    </div>
    <ul class="flex justify-center mb-24 text-muted">
      <li
        v-for="icon in iconList"
        :key="icon.name"
        class="mr-2 cursor-pointer shadow-app rounded-2"
        :class="{'hover:shadow-app-light shadow-app-light': state.theme === 'light'}"
        >
        <a
          ref="icon"
          class="flex items-center justify-center w-10 h-10 p-0 hover:shadow-app-inner rounded-2"
          :class="{'hover:shadow-app-light-inner': state.theme === 'light'}"
          target="_blank"
          :href="icon.url"
        >
          <span id="icon" class="block" :class="icon.class">
            <fa :icon="icon.name"></fa>
          </span>
        </a>
      </li>
    </ul>
    <BottomLinks />
  </div>
</template>

<script>
import {onMounted, reactive} from 'vue';
import { useState } from '../store';
import BottomLinks from '@/components/BottomLinks';
export default {
  name: 'Home',
  components: {
    BottomLinks,
  },
  setup() {
    onMounted(() => {
      const elements = document.getElementById('typewrite');
      const toRotate = elements.getAttribute('data-type');
      const period = elements.getAttribute('data-period');
      if (toRotate) {
        TxtType(elements, JSON.parse(toRotate), period);
      }
    })
    const { state } = useState();
    const app =  reactive({ toRotate: '', el: null, loopNum: 0, period: 0, txt:'', isDeleting: false });
    const iconList = [
      {
        name: 'facebook-f',
        class: 'w-2',
        url: 'https://web.facebook.com/nwokike.samson.9'
      },
      {
        name: 'github',
        class: 'w-3',
        url: 'https://github.com/sir-radar'
      },
      {
        name: 'twitter',
        class: 'w-3',
        url: 'https://twitter.com/sir_radar'
      },
      {
        name: 'linkedin',
        class: 'w-3',
        url: 'https://www.linkedin.com/in/sir-radar'
      },
    ]

    function TxtType (el, toRotate, period) {
      app.toRotate = toRotate;
      app.el = el;
      app.loopNum = 0;
      app.period = parseInt(period, 10) || 2000;
      app.txt = '';
      tick();
      app.isDeleting = false;
    }

    function tick () {
      var i = app.loopNum % app.toRotate.length;
      var fullTxt = app.toRotate[i];

      if (app.isDeleting) {
      app.txt = fullTxt.substring(0, app.txt.length - 1);
      } else {
      app.txt = fullTxt.substring(0, app.txt.length + 1);
      }

      app.el.innerHTML = '<span class="wrap">'+app.txt+'</span>';


      var delta = 200 - Math.random() * 100;

      if (app.isDeleting) { delta /= 2; }

      if (!app.isDeleting && app.txt === fullTxt) {
      delta = app.period;
      app.isDeleting = true;
      } else if (app.isDeleting && app.txt === '') {
      app.isDeleting = false;
      app.loopNum++;
      delta = 500;
      }

      setTimeout(function() {
        tick();
      }, delta);
    }

    return { state, iconList }

  }
};
</script>
