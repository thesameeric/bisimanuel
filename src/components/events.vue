<template>
  <ol class="events">
    <li>
      <img src="../assets/img/concert.jpg" alt />
      <div class="event-info flex nowrap justify-content-space-between">
        <span>
          <p class="text-20">
            <strong>Partee after Partee</strong>
          </p>
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
</template>
<style lang="scss" scoped>
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
</style>
