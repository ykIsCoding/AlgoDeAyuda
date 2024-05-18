<template>
    <v-btn :variant="outlined?'outlined':'elevated'"  :class="[pr-16,ps-16 ,!outlined && 'bg-primary']" rounded="sm" size="x-large" @click="clickEmit('click')">
            {{ label }}
    </v-btn>
</template>
<script setup>
defineProps({
    label:String,
    outlined:Boolean
})

const clickEmit = defineEmits(['click'])
</script>