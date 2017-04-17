import search from '../search/Search.vue'
import dropdown from '../dropdown/Dropdown.vue'


export default {
  name: 'topMenu',
  components: {
    search,
    dropdown
  },
  data: function() {
    return {
      openMenu: false,
      openSearch: false,
      value: ''
    }
  },
  methods: {
    toggleMenu: function(){
      this.openMenu = !this.openMenu;
      (this.openSearch ? this.openSearch = !this.openSearch : false);
    },
    toggleSearch: function(){
      this.openSearch = !this.openSearch;
      (this.openMenu ? this.openMenu = !this.openMenu : false);
    }
  }
}