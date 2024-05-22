<template>
    <v-btn :loading="loading" :disabled="disabled" :block="block" :variant="outlined?'outlined':'elevated'"  min-width="20%" :class="['pe-16','border-md','text-left','d-inline-flex justify-start text-button','ps-2',!outlined && !classstring && 'bg-primary',classstring]" rounded="sm" size="x-large" @click="clickEmit('click')">
            {{ label }}
    </v-btn>
</template>
<script setup>
defineProps({
    label:String,
    outlined:Boolean,
    block:Boolean,
    classstring:String,
    disabled:Boolean,
    loading:Boolean
})
const clickEmit = defineEmits(['click'])
</script>