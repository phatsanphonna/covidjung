<template>
  <div class="Mascot">
    <img src="../assets/eggman.jpg" class="mascot" :width="width" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Mascot",
  props: {
    action: String,
    width: Number,
  },
});
</script>

<style scoped>
.mascot {
  border-radius: 50%;
}
</style>