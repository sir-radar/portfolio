<template>
  <Divider class="mb-12 w-60" />
  <div class="flex flex-col justify-between w-full md:flex-row text-muted">
    <div class="px-4 mb-3 md:mb-0">
      <a href="/files/Samson_Nwokike_Resume.pdf" download class="flex items-center p-0 mr-2 cursor-pointer">
        <div class="mr-4 shadow-app rounded-2" :class="{'shadow-app-light': state.theme === 'light'}">
          <div
            class="flex items-center justify-center w-12 h-12 inner rounded-50 hover:shadow-app-inner"
            :class="{'hover:shadow-app-light-inner': state.theme === 'light'}"
          >
            <span id="icon" class="block w-5">
              <Download style="stroke: var(--priColor); fill: var(--priColor)" />
            </span>
          </div>
        </div>

        <div class="text-sm font-semibold uppercase">Download my resume</div>
      </a>
    </div>
    <div @click="print" class="px-4">
      <a class="flex items-center p-0 mr-2 cursor-pointer">
        <div class="mr-4 shadow-app rounded-2" :class="{'shadow-app-light': state.theme === 'light'}">
          <div
            class="flex items-center justify-center w-12 h-12 inner rounded-50 hover:shadow-app-inner"
            :class="{'hover:shadow-app-light-inner': state.theme === 'light'}"
          >
            <span id="icon" class="block w-5">
              <Print style="stroke: var(--priColor); fill: var(--priColor);" />
            </span>
          </div>
        </div>

        <div class="text-sm font-semibold uppercase">Print my resume</div>
      </a>
    </div>
  </div>
</template>

<script>
import { useState } from '../store';
import printJS from 'print-js'
import Divider from '@/components/Divider';
import Download from '@/assets/images/svg/download.svg';
import Print from '@/assets/images/svg/print.svg';
export default {
  name: 'bottomLinks',
  components: {
    Divider,
    Download,
    Print,
  },
  setup(){
    const { state } = useState();

    function print(){
      printJS('/files/Samson_Nwokike_Resume.pdf')
    }

    return { state, print }
  }
};
</script>

<style></style>
