<template>
  <aside id="sidenav">
    <div class="flex column justify-content-center mar-tb-30">
      <span>
        <p><a class="flex logo" href="#"><strong>20Works HR</strong></a></p>
      </span>
    </div>
    <nav>
      <ul class="flex column menu">
        <li> <a class="ripple" href="#"><i class="fal fa-user-circle"></i> Account</a> </li>
        <li> <a class="ripple" href="#"><i class="fas fa-users"></i> Contacts</a> </li>
        <li> <a class="ripple" href="#"><i class="fas fa-book"></i> Reports</a> </li>
        <li> <a class="ripple" href="#"><i class="fas fa-envelope-open"></i>Requests</a> </li>
        <li> <a class="ripple" href="#"><i class="fas fa-heart"></i>Support</a> </li>
        <li> <a class="ripple" href="#"><i class="fas fa-cog"></i>Settings</a> </li>
        <li> <a class="ripple" href="#"><i class="fas fa-question-circle"></i>Info</a> </li>
      </ul>
    </nav>
  </aside>
</template>
<style lang="scss" scoped>
/* style for sidebar starts here */
aside {
  width: 300px;
  overflow: hidden;
  margin-left: -300px;
  position: relative;
  height: calc(100vh - 0px);
  background: #333
}
.logo {
  color: rgb(255, 255, 255);
  padding: 0 20px;
}
.bg-img-side {
    /* background image for side bar */
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    height: calc(100vh - 50px);
    width: 300px;
    z-index: -1;
    overflow: hidden;
}
.avatar {
    /* sidebar avatar */
    width: 90px; height: 90px;
    border-radius: 45px;
}
.avatar-xm {
    /* sidebar avatar */
    width: 40px; height: 40px;
    border-radius: 20px;
}
/* styling for sidebar ends here */
/* styling for the main menu starts here */
ul.menu li a {
    color:rgb(230, 230, 230);
    margin: 0; padding: 13px 20px;
    display: flex;
    align-items: center;
    width: 100%;
    transition: all 0.5s ease-in-out;
}
ul.menu li a i {
    font-size: 20px;
    margin: 0px;
    margin-right: 7px;
    width: 25px;
}
.ripple {
    background-position: center;
    transition: background 0.8s;
}
.ripple:hover {
    background: #ffae00 radial-gradient(circle, transparent 1%, #ffae00 1%) center/15000%;
}
.ripple:active {
    background-color: #eca406;
    background-size: 100%;
    transition: background 0s;
}

/* navigation menu end */
</style>
<script>
export default {
  mounted() {
    this.toggleSubmenu();
  },
  methods: {
    toggleSubmenu() {
      const alink = document.querySelectorAll('a.has-submenu p.trigger');
      for (let i = 0; i < alink.length; i += 1) {
        alink[i].addEventListener('click', (e) => {
          e.preventDefault();
          const submenu = document.querySelectorAll('.submenu');
          for (let j = 0; j < submenu.length; j += 1) {
            if (submenu[j] !== alink[i].nextSibling && submenu[j].classList.contains('activity')) {
              submenu[j].classList.remove('activity');
            }
          }
          if (alink[i].nextSibling.tagName === 'MENU') {
            const currentSubmenu = alink[i].nextSibling;
            currentSubmenu.classList.toggle('activity');
          }
        });
      }
    },
  },
};
</script>
