<template>
  <ul class="flex flex-wrap justify-content-center col-lg-6 timeline">
    <li class="music-holder">
      <router-link class="nolight" to="/music/details">
        <div class="music-holder-div">
          <div class="flex column nowrap music-info-text">
            <p>God's plan</p>
            <p class="text-13 artist-name">Drake 2018</p>
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
          <div class="flex column nowrap music-info-text">
            <p>God's plan</p>
            <p class="text-13 artist-name">Drake 2018</p>
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
          <div class="flex column nowrap music-info-text">
            <p>God's plan</p>
            <p class="text-13 artist-name">Drake 2018</p>
          </div>
        </div>
        <div class="flex">
          <p class="text-13 download-count timeframe align-self-end">3:55</p>
        </div>
      </router-link>
    </li>
  </ul>
</template>
<style lang="scss" scoped>
ul.timeline {
  li {
    border-bottom: 1px solid #ebe9e9;
  }
  li, .nolight {
    display: flex;
    flex-flow: column nowrap;
    .music-holder-div {
      display: flex;
      flex-flow: column nowrap;
      padding-bottom: 15px;
      margin: 7px 20px;
    }
    .artist-name {
      color: #a1a1a1;
    }
    .download-count {
      margin-top: 8px;
      margin-right: 22px;
      color: #a1a1a1;
    }
    @media only screen and (max-width: 720px) {
      width: 100%;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
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
</style>
