<template>
  <div class="flex col-lg-6">
    <div class="flex col-lg-6 justify-content-center align-items-center form-large-container">
      <img src="../assets/img/logo.png" alt="">
      <form action="">
        <div class="form-group flex column nowrap">
          <p class="text-20"><strong>Register</strong></p>
          <router-link class="text-13" to="/">Need help?</router-link>
        </div>
        <div class="form-group">
          <input type="text" placeholder="Username">
        </div>
        <div class="form-group">
          <input type="email" placeholder="Email">
        </div>
        <div class="form-group">
          <input type="password" name="" id="" placeholder="Password">
        </div>
        <div class="form-group">
          <input type="password" name="" id="" placeholder="Confirm password">
        </div>
        <div class="form-group">
          <button>Signup</button>
        </div>
        <div class="flex justify-content-space-between forgot-password-link">
          <router-link to="/login">Login</router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.vc-img {
  width: 300px;
  object-fit: contain;
  position: fixed;
  bottom: 25px;
  left: 75px;
}
.form-large-container {
  min-height: 100vh;
  .form-group {
    margin: 20px 0;
    input[type=text], input[type=password], input[type=email] {
      padding: 12px 20px;
      min-width: 270px;
      height: 45px;
      border: 1px solid #eeeeee;
    }
    button, input[type=submit] {
      padding: 10px 20px;
      border-radius: 3px;
      outline: none;
      background: #ed6d50;
      cursor: pointer;
      border: none;
      color: #FFF;
    }
  }
}
.forgot-password-link {
  a {
    font-size: 13px;
    color: #2283f1;
  }
}
</style>
