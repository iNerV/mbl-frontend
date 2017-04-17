export default {
  name: 'autocomplete',
  props: {
    suggestions: {
      type: Array,
      required: true
    },
    selection: {
      type: String,
      required: true,
      twoWay: true
    }
  },
  data: function () {
    return {
      open: false,
      current: 0,
      matchesLen: 0,
      city: '',
      val: '',
      dspl: 'none',  // сокращение от display, не сокращая конфликтует с чем-то..
      width: 0,
      error: false
    }
  },
  computed: {
    matches() {
      return this.suggestions.filter((str) => {
        return str.Id.toString().indexOf(this.selection) >= 0 || str.City.toLowerCase().indexOf(this.selection.toLowerCase()) >= 0;
      });
    },
    openSuggestion() {
      return this.selection !== "" &&
          this.open === true;
    },
    getWidth() {
      return this.$refs.autocomplete.offsetWidth;
    }
  },
  methods: {
    enter() {
      try {
        if (this.selection !== '') {
          this.city = this.matches[this.current].City;
          this.selection = this.matches[this.current].Id.toString();
          this.open = false;
          this.current = 0;
          this.$refs.autocomplete.blur();
        } else {
          this.add();
        }
      } catch (e) {
        if (e instanceof TypeError) {
          this.add();
        }
      }
    },
    del() {
      this.open = this.selection !== '';
    },
    up() {
      if(this.current > 0)
        this.current--;
    },
    down() {
      if(this.current < this.matches.length - 1 && this.current <= 3)
        this.current++;
    },
    esc() {
      this.open = false;
      this.selection = this.val;
    },
    isActive(index) {
      return index === this.current;
    },
    change() {
      this.current = 0;
      this.open = true;
      this.val = this.selection;
      this.city = '';
      if (this.selection !== ''){
        this.matchesLen = this.matches.length;
      } else {
        this.matchesLen = 0;
      }
    },
    focusLeave(){
      this.dspl = 'block';
      this.open = false;
      this.width = this.getWidth;
      // if (this.matchesLen > 0) {
      //   this.selection = this.suggestions[this.selection].Id.toString();
      //   this.city = this.suggestions[this.selection].City;
      // } else {
      //     this.error = true;
      // }
      // if (this.selection === ''){
      //   this.error = false;
      // }
      try {
        this.city = this.suggestions[this.selection].City;
        this.selection = this.suggestions[this.selection].Id.toString();
      } catch (e) {
        if (e instanceof TypeError) {
          this.error = this.selection !== '';  // выводить ошибку только если поле заплнено значением не из справочника. не выводится если поле было очищено.
          // не логично если вдруг поле required=true.
        }
      }
    },
    onFocus(){
      this.dspl = 'none';
      this.open = true;
      this.error = false;
      if (this.selection !== ''){
        this.matchesLen = this.matches.length;
      }
      this.$refs.autocomplete.select();
    },
    suggestionClick(index) {
      this.error = false;
      this.city = this.matches[index].City;
      this.selection = this.matches[index].Id.toString();
      this.matchesLen = this.matches.length;
      this.open = false;
    },
    inputFocus(){
      this.$refs.autocomplete.focus();
    },
    add() {
      this.selection = prompt("Добавьте новое значение в справочник");
      alert('ну допустим Кря!');
      this.error = false;
    }
  }
}