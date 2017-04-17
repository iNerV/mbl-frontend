export default {
  name: 'Dropdown',
  props: {
    isMini: {
      type: Boolean,
      default: false,
    },
    isTrigger: {
      type: Boolean,
      default: false,
    },
    onEvent: {
      type: String,
      default: 'hover',
    },
  },
  components: {
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    open() {
      this.isOpen = !this.isOpen;
    },
  },
};
