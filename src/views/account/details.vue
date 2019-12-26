<template>
  <div class="profile-holder flex column nowrap col-lg-6">
    <p class="profile-mini-header">Education</p>
    <section class="flex column nowrap sectionise">
      <div class="flex nowrap profile-con">
        <img class="profile-icons" src="../../assets/img/university.svg" alt="">
        <span class="flex column nowrap that-span">
          <p class="tagg">Federal University of Technology Akure</p>
          <p class="value">Electrical Engineering</p>
          <p class="value">2015 - 2020</p>
        </span>
      </div>
      <div class="flex nowrap profile-con">
        <i class="fa fa-school"></i>
        <span class="flex column nowrap that-span">
          <p class="tagg">Udacity</p>
          <p class="value">Javascript ES6</p>
          <p class="value">2019</p>
        </span>
      </div>
    </section>
    <section class="flex column nowrap sectionise">
      <p class="profile-mini-header">Accomplishments</p>
      <div class="flex nowrap profile-con">
        <i class="fa fa-school"></i>
        <span class="flex column nowrap that-span">
          <p class="tagg">Federal University of Technology Akure</p>
          <p class="value">Electrical Engineering</p>
          <p class="value">2015 - 2020</p>
        </span>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.profile-holder {
  .sectionise {
    border-bottom: 1px solid #dddddd;
    padding: 5px 20px;
  }
  .profile-mini-header {
    font-weight: 400;
    color: #5a5a5a;
    margin: 25px 0;
    font-size: 20px;
  }
  .profile-con {
    margin: 10px 0 20px 0;
    .profile-icons {
      width: 40px; height: 40px;
      margin-right: 20px;
      object-fit: contain;
    }
    i {
      margin-right: 20px;
      font-size: 30px;
      color: #5a5a5a;
    }
    .value {
      font-size: 14px;
      margin-bottom: 5px;
      color: #707070;
    }
    .that-span {
      width: calc(100% - 100px);
      padding-bottom: 20px;
      border-bottom: 1px solid #dddddd;
    }
  }
  .profile-con:last-child {
    .that-span {
      border-bottom: none;
    }
  }
  .tagg {
    color: #555555;
    font-weight: 500;
    margin-bottom: 5px;
  }
}
</style>
