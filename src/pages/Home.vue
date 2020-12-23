<template>
  <div class="flex flex-col items-center justify-center home">
    <h1 class="mb-1 font-semibold text-center text-white text-title mt-21">
      Samson Nwokike
    </h1>
    <div class="relative mb-6 text-xl text-muted">
      <h1 class="h-5">
        <a href="" id="typewrite" data-period="3000" data-type='[ "Hi, there ✌.", "Sam here!", "I am a Fullstack developer.", "A Creative.", "A Football lover." ]'>
          <span class="uppercase wrap"></span>
        </a>
      </h1>
    </div>
    <ul class="flex justify-center mb-24 text-muted">
      <li class="mr-2 cursor-pointer shadow-app rounded-2">
        <a
          ref="icon"
          class="flex items-center justify-center w-10 h-10 p-0 hover:shadow-app-inner rounded-2"
        >
          <span id="icon" class="block w-2">
            <fa icon="facebook-f"></fa>
          </span>
        </a>
      </li>
      <li class="mr-2 cursor-pointer shadow-app rounded-2">
        <a
          ref="icon"
          class="flex items-center justify-center w-10 h-10 p-0 hover:shadow-app-inner rounded-2"
        >
          <span id="icon" class="block w-3">
            <fa icon="google"></fa>
          </span>
        </a>
      </li>
      <li class="mr-1 cursor-pointer shadow-app rounded-2">
        <a
          ref="icon"
          class="flex items-center justify-center w-10 h-10 p-0 hover:shadow-app-inner rounded-2"
        >
          <span id="icon" class="block w-3">
            <fa icon="twitter"></fa>
          </span>
        </a>
      </li>
    </ul>
    <BottomLinks />
  </div>
</template>

<script>
import BottomLinks from '@/components/BottomLinks';
export default {
  name: 'Home',
  components: {
    BottomLinks,
  },
  mounted(){
      const elements = document.getElementById('typewrite');
      const toRotate = elements.getAttribute('data-type');
      const period = elements.getAttribute('data-period');
      if (toRotate) {
        this.TxtType(elements, JSON.parse(toRotate), period);
      }

  },
  methods:{
    TxtType (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    },
    tick () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    }
  }
};
</script>
