import addForm from '../../components/add-form/addForm';
import comment from '../../components/comment/Comment';
import dropdown from '../../components/dropdown/Dropdown';
import pageTitle from '../../components/page-title/pageTitle';
import infoBox from '../../components/info-box/infoBox';
import icon from '../../components/icon/Icon';

export default {
  name: 'book',
  components: {
    addForm,
    comment,
    dropdown,
    pageTitle,
    infoBox,
    icon,
  },
  data() {
    return {
      isActive: false,
    };
  },
};
// document.title = 'Some new title';
