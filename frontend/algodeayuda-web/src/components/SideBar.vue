<template>
       
        <v-navigation-drawer
          class="border-0"
          style="background-color:#263342;"
          :rail="drawerOpen"
          @click="()=>{
            
              drawerOpen=!drawerOpen
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
              <v-list-item v-for="x in arr" @click="()=>router.push(`/history/${x.id}`)" class="bg-primary rounded-sm mt-2 mb-2" append-icon="mdi-delete" :title="`${x.question}`"/>
            </v-list>
          </div>
          
          <template  v-slot:append>
            <div v-show="!drawerOpen" class="pa-4">
              <Button classstring="bg-red-lighten-1 border-error" block="true" @click="clearAll()" label="Borrar Todo"></Button>
            </div>
          </template>
        
        </v-navigation-drawer>
        <v-main style="height: 400px"></v-main>
      

</template>
<script setup>
import { revealText } from '@/utils/animation/textAnimations';
import { ref, onMounted } from 'vue';
import { router } from '@/utils/routing/routeUtils';
defineProps({
  open:Boolean
})
var arr = [
  {
    id:1,
    question:'haah',
    error:'',
    response:''
  },
  {
    id:2,
    question:'haasssh',
    error:'sssssss',
    response:''
  }
]
var drawerOpen = ref(true)

function clearAll(){
  arr = []
}
</script>