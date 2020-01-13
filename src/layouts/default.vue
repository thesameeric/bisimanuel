<template>
  <div class="flex nowrap col-lg-6">
    <div class="flex column nowrap col-lg-6 main-container">
      <topBar v-bind:routeName="this.$router.currentRoute.name"/>
      <div class="router-holder">
        <router-view></router-view>
      </div>
      <bottomBar/>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.main-container {
  position: relative;
  margin: 0;
  @media only screen and (max-width: 720px) {
    margin: 0;
  }
  .router-holder {
    margin-bottom: 50px;
    margin-top: 55px;
  }
}
</style>
<script>
import bottomBar from '@/components/bottomBar.vue';
import topBar from '@/components/topBar.vue';

export default {
  components: {
    bottomBar,
    topBar,
  },
};
</script>
