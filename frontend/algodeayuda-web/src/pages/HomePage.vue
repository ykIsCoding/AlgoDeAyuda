<script setup>
import { ref, onMounted } from 'vue'
import Section from '@/components/Section.vue';
import StageOnePage from '@/pages/StageOnePage.vue'
const count = ref(0)


function increment() {
  count.value++
}

onMounted(() => {
  
})
</script>

<template>
  <Section>
      <StageOnePage/>
  </Section>
</template>