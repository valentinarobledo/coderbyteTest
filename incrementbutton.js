<template>
  <div id="app">
    <button btn btn-primary v-on:click="count++">Increase {{count}}</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      count: 0
    };
  }
};
</script>