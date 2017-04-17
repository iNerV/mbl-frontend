export default {
  name: 'infoBox',
  props: {
    boxTitle: {
      type: String,
      require: true
    },
    link: {
      type: String || Object,
      default: null
    },
    color: {
      type: String
    },
    subLinksPositionRight: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: null
    },
    flex: {
      type: Boolean,
      default: false
    },
    isNoWrap: {
      type: Boolean,
      default: false
    },
  },
  data: function() {
    return {
    }
  },
  computed: {
    classTitle: function () {
      return {
        'info-box__title--big': this.size =='big',
        'info-box__title--orange': this.color !== undefined && this.color.includes('orange'),
        'info-box__title--blue': this.color !== undefined && this.color.includes('blue'),
        'info-box__title--powderblue': this.color !== undefined && this.color.includes('powderblue'),
        'info-box__title--skyblue': this.color !== undefined && this.color.includes('skyblue'),
        'info-box__title--purple': this.color !== undefined && this.color.includes('purple'),
        'info-box__title--green': this.color !== undefined && this.color.includes('green'),
        'info-box__title--yellow': this.color !== undefined && this.color.includes('yellow'),
        'info-box__title--red': this.color !== undefined && this.color.includes('red'),
        'info-box__title--pink': this.color !== undefined && this.color.includes('pink'),
        'info-box__title--magenta': this.color !== undefined && this.color.includes('magenta'),
        'info-box__title--brown': this.color !== undefined && this.color.includes('brown'),
      }
    },
  },
  methods: {
  }
}