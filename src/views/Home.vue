<template>
  <div class="home">
    <div class="home-top-area">
      <img class="home-top-area-image earphone" :src="earphoneSrc" width="428" height="420" />
      <img class="home-top-area-image title" :src="titleSrc" width="880" height="340" />
      <img class="home-top-area-image game" :src="gameSrc" width="350" height="405" />
    </div>
    <div class="home-bottom-area">
      <div class="background-area"></div>
      <div class="button-area">
        <button type="button" class="button-area-item UI"></button>
        <button type="button" class="button-area-item F2E"></button>
      </div>
      <div class="number-area">
        <div class="number-area-item">
          <div class="number-area-item-label">TOTAL</div>
          <div class="number-area-item-value">0000</div>
        </div>
        <div class="number-area-item">
          <div class="number-area-item-label">PERSONAL</div>
          <div class="number-area-item-value">0000</div>
        </div>
        <div class="number-area-item">
          <div class="number-area-item-label">TEAM</div>
          <div class="number-area-item-value">00</div>
        </div>
      </div>
      <div class="sun-area"></div>
    </div>
    <div class="home-next-page">
      <div class="home-next-page-text">你是否也有以下困擾？</div>
    </div>
  </div>
</template>
<script>
import gsap from 'gsap';
import { useRouter } from 'vue-router';

const earphoneSrc = require('../assets/img/耳機.svg');
const titleSrc = require('../assets/img/title.svg');
const gameSrc = require('../assets/img/遊戲稈.svg');

export default {
  name: 'Home',
  setup() {
    const router = useRouter();
    function goQuestionPageForward() {
      router.push({
        name: 'Question',
        query: {
          animationDirection: 'forward',
        },
      });
    }
    return {
      router,
      earphoneSrc,
      titleSrc,
      gameSrc,
      homePageMouseWheelEvent: null,
      pageScrollCount: 0,
      canPageChange: true,
      timeDelay: false,
      goQuestionPageForward,
    };
  },
  methods: {
    bottomBackgroundAreaEnterAnimation() {
      const vm = this;
      vm.canPageChange = false;
      const backgroundImage = document.querySelector('.home>.home-bottom-area>.background-area');
      gsap.to(backgroundImage, {
        duration: 0.5,
        scale: 1,
        ease: 'power3.out',
        onComplete: () => {
          vm.canPageChange = true;
        },
      });
    },
    sunEnterAnimation() {
      const vm = this;
      vm.canPageChange = false;
      const backgroundImage = document.querySelector('.home>.home-bottom-area>.sun-area');
      gsap.to(backgroundImage, {
        duration: 0.5,
        ease: 'power3.out',
        scale: 1,
        top: '50%',
        onComplete: () => {
          vm.canPageChange = true;
        },
      });
    },
    sunLeaveAnimation() {
      const vm = this;
      vm.canPageChange = false;
      const backgroundImage = document.querySelector('.home>.home-bottom-area>.sun-area');
      gsap.to(backgroundImage, {
        duration: 1,
        ease: 'power3.in',
        scale: 2.23,
        top: 0,
      });
    },
    bottomBackgroundAreaLeaveAnimation() {
      const vm = this;
      vm.canPageChange = false;
      const backgroundImage = document.querySelector('.home>.home-bottom-area>.background-area');
      gsap.to(backgroundImage, {
        duration: 1,
        ease: 'power3.in',
        scale: 2.5,
        onComplete: () => {
          vm.canPageChange = true;
          vm.goQuestionPageForward();
        },
      });
    },
    nextPageEnterAnimation() {
      const vm = this;
      vm.canPageChange = false;
      const backgroundImage = document.querySelector('.home>.home-next-page');
      gsap.fromTo(backgroundImage, {
        fontSize: '100px',
        opacity: 1,
        top: '45%',
      }, {
        duration: 0.5,
        ease: 'power3.in',
        fontSize: '12px',
        top: '50%',
        opacity: 0,
        onComplete: () => {
          vm.canPageChange = true;
        },
      });
    },
    nextPageLeaveAnimation() {
      const vm = this;
      vm.canPageChange = false;
      const backgroundImage = document.querySelector('.home>.home-next-page');
      gsap.to(backgroundImage, {
        duration: 1,
        ease: 'power3.in',
        fontSize: '100px',
        top: '55%',
        opacity: 1,
        onComplete: () => {
          vm.canPageChange = true;
        },
      });
    },
  },
  mounted() {
    const vm = this;
    if (vm.$route.query.animationDirection && vm.$route.query.animationDirection === 'reverse') {
      vm.bottomBackgroundAreaEnterAnimation();
      vm.nextPageEnterAnimation();
      vm.sunEnterAnimation();
    }
    vm.homePageMouseWheelEvent = window.addEventListener('mousewheel', (el) => {
      if (!vm.timeDelay) {
        vm.timeDelay = true;
        setTimeout(() => {
          vm.pageScrollCount += el.deltaY;
          if (vm.pageScrollCount >= 300 && vm.canPageChange) {
            vm.sunLeaveAnimation();
            vm.nextPageLeaveAnimation();
            vm.bottomBackgroundAreaLeaveAnimation();
          } else {
            vm.timeDelay = false;
          }
        }, 100);
      }
    });
  },
  onUnmounted() {
    window.removeEventListener(this.homePageMouseWheelEvent);
  },
};
</script>
