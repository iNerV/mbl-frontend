import addForm from '../../components/add-form/addForm.vue'
import comment from '../../components/comment/Comment.vue'
import dropdown from '../../components/dropdown/Dropdown.vue'
import pageTitle from '../../components/page-title/pageTitle.vue'
import infoBox from '../../components/info-box/infoBox.vue'
import icon from '../../components/icon/Icon.vue'

export default {
  name: 'book',
  components: {
    addForm,
    comment,
    dropdown,
    pageTitle,
    infoBox,
    icon
  },
  data: function() {
    return {
      isActive: false
    }
  }
}
// document.title = 'Some new title';