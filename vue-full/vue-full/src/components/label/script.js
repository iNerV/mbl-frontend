export default {
  name: 'Label',
  props: {
    type: {
      type: String,
    },
    disable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isActive: !this.disable,
      isHovered: false,

    };
  },
  computed: {
    classObject() {
      if (this.isActive || this.isHovered) {
        return {
          'label--big': this.type.includes('big'),
          'label--hover': !this.type.includes('big'),
          'label--success': this.type.includes('success'),
          'label--info': this.type.includes('info'),
          'label--warning': this.type.includes('warning'),
          'label--danger': this.type.includes('danger'),
          'label--offtop': this.type.includes('offtop'),
          'label--announcement': this.type.includes('announcement'),
          'label--review': this.type.includes('review'),
        };
      }
      return null;
    },
  },
  methods: {
    onClick() {
      if (!this.type.includes('big')) {
        this.isActive = !this.isActive;
      }
    },
    mouseOver() {
      this.isHovered = !this.isHovered;
    },
  },
};
