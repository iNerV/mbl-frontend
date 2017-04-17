export default {
  name: 'toTop',
  data() {
    return {
      is_show: false,
      scrollPosition: null,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
      this.is_show = this.scrollPosition > 50;
    },
    toTop() {
      $('body,html').animate({
        scrollTop: 0,
      }, 100);
      return false;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
};
