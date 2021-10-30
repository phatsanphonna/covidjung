<template>
  <div class="Home" @click="handleClick">
    <div class="container">
      <Mascot width="260" class="space-around" />

      <div class="dialogue-card">
        <h1 class="space-around" v-if="clickState === 0">สวัสดีจ้า</h1>
        <p class="space-around" v-else-if="clickState === 1">
          อย่ากังวลนะ เราจะช่วยคุณเอง
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Mascot from "@/components/Mascot.component.vue";

export default defineComponent({
  name: "Home",
  components: { Mascot },
  data() {
    return {
      clickState: 0,
    };
  },

  methods: {
    handleClick() {
      this.clickState++;

      if (this.clickState >= 2) {
        this.$router.push(`/atk/question`);
      }
    },
  },
});
</script>

<style scoped>
.Home {
  @apply bg-gradient-to-b from-yellow-200 to-yellow-300;
}

.space-around {
  margin: 20px;
}

.container h1 {
  @apply text-black text-2xl;
}

.question {
  display: inline-block !important;
}
</style>
