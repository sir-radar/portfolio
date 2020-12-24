<template>
  <div class="about">
    <section id="details" class="mb-12">
      <h1
        class="mb-2 text-base font-bold text-white uppercase"
        :class="{'text-dark': state.theme === 'light'}"
      >About me</h1>
      <BigDivider class="mb-8" />
      <h3
        class="font-semibold text-white uppercase text-title"
        :class="{'text-dark': state.theme === 'light'}"
      >Samson Nwokike</h3>
      <p class="mb-2 text-xl text-muted">Full Stack Developer</p>
      <div class="flex flex-col w-full mb-3 md:flex-row">
        <div class="w-full md:w-1/2 mb-15 md:mb-0 md:pr-15 text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          dignissimos reiciendis consequatur culpa deleniti molestiae fugit
          libero quaerat? Consequatur commodi pariatur dolores aliquam, voluptas
          ea officiis. Laboriosam adipisci eaque cupiditate.
        </div>
        <div class="w-full md:w-1/2 md:pl-15 text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          pariatur assumenda odit doloribus ipsum ducimus laborum quibusdam
          molestias labore, accusantium maxime repudiandae eveniet esse animi
          similique numquam tenetur suscipit dolor.
        </div>
      </div>
      <div class="flex flex-col w-full md:flex-row">
        <div class="w-full mb-4 md:w-1/2 md:mb-0 md:pr-15">
          <div class="p-2 shadow-app-inner rounded-1" :class="{'shadow-app-light-inner': state.theme === 'light'}">
            <div class="w-full shadow-app rounded-1" :class="{'shadow-app-light': state.theme === 'light'}">
              <ul class="p-2 mb-0">
                <li
                  v-for="(info, i) in personalInfo"
                  :key="info.label"
                  class="w-full md:border-line-color"
                  :class="{'md:border-line-color-light': state.theme === 'light', 'md:border-b': i != lastPersonalInfo}"
                >
                  <span
                    class="block w-full py-2 font-semibold text-center text-white md:w-3/12 md:inline-block md:border-r md:border-line-color"
                    :class="{'text-dark md:border-line-color-light': state.theme === 'light'}"
                  >{{info.label}}</span>
                  <span
                    class="inline-block w-full py-2 text-center text-muted md:w-9/12"
                  >{{info.value}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 md:pl-15">
          <div class="p-2 shadow-app-inner rounded-1" :class="{'shadow-app-light-inner': state.theme === 'light'}">
            <div class="w-full shadow-app rounded-1" :class="{'shadow-app-light': state.theme === 'light'}">
              <ul class="p-2 mb-0">
                <li
                  v-for="(contact, i) in contactInfo"
                  :key="contact.label"
                  class="w-full md:border-line-color"
                  :class="{'md:border-line-color-light': state.theme === 'light', 'md:border-b': i != lastcontactInfo}"
                >
                  <span
                    class="block w-full py-2 font-semibold text-center text-white md:w-3/12 md:inline-block md:border-r md:border-line-color"
                    :class="{'text-dark md:border-line-color-light': state.theme === 'light'}"
                  >{{contact.label}}</span>
                  <span
                    class="inline-block w-full py-2 text-center text-muted md:w-9/12"
                  >{{ contact.value }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="skills" class="mb-12">
      <h3
        class="mb-2 text-base font-bold text-white uppercase"
        :class="{'text-dark': state.theme === 'light'}"
      >Professional Skills</h3>
      <BigDivider class="mb-8" />

      <div class="relative flex flex-col items-center justify-center md:flex-row">
        <ul class="w-full md:w-11/12">
          <li>
            <h6
              class="mb-2 font-semibold text-white uppercase"
              :class="{'text-dark': state.theme === 'light'}"
            >Html-css</h6>
            <div
              class="flex items-center h-4 px-2 mb-4 shadow-app-inner rounded-3"
              :class="{'shadow-app-light-inner': state.theme === 'light'}"
            >
              <div
                class="w-3/4 h-7 rounded-2"
                :class="{'bg-app-black': state.theme === 'light', ' bg-app-light': state.theme === 'dark'}"
                ></div>
            </div>
          </li>
        </ul>

        <div class="relative flex justify-center w-full md:block md:w-1/12">
          <div
            class="w-full px-6 text-center md:w-auto shadow-app md:transform md:rotate-90 py-7 rounded-1 top-n15 left-n15 md:absolute"
            :class="{'shadow-app-light': state.theme === 'light'}"
          >
            <span class="text-white uppercase" :class="{'text-dark': state.theme === 'light'}">Coding</span>
          </div>
        </div>
      </div>
    </section>

    <section id="experience" class="mb-12">
      <h3
        class="mb-2 text-base font-bold text-white uppercase"
        :class="{'text-dark': state.theme === 'light'}"
      >EXPERIENCE</h3>
      <BigDivider class="mb-8" />

      <div class="relative time">
        <div
          class="absolute shadow-app h-53 w-53 rounded-2 bg-app-black"
          :class="{'shadow-app-light bg-app-light': state.theme === 'light'}"
        >
          <div
            class="flex items-center justify-center hover:shadow-app-inner rounded-2 h-53 w-53"
            :class="{'hover:shadow-app-light-inner': state.theme === 'light'}"
          >
            <div class="w-6">
              <Case style="fill: #ead22d; stroke: #ead22d;" />
            </div>
          </div>
        </div>
        <div class="pt-16">
          <div class="relative pt-5 pl-16 time-content">
            <div>
              <h6
                class="mb-1 text-base font-semibold text-white"
                :class="{'text-dark': state.theme === 'light'}"
              >WebDesigner – Mutation Media</h6>
              <div class="mb-1 text-sm text-muted">
                <span :class="{'text-dark': state.theme === 'light'}">
                  <fa class="inline-block w-3 pb-1" icon="calendar"></fa> Feb 15th -
                  <span
                    class="px-2 py-1 shadow-app-inner rounded-2"
                    :class="{'shadow-app-light-inner': state.theme === 'light'}"
                  >Current</span>
                </span>
              </div>
              <p class="text-muted">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
                ut sint voluptas rem? At nisi obcaecati placeat adipisci nobis?
                Quidem rerum molestias ipsam vero fugiat sint porro in maxime
                id?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="education" class="mb-12">
      <h3
        class="mb-2 text-base font-bold text-white uppercase"
        :class="{'text-dark': state.theme === 'light'}"
      >Education</h3>
      <BigDivider class="mb-8" />

      <div class="relative time">
        <div
          class="absolute shadow-app h-53 w-53 rounded-2 bg-app-black"
          :class="{'shadow-app-light bg-app-light': state.theme === 'light'}"
        >
          <div
            class="flex items-center justify-center hover:shadow-app-inner rounded-2 h-53 w-53"
            :class="{'hover:shadow-app-light-inner': state.theme === 'light'}"
          >
            <div class="w-6">
              <Education style="fill: #ead22d; stroke: #ead22d;" />
            </div>
          </div>
        </div>
        <div class="pt-16">
          <div class="relative pt-5 pl-16 time-content">
            <div>
              <h6
                class="mb-1 text-base font-semibold text-white"
                :class="{'text-dark': state.theme === 'light'}"
              >Bachelor Degree - Nnadi Azikiwe University</h6>
              <div class="mb-1 text-sm text-muted">
                <span :class="{'text-dark': state.theme === 'light'}">
                  <fa class="inline-block w-3 pb-1" icon="calendar"></fa> Feb 2011 - Aug 2015
                </span>
              </div>
              <p class="text-muted">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
                ut sint voluptas rem? At nisi obcaecati placeat adipisci nobis?
                Quidem rerum molestias ipsam vero fugiat sint porro in maxime
                id?
              </p>
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
import {computed} from 'vue';
import { useState } from '../store';
import BigDivider from "@/components/BigDivider";
import Case from "@/assets/images/svg/case.svg";
import Education from "@/assets/images/svg/education.svg";
import BottomLinks from "@/components/BottomLinks";
export default {
  name: "aboutPage",
  components: {
    BigDivider,
    Case,
    BottomLinks,
    Education,
  },
  setup(){
    const { state } = useState();
    const personalInfo = [
      {
        label: 'Name',
        value: 'Samson Nwokike'
      },
      {
        label: 'Birth',
        value: 'March 26'
      },
      {
        label: 'City',
        value: 'Lagos, Nigeria'
      },
    ];
    const contactInfo = [
      {
        label: 'Email',
        value: 'nwokikesamson@gmail.com'
      },
      {
        label: 'Phone',
        value: '+2349032326238'
      },
      {
        label: 'Skype',
        value: 'live:nwokikesamson'
      },
    ];

    const lastPersonalInfo =  computed(() =>  personalInfo.length - 1)
    const lastcontactInfo =  computed(() =>  contactInfo.length - 1)
    return { state, personalInfo, contactInfo, lastPersonalInfo, lastcontactInfo }
  }
};
</script>
<style lang="scss" scoped>
.time::before {
  box-shadow: var(--innerShadow);
  background-color: var(--bgColor);
  @apply bottom-0;
  content: "";
  left: 1.375rem;
  @apply absolute;
  top: 0.0625rem;
  width: 0.5rem;
  height: 100%;
  @apply rounded-3;
}
.time-content::before {
  background: var(--priColor);
  content: "";
  height: 0.625rem;
  left: 1.5625rem;
  @apply absolute;
  @apply text-center;
  top: 1.6rem;
  width: 0.25rem;
  @apply rounded-2;
}
</style>
