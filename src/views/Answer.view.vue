<template>
  {{ answer }}
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Answer",
  data() {
    return {
      answer: 3,
    };
  },
  mounted() {
    this.answer = Number(this.$route.query.answer);
  },
});
</script>
