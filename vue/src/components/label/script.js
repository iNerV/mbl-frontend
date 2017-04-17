export default {
  name: 'Label',
  props: {
    text: {
      type: String,
      required: true
    },
    type: {
      type: String
    },
    active: {
      type: Boolean,
      default: true
    },
  },
  data: function() {
    return {
      isActive: this.active,
      isHovered: false

    }
  },
  computed: {
    classObject: function () {
      if (this.isActive || this.isHovered){
        return {
          'label--big': this.type.includes('big'),
          'label--hover': !this.type.includes('big'),
          'label--success': this.type.includes('success'),
          'label--info': this.type.includes('info'),
          'label--warning': this.type.includes('warning'),
          'label--danger': this.type.includes('danger'),
          'label--offtop': this.type.includes('offtop'),
          'label--announcement': this.type.includes('announcement'),
          'label--review': this.type.includes('review')
        }
      }
    }
  },
  methods: {
    onClick: function() {
      if (!this.type.includes('big')) {
        this.isActive = !this.isActive;
      }
    },
    mouseOver: function() {
        this.isHovered = !this.isHovered;
    }
  },
}