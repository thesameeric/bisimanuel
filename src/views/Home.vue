<template>
  <div class="flex column nowrap">
    <section class="flex column nowrap col-lg-6 hero justify-content-center pad-common">
      <p class="hero-text">Get lost in <br>goood music.</p>
      <span class="flex">
        <a class="btn btn-white" href="#">explore</a>
      </span>
    </section>
    <section class="flex align-items-center column nowrap pad-common">
      <p class="trending">Hear what's trending</p>
      <ul class="flex flex-wrap justify-content-center col-lg-6 timeline">
        <li class="music-holder">
          <router-link class="nolight" to="/music/details">
            <div class="music-holder-div">
              <div class="cover-art-holder">
                <img src="../assets/img/drake.jpg" alt="Cover art">
              </div>
              <div class="flex column nowrap music-info-text">
                <p>God's plan</p>
                <p class="text-13 artist-name">Drake 2018</p>
                <p class="text-13 download-count">12,255</p>
              </div>
            </div>
            <div class="flex">
              <p class="text-13 download-count timeframe align-self-end">3:55</p>
            </div>
          </router-link>
        </li>
        <li class="music-holder">
          <router-link class="nolight" to="/music/details">
            <div class="music-holder-div">
              <div class="cover-art-holder">
                <img src="../assets/img/drake.jpg" alt="Cover art">
              </div>
              <div class="flex column nowrap music-info-text">
                <p>God's plan</p>
                <p class="text-13 artist-name">Drake 2018</p>
                <p class="text-13 download-count">12,255</p>
              </div>
            </div>
            <div class="flex">
              <p class="text-13 download-count timeframe align-self-end">3:55</p>
            </div>
          </router-link>
        </li>
        <li class="music-holder">
          <router-link class="nolight" to="/music/details">
            <div class="music-holder-div">
              <div class="cover-art-holder">
                <img src="../assets/img/drake.jpg" alt="Cover art">
              </div>
              <div class="flex column nowrap music-info-text">
                <p>God's plan</p>
                <p class="text-13 artist-name">Drake 2018</p>
                <p class="text-13 download-count">12,255</p>
              </div>
            </div>
            <div class="flex">
              <p class="text-13 download-count timeframe align-self-end">3:55</p>
            </div>
          </router-link>
        </li>
      </ul>
      <p class="flex">
        <a class="btn-coloured" href="">Explore trending playlist</a>
      </p>

      <p class="trending">Thanks for listening. Now join in.</p>
      <ol class="events">
        <li>
          <img src="../assets/img/concert.jpg" alt="">
          <div class="event-info flex nowrap justify-content-space-between">
            <span>
              <p class="text-20"><strong>Partee after Partee</strong></p>
              <p class="flex align-items-center">
                <i class="material-icons">date_range</i> Jan 8 2020
              </p>
              <p class="flex nowrap align-items-center">
                <i class="material-icons">alarm_on</i> 5:00pm
              </p>
              <p class="flex nowrap align-items-center">
                <i class="material-icons">room</i> Bismanules Studio, Futa junction
              </p>
              <span class="flex">
                <router-link class="btn-coloured" to="/">
                  <i class="material-icons">loyalty</i> Save a seat
                </router-link>
              </span>
            </span>
          </div>
        </li>
      </ol>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.hero {
  background: #1f1f1f;
  // background: #bc4e9c;  /* fallback for old browsers */
  // background: -webkit-linear-gradient(to right, #f80759, #bc4e9c);
  // background: linear-gradient(to right, #f80759, #bc4e9c);
  min-height: 100vh;
  p {
    color: #FFF;
    font-size: 70px;
  }
  @media only screen and (max-width: 720px) {
    padding: 25px;
    p {
      font-size: 50px;
    }
  }
}
.trending {
  font-size:20px;
  margin: 20px 0;
}
ol.events {
  li{
    img {
      width: 500px;
      height: 320px;
        @media only screen and (max-width: 720px) {
          width: 100%;
        }
    }
    .event-info {
      padding: 10px 20px;
      p {
        padding: 7px 0;
      }
    }
  }
}
ul.timeline {
  li, .nolight {
    display: flex;
    flex-flow: column nowrap;
    .music-holder-div {
      display: flex;
      flex-flow: column nowrap;
      padding-bottom: 15px;
      margin: 7px 20px;
    }
    .cover-art-holder {
      margin: 10px 0;
      img {
        width: 200px;
        height: 170px;
        border-radius: 0px;
        @media only screen and (max-width: 720px) {
          width: 70px;
          height: 70px;
          margin-left: 15px;
          border-radius: 0px;
        }
      }
      @media only screen and (max-width: 720px) {
        margin: 0;
      }
    }
    .artist-name {
      color: #a1a1a1;
    }
    .download-count {
      margin-top: 8px;
      color: #a1a1a1;
    }
    @media only screen and (max-width: 720px) {
      width: 100%;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #ebe9e9;
      .music-holder-div {
        flex-flow: row nowrap;
        align-items: center;
        width: 100%;
        margin: 5px;
        padding-bottom: 5px;
        padding-top: 10px;
      }
      .music-info-text {
        margin-left: 20px;
      }
    }
  }
  li:last-child {
    border-bottom: none;
  }
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
