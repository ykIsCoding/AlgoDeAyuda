<script setup>
import { onMounted } from 'vue';
    const inputEmit = defineEmits(['update:modelValue'])
    const props = defineProps(['initialVal'])
    onMounted(()=>{
        value.value = props.initialVal
    })
    const value = defineModel()
    
    
</script>
<template>
    <v-textarea clearable counter
        @input="inputEmit('update:modelValue',value)"
        @blur="inputEmit('update:modelValue',value)"
        @click:clear="inputEmit('update:modelValue',value)"
        auto-grow
        class="font-weight-medium"
        v-model="value"
          outlined
          rounded-sm
          name="input-7-4"
          label=""
    ></v-textarea>
</template>