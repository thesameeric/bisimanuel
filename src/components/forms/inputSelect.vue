<template>
  <div>
    <div class="form-group">
      <label for="state">Country</label>
      <div class="select">
        <select name="state" id="state">
          <option value disabled>-- Select country --</option>
          <option value="Nigeria">Nigeria</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label for="state">State</label>
      <div class="select">
        <select name="state" id="state">
          <option value disabled>-- Select state --</option>
          <option value="Abia">Abia</option>
          <option value="Adamawa">Adamawa</option>
          <option value="AkwaIbom">AkwaIbom</option>
          <option value="Anambra">Anambra</option>
          <option value="Bauchi">Bauchi</option>
          <option value="Bayelsa">Bayelsa</option>
          <option value="Benue">Benue</option>
          <option value="Borno">Borno</option>
          <option value="CrossRivers">CrossRivers</option>
          <option value="Delta">Delta</option>
          <option value="Ebonyi">Ebonyi</option>
          <option value="Edo">Edo</option>
          <option value="Ekiti">Ekiti</option>
          <option value="Enugu">Enugu</option>
          <option value="Gombe">Gombe</option>
          <option value="Imo">Imo</option>
          <option value="Jigawa">Jigawa</option>
          <option value="Kaduna">Kaduna</option>
          <option value="Kano">Kano</option>
          <option value="Katsina">Katsina</option>
          <option value="Kebbi">Kebbi</option>
          <option value="Kogi">Kogi</option>
          <option value="Kwara">Kwara</option>
          <option value="Lagos">Lagos</option>
          <option value="Nasarawa">Nasarawa</option>
          <option value="Niger">Niger</option>
          <option value="Ogun">Ogun</option>
          <option value="Ondo">Ondo</option>
          <option value="Osun">Osun</option>
          <option value="Oyo">Oyo</option>
          <option value="Plateau">Plateau</option>
          <option value="Rivers">Rivers</option>
          <option value="Sokoto">Sokoto</option>
          <option value="Taraba">Taraba</option>
          <option value="Yobe">Yobe</option>
          <option value="Zamfara">Zamafara</option>
        </select>
      </div>
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
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline: 0;
    box-shadow: none;
    border: 0 !important;
    background: #fff;
    background-image: none;
  }
  /* Remove IE arrow */
  select::-ms-expand {
    display: none;
  }
  /* Custom Select */
  .select {
    position: relative;
    display: flex;
    padding: 12px 20px;
    min-width: 270px;
    height: 45px;
    border: 1px solid #c5c5c5;
    line-height: 3;
    background: #fff;
    overflow: hidden;
  }
  select {
    flex: 1;
    padding: 0 0.5em;
    color: #3f3f3f;
    cursor: pointer;
  }
  /* Arrow */
  .select::after {
    content: "\25BC";
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 1em;
    background: #ffffff;
    cursor: pointer;
    pointer-events: none;
    -webkit-transition: 0.25s all ease;
    -o-transition: 0.25s all ease;
    transition: 0.25s all ease;
  }
  /* Transition */
  .select:hover::after {
    color: #ffae89;
  }
}
</style>
