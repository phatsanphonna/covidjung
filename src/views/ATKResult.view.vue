<template>
  <div class="ATKResult">
    <!-- ตรวจด้วย ATK แล้ว -->
    <div class="container" v-if="this.$route.query.isATKTaken === '1'">
      <Mascot width="260" class="space-around" />

      <div class="dialogue-card">
        <p class="space-around">ผล ATK เป็นอย่างไรบ้าง ?</p>
      </div>
      <div class="question space-around">
        <button class="yes-card" @click="() => (isATKPositive = true)">
          เป็นผลบวกอ่ะ
        </button>
        <button class="no-card" @click="() => (isATKPositive = false)">
          ผลลบอ่ะ
        </button>
      </div>
    </div>

    <!-- ถ้ายังไม้ได้ตรวจด้วย ATK -->
    <div class="container" v-else-if="this.$route.query.isATKTaken === '0'">
      <h3 class="space-around">โปรดเลือกโรคประจำตัวของคุณ</h3>
      <div class="tick-box space-around">
        <!-- อาจจะแก้เป็น v-for ในอนาคต -->

        <!-- ความดันโลหิตสูง -->
        <input type="checkbox" id="high-blood-pressure" />
        <label for="high-blood-pressure">ความดันโลหิตสูง</label><br />

        <!-- เส้นเลือดหัวใจตีบ -->
        <!-- ขึ้เกียจหาศัพท์อ่ะ เดะค่อยมาแก้ก็ละกันนะ :D -->
        <input type="checkbox" id="sen-leud-hua-jai-teeb" />
        <label for="sen-leud-hua-jai-teeb">เส้นเลือดหัวใจตีบ</label><br />

        <!-- เบาหวาน -->
        <!-- ขึ้เกียจหาศัพท์อ่ะ เดะค่อยมาแก้ก็ละกันนะ :D -->
        <input type="checkbox" id="bao-waan" />
        <label for="bao-waan">เบาหวาน</label><br />

        <!-- ไตเรื้อรัง -->
        <!-- ขึ้เกียจหาศัพท์อ่ะ เดะค่อยมาแก้ก็ละกันนะ :D -->
        <input type="checkbox" id="tai-ruea-rang" />
        <label for="tai-ruea-rang">
          ไตเรื้อรัง ผู้ป่วยฟอกไร และ ปลูกถ่ายไต </label
        ><br />

        <!-- หอบหืด -->
        <!-- ขึ้เกียจหาศัพท์อ่ะ เดะค่อยมาแก้ก็ละกันนะ :D -->
        <input type="checkbox" id="hoab-hued" />
        <label for="hoab-hued">หอบหืด ปอดอักเสพเรื้อรัง</label><br />

        <!-- ตับแข็ง -->
        <!-- ขึ้เกียจหาศัพท์อ่ะ เดะค่อยมาแก้ก็ละกันนะ :D -->
        <input type="checkbox" id="taab-kaeng" />
        <label for="tab-kaeng">ตับแข็ง ตับอักเสพเรื้อรัง</label><br />

        <!-- ภูมิคุ้มกันบกพร่อง -->
        <input type="checkbox" id="lupus" />
        <label for="lupus">ภูมิคุ้มกันบกพร่อง</label><br />

        <!-- โรคอ้วน -->
        <input type="checkbox" id="fat" />
        <label for="fat">อ้วน</label><br />

        <!-- อายุมากกว่า 60 ปี -->
        <input type="checkbox" id="elder" />
        <label for="elder">อายุมากกว่า 60 ปี</label><br />
      </div>

      <button class="next-page space-around">ไปต่อ</button>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

import Mascot from "@/components/Mascot.component.vue";

import { Answer } from "@/types/answer.type";

export default defineComponent({
  name: "ATKResult",
  components: { Mascot },
  data() {
    return {
      isATKPositive: Boolean,
    };
  },
  methods: {},
});
</script>

<style scoped>
.ATKResult {
  @apply bg-gradient-to-b from-yellow-200 to-yellow-300;
}

.space-around {
  margin: 20px;
}

.question {
  display: inline-block !important;
}

.next-page {
  @apply px-2 py-2 bg-white;
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