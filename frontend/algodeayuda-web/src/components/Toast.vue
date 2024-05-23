<template>
    <div class="text-center">
      <v-snackbar
        v-model="status"
        vertical
        color="red-lighten-1"
          elevation="24"
        >
        <div class="text-md-h3 text-h4 font-weight-black text-uppercase text-primary w-md-50 w-100 revealText">Error</div>
  
        <p class="text-justify fadeInText font-weight-medium mt-5 w-md-75 w-100 text-md-h6 text-sm-subtitle-1">{{ message }}</p>
  
        <template v-slot:actions>
          <v-btn
            color="primary"
            variant="text"
            @click="closeToast"
          >
            Cerrar
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </template>
<script setup>
import { inject,ref,provide, onMounted, watch} from 'vue'
import { revealText, fadeInText} from '@/utils/animation/textAnimations';
const {status,message,closeToast} = inject('showToast')

watch(status,(oldval,newval)=>{
  if(!newval){
    revealText('.revealText')
    fadeInText('.fadeInText')
  }
})

</script>