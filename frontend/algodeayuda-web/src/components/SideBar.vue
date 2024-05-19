<template>
    
        <v-navigation-drawer
          class=""
          style="background-color:#263342;"
          theme="dark"
          :rail="drawerOpen"
          @click="drawerOpen=!drawerOpen"
          permanent
          
        >
        
        
        <div v-show="!drawerOpen">
          <h3>
            Historia de preguntas
          </h3>
        </div>

          <v-list v-show="!drawerOpen" color="transparent">
            <v-list-item append-icon="mdi-view-dashboard" title="Dashboard"></v-list-item>
            
          </v-list>
  
          <template v-slot:append>
            <div class="pa-2">
              <v-btn variant="warning" block>
                Borrar Todo
              </v-btn>
              
            </div>
      
          </template>
        </v-navigation-drawer>

        <v-main style="height: 400px"></v-main>
  </template>
<script setup>
import { ref } from 'vue';

defineProps({
  open:Boolean
})
var drawerOpen = ref(false)
</script>