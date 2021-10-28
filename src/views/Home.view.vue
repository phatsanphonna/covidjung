<template>
  <div class="Home" @click="handleClick">
    <div class="container">
      <Mascot width="260" class="space-around" />

      <div class="dialogue-card">
        <h1 class="space-around" v-if="clickState === 0">สวัสดีจ้า</h1>
        <p class="space-around" v-else-if="clickState === 1">
          อย่ากังวลนะ เราจะช่วยคุณเอง
        </p>
        <p class="space-around" v-else-if="clickState === 2">
          ได้ตรวจ ATK มารึยัง
        </p>
      </div>

      <div class="question space-around" v-if="clickState === 2">
        <button class="yes-card" @click="() => handleRedirect(1)">
          ยังเลย
        </button>
        <button class="no-card" @click="() => handleRedirect(0)">
          ตรวจแล้ว
        </button>
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
      if (this.clickState != 2) {
        this.clickState++;
      }
    },

    handleRedirect(answer: number) {
      this.$router.push(`/answer?answer=${answer}`);
    },
  },
});
</script>

<style scoped>
.Home {
  @apply bg-yellow-200;
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

.yes-card,
.no-card {
  text-align: center;
  margin: 0px 10px;
  width: 120px;
  height: 60px;

  @apply rounded-md shadow-md text-white;
}

.yes-card {
  @apply bg-green-500;
}

.no-card {
  @apply bg-red-500;
}
</style>
