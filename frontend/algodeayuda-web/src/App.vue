<template>
  <v-app class="w-screen h-100 pa-0 ma-0">
    <SpeedInsights/>
    <v-main class="h-100 pa-0 ma-0">
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup>
  import { RouterView } from 'vue-router'
  import SideBar from '@/components/SideBar.vue'
  import { SpeedInsights } from "@vercel/speed-insights/vue"
</script>

