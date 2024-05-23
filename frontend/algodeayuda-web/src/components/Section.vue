<script setup>
import { ref, onMounted,defineProps } from 'vue'
import {slideIn} from '@/utils/animation/pageAnimations.js'
import { useAppStore } from '@/state/appStore';
import SideBar from '@/components/SideBar.vue'
const appStore = useAppStore()
var drawerOpen = ref(true)



const panels = [
    {stage:0,background:'#3B4754',completed:false},
    {stage:1,background:'#495867',completed:false},
    {stage:2,background:'#577399',completed:false},
    {stage:3,background:'#6986AC',completed:false},
]

function reset(){
  for(let i=0;i<panels.length;i++){
    panels[i].completed = false
  }
}

appStore.$subscribe((mutation, state) => {
  
  if(state.resetState){
    
    reset()
  }else{
    panels[state.stage].completed = true
  }
  
})





function onBeforeEnter(el) {
  
}

function onEnter(el, done) {
  console.log('enter')
}

function onLeave(el, done) {
  console.log('leave')
}


</script>

<template>
     <div class="h-100">
    <div class="d-inline-flex justify-start bg-primary h-100 w-100">
    
        <side-bar @folded="(val)=>{
          drawerOpen=val}"/>
      <v-sheet
          v-show="drawerOpen"
        v-for="n in panels.filter((x,idx)=> idx<=appStore.getStage)"
        :style={backgroundColor:n.background}
        :key="n"
        max-width="4%"
        width="4%"
        class="pa-2 done h-100 d-none d-sm-flex"
      >
    
      </v-sheet>
    
      <v-sheet v-show="drawerOpen" class="pa-10 mainDisplay h-100 overflow-auto" :style={backgroundColor:panels[0].background} width="88%">
        <slot></slot>
      </v-sheet>
      
      <v-sheet v-show="drawerOpen"
        v-for="n in panels.filter((x,idx)=> idx>appStore.getStage)"
        :style={backgroundColor:n.background}
        max-width="4%"
        width="4%"
        :class="['pa-2 h-100 d-none d-sm-flex',(n.stage == appStore.getStage+1)?'slideIn':null]"
      >
        
      </v-sheet>
    
    </div>
    </div>
</template>