<template>
  <div class="question">
    <div class="question-sun sun-left"></div>
    <div class="question-sun sun-right"></div>
    <div class="question-area area-1" :class="{'show' : page == 1}">你是否也有以下困擾？</div>
    <div class="question-area area-2" :class="{'show' : page == 2}">滿足不了同事的許願？</div>
    <div class="question-area area-3" :class="{'show' : page == 3}">動畫技能樹太雜無從下手？</div>
    <div class="question-airplane" @mousemove="airplaneSet">
      <div class="question-airplane-bullet"></div>
      <div class="question-airplane-item" :style="{left: airplanePositionX}"></div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
// import gsap from 'gsap';
import { ref } from 'vue';

export default {
  name: 'question',
  setup() {
    const router = useRouter();
    return {
      router,
      airplanePositionX: ref('50%'),
      page: ref(1),
      pageScrollCount: 0,
      canPageChange: true,
      questionPageMouseWheelEvent: null,
      timeDelay: false,
    };
  },
  methods: {
    airplaneSet(el) {
      this.airplanePositionX = `${el.clientX - 240}px`;
    },
    // toHomePageLeaveQuestionAreaOne() {
    //   const vm = this;
    //   vm.canPageChange = false;
    //   const backgroundImage = document.querySelector('.question>.question-area.area-1');
    //   gsap.to(backgroundImage, {
    //     duration: 0.5,
    //     ease: 'power3.in',
    //     top: '52.5%',
    //     opacity: 0.5,
    //     onComplete: () => {
    //       vm.canPageChange = true;
    //       vm.router.push({
    //         name: 'Home',
    //         query: {
    //           animationDirection: 'reverse',
    //         },
    //       });
    //     },
    //   });
    // },
  },
  mounted() {
    const vm = this;
    vm.questionPageMouseWheelEvent = window.addEventListener('mousewheel', (el) => {
      if (!vm.timeDelay) {
        vm.timeDelay = true;
        setTimeout(() => {
          vm.pageScrollCount += el.deltaY;
          if (vm.pageScrollCount >= 300 && vm.canPageChange) {
            if (vm.page < 3) {
              vm.page += 1;
            }
            vm.pageScrollCount = 0;
            vm.canPageChange = false;
            vm.$nextTick(() => {
              vm.canPageChange = true;
            });
          } else if (vm.pageScrollCount <= -300 && vm.canPageChange) {
            if (vm.page > 1) {
              vm.page -= 1;
            } else if (vm.page === 1) {
              if (vm.canPageChange) {
                // vm.toHomePageLeaveQuestionAreaOne();
                vm.router.push({
                  name: 'Home',
                  query: {
                    animationDirection: 'reverse',
                  },
                });
              }
            }
            vm.pageScrollCount = 0;
            vm.canPageChange = false;
            vm.$nextTick(() => {
              vm.canPageChange = true;
            });
          }
          vm.timeDelay = false;
        }, 100);
      }
    });
  },
  onUnmounted() {
    window.removeEventListener(this.questionPageMouseWheelEvent);
  },
};
</script>
