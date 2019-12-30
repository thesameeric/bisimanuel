<template>
  <div class="flex column nowrap">
    <section class="flex column nowrap col-lg-6 hero justify-content-center pad-common">
      <p class="hero-text">Get lost in <br>goood music.</p>
      <span class="flex">
        <a class="btn btn-white" href="#">explore</a>
      </span>
    </section>
    <section class="flex column nowrap pad-common">
      <p class="trending">Hear what's trending</p>
      <ul class="timeline">
        <li class="flex nowrap align-items-center justify-content-space-between">
          <div class="flex nowrap align-items-center">
            <div class="cover-art-holder">
              <img src="../assets/img/drake.jpg" alt="Cover art">
            </div>
            <div class="flex column nowrap">
              <p>God's plan</p>
              <p class="text-13 artist-name">Drake 2018</p>
            </div>
          </div>
          <div class="music-time-holder" >
            <p>3:35</p>
          </div>
        </li>
        <li class="flex nowrap align-items-center justify-content-space-between">
          <div class="flex nowrap align-items-center">
            <div class="cover-art-holder">
              <img src="../assets/img/drake.jpg" alt="Cover art">
            </div>
            <div class="flex column nowrap">
              <p>God's plan</p>
              <p class="text-13 artist-name">Drake 2018</p>
            </div>
          </div>
          <div class="music-time-holder" >
            <p>3:35</p>
          </div>
        </li>
        <li>
          <div>
            <iframe class="youtube-iframe" src="https://www.youtube.com/embed/xpVfcZ0ZcFM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="video-player-info flex nowrap justify-content-space-between">
            <span class="flex column nowrap">
              <p>Don't call me back</p>
              <p class="text-13 artist-name">Joeboy. DML</p>
            </span>
            <p>Download audio</p>
          </div>
        </li>
        <li class="event">
          <div class="event-img-holder">
            <img src="../assets/img/concert.jpg" alt="concert cover art">
          </div>
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
      </ul>
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
.cover-art-holder {
  margin: 10px 20px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
.artist-name {
  color: #a1a1a1;
}
ul.timeline {
  width: 500px;
  .music-time-holder {
    margin-right: 20px;
    color: #a1a1a1;
  }
  li {
    border-bottom: 1px solid #dbdbdb;
    padding-bottom: 15px;
  }
  .youtube-iframe {
    width: 100%;
    height: 250px;
  }
  li.event {
    .event-img-holder {
      img{
        width: 100%;
        height: 280px;
      }
    }
    .event-info {
      padding: 10px 20px;
      p {
        padding: 7px 0;
      }
    }
  }
  @media only screen and (max-width: 720px) {
    width: 100%;
  }
}
.video-player-info {
  padding: 5px 20px;
}
ul.timeline li:last-child {
  border-bottom: none;
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
