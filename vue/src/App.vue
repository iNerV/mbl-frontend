<template lang="pug" src="./template.pug"></template>

<script>
import topMenu from './components/top-menu/topMenu.vue'
import commentNotifer from './components/commentNotifer/commentNotifer.vue'
import toTop from './components/to-top/toTop.vue'

export default {
  name: 'app',
  data: function () {
    return {
    }
  },
  components: {
    topMenu,
    commentNotifer,
    toTop
  }
}
</script>

<style lang="less" src="./less/application.less"></style>
