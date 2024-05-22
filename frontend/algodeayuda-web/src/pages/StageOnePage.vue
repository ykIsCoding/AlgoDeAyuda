<script setup>
import Button from '@/components/Button.vue';
import { useAppStore } from '@/state/appStore';
import {revealText, fadeInText} from '@/utils/animation/textAnimations'
import { onMounted } from 'vue'
import {slideIn} from '@/utils/animation/pageAnimations.js'
import {router} from '@/utils/routing/routeUtils.js'

const appStore = useAppStore()
onMounted(() => {
  revealText('.revealText')
  fadeInText('.fadeInText')
})

function handleNext(){
  slideIn(()=>appStore.nextStage())
}
</script>

<template>
  <div class="d-flex flex-column h-100 w-100 justify-space-between">
    <div class="d-flex w-100 flex-row justify-end">
      <p class="fadeInText text-right font-weight-bold text-md-h6 text-sm-subtitle-1">
        He ayudado 789 Gente con sus problemas de programacion
      </p>
    </div>
    <div class="align-self-start d-flex flex-column h-75 justify-center">
    <h1 class="revealText font-weight-black text-uppercase text-secondary text-md-h1  text-h2">Algo</h1>
    
    <h1 class="revealText font-weight-black text-uppercase text-secondary text-md-h1  text-h2">De</h1>
    
    <h1 class="revealText font-weight-black text-uppercase text-secondary text-md-h1  text-h2">Ayuda</h1>
    
    <p class="text-left fadeInText font-weight-bold mt-5 text-md-h6 text-sm-subtitle-1">
      Un assitante de Intelligencia Artificiales para aprender programacion
    </p>
  </div>
  <div class="d-flex flex-md-row flex-column justify-md-end ga-4 mb-10 align-center pt-2 justify-center">
    <Button classstring="w-100 w-md-25" outlined @click="()=>router.push('/about')" label="Sobre Este"></Button>
    <Button classstring="bg-primary w-100 w-md-25" @click="handleNext()" label="Next"></Button>
  </div>
  
</div>
</template>