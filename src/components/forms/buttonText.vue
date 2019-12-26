<template>
  <div class="form-group">
    <button>{{text}}</button>
  </div>
</template>
<style lang="scss" scoped>
  .form-group {
    margin: 20px 0;
    button, input[type=submit] {
      padding: 10px 20px;
      border-radius: 3px;
      outline: none;
      margin: 20px 0;
      background: #ed6d50;
      cursor: pointer;
      border: none;
      color: #FFF;
    }
    button:hover {
      background: #d4563a;
    }
  }
</style>
<script>
export default {
  props: ['text'],
};
</script>
