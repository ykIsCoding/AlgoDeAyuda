<script setup>
import Button from '@/components/Button.vue';
import { useAppStore } from '@/state/appStore';
import TextBox from '@/components/TextBox.vue'
import {revealText, fadeInText} from '@/utils/animation/textAnimations'
import { onMounted,ref } from 'vue'
import { slideIn } from '@/utils/animation/pageAnimations';

const appStore = useAppStore()

onMounted(() => {
  revealText('.revealText')
  fadeInText('.fadeInText')
})

function handleInput(e){
  appStore.$patch({
    problemContent:e.target.value
  })
  
}

function handleNext(){
  slideIn(()=>appStore.nextStage())
}

function handlePrevious(){
  slideIn(()=>appStore.prevStage())
}


</script>

<template>
    <div class="d-flex flex-column h-100 w-100 justify-center">
    
    <div class="align-self-start d-flex flex-column ga-5 flex-grow-1 justify-center w-100">
        <div class="d-flex flex-column flex-md-row justify-space-between">
          <span class="text-md-h3 text-h5 font-weight-black text-uppercase text-secondary w-md-50 w-100 revealText">ESCRIBE TU PROBLEMA O PREGUNTA</span>
          <div class="d-flex flex-column justify-end">
            <span class="text-md-h6 text-subtitle-2 text-left text-md-right font-weight-medium fadeInText">Este seccion es necesario</span>
          </div>
          
        </div>
        
        <TextBox :initialVal="appStore.getProblemContent" @blur="handleInput" @input="handleInput" @click:clear="handleInput"
          />
        
  </div>
  <div class="d-flex flex-column flex-md-row justify-space-between ga-4 mb-10 align-center pt-2">
    <Button classstring="text-red-lighten-1 border-error w-100 w-md-25" outlined @click="appStore.reset()" label="resetear todo"></Button>
    <div class="d-flex w-100 w-md-50 flex-column flex-md-row ga-4 justify-end flex-grow-1 align-end">
    <Button classstring="w-100 w-md-25" outlined @click="handlePrevious()" label="atrás"></Button>
    <Button classstring="bg-primary w-100 w-md-25 " :disabled="appStore.getProblemContent?.toString().trim().length==0" @click="handleNext()" label="próximo"></Button>
    </div>
  </div>
  
</div>
</template>