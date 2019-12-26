<template>
  <div class="form-group">
    <label for="phone">{{label}}</label>
    <div class="flex nowrap smart-input">
      <i :class="icon"></i>
      <input type="text" name="" id="" :placeholder="placeholder">
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .form-group {
    margin: 10px 0;
    display: flex;
    flex-flow: column nowrap;
    label {
      font-size: 14px;
      margin: 7px 0;
    }
    .smart-input {
      align-items: center;
      background: #FFF;
      padding: 5px 9px;
      border: 1px solid #CCC;
      i {
        margin-right: 9px;
        color: #FFF;
        transition: all ease-in-out 1s;
      }
      input[type=text], input[type=password], input[type=email] {
        padding: 0;
        min-width: 270px;
        height: 35px;
        border: none;
      }
    }
    .smart-input:focus-within {
      border: 1px solid #2283f1;
      i {
        color: #666666;
      }
    }
  }
</style>
<script>
export default {
  props: ['placeholder', 'icon', 'label'],
};
</script>
