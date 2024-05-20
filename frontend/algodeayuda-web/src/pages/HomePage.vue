<script setup>
import { ref, onMounted } from 'vue'
import Section from '@/components/Section.vue';
import StageOnePage from '@/pages/StageOnePage.vue'
import PageFactory from '@/components/PageFactory.vue'
import Toast from '@/components/Toast.vue'





onMounted(() => {
  
})
</script>

<template>
  <Toast/>
  <Section>
      <PageFactory/>
  </Section>
</template>