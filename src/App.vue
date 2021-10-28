<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>
>
<style>
#app {
  font-family: "Kanit", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  height: 100vh;
  min-width: 100vw;

  @apply flex flex-col justify-center items-center;
}

.dialogue-card {
  width: 260px;

  @apply bg-white rounded-lg shadow-lg text-center;
}
</style>
