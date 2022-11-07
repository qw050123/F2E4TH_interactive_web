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
      <div class="number-area"></div>
      <div class="sun-area"></div>
    </div>
  </div>
</template>
<script>
const earphoneSrc = require('../assets/img/耳機.svg');
const titleSrc = require('../assets/img/title.svg');
const gameSrc = require('../assets/img/遊戲稈.svg');

export default {
  name: 'Home',
  data() {
    return {
      earphoneSrc,
      titleSrc,
      gameSrc,
    };
  },
};
</script>
