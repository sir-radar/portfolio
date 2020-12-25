<template>
  <div class="about">
    <section id="header">
      <h3
        class="mb-2 text-base font-bold text-white uppercase"
        :class="{'text-dark': state.theme === 'light'}"
      >
        Map location
      </h3>
      <BigDivider class="mb-8" />
      <div class="relative w-full py-4">
        <div
          class="p-2 shadow-app-inner h-388 rounded-1"
          :class="{'shadow-app-light-inner': state.theme === 'light'}"
        >
          <div
            class="relative w-full h-full p-1 shadow-app rounded-1"
            :class="{'shadow-app-light': state.theme === 'light'}"
          >
            <iframe
              class="rounded-1"
              width="100%"
              height="100%"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Lagos,%20Nigeria+(My%20location)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
    <section class="info">
      <h3
        class="mb-2 text-base font-bold text-white uppercase"
        :class="{'text-dark': state.theme === 'light'}"
      >
        Contact info
      </h3>
      <BigDivider class="mb-8" />
    </section>
    <section class="send_email">
      <h3
        class="mb-2 text-base font-bold text-white uppercase"
        :class="{'text-dark': state.theme === 'light'}"
      >
        SEND ME AN EMAIL
      </h3>
      <BigDivider class="mb-8" />
      <form @submit.prevent="">
        <div class="flex w-full mb-3">
          <div class="w-1/2 pr-15">
            <div class="w-full shadow-app rounded-2" :class="{'shadow-app-light': state.theme === 'light'}">
              <input
                type="text"
                class="w-full form-control hover:shadow-app-inner focus:shadow-app-inner"
                :class="{'hover:shadow-app-light-inner focus:shadow-app-light-inner': state.theme === 'light'}"
                placeholder="Name"
              />
            </div>
          </div>
          <div class="w-1/2 pl-15">
          <div
            class="w-full shadow-app rounded-2"
            :class="{'shadow-app-light': state.theme === 'light'}"
          >
            <input
              type="email"
              class="w-full form-control hover:shadow-app-inner focus:shadow-app-inner"
              :class="{'hover:shadow-app-light-inner focus:shadow-app-light-inner': state.theme === 'light'}"
              placeholder="Email"
            >
          </div>
          </div>
        </div>
        <div class="flex w-full mb-3">
          <div class="w-full">
            <div
              class="w-full shadow-app rounded-2"
              :class="{'shadow-app-light': state.theme === 'light'}"
            >
              <textarea
                class="w-full form-control hover:shadow-app-inner focus:shadow-app-inner resize-n"
                :class="{'hover:shadow-app-light-inner focus:shadow-app-light-inner': state.theme === 'light'}"
                placeholder="Message"
                rows="6"
                spellcheck="false">
              </textarea>
            </div>
          </div>
        </div>
        <button
          class="px-6 py-2 font-medium shadow-app hover:shadow-app-inner rounded-2 text-submit outline-zero"
          :class="{'shadow-app-light hover:shadow-app-light-inner': state.theme === 'light'}"
          style="color: var(--priColor)"
          type="submit"
        >Send message</button>
      </form>
    </section>
    <div class="flex flex-col items-center justify-center">
      <BottomLinks />
    </div>
  </div>
</template>
<script>
import {useState} from '../store';
import BigDivider from "@/components/BigDivider";
import BottomLinks from '@/components/BottomLinks';
export default {
  name: "aboutPage",
  components: {
    BigDivider,
    BottomLinks
  },
  setup(){
    const { state } = useState();

    return {state}
  }
};
</script>
<style lang="scss" scoped>
.form-control{
  display: block;
  width: 100%;
  padding: 10px 24px;
  font-size: 0.875rem;
  line-height: 1.7;
  color: #9da1a5;
  background-color: var(--bgColor);
  background-clip: padding-box;
  border: 1px solid var(--bgColor);
  border-radius: 2rem;
  outline: 0;
  outline-color: initial;
  outline-style: initial;
  outline-width: 0px;
}
.resize-n {
  resize: none;
}
.outline-zero{
  outline: none !important;
}
</style>
