<script setup>
import Button from '@/components/Button.vue';
import { useAppStore } from '@/state/appStore';
import {revealText} from '@/utils/animation/textAnimations'
import { onMounted } from 'vue'

const appStore = useAppStore()
onMounted(() => {
  revealText('.revealText')
})
</script>

<template>
    <div class="d-flex flex-column h-100 w-100 justify-center">
    
    <div class="align-self-start d-flex flex-column ga-5 flex-grow-1 justify-center w-100">
        
        <span class="text-h3 font-weight-black text-uppercase text-secondary w-50 revealText">Resulto</span>
        <TextBox/>
    
  </div>
  <div class="d-flex justify-space-between ga-4 mb-10 align-center pt-2">
    <Button class="red darken-1--text" outlined @click="null" label="Restacebler Todo"></Button>
    <div class="d-flex ga-4 justify-end flex-grow-1 align-end">
    <Button outlined @click="null" label="Sobre Este"></Button>
    <Button @click="appStore.nextStage()" label="Next"></Button>
    </div>
  </div>
  
</div>
</template>