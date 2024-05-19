<template>
    <v-btn :variant="outlined?'outlined':'elevated'" max-width="20%" min-width="20%" :class="['pe-16','text-left','d-inline-flex justify-start','ps-2',!outlined && 'bg-primary']" rounded="sm" size="x-large" @click="clickEmit('click')">
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