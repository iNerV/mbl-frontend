export default {
  name: 'EntryCard',
  props: {
    type: {
      type: String
    },
    inList: {
      type: String,
      default: 'hidden'
    },
    title: {
      type: String
    },
    author: {
      type: String
    },
    year: {
      type: String
    },
    link: {
      type: String
    },
    img: {
      type: String
    },
  },
  data: function() {
    return {
    }
  },
  computed: {
    classObject: function () {
      return {
        'entry-card--popular': this.type !== undefined && this.type.includes('popular')
      }
    },
    imgClass: function () {
      return {
        'entry-card__cover--planned': this.inList !== undefined && this.inList.includes('planned'),
        'entry-card__cover--currently': this.inList !== undefined && this.inList.includes('currently'),
        'entry-card__cover--on-hold': this.inList !== undefined && this.inList.includes('on-hold'),
        'entry-card__cover--dropped': this.inList !== undefined && this.inList.includes('dropped')
      }
    },
    listClass: function () {
      return {
        'entry-card__in_list--planned': this.inList !== undefined && this.inList.includes('planned'),
        'entry-card__in_list--currently': this.inList !== undefined && this.inList.includes('currently'),
        'entry-card__in_list--on-hold': this.inList !== undefined && this.inList.includes('on-hold'),
        'entry-card__in_list--dropped': this.inList !== undefined && this.inList.includes('dropped'),
        'entry-card__in_list--hidden': this.inList !== undefined && this.inList.includes('hidden'),
      }
    },
  },
  methods: {
  }
};