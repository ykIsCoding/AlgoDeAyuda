<script setup>
import Button from '@/components/Button.vue';
import { useAppStore } from '@/state/appStore';
import TextBox from '@/components/TextBox.vue'
import {revealText} from '@/utils/animation/textAnimations'
import { onMounted,ref } from 'vue'
import { slideIn } from '@/utils/animation/pageAnimations';

const appStore = useAppStore()

onMounted(() => {
  revealText('.revealText')
})

function handleInput(e){
  appStore.$patch({
    problemContent:e.target.value
  })
  console.log(appStore.problemContent)
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
        <div class="d-flex flex-row justify-space-between">
          <span class="text-h3 font-weight-black text-uppercase text-secondary w-50 revealText">escribe tu Pregunta o Problema</span>
          <div class="d-flex flex-column justify-end">
            <span class="text-h6 text-right font-weight-bold revealText">Este seccion es necesario</span>
          </div>
          
        </div>
        
        <TextBox :initialVal="appStore.getProblemContent" @blur="handleInput" @input="handleInput" @click:clear="handleInput"
          />
  </div>
  <div class="d-flex justify-space-between ga-4 mb-10 align-center pt-2">
    <Button classstring="text-red-lighten-1 border-error" outlined @click="appStore.reset()" label="resetear todo"></Button>
    <div class="d-flex ga-4 justify-end flex-grow-1 align-end">
    <Button outlined @click="handlePrevious()" label="atrás"></Button>
    <Button :disabled="appStore.getProblemContent?.toString().trim().length==0" @click="handleNext()" label="próximo"></Button>
    </div>
  </div>
  
</div>
</template>