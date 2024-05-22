<template>
    <div class="h-100"> 
        <v-navigation-drawer
          class="border-0"
          style="background-color:#263342;"
          :rail="drawerOpen"
          @click="()=>{
            
              drawerOpen=!drawerOpen
              this.$emit('folded',drawerOpen)
              revealText('.revealText')
            
            }"
          permanent
          
        >
      
        <v-list v-show="drawerOpen" color="transparent">
            <v-list-item prepend-icon="mdi-menu" title=""></v-list-item>
        </v-list>
        
        
        <v-list v-show="!drawerOpen" color="transparent">
          <v-list-item append-icon="mdi-menu-open" title=""></v-list-item>
        </v-list>
          <div class="d-flex justify-start flex-column flex-grow-1 ma-4" v-show="!drawerOpen">
            <h3 v-show="!drawerOpen" class="revealText text-h5 font-weight-black text-uppercase text-primary w-100">
              Historia de preguntas
            </h3>
            <v-list v-show="!drawerOpen" color="transparent">
              <v-list-item tag="div" :key="x.id" v-for="x in getAllFromLocalStorage()" class="bg-primary rounded-sm mt-2 mb-2 pa-0">
                <v-row class="d-flex flex-row  justify-center align-center pa-2">
                <v-col @click="()=>router.push(`/history/${x.id}`)" class="w-75">
                  <p class="text-truncate">{{ x.title }}</p>
                </v-col>
                <v-col class="w-25 justify-center d-flex">
                  <v-btn
                  class="pa-0"
                  variant="text"
                  size="sm"
                  @click="removeFromLocalStorage(x.id)"
                  >
                  <v-icon
                  icon="mdi-delete"
                  end
                  ></v-icon>
              </v-btn>
            </v-col>
              </v-row>
              </v-list-item>
            </v-list>
          </div>
          
          <template  v-slot:append>
            <div v-show="!drawerOpen" class="pa-4">
              <Button classstring="bg-red-lighten-1 border-error" block="true" @click="clearAll()" label="Borrar Todo"></Button>
            </div>
          </template>
        
        </v-navigation-drawer>
        <v-main style=""></v-main>
      
      </div>  
</template>
<script setup>
import { revealText } from '@/utils/animation/textAnimations';
import { ref, onMounted } from 'vue';
import { router } from '@/utils/routing/routeUtils';
import {clearLocalStorage,getAllFromLocalStorage,removeFromLocalStorage} from '@/utils/localstorage/localStorageUtils'
defineProps({
})

defineEmits(['folded'])

onMounted(()=>{

})
var drawerOpen = ref(true)

function clearAll(){
  clearLocalStorage()
}
</script>