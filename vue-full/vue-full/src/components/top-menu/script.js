import search from '../search/Search';
import dropdown from '../dropdown/Dropdown';

export default {
  name: 'topMenu',
  components: {
    search,
    dropdown,
  },
  data() {
    return {
      openMenu: false,
      openSearch: false,
      value: '',
    };
  },
  methods: {
    toggleMenu() {
      this.openMenu = !this.openMenu;
      if (this.openSearch) {
        this.openSearch = !this.openSearch;
      }
    },
    toggleSearch() {
      this.openSearch = !this.openSearch;
      if (this.openMenu) {
        this.openMenu = !this.openMenu;
      }
    },
  },
};
