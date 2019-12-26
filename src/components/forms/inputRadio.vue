<template>
  <span class="flex nowrap radio-holder">
    <i :class="icon"></i>
    <label>{{label}}</label>
    <input class="type_1" type="radio" :name="radioName" id="">
  </span>
</template>
<style lang="scss" scoped>
  label {
    margin-left: 7px;
  }
  input[type="radio"]{
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    vertical-align: middle;
    margin-left: 10px;
    position: relative;
    cursor: pointer;
    outline: 0;
    overflow: hidden;
  }
  input[type="radio"]:after{
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transition: all .1s;
  }
  .radio-holder {
    margin-right: 15px;
    margin-top: 15px;
  }
  .type_1{
    border: 2px solid #414141;
  }
  .type_1:after{
    border: 5px solid #414141;
    transform: translate3d(50%, 50%, 0);
  }
  .type_1:checked:after{
    transform: translate3d(-50%, -50%, 0);
  }
</style>
<script>
export default {
  props: ['label', 'icon', 'radioName'],
};
</script>
