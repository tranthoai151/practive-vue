<template>
     <div class="container">
        <div class="row">
            <div class="col">
                <h1>Add blog post</h1>
                <form>
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" class="form-control" id="title" v-model="post.title">
                    </div>
                    <div class="form-group">
                        <label for="content">Conetnt</label>
                        <textarea class="form-control" id="content" v-model="post.content" cols="30" rows="10" />
                    </div>
                </form>
                <hr>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <td class="col-xs-6">
                                <strong>Field</strong>
                            </td>
                            <td class="col-xs-6">
                                <strong>Value</strong>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Title</td>
                            <td>{{post.title}}</td>
                        </tr>
                        <tr>
                            <td>Content</td>
                            <td style="white-space: pre;">{{post.content}}</td>
                        </tr>
                        <tr>
                            <td>Publish immediately</td>
                            <td>{{post.publishImmediately}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
     </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'FromComponent',
  data() {
     return {
          title: 'Form components',
          post: {
              title: '',
              content: '',
              publishImmediately: false,
              shareOn: [],
              category: '',
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
</script>