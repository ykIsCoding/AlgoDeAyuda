<script setup>
import Button from '@/components/Button.vue';
import { useAppStore } from '@/state/appStore';
import {revealText,fadeInText} from '@/utils/animation/textAnimations'
import { onMounted } from 'vue'
import { slideIn } from '@/utils/animation/pageAnimations';
import { formatResponse } from '@/utils/service/ResponseService';
import ContentFactory from '@/components/ContentFactory.vue'
const appStore = useAppStore()
onMounted(() => {
  revealText('.revealText')
  fadeInText('.fadeInText')
})

function handleNext(){
  slideIn(()=>{
    appStore.reset()
  })
}
function handlePrevious(){
  slideIn(()=>appStore.prevStage())
}

</script>

<template>
    <div class="d-flex flex-column h-100 w-100 justify-center">
    
    <div class="align-self-start d-flex flex-column ga-5 flex-grow-1 justify-center w-100">
        
        <span class="text-md-h3 text-h4 font-weight-black text-uppercase text-secondary w-md-50 w-100 revealText">Resulto</span>
        <div class="d-flex ga-5 flex-column mb-5">
          <h6 class="revealText text-md-h4 text-h6 rounded-sm font-weight-black text-uppercase text-primary w-100 w-md-50">Resumen</h6>
          <v-banner class="bg-primary text-md-h6 text-body-1 text-justify" :icon="null" :text="appStore.getResponse.summary??'NIL'" :stacked="false">
          </v-banner>
          
          <ContentFactory :item="x" v-for="x in formatResponse(appStore.getResponse.content??[])"/>
        </div>
  </div>
  <div class="d-flex flex-column flex-md-row justify-space-between ga-4 mb-10 align-center pt-2">
    <Button classstring=" text-red-lighten-1 border-error w-100 w-md-25" outlined @click="appStore.reset()" label="resetear todo"></Button>
    <div class="d-flex w-100 w-md-50 flex-column flex-md-row ga-4 justify-end flex-grow-1 align-end">
    <Button classstring="w-100 w-md-25 " outlined @click="handlePrevious()" label="atrás"></Button>
    <Button classstring="bg-primary w-100 w-md-25"  @click="handleNext()" label="problema resuelto"></Button>
    </div>
  </div>
  
</div>
</template>