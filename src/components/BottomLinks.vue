<template>
  <Divider class="mb-12 w-60" />
  <div class="flex flex-col md:flex-row justify-between w-full text-muted">
    <div class="px-4 mb-3 md:mb-0">
      <a class="flex items-center mr-2 cursor-pointer p-0">
        <div class="shadow-app rounded-2 mr-4">
          <div
            class="flex inner justify-center rounded-50 items-center hover:shadow-app-inner w-12 h-12"
          >
            <span id="icon" class="block w-5">
              <Download style="stroke: #fff; fill: #fff;" />
            </span>
          </div>
        </div>

        <div class="uppercase font-semibold text-sm">Download my cv</div>
      </a>
    </div>
    <div class="px-4">
      <a class="flex items-center mr-2 cursor-pointer p-0">
        <div class="shadow-app rounded-2 mr-4">
          <div
            class="flex inner justify-center rounded-50 items-center hover:shadow-app-inner w-12 h-12"
          >
            <span id="icon" class="block w-5">
              <Print style="stroke: #fff; fill: #fff;" />
            </span>
          </div>
        </div>

        <div class="uppercase font-semibold text-sm">Print my resume</div>
      </a>
    </div>
  </div>
</template>

<script>
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
};
</script>

<style></style>
