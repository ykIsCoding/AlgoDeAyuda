<script setup>
import Button from '@/components/Button.vue';
import { useAppStore } from '@/state/appStore';
import { onMounted, inject,ref,computed } from 'vue'
import { revealText ,fadeInText} from '@/utils/animation/textAnimations';
import {getObjFromLocalStorageById} from '@/utils/localstorage/localStorageUtils.js'
import {useRoute} from "vue-router";
import ContentFactory from '@/components/ContentFactory.vue'
import { formatResponse } from '@/utils/service/ResponseService';
import {router} from '@/utils/routing/routeUtils.js'

const {updateStatus} = inject('showToast')
const appStore = useAppStore()
var content = computed(()=>{
  return getObjFromLocalStorageById(useRoute().params.id??'')
})

onMounted(() => {
  try{

  }catch(e){
    updateStatus('No podemos cargar los contenidos. Por favor intenta de nuevo')
  }
})
</script>

<template>
    <div class="d-flex flex-column justify-center ma-5 ma-sm-15 ga-5">
    <div class="d-flex flex-row justify-start">
      <Button @click="router.push('/')" label="Volver"></Button>
    </div>
    <div v-if="content.id" class="align-self-start d-flex flex-column ga-5 flex-grow-1 justify-center w-100">
        
        <span class="text-md-h3 text-h4 font-weight-black text-uppercase text-secondary w-md-50 w-100 revealText">{{'Mi Pregunta'.toUpperCase()}}</span>
        <div class="d-flex ga-5 flex-column mb-5">
          <h6 class="revealText text-md-h4 text-h6 rounded-sm font-weight-black text-uppercase text-primary w-100 w-md-75">{{ content.title }}</h6>
          <v-banner class="bg-primary text-md-h6 text-body-1 text-justify" :icon="null" :text="content.queryContent.content.summary??'NIL'" :stacked="false">
          </v-banner>
          <ContentFactory :item="x" v-for="x in formatResponse(content.queryContent.content.content??[])"/>
          
        </div>
  </div>
    <div>

    </div>
</div>
</template>