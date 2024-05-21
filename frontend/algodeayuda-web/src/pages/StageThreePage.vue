<script setup>
import Button from '@/components/Button.vue';
import { useAppStore } from '@/state/appStore';
import {revealText} from '@/utils/animation/textAnimations'
import { onMounted,inject,ref } from 'vue'
import {slideIn} from '@/utils/animation/pageAnimations.js'
import { postPrompt } from '@/utils/service/AIService';

const appStore = useAppStore()
const {updateStatus} = inject('showToast')
var loading = ref(false)

onMounted(() => {
  revealText('.revealText')
})

function handleInput(e){
  appStore.$patch({
    errorContent:e.target.value
  })
}


function handleNext(){
  loading.value = true
  appStore.query().then(x=>{
    loading.value = false
    
    if(x){
      slideIn(()=>appStore.nextStage())
    }else{
      updateStatus('an error occurred!!!')
    }
  })
  
}



function handlePrevious(){
  slideIn(()=>appStore.prevStage())
}
</script>

<template>
    <div class="d-flex flex-column h-100 w-100 justify-center">
    
    <div class="align-self-start d-flex flex-column ga-5 flex-grow-1 justify-center w-100">
      <div class="d-flex flex-row justify-space-between">
        <span class="text-h3 font-weight-black text-uppercase text-secondary w-75 revealText">Copia error(es) que tienes desde el consol o Compilador</span>
          <div class="d-flex flex-column justify-end w-50">
            <span class="text-h6 text-right font-weight-bold revealText">Este seccion es opcional, pero puede ayudanos repuestarte mejor</span>
          </div>
        </div>
        
        <TextBox :initialVal="appStore.getErrorContent" @blur="handleInput" @input="handleInput" @click:clear="handleInput"
          />
          
    
  </div>
  <div class="d-flex justify-space-between ga-4 mb-10 align-center pt-2">
    <Button classstring="text-red-lighten-1 border-error" outlined @click="null" label="resetear todo"></Button>
    <div class="d-flex ga-4 justify-end flex-grow-1 align-end">
    <Button outlined @click="handlePrevious()" label="atrás"></Button>
    <Button :loading="loading" @click="handleNext()" label="próximo"></Button>
    </div>
  </div>
  
</div>
</template>