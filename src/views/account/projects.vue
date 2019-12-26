<template>
  <div>
    <ol class="flex flex-wrap project-ol">
      <li>
        <div>
          <div class="proj-heading">
            <p><strong>Candence</strong></p>
            <p class="text-13">Software</p>
          </div>
          <div class="flex">
            <!-- eslint-disable-next-line -->
            <p class="text-13">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consequuntur quos distinctio cum ipsa aspernatur ea dolorum magnam voluptatibus</p>
          </div>
          <div class="proj-footer">
            <p><i class="fal fa-users"></i> 8</p>
          </div>
        </div>
      </li>
      <li>
        <div>
          <div class="proj-heading">
            <p><strong>Behance</strong></p>
            <p class="text-13">Software</p>
          </div>
          <div class="flex">
            <!-- eslint-disable-next-line -->
            <p class="text-13">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consequuntur quos distinctio cum ipsa aspernatur ea dolorum magnam voluptatibus</p>
          </div>
          <div class="proj-footer">
            <p><i class="fal fa-users"></i> 8</p>
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>
<style lang="scss" scoped>
.project-ol {
  li {
    width: 270px;
    border: 1px solid #e2e2e2;
    background: #FFF;
    border: 1px solid #eeeeee;
    border-radius: 5px;
    margin: 15px;
    padding: 15px;
    .proj-heading {
      padding-bottom: 10px;
      margin-bottom: 10px;
      border-bottom: 1px solid #CCC;
    }
    .proj-footer {
      margin-top: 10px;
      padding: 10px 0;
      border-top: 1px solid #CCC;
    }
  }
}
</style>
