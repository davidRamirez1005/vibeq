<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="copyright">
        © {{ year }} made with 
        <i class="tim-icons icon-heart-2 tw-text-red-500"></i> by
        <a href="" target="_blank" rel="noopener" class="tw-text-blue-400 hover:tw-text-blue-600">VibeQ</a>
        for a better web.
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const year = ref(new Date().getFullYear());
</script>

<style scoped>
</style>