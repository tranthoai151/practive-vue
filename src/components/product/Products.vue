<template>
     <div>
          <h1>
               {{ title }}
          </h1>
          <p>
               {{content}}
          </p>
          <div>
               <p> {{ users }}</p>
          </div>
     </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ProductsComponents',
  data() {
     return {
     title: 'List Products',
     content: 'This is mypages',
     users: 'users'
     }
  }
})
</script>
