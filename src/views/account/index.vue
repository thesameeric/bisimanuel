<template>
  <div class="flex column nowrap account pad-common">
    <section>
      <div>
        <p>Home</p>
      </div>
    </section>
    <section class="flex nowrap">
      <div class="flex column nowrap aside">
        <div class="flex justify-content-flex-start">
          <img class="account-img" src="../../assets/img/team-2.jpg" alt="">
        </div>
        <div class="flex column nowrap">
          <p class="text-25 my-name">Eric Okiti</p>
          <p class="post">Developer</p>
          <span class="flex column nowrap account-texts">
            <p><i class="far fa-map-marker-alt"></i> Lagos, Nigeria</p>
            <p><i class="far fa-envelope"></i> eric@treplabs.co</p>
            <p><i class="fal fa-phone"></i> +2348098084015</p>
          </span>
          <!-- eslint-disable-next-line -->
          <p class="text-13">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil a hic eaque, ab sapiente similique aut accusantium animi sed maxime.</p>
        </div>
      </div>
      <div class="flex column nowrap account-db">
        <div class="account-acordian">
          <router-link to='/account'>
            <i class="far fa-archive"></i> Projects
          </router-link>
          <router-link to='/account/details'>
            <i class="fal fa-address-card"></i> Details
          </router-link>
          <a href=""><i class="fal fa-copy"></i> Requests</a>
        </div>
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.account {
  .account-db {
    min-width: 700px;
    margin: 0 20px;
    padding: 20px;
    .account-acordian {
      padding-bottom: 12px;
      border-bottom: 1px solid #CCC;
      a {
        padding: 5px 20px;
        font-size: 20px;
      }
    }
  }
  .post {
    color: #818181;
  }
  .aside {
    background: #FFF;
    padding: 20px;
    max-width: 300px;
    border: 1px solid #eeeeee;
    border-radius: 5px;
    .my-name {
      margin-top: 12px;
    }
    .account-texts {
      margin: 12px 0;
      padding: 12px 0;
      border-top: 1px solid #CCC;
      border-bottom: 1px solid #CCC;
      p {
        i {
          width: 25px;
        }
        padding: 5px 0;
      }
    }
  }
}
.account-img {
  width: 260px; height: 200px;
  object-fit: cover;
  border-radius: 1px;
}
</style>
<script>
export default {
  name: 'home',
};
</script>
