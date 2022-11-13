<template>
  <div id="nav" v-show="!isLodingPage">
    <navbar></navbar>
  </div>
  <div id="container" v-show="!isLodingPage">
    <div class="home">
      <div class="home-top-area">
        <div class="home-top-area-image earphone"></div>
        <div class="home-top-area-image title">
          <div class="title-1"></div>
          <div class="title-2">
            <span class="title-2-1"></span>
            <span class="title-2-2"></span>
          </div>
        </div>
        <div class="home-top-area-image game"></div>
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
            <div class="number-area-item-value number-animate">
              <div class="number-animate-warp">
                <div class="number-animate-warp-item">0</div>
                <div class="number-animate-warp-item">1</div>
                <div class="number-animate-warp-item">2</div>
                <div class="number-animate-warp-item">3</div>
                <div class="number-animate-warp-item">4</div>
                <div class="number-animate-warp-item">5</div>
                <div class="number-animate-warp-item">6</div>
                <div class="number-animate-warp-item">7</div>
                <div class="number-animate-warp-item">8</div>
                <div class="number-animate-warp-item">9</div>
                <div class="number-animate-warp-item">0</div>
              </div>
              <div class="number-animate-warp">
                <div class="number-animate-warp-item">0</div>
                <div class="number-animate-warp-item">1</div>
                <div class="number-animate-warp-item">2</div>
                <div class="number-animate-warp-item">3</div>
                <div class="number-animate-warp-item">4</div>
                <div class="number-animate-warp-item">5</div>
                <div class="number-animate-warp-item">6</div>
                <div class="number-animate-warp-item">7</div>
                <div class="number-animate-warp-item">8</div>
                <div class="number-animate-warp-item">9</div>
                <div class="number-animate-warp-item">0</div>
              </div>
              <div class="number-animate-warp">
                <div class="number-animate-warp-item">0</div>
                <div class="number-animate-warp-item">1</div>
                <div class="number-animate-warp-item">2</div>
                <div class="number-animate-warp-item">3</div>
                <div class="number-animate-warp-item">4</div>
                <div class="number-animate-warp-item">5</div>
                <div class="number-animate-warp-item">6</div>
                <div class="number-animate-warp-item">7</div>
                <div class="number-animate-warp-item">8</div>
                <div class="number-animate-warp-item">9</div>
                <div class="number-animate-warp-item">0</div>
              </div>
              <div class="number-animate-warp">
                <div class="number-animate-warp-item">0</div>
                <div class="number-animate-warp-item">1</div>
                <div class="number-animate-warp-item">2</div>
                <div class="number-animate-warp-item">3</div>
                <div class="number-animate-warp-item">4</div>
                <div class="number-animate-warp-item">5</div>
                <div class="number-animate-warp-item">6</div>
                <div class="number-animate-warp-item">7</div>
                <div class="number-animate-warp-item">8</div>
                <div class="number-animate-warp-item">9</div>
                <div class="number-animate-warp-item">0</div>
              </div>
            </div>
          </div>
          <div class="number-area-item">
            <div class="number-area-item-label">PERSONAL</div>
            <div class="number-area-item-value number-animate">
              <div class="number-animate-warp">
                <div class="number-animate-warp-item">0</div>
                <div class="number-animate-warp-item">1</div>
                <div class="number-animate-warp-item">2</div>
                <div class="number-animate-warp-item">3</div>
                <div class="number-animate-warp-item">4</div>
                <div class="number-animate-warp-item">5</div>
                <div class="number-animate-warp-item">6</div>
                <div class="number-animate-warp-item">7</div>
                <div class="number-animate-warp-item">8</div>
                <div class="number-animate-warp-item">9</div>
                <div class="number-animate-warp-item">0</div>
              </div>
              <div class="number-animate-warp">
                <div class="number-animate-warp-item">0</div>
                <div class="number-animate-warp-item">1</div>
                <div class="number-animate-warp-item">2</div>
                <div class="number-animate-warp-item">3</div>
                <div class="number-animate-warp-item">4</div>
                <div class="number-animate-warp-item">5</div>
                <div class="number-animate-warp-item">6</div>
                <div class="number-animate-warp-item">7</div>
                <div class="number-animate-warp-item">8</div>
                <div class="number-animate-warp-item">9</div>
                <div class="number-animate-warp-item">0</div>
              </div>
              <div class="number-animate-warp">
                <div class="number-animate-warp-item">0</div>
                <div class="number-animate-warp-item">1</div>
                <div class="number-animate-warp-item">2</div>
                <div class="number-animate-warp-item">3</div>
                <div class="number-animate-warp-item">4</div>
                <div class="number-animate-warp-item">5</div>
                <div class="number-animate-warp-item">6</div>
                <div class="number-animate-warp-item">7</div>
                <div class="number-animate-warp-item">8</div>
                <div class="number-animate-warp-item">9</div>
                <div class="number-animate-warp-item">0</div>
              </div>
              <div class="number-animate-warp">
                <div class="number-animate-warp-item">0</div>
                <div class="number-animate-warp-item">1</div>
                <div class="number-animate-warp-item">2</div>
                <div class="number-animate-warp-item">3</div>
                <div class="number-animate-warp-item">4</div>
                <div class="number-animate-warp-item">5</div>
                <div class="number-animate-warp-item">6</div>
                <div class="number-animate-warp-item">7</div>
                <div class="number-animate-warp-item">8</div>
                <div class="number-animate-warp-item">9</div>
                <div class="number-animate-warp-item">0</div>
              </div>
            </div>
          </div>
          <div class="number-area-item">
            <div class="number-area-item-label">TEAM</div>
            <div class="number-area-item-value number-animate">
              <div class="number-animate-warp">
                <div class="number-animate-warp-item">0</div>
                <div class="number-animate-warp-item">1</div>
                <div class="number-animate-warp-item">2</div>
                <div class="number-animate-warp-item">3</div>
                <div class="number-animate-warp-item">4</div>
                <div class="number-animate-warp-item">5</div>
                <div class="number-animate-warp-item">6</div>
                <div class="number-animate-warp-item">7</div>
                <div class="number-animate-warp-item">8</div>
                <div class="number-animate-warp-item">9</div>
                <div class="number-animate-warp-item">0</div>
              </div>
              <div class="number-animate-warp">
                <div class="number-animate-warp-item">0</div>
                <div class="number-animate-warp-item">1</div>
                <div class="number-animate-warp-item">2</div>
                <div class="number-animate-warp-item">3</div>
                <div class="number-animate-warp-item">4</div>
                <div class="number-animate-warp-item">5</div>
                <div class="number-animate-warp-item">6</div>
                <div class="number-animate-warp-item">7</div>
                <div class="number-animate-warp-item">8</div>
                <div class="number-animate-warp-item">9</div>
                <div class="number-animate-warp-item">0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <span class="home_to_question_text">你是否也有以下困擾？</span>
    <div class="question" v-if="none">
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
    <div class="sun-area">
      <div class="sun-area-item sun-main"></div>
      <div class="sun-area-item sun-secondary"></div>
    </div>
    <button type="button" id="applyButton" @click="backToLodingPage"></button>
  </div>
  <div class="enter" v-show="isLodingPage">
    <div class="enter-text"></div>
  </div>
</template>

<script>
import gsap from 'gsap';
import navbar from '@/layout/navbar/navbar.vue';
import { ref } from 'vue';

const earphoneSrc = require('./assets/img/耳機.svg');
const titleSrc = require('./assets/img/title.svg');
const gameSrc = require('./assets/img/遊戲稈.svg');

export default {
  name: 'main',
  components: {
    navbar,
  },
  setup() {
    return {
      earphoneSrc,
      titleSrc,
      gameSrc,
      isLodingPage: ref(true),
      enterPageClickEvent: ref(null),
      homeEarphoneTimeline: ref(null),
      homeGameTimeline: ref(null),
      HomeBottomAreaTimeline: ref(null),
      loopAnimation: ref([]),
      pageName: ref('loding'),
      pageList: ref([
        'loding',
        'home',
        'question_1',
        'question_2',
        'question_3',
        'topic',
        'description_1',
        'description_2',
        'description_3',
      ]),
      mousewheelEvent: ref(null),
      canChangePage: ref(false),
    };
  },
  methods: {
    backToLodingPage() {
      this.loadingPageEnterAnimation();
    },
    loadingPageEnterAnimation() {
      const vm = this;
      const backgroundImage = document.querySelector('.enter');
      gsap.to(backgroundImage, {
        duration: 0.1,
        backgroundPositionX: '0%',
        onComplete: () => {
          vm.enterPageClickEvent = window.addEventListener('click', vm.loadingPageLeaveAnimation);
          vm.isLodingPage = true;
          vm.canChangePage = true;
        },
      });
    },
    loadingPageLeaveAnimation() {
      const vm = this;
      const backgroundImage = document.querySelector('.enter');
      gsap.to(backgroundImage, {
        duration: 1,
        backgroundPositionX: '50%',
        onComplete: () => {
          window.removeEventListener('click', vm.loadingPageLeaveAnimation);
          vm.enterHomePage('forward');
        },
      });
    },
    enterHomePage(direction) {
      this.pageName = 'home';
      if (direction === 'forward') {
        this.isLodingPage = false;
        this.$nextTick(() => {
          const TitleElement = document.querySelector('.home>.home-top-area .title-2-2');
          const earphoneElement = document.querySelector('.home>.home-top-area .earphone');
          const gameElement = document.querySelector('.home>.home-top-area .game');
          const UIButtonElement = document.querySelector('.home>.home-bottom-area .button-area-item.UI');
          const F2EButtonElement = document.querySelector('.home>.home-bottom-area .button-area-item.F2E');
          const numberAreaElement = document.querySelector('.home>.home-bottom-area .number-area');
          const bottomBackgroundElement = document.querySelector(`.home>.home-bottom-area 
            .background-area`);
          const timeline = gsap.timeline();
          // title area animation
          timeline.to(TitleElement, { duration: 0.5, opacity: 0 });
          timeline.to(TitleElement, { duration: 1, opacity: 1 });
          timeline.to(earphoneElement, { duration: 1, opacity: 1 }, '<');
          timeline.to(gameElement, { duration: 1, opacity: 1 }, '<');
          // bottom area animation
          timeline.to(UIButtonElement, { duration: 1, translateX: '0px' });
          timeline.to(F2EButtonElement, { duration: 1, translateX: '0px' }, '<');
          timeline.to(numberAreaElement, { duration: 1.5, opacity: 1 }, '<');
          // number animation delay 2.5 second
          const numberAreaList = [1, 2, 7, 7, 1, 1, 6, 0, 4, 6];
          let timeSpaceDuration = 0.5;
          for (let i = 0; i < 10; i += 1) {
            const numberElement = document.querySelectorAll('.home>.home-bottom-area .number-area .number-animate-warp')[i];
            if (i % 4 === 0) {
              timeSpaceDuration = 1;
            } else {
              timeSpaceDuration += 0.5;
            }
            const numberTimeline = gsap.timeline({
              delay: 2.5,
              onComplete: () => {
                const positionY = 0 - (42 * numberAreaList[i]);
                gsap.set(numberElement, { translateY: `${positionY}px` });
              },
            });
            numberTimeline.to(numberElement, {
              duration: timeSpaceDuration,
              translateY: '-420px',
            }, '<');
          }
          // repeat animation delay 5.0 second
          this.earphoneTimeline = gsap.timeline({ delay: 5, repeat: -1 });
          this.earphoneTimeline.to(earphoneElement, { duration: 1.5, translateX: '30px', translateY: '15px' });
          this.earphoneTimeline.to(earphoneElement, { duration: 1.5, translateX: '60px', translateY: '-15px' });
          this.earphoneTimeline.to(earphoneElement,
            { duration: 1.5, translateX: 0, translateY: 0 });
          this.gameTimeline = gsap.timeline({ delay: 5, repeat: -1, yoyo: true });
          this.gameTimeline.to(gameElement, { duration: 1.25, rotation: -15 });
          this.gameTimeline.to(gameElement, { duration: 1.25, rotation: 10 });
          this.bottomBackgroundTimeline = gsap.timeline({ delay: 5, repeat: -1, yoyo: true });
          this.bottomBackgroundTimeline.to(bottomBackgroundElement, {
            duration: 1.5,
            scale: 1.2,
          });
          this.bottomBackgroundTimeline.to(bottomBackgroundElement, {
            duration: 1,
            scale: 1,
          });
          this.loopAnimation.push(this.earphoneTimeline);
          this.loopAnimation.push(this.gameTimeline);
          this.loopAnimation.push(this.bottomBackgroundTimeline);
        });
      }
    },
    homePageLaveAnimation() {
      // const vm = this;
      this.loopAnimation.forEach((item) => {
        gsap.remove(item);
      });
    },
    question1PageEnterAnimation() {
    },
    question1PageLeaveAnimation() {
    },
    question2PageEnterAnimation() {
    },
    question2PageLeaveAnimation() {
    },
    question3PageEnterAnimation() {
    },
    topicPageEnterAnimation() {
    },
    topicPageLeaveAnimation() {
    },
    description1PageEnterAnimation() {
    },
    description1PageLeaveAnimation() {
    },
    description2PageEnterAnimation() {
    },
    description2PageLeaveAnimation() {
    },
    description3PageEnterAnimation() {
    },
    desctiption3PageLeaveAnimation() {
    },
  },
  mounted() {
    const vm = this;
    this.enterPageClickEvent = window.addEventListener('click', vm.loadingPageLeaveAnimation);
    vm.mousewheelEvent = window.addEventListener('mousewheel', (el) => {
      let timeDelay = false;
      let pageScrollCount = 0;
      if (!timeDelay) {
        timeDelay = true;
        setTimeout(() => {
          if (!vm.canChangePage) {
            pageScrollCount += el.deltaY;
            if (pageScrollCount <= -300) {
              pageScrollCount = 0;
              vm.canChangePage = false;
              switch (vm.pageName) {
                case 'loding': {
                  return false;
                }
                case 'home': {
                  return false;
                }
                case 'question_1': {
                  vm.question1PageLeaveAnimation();
                  return false;
                }
                default: {
                  return false;
                }
              }
            } else if (pageScrollCount >= 300) {
              pageScrollCount = 0;
              vm.canChangePage = false;
            }
          }
          return true;
        }, 100);
      }
    });
  },
};
</script>
