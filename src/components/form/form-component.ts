import Vue from 'vue'
export default Vue.extend({
  name: 'FormComponent',
  data() {
     return {
          title: 'Form components',
          isSubmitted: false,
          post: {
              title: '',
              content: '',
              publishImmediately: false,
              shareOn: ['Facebook'],
              category: 'Back-end',
              series: ''
          },
          formData: {
              socialMedia: ['Facebook', 'Instagram', 'Telegram'],
              categories: ['Back-end', 'Front-end', 'Dev-Ops'],
              series: [
                  'Vuejs: From Beginner to Professional',
                  'Angular: Professional'
              ]
          }
     }
  }
})