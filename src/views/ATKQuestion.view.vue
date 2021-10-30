<template>
  <div class="ATKQuestion">
    <div class="container">
      <Mascot width="260" class="space-around" />

      <div class="dialogue-card">
        <p class="space-around">ได้ตรวจ ATK มารึยัง</p>
      </div>
      <div class="question space-around">
        <button class="yes-card" @click="() => handleRedirect('no')">
          ยังเลย
        </button>
        <button class="no-card" @click="() => handleRedirect('yes')">
          ตรวจแล้ว
        </button>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

import Mascot from "@/components/Mascot.component.vue";

import { Answer } from "@/types/answer.type";

export default defineComponent({
  name: "ATKQuestion",
  components: { Mascot },
  data() {
    return {
      answer: 3,
    };
  },
  methods: {
    handleRedirect(answer: Answer) {
      console.log(answer);

      if (answer === "yes") {
        this.$router.push("/atk/result?isATKTaken=" + 1);
      } else if (answer === "no") {
        this.$router.push("/atk/result?isATKTaken=" + 0);
      }
    },
  },
});
</script>

<style scoped>
.ATKQuestion {
  @apply bg-gradient-to-b from-yellow-200 to-yellow-300;
}

.space-around {
  margin: 20px;
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