<template>
  <div class="sticky top-16 rounded-2 w-full z-10">
    <header
      class="shadow-app bg-app-black rounded-2 px-6 py-12 flex flex-col items-center text-center mb-8"
    >
      <div class="profile-image shadow-app-inner relative w-11 h-11 p-2 rounded-50 mb-6">
        <div class="shadow-app rounded-50 p-7">
          <img class="rounded-50 w-full" src="../assets/images/sam.jpeg" alt="profile-image" />
        </div>
      </div>
      <div class="mb-8 w-full">
        <h3 class="font-semibold text-2xl text-white">Samson Nwokike</h3>
        <h6 class="text-base text-muted">Full Stack Developer</h6>
      </div>
      <nav class="w-full">
        <ul class="w-full">
          <li class="shadow-app rounded-2 mb-4">
            <router-link class="hover:shadow-app-inner block py-2 px-6 rounded-2" to="/">
              <div class="flex justify-between">
                <span class="font-semibold text-sm text-muted uppercase">Home</span>
                <div class="block w-5 h-5 text-icon">
                  <HomeIcon />
                </div>
              </div>
            </router-link>
          </li>
          <li class="shadow-app rounded-2 mb-4">
            <router-link class="hover:shadow-app-inner block py-2 px-6 rounded-2" to="/about">
              <div class="flex justify-between">
                <span class="font-semibold text-sm text-muted uppercase">About</span>
                <div class="block w-5 h-5 text-icon">
                  <Profile />
                </div>
              </div>
            </router-link>
          </li>
          <li class="shadow-app rounded-2 mb-4">
            <router-link class="hover:shadow-app-inner block py-2 px-6 rounded-2" to="/portfolio">
              <div class="flex justify-between">
                <span class="font-semibold text-sm text-muted uppercase">Portfolio</span>
                <div class="block w-5 h-5 text-icon">
                  <Portfolio />
                </div>
              </div>
            </router-link>
          </li>
          <li class="shadow-app rounded-2 mb-4">
            <router-link class="hover:shadow-app-inner block py-2 px-6 rounded-2" to="/contact">
              <div class="flex justify-between">
                <span class="font-semibold text-sm text-muted uppercase">Contact</span>
                <div class="block w-5 h-5 text-icon">
                  <Mail />
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
    </footer>
  </div>
</template>

<script>
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
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>

<style>
a.router-link-exact-active {
  @apply shadow-app-inner;
}
</style>
