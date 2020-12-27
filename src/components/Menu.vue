<template>
  <div class="sticky z-10 w-full top-16 rounded-2">
    <header
      class="flex flex-col items-center px-6 py-12 mb-8 text-center shadow-app bg-app-black rounded-2"
      :class="{'bg-app-light shadow-app-light': state.theme === 'light'}"
    >
      <div class="relative p-2 mb-6 profile-image shadow-app-inner w-11 h-11 rounded-50" :class="{'shadow-app-light-inner': state.theme === 'light'}">
        <div class="w-full h-full shadow-app rounded-50 p-7" :class="{'shadow-app-light': state.theme === 'light'}">
          <img class="w-full h-full pointer-events-none rounded-50" src="../assets/images/sam.jpeg" alt="profile-image" />
        </div>
      </div>
      <div class="w-full mb-8">
        <h3 class="text-2xl font-semibold text-white" :class="{'text-dark': state.theme === 'light'}">Samson Nwokike</h3>
        <h6 class="text-base text-muted">Frontend Developer</h6>
      </div>
      <nav class="w-full">
        <ul class="w-full">
          <li v-for="menu in menuList" :key="menu.label" class="mb-4 shadow-app rounded-2" :class="{'shadow-app-light': state.theme === 'light'}">
            <router-link
              class="block px-6 py-2 hover:shadow-app-inner rounded-2"
              :class="{'hover:shadow-app-light-inner': state.theme === 'light'}"
              :to="menu.link"
              :active-class="getActiveClass()"
              >
              <div class="flex justify-between text-muted">
                <span class="text-sm font-semibold uppercase" :class="{'text-dark':  state.theme === 'light'}">{{ menu.label }}</span>
                <div class="block w-5 text-icon">
                  <component :is="menu.component" style="stroke: var(--priColor); fill: var(--priColor);" />
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <footer class="text-center text-muted">
      <p class="mb-2">© {{ date }} Samson Nwokike.</p>
      <ul class="flex justify-center">
        <li v-for="icon in footerIcons" :key="icon" class="mr-2 cursor-pointer shadow-app rounded-2" :class="{'shadow-app-light':  state.theme === 'light'}">
          <a
            ref="icon"
            class="flex items-center justify-center w-10 h-10 p-0 hover:shadow-app-inner rounded-2"
            :class="{'hover:shadow-app-light-inner':  state.theme === 'light'}"
            target="_blank"
            :href="icon.url"
          >
            <span id="icon" class="block" :class="icon.class">
              <fa :icon="icon.name"></fa>
            </span>
          </a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
import { useState } from '../store';
import HomeIcon from "@/assets/images/svg/home.svg";
import Profile from "@/assets/images/svg/profile.svg";
import Portfolio from "@/assets/images/svg/portfolio.svg";
import Mail from "@/assets/images/svg/mail.svg";
export default {
  name: "Menu",
  components: {
    HomeIcon,
    Profile,
    Portfolio,
    Mail,
  },
  setup(){
    const { state } = useState();
    const date = new Date().getFullYear();
    const menuList = [
      {
        'label': 'Home',
        'link': '/',
        'component': "HomeIcon"
      },
      {
        'label': 'About',
        'link': '/about',
        'component': "Profile"
      },
      {
        'label': 'Portfolio',
        'link': '/portfolio',
        'component': "Portfolio"
      },
      {
        'label': 'Contact',
        'link': '/contact',
        'component': "Mail"
      },
    ];
    const footerIcons = [
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
    ];
    function getActiveClass (){
        return state.theme === 'light' ? 'shadow-app-light-inner': 'shadow-app-inner';
    }

    return { state, date, menuList, footerIcons, getActiveClass }
  }
};
</script>
