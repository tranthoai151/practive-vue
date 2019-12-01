<template>
  <div>
    <ul class="css-ul">
      <li class="css-li">
        <router-link to="/pro">List products</router-link>
      </li>
      <li>
        <router-link to="/categories">List Categorty</router-link>
      </li>
    </ul>
    <!-- router -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.css-ul li {
  background-color: aquamarine;
  border: #2c3e50;
  font-size: 20px;
}
</style>
