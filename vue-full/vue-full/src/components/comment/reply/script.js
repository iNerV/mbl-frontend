import myLabel from '@/components/label/Label';

export default {
  name: 'Reply',
  components: {
    myLabel,
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    mouseOver() {
      this.isVisible = !this.isVisible;
    },
  },
};
