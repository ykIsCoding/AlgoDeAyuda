<script setup>
import Button from '@/components/Button.vue';
import { useAppStore } from '@/state/appStore';
import {revealText, fadeInText} from '@/utils/animation/textAnimations'
import { onMounted,inject,ref } from 'vue'
import {slideIn} from '@/utils/animation/pageAnimations.js'
import { addToLocalStorage, createObj } from '@/utils/localstorage/localStorageUtils';

const appStore = useAppStore()
const {updateStatus} = inject('showToast')
var loading = ref(false)

onMounted(() => {
  revealText('.revealText')
  fadeInText('.fadeInText')
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
      addToLocalStorage(createObj(appStore.getProblemContent,appStore.getErrorContent,appStore.getResponse))
      slideIn(()=>appStore.nextStage())
    }else{
      updateStatus('No podemos procesar tu entrada. Por favor intenta de nuevo')
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
      <div class="d-flex flex-column flex-md-row justify-space-between">
        <span class="text-md-h3 text-h5 font-weight-black text-uppercase text-secondary w-md-75 w-100 revealText">{{'Copia error(es) que tienes desde el consol o Compilador'.toUpperCase()}}</span>
          <div class="d-flex flex-column justify-end w-md-50">
            <span class="text-md-h6 text-subtitle-2 text-left text-md-right font-weight-medium fadeInText">Este seccion es opcional, pero puede ayudanos repuestarte mejor</span>
          </div>
        </div>
        
        <TextBox :initialVal="appStore.getErrorContent" @blur="handleInput" @input="handleInput" @click:clear="handleInput"
          />
          
    
  </div>
  <div class="d-flex flex-column flex-md-row justify-space-between ga-4 mb-10 align-center pt-2">
    <Button :disabled="loading"  classstring="text-red-lighten-1 border-error w-100 w-md-25" outlined @click="appStore.reset()" label="resetear todo"></Button>
    <div class="d-flex w-100 w-md-50 flex-column flex-md-row ga-4 justify-end flex-grow-1 align-end">
    <Button classstring="w-100 w-md-25" :disabled="loading" outlined @click="handlePrevious()" label="atrás"></Button>
    <Button  classstring="bg-primary w-100 w-md-25"  :loading="loading" @click="handleNext()" label="próximo"></Button>
    </div>
  </div>
  
</div>
</template>