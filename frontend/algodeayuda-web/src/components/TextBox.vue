<script setup>
    const inputEmit = defineEmits(['update:modelValue'])
    const value = defineModel()

</script>
<template>
    <v-textarea clearable
        @input="inputEmit('update:modelValue',value)"
        v-model="value"
          outlined
          rounded-sm
          name="input-7-4"
          label=""
          
    ></v-textarea>
</template>