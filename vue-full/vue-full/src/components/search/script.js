export default {
  name: 'search',
  props: {
    searchToggler: {
      type: Boolean,
      required: true,
    },
    suggestions: {
      type: Array,
      required: true,
    },
    selection: {
      type: String,
      required: true,
      twoWay: true,
    },
  },
  data() {
    return {
      open: false,
      current: 0,
      city: '',
      val: '',
      dspl: 'none',
    };
  },
  computed: {
    matches() {
      return this.suggestions.filter(str => str.Id.toString().indexOf(this.selection) >= 0 ||
      str.City.toLowerCase().indexOf(this.selection.toLowerCase()) >= 0);
    },
    openSuggestion() {
      return this.selection !== '' &&
          this.matches.length !== 0 &&
          this.open === true;
    },
  },
  methods: {
    enter() {
      this.city = this.matches[this.current].City;
      this.selection = this.matches[this.current].Id.toString();
      this.open = false;
    },
    up() {
      if (this.current > 0) { this.current -= this.current; }
    },
    down() {
      if (this.current < this.suggestions.length - 1) { this.current += this.current; }
    },
    esc() {
      this.open = false;
      this.selection = this.val;
    },
    isActive(index) {
      return index === this.current;
    },
    change() {
      if (this.selection !== '') { this.val = this.selection; }
      this.city = '';
      if (this.open === false) {
        this.open = true;
        this.current = 0;
      }
    },
    focusLeave() {
      this.dspl = 'block';
      this.city = this.suggestions[this.selection].City;
      this.selection = this.suggestions[this.selection].Id.toString();
      this.open = false;
    },
    onFocus() {
      this.dspl = 'none';
      this.open = true;
    },
    suggestionClick(index) {
      this.city = this.matches[index].City;
      this.selection = this.matches[index].Id.toString();
      this.open = false;
    },
    inputFocus() {
      this.$refs.search.focus();
    },
  },
};
