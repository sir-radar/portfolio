<script>
import { ref } from 'vue';
import { useState } from '../store';
import emailjs from 'emailjs-com';
import BigDivider from '@/components/BigDivider';
import BottomLinks from '@/components/BottomLinks';
export default {
  name: 'aboutPage',
  components: {
    BigDivider,
    BottomLinks,
  },
  setup() {
    const { state } = useState();
    let name = ref('');
    let email = ref('');
    let company = ref('');
    let subject = ref('');
    let message = ref('');
    let loading = ref(false);
    let errors = ref({});
    let showMessage = ref(false);

    function valiate(value) {
      return value.trim()?.length < 1;
    }
    function toggleMessage() {
      showMessage.value = true;
      setTimeout(() => {
        showMessage.value = false;
      }, 10000);
    }
    function sendEmail() {
      loading.value = true;
      errors.value.name = valiate(name.value);
      errors.value.email = valiate(email.value);
      errors.value.subject = valiate(subject.value);
      errors.value.message = valiate(message.value);

      const entries = Object.values(errors.value);
      if (entries.includes(true)) {
        loading.value = false;
        return;
      }

      const data = {
        to_name: 'Samson',
        from_name: name.value,
        from_email: email.value,
        subject: subject.value,
        company: company.value,
        message: message.value,
      };
      emailjs
        .send(
          process.env.VUE_APP_EMAIL_SERVICE_ID,
          process.env.VUE_APP_EMAIL_TEMPLATE_ID,
          data,
          process.env.VUE_APP_EMAIL_USER_ID
        )
        .then(
          function() {
            name.value = '';
            email.value = '';
            company.value = '';
            subject.value = '';
            message.value = '';
            loading.value = false;
            errors.value = {};
            toggleMessage();
          },
          function() {
            loading.value = false;
          }
        );
    }

    return {
      state,
      sendEmail,
      name,
      email,
      message,
      company,
      subject,
      loading,
      errors,
      showMessage,
    };
  },
};
</script>
<template>
  <div class="contact">
    <section id="header">
      <h3
        class="mb-2 text-base font-bold text-white uppercase"
        :class="{ 'text-dark': state.theme === 'light' }"
      >
        Map location
      </h3>
      <BigDivider class="mb-8" />
      <div class="relative w-full py-4">
        <div
          class="p-2 shadow-app-inner h-388 rounded-1"
          :class="{ 'shadow-app-light-inner': state.theme === 'light' }"
        >
          <div
            class="relative w-full h-full p-1 shadow-app rounded-1"
            :class="{ 'shadow-app-light': state.theme === 'light' }"
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
    <section class="mb-5 info">
      <h3
        class="mb-2 text-base font-bold text-white uppercase"
        :class="{ 'text-dark': state.theme === 'light' }"
      >
        Contact info
      </h3>
      <BigDivider class="mb-8" />
      <div class="flex flex-col flex-wrap w-full mb-4 md:flex-row">
        <div class="w-full mb-3 md:w-1/2 md:pr-15 md:mb-0">
          <p
            class="w-full py-2 text-sm text-center shadow-app-inner rounded-2 text-muted"
            :class="{ 'shadow-app-light-inner': state.theme === 'light' }"
          >
            Email: nwokikesamson@gmail.com
          </p>
        </div>
        <div class="w-full md:w-1/2 md:pl-15">
          <p
            class="w-full py-2 text-sm text-center shadow-app-inner rounded-2 text-muted"
            :class="{ 'shadow-app-light-inner': state.theme === 'light' }"
          >
            Phone: +2349032326238
          </p>
        </div>
      </div>
      <div class="flex flex-col flex-wrap w-full mb-3 md:flex-row">
        <div class="w-full mb-3 md:w-1/2 md:pr-15 md:mb-0">
          <p
            class="w-full py-2 text-sm text-center shadow-app-inner rounded-2 text-muted"
            :class="{ 'shadow-app-light-inner': state.theme === 'light' }"
          >
            Skype: live:nwokikesamson
          </p>
        </div>
        <div class="w-full md:w-1/2 md:pl-15">
          <p
            class="w-full py-2 text-sm text-center shadow-app-inner rounded-2 text-muted"
            :class="{ 'shadow-app-light-inner': state.theme === 'light' }"
          >
            LinkedIn: linkedin.com/in/sir-radar
          </p>
        </div>
      </div>
    </section>
    <section class="mb-32 send_email">
      <h3
        class="mb-2 text-base font-bold text-white uppercase"
        :class="{ 'text-dark': state.theme === 'light' }"
      >
        SEND ME AN EMAIL
      </h3>
      <BigDivider class="mb-8" />
      <form @submit.prevent="sendEmail">
        <div class="flex flex-col w-full mb-3 md:flex-row">
          <div class="w-full mb-3 md:w-1/2 md:pr-15 md:mb-0">
            <div
              class="w-full shadow-app rounded-2"
              :class="{ 'shadow-app-light': state.theme === 'light' }"
            >
              <input
                type="text"
                class="w-full animate form-control hover:shadow-app-inner focus:shadow-app-inner"
                :class="{
                  'hover:shadow-app-light-inner focus:shadow-app-light-inner':
                    state.theme === 'light',
                  error: errors.name,
                }"
                placeholder="Name"
                v-model="name"
              />
            </div>
          </div>
          <div class="w-full md:w-1/2 md:pl-15">
            <div
              class="w-full shadow-app rounded-2"
              :class="{ 'shadow-app-light': state.theme === 'light' }"
            >
              <input
                type="email"
                class="w-full animate form-control hover:shadow-app-inner focus:shadow-app-inner"
                :class="{
                  'hover:shadow-app-light-inner focus:shadow-app-light-inner':
                    state.theme === 'light',
                  error: errors.email,
                }"
                placeholder="Email"
                v-model="email"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col w-full mb-3 md:flex-row">
          <div class="w-full mb-3 md:w-1/2 md:pr-15 md:mb-0">
            <div
              class="w-full shadow-app rounded-2"
              :class="{ 'shadow-app-light': state.theme === 'light' }"
            >
              <input
                type="text"
                class="w-full animate form-control hover:shadow-app-inner focus:shadow-app-inner"
                :class="{
                  'hover:shadow-app-light-inner focus:shadow-app-light-inner':
                    state.theme === 'light',
                }"
                placeholder="Company"
                v-model="company"
              />
            </div>
          </div>
          <div class="w-full md:w-1/2 md:pl-15">
            <div
              class="w-full shadow-app rounded-2"
              :class="{ 'shadow-app-light': state.theme === 'light' }"
            >
              <input
                type="text"
                class="w-full animate form-control hover:shadow-app-inner focus:shadow-app-inner"
                :class="{
                  'hover:shadow-app-light-inner focus:shadow-app-light-inner':
                    state.theme === 'light',
                  error: errors.subject,
                }"
                placeholder="Subject"
                v-model="subject"
              />
            </div>
          </div>
        </div>
        <div class="flex w-full mb-3">
          <div class="w-full">
            <div
              class="w-full shadow-app rounded-2"
              :class="{ 'shadow-app-light': state.theme === 'light' }"
            >
              <textarea
                class="w-full animate form-control hover:shadow-app-inner focus:shadow-app-inner resize-n"
                :class="{
                  'hover:shadow-app-light-inner focus:shadow-app-light-inner':
                    state.theme === 'light',
                  error: errors.message,
                }"
                placeholder="Message"
                rows="6"
                spellcheck="false"
                v-model="message"
              >
              </textarea>
            </div>
          </div>
        </div>
        <div
          class="inline-block w-auto shadow-app rounded-2"
          :class="{ 'shadow-app-light': state.theme === 'light' }"
        >
          <button
            class="flex justify-center px-6 py-2 font-medium w-28 animate hover:shadow-app-inner rounded-2 text-submit outline-zero"
            :class="{ 'hover:shadow-app-light-inner': state.theme === 'light' }"
            style="color: var(--priColor)"
            type="submit"
          >
            <span
              class="block w-5 h-5 mr-2 settings"
              :class="{ hidden: !loading }"
              ><fa icon="spinner"
            /></span>
            <span>Send</span>
          </button>
        </div>
      </form>

      <div v-show="showMessage" class="mt-3" style="color: var(--priColor)">
        Message sent successfully.
      </div>
    </section>
    <div class="flex flex-col items-center justify-center">
      <BottomLinks />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form-control {
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
.outline-zero {
  outline: none !important;
}
.error {
  border: 1px solid red;
}
</style>
