<template src="./template.html"></template>
<script src="./script.js"></script>
<style lang="less">
  .input {
    position: relative;
  }

  input::-webkit-input-placeholder {
    color: #A0A0A0;
  }
  input:focus::-webkit-input-placeholder {
    color: #D6D6D6;
  }

  /* Firefox < 19 */
  input:-moz-placeholder {
    color: #A0A0A0;
  }
  input:focus:-moz-placeholder {
    color: #D6D6D6;
  }

  /* Firefox > 19 */
  input::-moz-placeholder {
    color: #A0A0A0;
  }
  input:focus::-moz-placeholder {
    color: #D6D6D6;
  }

  /* Internet Explorer 10 */
  input:-ms-input-placeholder {
    color: #A0A0A0;
  }
  input:focus:-ms-input-placeholder {
    color: #D6D6D6;
  }

  .input__title {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 0;
    white-space: nowrap;
  }

  .input__titleVal {
    float: left;
    visibility: hidden;
    padding-left: 8px;
    padding-right: 10px;
  }

  .input__titleText {
    overflow: hidden;
    position: relative;
    height: 30px;
  }

  .input__titleData {
    position: absolute;
    left: 0;
    right: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 3px 5px 5px 0;
    color: gray;
  }
</style>