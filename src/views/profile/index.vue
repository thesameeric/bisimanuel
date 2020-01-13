<template>
  <div class="flex column nowrap align-items-center justify-content-center profile">
    <div class="flex nowrap justify-content-center">
      <div class="flex justify-content-center align-items-center avatar">
        <i class="material-icons">person</i>
      </div>
      <div class="flex column nowrap">
        <p class="user-name">Kukula <br> Dante</p>
        <router-link class="edit-profile-btn" to="/">
          Edit profile
        </router-link>
      </div>
    </div>
    <ol class="flex nowrap account-info">
      <li class="flex column align-items-center nowrap">
        <p class="num">13</p>
        <p class="text">Playlists</p>
      </li>
      <li class="flex column align-items-center nowrap">
        <p class="num">73</p>
        <p class="text">Downloads</p>
      </li>
      <li class="flex column align-items-center nowrap">
        <p class="num">2,700</p>
        <p class="text">Coins</p>
      </li>
    </ol>
  </div>
</template>
<style lang="scss" scoped>
.profile {
  padding: 20px 0;
  .avatar {
    background: #979797;
    width: 40px; height: 40px;
    border-radius: 50%;
    margin: 20px 12px;
    i {
      color: #ffffff;
      font-size: 20px;
    }
  }
  .user-name {
    font-size: 40px;
    font-weight: 700;
    padding: 12px;
  }
  .edit-profile-btn {
    margin: 12px;
    font-size: 13px;
    font-weight: 500;
    padding: 9px 20px;
    background: #1db954;
    color: #ffffff;
    text-transform: capitalize;
    text-align: center;
  }
  ol.account-info {
    li {
      padding: 10px 20px;
      p {
        font-size: 13px;
        text-transform: uppercase;
      }
      p.num {
        color: #070707;
        font-weight: 700;
      }
      p.text {
        color: #979797;
      }
    }
  }
}
</style>
