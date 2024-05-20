<script setup>
import Button from '@/components/Button.vue';
import { useAppStore } from '@/state/appStore';
import {revealText} from '@/utils/animation/textAnimations'
import { onMounted } from 'vue'
import { slideIn } from '@/utils/animation/pageAnimations';

const appStore = useAppStore()
onMounted(() => {
  revealText('.revealText')
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
        
        <span class="text-h3 font-weight-black text-uppercase text-secondary w-50 revealText">Resulto</span>
        <div>
          {{appStore.getResponse}}
        </div>
  </div>
  <div class="d-flex justify-space-between ga-4 mb-10 align-center pt-2">
    <Button classstring="text-red-lighten-1 border-error" outlined @click="null" label="resetear todo"></Button>
    <div class="d-flex ga-4 justify-end flex-grow-1 align-end">
    <Button outlined @click="handlePrevious()" label="atrás"></Button>
    <Button @click="handleNext()" label="mi problema esta resuelto"></Button>
    </div>
  </div>
  
</div>
</template>