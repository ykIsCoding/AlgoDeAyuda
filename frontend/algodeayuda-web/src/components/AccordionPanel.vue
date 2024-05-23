<template>
    <v-expansion-panels class="w-md-75 w-100 text-md-h6 text-sm-subtitle-1 font-weight-medium">
  <v-expansion-panel
  class="bg-primary font-weight-medium"
        v-for="x in content"
    :title="x.title"
    :text="x.answer"
  >
  </v-expansion-panel>
</v-expansion-panels>
</template>

<script setup>
const props = defineProps({
    content:Array
})
</script>