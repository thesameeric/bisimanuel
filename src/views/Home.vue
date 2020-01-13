<template>
  <div class="flex column nowrap">
    <section class="flex column nowrap col-lg-6 hero justify-content-center pad-common">
      <p class="hero-text">Get lost in <br>good music.</p>
      <span class="flex">
        <!-- eslint-disable-next-line -->
        <p class="hero-paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi soluta enim reprehenderit quasi voluptate iusto facere assumenda.</p>
      </span>
    </section>
    <section class="flex align-items-center column nowrap pad-common">
      <div class="flex column nowrap trending-holder col-lg-6">
        <p class="trending">Hear what's trending</p>
        <p class="textify">Inspired by your recent activity</p>
      </div>
      <ol class="flex nowrap horizontal-holder">
        <li>
          <router-link class="flex column nowrap" to="/music/playlist">
            <img src="../assets/img/drake.jpg" alt="">
            <p>2019 Top Hits</p>
          </router-link>
        </li>
        <li>
          <router-link class="flex column nowrap" to="/">
            <img src="../assets/img/chance.jpg" alt="">
            <p>Gospel</p>
          </router-link>
        </li>
        <li>
          <router-link class="flex column nowrap" to="/">
            <img src="../assets/img/drake.jpg" alt="">
            <p>2019 Top Hits</p>
          </router-link>
        </li>
      </ol>
    </section>
    <section class="flex align-items-center column nowrap pad-common">
      <div class="flex column nowrap trending-holder col-lg-6">
        <p class="trending">New releases for you</p>
        <p class="textify">Based on what you've listened to</p>
      </div>
      <ol class="flex nowrap horizontal-holder">
        <li>
          <router-link class="flex column nowrap" to="/">
            <img src="../assets/img/drake.jpg" alt="">
            <p>2019 Top Hits</p>
          </router-link>
        </li>
        <li>
          <router-link class="flex column nowrap" to="/">
            <img src="../assets/img/chance.jpg" alt="">
            <p>Gospel</p>
          </router-link>
        </li>
        <li>
          <router-link class="flex column nowrap" to="/">
            <img src="../assets/img/drake.jpg" alt="">
            <p>2019 Top Hits</p>
          </router-link>
        </li>
      </ol>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.hero {
  background: #FFF;
  min-height: 100px;
  p {
    color: #1f1f1f;
    font-size: 30px;
  }
  p.hero-paragraph {
    font-size: 15px;
    color: #7a7a7a;
    margin: 17px 0;
  }
  @media only screen and (max-width: 720px) {
    padding: 15px;
    p {
      font-size: 30px;
    }
  }
}
.trending-holder {
  padding: 20px 0;
    @media only screen and (max-width: 720px) {
      padding: 15px;
      font-weight: 700;
    }
  .trending {
    font-size:20px;
  }
}
.textify {
  color: #7a7a7a;
  font-size: 13px;
  margin-top: 7px;
}
.block-btn {
  display: flex;
  padding: 12px 27px;
  margin: 20px 0;
  background: #1f1f1f;
  color: #FFF;
  border-radius: 5px;
}
.timeframe {
  padding-right: 20px;
  display: none;
  @media only screen and (max-width: 720px) {
    display: flex;
  }
}
ol.horizontal-holder {
  width: 100%;
  overflow-x: scroll;
  li {
    margin: 15px 8px;
    a {
      img {
        width: 120px;
        height: 120px;
        border-radius: 2px;
      }
    p {
        margin: 15px 0;
        font-size: 13px;
      }
    }
  }
  li:last-child {
    a {
      img {
        margin-right: 15px;
      }
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
    };
  },
  components: {
  },
  name: 'home',
};
</script>
