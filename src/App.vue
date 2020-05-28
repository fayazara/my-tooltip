<template>
  <div id="app" class="container mx-auto">
    <withcss />
    <hr />
    <directive />
  </div>
</template>

<script>
import withcss from './components/withcss';
import directive from './components/directive';

export default {
  name: 'App',
  components: {
    withcss,
    directive,
  },
};
</script>

<style src="./assets/styles.css"></style>
