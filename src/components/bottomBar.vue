<template>
  <div class="flex col-lg-6 justify-content-space-around bottomBar">
    <router-link to="/">
      <i class="material-icons">home</i>
    </router-link>
    <router-link to="/">
      <i class='material-icons'>
        music_note
      </i>
    </router-link>
    <router-link to="/">
      <i class="material-icons">date_range</i>
    </router-link>
  </div>
</template>
<style lang="scss" scoped>
.bottomBar {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 2px 5px;
  background-color: #ffffff;
  padding: 12px;
  position: fixed;
  z-index: 9999;
  bottom: 0;
  left: 0;
}
</style>
