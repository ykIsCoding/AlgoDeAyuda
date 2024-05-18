<script setup>
import { ref, onMounted,defineProps } from 'vue'

import { useAppStore } from '@/state/appStore';
import SideBar from '@/components/SideBar.vue'
const appStore = useAppStore()
const panels = [
    {stage:0,background:'#3B4754',completed:false},
    {stage:1,background:'#495867',completed:false},
    {stage:2,background:'#577399',completed:false},
    {stage:3,background:'#6986AC',completed:false},
]


appStore.$subscribe((mutation, state) => {
  panels[state.stage].completed = true
})

onMounted(() => {
  
})

function showSideBar(){
  
}

</script>

<template>
     <div>
    <div class="d-inline-flex justify-start bg-surface-variant h-screen w-100">
      <v-sheet
        @click="showSideBar()"
        style="background-color: #263342;"
        max-width="4%"
        width="4%"
        class="pa-2 d-flex justify-center"
      >
      <v-icon icon="$menu"></v-icon>
      </v-sheet>
      <v-sheet
        v-for="n in panels.filter((x,idx)=>x.completed==true && idx<=appStore.stage)"
        :style={backgroundColor:n.background}
        max-width="4%"
        width="4%"
        class="pa-2"
      >
       
      </v-sheet>
      <v-sheet class="pa-5" :style={backgroundColor:panels[0].background} width="84%">
        <slot></slot>
      </v-sheet>
      <v-sheet
        v-for="n in panels.filter((x,idx)=>x.completed==false && idx>appStore.stage)"
        :style={backgroundColor:n.background}
        max-width="4%"
        width="4%"
        class="pa-2"
      >
        
      </v-sheet>
    </div>
    </div>
</template>