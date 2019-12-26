<template>
  <header>
    <div class="flex align-items-center">
      <p class="menuTrigger">
        <i class="far fa-bars"></i>
      </p>
      <p class="text-20 mar-lr-20"><strong>LOGO</strong></p>
    </div>
  </header>
</template>
<style lang="scss" scoped>
header{
  min-height: 50px;
  width: 100%;
  padding: 15px 20px;
}
</style>
<script>
export default {
  mounted() {
    this.openSideBar();
  },
  methods: {
    openSideBar() {
      const menuTrigger = document.querySelectorAll('.menuTrigger');
      for (let i = 0; i < menuTrigger.length; i += 1) {
        menuTrigger[i].addEventListener('click', (e) => {
          e.preventDefault();
          const sideBar = document.getElementById('sideBar');
          sideBar.classList.toggle('open');
        });
      }
    },
  },
};
</script>
