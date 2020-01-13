<template>
  <div class="flex column nowrap">
    <section class="flex col-lg-6 column nowrap
    justify-content-center align-items-center playlist-hero pad-common pad-mob-15">
      <img class="playlist-art" src="../../assets/img/drake.jpg" alt="">
      <p class="playlist-name">Top Hits 2020</p>
    </section>
    <playlist/>
  </div>
</template>
<style lang="scss" scoped>
.playlist-hero {
  .playlist-art {
    width: 200px;
    height: 200px;
    margin: 20px;
  }
}
.playlist-name {
  font-size: 25px;
  font-weight: 700;
}
</style>
<script>
import playlist from '@/components/playlist.vue';

export default {
  components: {
    playlist,
  },
};
</script>
