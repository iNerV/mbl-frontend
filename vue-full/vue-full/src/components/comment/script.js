import myLabel from '@/components/label/Label';
import reply from '@/components/comment/reply/Reply';

export default {
  name: 'Comment',
  components: {
    myLabel,
    reply,
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
