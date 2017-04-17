<template lang="pug">
  div#app
    div.container
      autocomplete(:suggestions="cities", :selection.sync="value")
</template>

<script>
import autocomplete from './components/autocomplete/Autocomplete.vue'
import json from './components/autocomplete/kladr.json';

export default {
  name: 'app',
  data: function () {
    return {
      cities: json,
      value: ''
    }
  },
  components: {
    autocomplete
  }
}
</script>

<style src="./normalize.css"></style>
