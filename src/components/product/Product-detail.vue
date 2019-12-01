<template>
     <div>
          <h1>
               {{ title }}
          </h1>
     </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ProductsComponents',
  data() {
     return {
          title: 'Product Detail',
          content: 'This is mypages',
     }
  }
})
</script>
