<template>
  <div id="nav">
    <navbar></navbar>
  </div>
  <div id="container">
    <router-view/>
    <button type="button" id="applyButton"></button>
  </div>
</template>

<script>
import navbar from '@/layout/navbar/navbar.vue';

export default {
  name: 'main',
  components: {
    navbar,
  },
};
</script>
