<template lang="pug" src="./template.pug"></template>

<script>
import topMenu from './components/top-menu/topMenu';
import commentNotifier from './components/commentNotifier/commentNotifier';
import toTop from './components/to-top/toTop';

export default {
  name: 'app',
//  data() {
//    return {
//    };
//  },
  components: {
    topMenu,
    commentNotifier,
    toTop,
  },
};
</script>

<style lang="less" src="./less/application.less"></style>
