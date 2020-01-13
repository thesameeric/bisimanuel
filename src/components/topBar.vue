<template>
  <div class="flex col-lg-6 align-items-center justify-content-space-between topBar">
    <p class="route-name">{{routeName}}</p>
    <router-link class="flex person-icon" to="/account">
      <i class="material-icons">person</i>
    </router-link>
  </div>
</template>
<style lang="scss" scoped>
.topBar {
  background: #ffffff;
  position: fixed;
  .route-name {
    text-transform: capitalize;
    padding: 9px 20px;
    font-weight: 700;
    font-size: 20px;
    color: #322885;
  }
  .person-icon {
    background: #5e5e5e;
    padding: 5px;
    margin: 12px 20px;
    border-radius: 50%;
    i {
      font-size: 20px;
      color: floralwhite;
    }
  }
}
</style>
<script>
export default {
  props: ['routeName'],
};
</script>
