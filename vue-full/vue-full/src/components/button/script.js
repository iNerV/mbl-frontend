import icon from '../icon/Icon';

export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      require: true,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
      default: null,
    },
    link: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      require: false,
      default: null,
    },
  },
  components: {
    icon,
  },
  data() {
    return {
    };
  },
  computed: {
    classButton() {
      return {
        'link-btn--big': this.size === 'big',
        'link-btn--dark': this.color === 'dark',
      };
    },
  },
  methods: {
  },
};
