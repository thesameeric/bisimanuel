<template>
  <div class="flex column nowrap">
    <div>
      <img class="music-details-img" src="../../assets/img/drake.jpg" alt="">
    </div>
    <div class="flex column nowrap music-info">
      <p class="text-25"><strong>God's plan</strong></p>
      <p class="text-13 dull-text">Drake. 2018</p>
      <p>FREE</p>
    </div>
    <div class="flex column nowrap other-song-details">
      <p class="strong headies">OTHER SONG DETAILS</p>
      <span class="flex nowrap">
        <p><strong>Releases On: </strong></p>
        <p class="facts"> June 29 2018</p>
      </span>
      <span class="flex nowrap">
        <p><strong>Duration: </strong></p>
        <p class="facts"> 03:18</p>
      </span>
      <span class="flex nowrap">
        <p><strong>Language: </strong></p>
        <p class="facts"> English</p>
      </span>
    </div>
    <div class="flex download-btn">
      <a class="btn-coloured" href="../../assets/audio/Drake_Gods_Plan.mp3" download>
        <i class="material-icons">cloud_download</i>Download
      </a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.music-details-img {
  width: 500px;
  height: 270px;
    @media only screen and (max-width: 720px) {
      width: 100%;
      height: 450px;
      object-fit: cover;
    }
}
.music-info {
  padding: 13px 20px;
  .dull-text {
    color: #919191;
  }
}
.download-btn {
  padding: 5px 20px;
  i {
    margin-right: 7px;
  }
}
.other-song-details {
  font-size: 15px;
  span {
    margin-bottom: 7px;
  }
  padding: 12px 20px;
  .headies {
    margin-bottom: 12px;
  }
  .facts {
    margin-left: 10px;
    color: #919191;
  }
}
</style>
