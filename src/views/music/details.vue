<template>
  <div class="flex column nowrap">
    <div class="flex justify-content-center">
      <img class="music-details-img" src="../../assets/img/drake.jpg" alt="">
    </div>
    <div class="flex column nowrap music-info align-items-center">
      <p class="song-name">God's plan</p>
      <p class="text-13 dull-text">Drake. 2018</p>
      <p class="sales-type">FREE</p>
      <div class="flex download-btn">
        <a href="../../assets/audio/Drake_Gods_Plan.mp3" download>
          Download
        </a>
      </div>
    </div>
    <div class="flex column nowrap other-song-details">
      <span class="flex align-items-center nowrap">
        <img src="../../assets/img/icons/headphones.svg" alt="">
        <p class="facts"> Listen</p>
      </span>
      <span class="flex align-items-center nowrap">
        <img src="../../assets/img/icons/cassette.svg" alt="">
        <p class="facts"> Add to playlist</p>
      </span>
      <span class="flex align-items-center nowrap">
        <img src="../../assets/img/icons/microphone.svg" alt="">
        <p class="facts"> Artist</p>
      </span>
      <span class="flex align-items-center nowrap">
        <img src="../../assets/img/icons/auxiliary-cable.svg" alt="">
        <p class="facts"> Share</p>
      </span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.music-details-img {
  width: 500px;
  height: 270px;
    @media only screen and (max-width: 720px) {
      margin-top: 20px;
      width: 200px;
      height: 200px;
      object-fit: cover;
    }
}
.music-info {
  padding: 13px 20px;
  .song-name {
    font-weight: 500;
    font-size: 20px;
  }
  .dull-text {
    color: #919191;
  }
  .sales-type {
    margin-top: 12px;
  }
}
.download-btn {
  padding: 20px;
  a {
    border-radius: 20px;
    font-size: 13px;
    font-weight: 500;
    text-transform: uppercase;
    border: 1px solid #333;
    padding: 12px 20px;
  }
}
.other-song-details {
  img {
    width: 25px; height: 25px;
    object-fit: contain;
    margin-right: 25px;
  }
  font-size: 15px;
  span {
    margin-bottom: 17px;
  }
  padding: 12px 20px;
  .headies {
    margin-bottom: 12px;
  }
  .facts {
    color: #242424;
    font-size: 16px;
    font-weight: 500;
  }
}
</style>
