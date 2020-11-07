<template>
  <div class="about">
    <section id="header">
      <h3 class="uppercase text-white text-base font-bold mb-2">
        Map location
      </h3>
      <BigDivider class="mb-8" />
      <div class="w-full py-4 relative">
        <div class="shadow-app-inner p-2 h-388 rounded-1">
          <div class="shadow-app w-full p-1 h-full rounded-1 relative">
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
      <h3 class="uppercase text-white text-base font-bold mb-2">
        Contact info
      </h3>
      <BigDivider class="mb-8" />
    </section>
    <section class="send_email">
      <h3 class="uppercase text-white text-base font-bold mb-2">
        SEND ME AN EMAIL
      </h3>
      <BigDivider class="mb-8" />
      <form @submit.prevent="">
        <div class="w-full flex mb-3">
          <div class="w-1/2 pr-15">
            <div class="w-full shadow-app rounded-2">
              <input type="text" class="w-full form-control hover:shadow-app-inner focus:shadow-app-inner" placeholder="Name">
            </div>
          </div>
          <div class="w-1/2 pl-15">
          <div class="w-full shadow-app rounded-2">
            <input type="email" class="w-full form-control hover:shadow-app-inner focus:shadow-app-inner" placeholder="Email">
          </div>
          </div>
        </div>
        <div class="w-full flex mb-3">
          <div class="w-full">
            <div class="w-full shadow-app rounded-2">
              <textarea class="w-full form-control hover:shadow-app-inner focus:shadow-app-inner resize-n" placeholder="Message" rows="6" spellcheck="false">
              </textarea>
            </div>
          </div>
        </div>
        <button class="shadow-app hover:shadow-app-inner rounded-2 py-2 px-6 font-medium text-submit outline-zero" type="submit">Send message</button>
      </form>
    </section>
    <div class="flex flex-col items-center justify-center">
      <BottomLinks />
    </div>
  </div>
</template>
<script>
import BigDivider from "@/components/BigDivider";
import BottomLinks from '@/components/BottomLinks';
export default {
  name: "aboutPage",
  components: {
    BigDivider,
    BottomLinks
  },
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
  background-color: #2c2d30;
  background-clip: padding-box;
  border: 1px solid #2c2d30;
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
